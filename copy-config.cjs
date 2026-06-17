const fs = require('fs');
const path = require('path');

function copyFolderSync(from, to) {
  if (!fs.existsSync(to)) {
    fs.mkdirSync(to, { recursive: true });
  }
  fs.readdirSync(from).forEach(element => {
    const stat = fs.lstatSync(path.join(from, element));
    if (stat.isFile()) {
      fs.copyFileSync(path.join(from, element), path.join(to, element));
    } else if (stat.isDirectory()) {
      copyFolderSync(path.join(from, element), path.join(to, element));
    }
  });
}

const srcDir = path.join(__dirname, 'config');
const destDir = path.join(__dirname, 'dist', 'config');

if (fs.existsSync(srcDir)) {
  copyFolderSync(srcDir, destDir);
  console.log('Successfully copied config folder to dist/config');
} else {
  console.log('Config directory not found, skipping copy.');
}

// Copy assets/ directory as well just in case
const assetsSrcDir = path.join(__dirname, 'assets');
const assetsDestDir = path.join(__dirname, 'dist', 'assets');
if (fs.existsSync(assetsSrcDir)) {
  copyFolderSync(assetsSrcDir, assetsDestDir);
  console.log('Successfully copied assets folder to dist/assets');
}
