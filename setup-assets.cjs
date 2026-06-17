const fs = require('fs');
const path = require('path');

const portfolioDir = __dirname;
const imagesDir = path.join(portfolioDir, 'assets', 'images');
const docsDir = path.join(portfolioDir, 'assets', 'docs');

// Create directories if they do not exist
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}
if (!fs.existsSync(docsDir)) {
  fs.mkdirSync(docsDir, { recursive: true });
}

// Minimal PDF generation helper
function generateDummyPdf(filePath, titleText) {
  const streamContent = `BT\n/F1 18 Tf\n50 750 Td\n(${titleText}) Tj\n0 -30 Td\n(Civil Engineering CAD & Revit Designer Portfolio) Tj\n0 -20 Td\n(Drawn: Yaswanth Terli) Tj\nET`;
  const streamLength = streamContent.length;
  
  const pdfContent = 
    `%PDF-1.4\n` +
    `1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n` +
    `2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n` +
    `3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 << /Type /Font /Subtype /Type1 /BaseFont /Helvetica >> >> >> /Contents 4 0 R >>\nendobj\n` +
    `4 0 obj\n<< /Length ${streamLength} >>\nstream\n` +
    `${streamContent}\n` +
    `endstream\n` +
    `endobj\n` +
    `xref\n` +
    `0 5\n` +
    `0000000000 65535 f\n` +
    `0000000010 00000 n\n` +
    `0000000060 00000 n\n` +
    `0000000119 00000 n\n` +
    `0000000263 00000 n\n` +
    `trailer\n` +
    `<< /Size 5 /Root 1 0 R >>\n` +
    `startxref\n` +
    `${320 + streamLength}\n` +
    `%%EOF\n`;

  fs.writeFileSync(filePath, pdfContent, 'ascii');
  console.log(`Generated PDF at ${filePath}`);
}

// Source files paths from artifact directory
const sourceImages = {
  profile: 'C:\\Users\\palav\\.gemini\\antigravity-ide\\brain\\3541ac75-dc5b-4ce1-8d2e-e4e35fa47c5c\\profile_avatar_1781250942919.png',
  residential: 'C:\\Users\\palav\\.gemini\\antigravity-ide\\brain\\3541ac75-dc5b-4ce1-8d2e-e4e35fa47c5c\\proj_cad_blueprint_1781250957777.png',
  revit3d: 'C:\\Users\\palav\\.gemini\\antigravity-ide\\brain\\3541ac75-dc5b-4ce1-8d2e-e4e35fa47c5c\\proj_revit_render_1781250976277.png',
  commercial: 'C:\\Users\\palav\\.gemini\\antigravity-ide\\brain\\3541ac75-dc5b-4ce1-8d2e-e4e35fa47c5c\\proj_commercial_detail_1781250992493.png',
  site: 'C:\\Users\\palav\\.gemini\\antigravity-ide\\brain\\3541ac75-dc5b-4ce1-8d2e-e4e35fa47c5c\\gallery_site1_1781251010665.png'
};

// Copy function helper
function copyIfExists(src, dest) {
  const srcNorm = src.replace(/\\/g, '/');
  if (fs.existsSync(srcNorm)) {
    fs.copyFileSync(srcNorm, dest);
    console.log(`Copied ${srcNorm} to ${dest}`);
    return true;
  } else {
    const srcRaw = path.resolve(src);
    if (fs.existsSync(srcRaw)) {
      fs.copyFileSync(srcRaw, dest);
      console.log(`Copied ${srcRaw} to ${dest}`);
      return true;
    }
  }
  console.log(`Warning: Source image not found at ${src}`);
  return false;
}

// Copy primary assets
copyIfExists(sourceImages.profile, path.join(imagesDir, 'profile.jpg'));
copyIfExists(sourceImages.residential, path.join(imagesDir, 'proj-residential.jpg'));
copyIfExists(sourceImages.revit3d, path.join(imagesDir, 'proj-revit-3d.jpg'));
copyIfExists(sourceImages.commercial, path.join(imagesDir, 'proj-commercial.jpg'));
copyIfExists(sourceImages.site, path.join(imagesDir, 'gallery-site1.jpg'));

// Duplicate to other names to fill the grids and avoid missing files
fs.copyFileSync(path.join(imagesDir, 'proj-residential.jpg'), path.join(imagesDir, 'proj-residential-cad1.jpg'));
fs.copyFileSync(path.join(imagesDir, 'proj-residential.jpg'), path.join(imagesDir, 'proj-residential-cad2.jpg'));
fs.copyFileSync(path.join(imagesDir, 'proj-residential.jpg'), path.join(imagesDir, 'gallery-cad-detail.jpg'));

fs.copyFileSync(path.join(imagesDir, 'proj-revit-3d.jpg'), path.join(imagesDir, 'proj-revit-sheet1.jpg'));
fs.copyFileSync(path.join(imagesDir, 'proj-revit-3d.jpg'), path.join(imagesDir, 'proj-revit-sheet2.jpg'));

fs.copyFileSync(path.join(imagesDir, 'proj-commercial.jpg'), path.join(imagesDir, 'proj-commercial-str1.jpg'));
fs.copyFileSync(path.join(imagesDir, 'proj-commercial.jpg'), path.join(imagesDir, 'proj-commercial-str2.jpg'));

fs.copyFileSync(path.join(imagesDir, 'gallery-site1.jpg'), path.join(imagesDir, 'gallery-site2.jpg'));

// Certificates and reviews (reuse generated images for premium look)
fs.copyFileSync(path.join(imagesDir, 'proj-commercial.jpg'), path.join(imagesDir, 'cert-autodesk.jpg'));
fs.copyFileSync(path.join(imagesDir, 'proj-residential.jpg'), path.join(imagesDir, 'cert-cadd.jpg'));
fs.copyFileSync(path.join(imagesDir, 'proj-commercial.jpg'), path.join(imagesDir, 'cert-bentley.jpg'));

fs.copyFileSync(path.join(imagesDir, 'profile.jpg'), path.join(imagesDir, 'test-prof.jpg'));
fs.copyFileSync(path.join(imagesDir, 'profile.jpg'), path.join(imagesDir, 'test-eng.jpg'));

// Generate PDFs
generateDummyPdf(path.join(portfolioDir, 'assets', 'resume.pdf'), 'Yaswanth Terli - Professional Resume');
generateDummyPdf(path.join(docsDir, 'residential-drawing.pdf'), 'G+2 Residential Duplex Villa Drawing Sheet Pack');
generateDummyPdf(path.join(docsDir, 'revit-villa-sheets.pdf'), 'Modern Villa Revit 3D BIM Architectural Sheets');
generateDummyPdf(path.join(docsDir, 'structural-detailing.pdf'), 'G+4 Commercial Complex Structural Framing detatiling sheets');

console.log('Asset setup completed successfully!');
