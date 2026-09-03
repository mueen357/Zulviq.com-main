const fs = require('fs');
const path = require('path');

const OWNER = 'mueen357';
const REPO = 'Zulviq.com-main';
const TOKEN = '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';
const BRANCH = 'main';
const ROOT_DIR = path.resolve(__dirname, '..');

const headers = {
  'Authorization': `Bearer ${TOKEN}`,
  'User-Agent': 'Zulviq-Deployment-Bot',
  'Accept': 'application/vnd.github.v3+json',
  'Content-Type': 'application/json'
};

async function api(endpoint, method = 'GET', body = null) {
  const url = `https://api.github.com/repos/${OWNER}/${REPO}${endpoint}`;
  const res = await fetch(url, {
    method,
    headers,
    body: body ? JSON.stringify(body) : null
  });
  const json = await res.json();
  if (!res.ok) {
    throw new Error(`GitHub API Error ${res.status} on ${method} ${endpoint}: ${JSON.stringify(json)}`);
  }
  return json;
}

const IGNORE_PATTERNS = [
  'node_modules',
  '.next',
  'out',
  '.git',
  '.DS_Store',
  'npm-debug.log',
  '.env',
  '.env.local'
];

function isIgnored(relPath) {
  const normalized = relPath.replace(/\\/g, '/');
  for (const pattern of IGNORE_PATTERNS) {
    if (normalized === pattern || normalized.startsWith(pattern + '/') || normalized.includes('/' + pattern + '/')) {
      return true;
    }
  }
  return false;
}

function getAllFiles(dir, baseDir = dir) {
  let files = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relPath = path.relative(baseDir, fullPath).replace(/\\/g, '/');

    if (isIgnored(relPath)) continue;

    if (entry.isDirectory()) {
      files = files.concat(getAllFiles(fullPath, baseDir));
    } else if (entry.isFile()) {
      files.push({ fullPath, relPath });
    }
  }
  return files;
}

async function uploadFileBlob(file) {
  const isBinary = /\.(png|jpg|jpeg|webp|ico|gif|pdf|woff|woff2|ttf|eot)$/i.test(file.relPath);
  let content, encoding;

  if (isBinary) {
    content = fs.readFileSync(file.fullPath).toString('base64');
    encoding = 'base64';
  } else {
    content = fs.readFileSync(file.fullPath, 'utf-8');
    encoding = 'utf-8';
  }

  const res = await api('/git/blobs', 'POST', { content, encoding });
  return {
    path: file.relPath,
    mode: '100644',
    type: 'blob',
    sha: res.sha
  };
}

async function push() {
  console.log(`Starting push of Zulviq codebase to https://github.com/${OWNER}/${REPO}...`);

  // Step 1: Check if repository is empty. If empty, initialize it by creating README.md via Contents API
  let parentCommitSha = null;
  try {
    const ref = await api(`/git/ref/heads/${BRANCH}`);
    parentCommitSha = ref.object.sha;
    console.log(`Found existing branch ${BRANCH} with commit: ${parentCommitSha}`);
  } catch (err) {
    console.log(`Repository is uninitialized. Initializing via Contents API...`);
    const readmeContent = fs.readFileSync(path.join(ROOT_DIR, 'README.md')).toString('base64');
    const initRes = await api('/contents/README.md', 'PUT', {
      message: 'Initial repository setup',
      content: readmeContent,
      branch: BRANCH
    });
    parentCommitSha = initRes.commit.sha;
    console.log(`Repository successfully initialized! First commit: ${parentCommitSha}`);
  }

  const files = getAllFiles(ROOT_DIR);
  console.log(`Found ${files.length} files to upload (node_modules, .next, and out ignored).`);

  const treeEntries = [];
  const chunkSize = 5;
  for (let i = 0; i < files.length; i += chunkSize) {
    const chunk = files.slice(i, i + chunkSize);
    const results = await Promise.all(chunk.map(f => uploadFileBlob(f)));
    treeEntries.push(...results);
    process.stdout.write(`Uploaded blobs ${Math.min(i + chunkSize, files.length)} / ${files.length}...\r`);
  }
  console.log(`\nAll ${treeEntries.length} blobs uploaded successfully.`);

  // Create tree
  console.log('Creating Git tree...');
  const tree = await api('/git/trees', 'POST', { tree: treeEntries });
  console.log('Created tree SHA:', tree.sha);

  // Create commit with parent
  console.log('Creating commit...');
  const commit = await api('/git/commits', 'POST', {
    message: 'Complete Zulviq Herbal Hair Care E-Commerce Store (Next.js 16, Tailwind CSS, Cloudflare Pages Ready)',
    tree: tree.sha,
    parents: parentCommitSha ? [parentCommitSha] : []
  });
  console.log('Created commit SHA:', commit.sha);

  // Update ref
  console.log(`Updating ${BRANCH} ref to commit ${commit.sha}...`);
  await api(`/git/refs/heads/${BRANCH}`, 'PATCH', {
    sha: commit.sha,
    force: true
  });
  console.log(`Successfully updated branch ${BRANCH}!`);

  console.log(`\n🎉 Code successfully pushed to https://github.com/${OWNER}/${REPO}/tree/${BRANCH}`);
}

push().catch(err => {
  console.error('Fatal error during push:', err);
  process.exit(1);
});
