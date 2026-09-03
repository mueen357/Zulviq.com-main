const fs = require('fs');
const path = require('path');

const configPath = path.join(__dirname, '..', '.github-sync.json');
if (!fs.existsSync(configPath)) {
  console.error('Error: .github-sync.json not found.');
  process.exit(1);
}

const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
const OWNER = config.owner;
const REPO = config.repo;
const TOKEN = config.token;
const BRANCH = config.branch || 'main';
const ROOT_DIR = path.resolve(__dirname, '..');

const headers = {
  'Authorization': `Bearer ${TOKEN}`,
  'User-Agent': 'Zulviq-Sync-Bot',
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
  '.env.local',
  '.github-sync.json'
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

async function main() {
  const commitMsg = process.argv.slice(2).join(' ') || `Update Zulviq website (${new Date().toLocaleString('en-PK', { timeZone: 'Asia/Karachi' })})`;

  console.log(`Connecting to GitHub (https://github.com/${OWNER}/${REPO})...`);
  const ref = await api(`/git/ref/heads/${BRANCH}`);
  const parentCommitSha = ref.object.sha;

  const files = getAllFiles(ROOT_DIR);
  console.log(`Scanning workspace: found ${files.length} project files.`);

  const treeEntries = [];
  const chunkSize = 6;
  for (let i = 0; i < files.length; i += chunkSize) {
    const chunk = files.slice(i, i + chunkSize);
    const results = await Promise.all(chunk.map(f => uploadFileBlob(f)));
    treeEntries.push(...results);
    process.stdout.write(`Syncing files: ${Math.min(i + chunkSize, files.length)} / ${files.length}...\r`);
  }
  console.log(`\nAll ${treeEntries.length} files prepared.`);

  console.log('Building Git tree...');
  const tree = await api('/git/trees', 'POST', { tree: treeEntries });

  console.log(`Committing: "${commitMsg}"...`);
  const commit = await api('/git/commits', 'POST', {
    message: commitMsg,
    tree: tree.sha,
    parents: [parentCommitSha]
  });

  console.log(`Pushing commit ${commit.sha.slice(0, 7)} to branch ${BRANCH}...`);
  await api(`/git/refs/heads/${BRANCH}`, 'PATCH', {
    sha: commit.sha,
    force: true
  });

  console.log('\n======================================================');
  console.log('✅ PUSH SUCCESSFUL!');
  console.log(`📦 GitHub: https://github.com/${OWNER}/${REPO}`);
  console.log(`☁️ Cloudflare will now automatically trigger build & update the live site.`);
  console.log('======================================================\n');
}

main().catch(err => {
  console.error('Push failed:', err.message);
  process.exit(1);
});
