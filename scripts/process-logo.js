const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const inputPath = path.join(__dirname, '../public/images/zulviq-logo.png');
const outputDir = path.join(__dirname, '../public/images');

async function processLogo() {
  console.log('Loading input image from:', inputPath);
  const image = sharp(inputPath);
  const metadata = await image.metadata();
  console.log(`Original image size: ${metadata.width}x${metadata.height}, channels: ${metadata.channels}`);

  // Get raw RGBA buffer
  const { data, info } = await image.ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const width = info.width;
  const height = info.height;

  // Let's sample the top-left background pixel
  const bgR = data[0];
  const bgG = data[1];
  const bgB = data[2];
  console.log(`Background sample: R=${bgR}, G=${bgG}, B=${bgB}`);

  // Create transparent buffer
  const transparentBuffer = Buffer.from(data);
  // Create light/white-gold buffer for dark footer
  const lightBuffer = Buffer.from(data);

  // Find bounding box of non-background pixels
  let minX = width, maxX = 0, minY = height, maxY = 0;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];

      // Distance from background color
      const diff = Math.sqrt(
        Math.pow(r - bgR, 2) + Math.pow(g - bgG, 2) + Math.pow(b - bgB, 2)
      );

      // If diff is small, it's background
      if (diff < 35) {
        transparentBuffer[idx + 3] = 0; // fully transparent
        lightBuffer[idx + 3] = 0;
      } else {
        // Soft alpha edge blending
        const alphaFactor = Math.min(1, Math.max(0, (diff - 15) / 30));
        transparentBuffer[idx + 3] = Math.round(255 * alphaFactor);
        
        // Update bounding box
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;

        // For light logo: transform the burgundy text/branch to gold/cream (#FAF3E8 or #E2B774)
        // Original text is dark burgundy (e.g. ~100, 20, 20)
        // We invert brightness
        lightBuffer[idx] = 248;     // R cream-gold
        lightBuffer[idx + 1] = 244; // G
        lightBuffer[idx + 2] = 238; // B
        lightBuffer[idx + 3] = Math.round(255 * alphaFactor);
      }
    }
  }

  console.log(`Artwork bounding box: x=[${minX}, ${maxX}], y=[${minY}, ${maxY}]`);
  const cropWidth = maxX - minX + 1;
  const cropHeight = maxY - minY + 1;

  // Add small padding around cropped artwork
  const pad = 20;
  const extractX = Math.max(0, minX - pad);
  const extractY = Math.max(0, minY - pad);
  const extractW = Math.min(width - extractX, cropWidth + pad * 2);
  const extractH = Math.min(height - extractY, cropHeight + pad * 2);

  // Save full transparent logo (cropped to artwork bounds)
  await sharp(transparentBuffer, { raw: { width, height, channels: 4 } })
    .extract({ left: extractX, top: extractY, width: extractW, height: extractH })
    .png()
    .toFile(path.join(outputDir, 'zulviq-logo-transparent.png'));
  console.log('Saved zulviq-logo-transparent.png');

  // Save white/cream logo for dark background
  await sharp(lightBuffer, { raw: { width, height, channels: 4 } })
    .extract({ left: extractX, top: extractY, width: extractW, height: extractH })
    .png()
    .toFile(path.join(outputDir, 'zulviq-logo-light.png'));
  console.log('Saved zulviq-logo-light.png');

  // Also create a dedicated square icon / favicon from the 'Q' with the botanical branch
  // The 'Q' is on the right side of the bounding box
  const qLeft = Math.round(minX + cropWidth * 0.72);
  const qTop = Math.max(0, minY - 10);
  const qSize = Math.min(height - qTop, Math.round(cropHeight + 20));
  const qWidth = Math.min(width - qLeft, qSize);

  await sharp(transparentBuffer, { raw: { width, height, channels: 4 } })
    .extract({ left: qLeft, top: qTop, width: qWidth, height: qSize })
    .resize(192, 192, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(outputDir, 'zulviq-icon.png'));
  console.log('Saved zulviq-icon.png');
}

processLogo().catch(console.error);
