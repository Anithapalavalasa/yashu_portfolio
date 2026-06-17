# Premium Civil Engineering CAD & BIM Portfolio Website

A world-class, premium portfolio website for a **Civil Engineering AutoCAD & Revit Designer**. Designed with a high-end engineering aesthetic reminiscent of Autodesk, Bentley Systems, and leading global engineering firms.

This website is specifically structured to capture the attention of recruiters in construction companies, architecture firms, BIM agencies, infrastructure giants, and engineering consultancies.

---

## 🛠 Features

1. **Autodesk-Inspired Dark Slate UI**: Highly specialized dark blue layout with glowing blueprints, custom SVG isometric drawings, and coordinates.
2. **Interactive 3D Wireframe Engine**: Custom HTML5 Canvas 2D engine executing projection mathematics to render interactive rotating 3D structures in the Hero and Project details.
3. **AutoCAD Crosshair HUD**: Mouse-tracking CAD crosshairs with coordinate grids inside the Hero section.
4. **Single JSON Configuration (`config/profile.json`)**: Edit one file to update all information, skills, projects, timeline entries, certificates, and contact links immediately without editing code.
5. **SPA Hash-Based Routing**: Dynamic project pages using hashes (`#/project/residential-building-plan`) to provide shareable, deep-linkable URLs with instant page rendering.
6. **AutoCAD Layout Sheet Simulator**: Switch between "Model" and "Layout" tabs inside project sheets, mimicking the real AutoCAD workspace.
7. **Skill Progress & Radial Profilers**: Dynamic SVG progress and donut charts that animate as they enter the viewport.
8. **Masonry CAD Gallery**: Filterable masonry grid of drawings, renders, and site inspections with built-in lightbox viewer.
9. **Inline Resume Viewer**: Sleek document rendering directly inside the web browser with print and PDF download support.
10. **Form Validator**: Seamless interactive contact form.

---

## 📁 Project Structure

```text
portfolio/
├── config/
│   └── profile.json        # ✏️ EDIT THIS FILE to update portfolio details
├── assets/                 # Folder for files and images
│   ├── images/             # Images, drawings, renders, certificates
│   └── docs/               # Multi-sheet CAD blueprint PDFs
│   └── resume.pdf          # Professional print-ready resume PDF
├── src/
│   ├── app.js              # Core logic: JSON loading, routing, 3D math, crosshair HUD
│   └── style.css           # Premium vanilla CSS styling system
├── index.html              # Main HTML entrypoint (contains page skeletons)
├── vite.config.js          # Vite config with dev serving overrides
├── copy-config.cjs         # Script that copies config & assets folders to dist/ on build
└── package.json            # NPM scripts and dependencies (Vite)
```

---

## 💻 Local Development

Follow these steps to run the website on your local machine:

1. **Install Node.js**: Ensure you have Node.js installed (v18+ recommended).
2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **Start Development Server**:
   ```bash
   npm run dev
   ```
4. **Open Browser**: Navigate to `http://localhost:5173`. The site will automatically reload when code or `config/profile.json` is modified.

---

## ✏️ Customizing Content (No Code Edits Required)

To customize the portfolio with your own details:
1. Open the file `config/profile.json`.
2. Edit any field under `personal`, `about`, `skills`, `education`, `experience`, `projects`, etc.
3. Replace the placeholder files in the `/assets` directory with your actual documents:
   - Place your profile photo at `assets/images/profile.jpg`.
   - Place your resume PDF at `assets/resume.pdf` (make sure it matches this exact file name).
   - Place your drawing/render files in `assets/images/` and update references in `profile.json`.

---

## 🚀 Production Build & Deployment

### Build Locally
To compile the site into a highly optimized, minimized static website bundle:
```bash
npm run build
```
This generates a `dist/` folder containing the compiled code, styles, and copies the `/config` and `/assets` directories automatically. You can test the compiled bundle locally with:
```bash
npm run preview
```

### Deploying to Netlify or Vercel
The repository is completely configured and deploy-ready with **zero configuration** required!

#### Option 1: Netlify
1. Connect your GitHub repository to Netlify.
2. Configure build settings:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
3. Click **Deploy**. Netlify will automatically detect Vite, run the build script, and publish your premium portfolio.

#### Option 2: Vercel
1. Connect your GitHub repository to Vercel.
2. Vercel will auto-detect Vite. Ensure the default settings are:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
3. Click **Deploy**. Vercel will host the static bundle.
