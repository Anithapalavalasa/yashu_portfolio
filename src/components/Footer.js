export default {
  render(data) {
    const p = data.personal;
    const nameUpper = p.fullName.toUpperCase();
    return `
      <footer class="footer border-t">
        <div class="container footer-container">
          <div class="footer-copy">
            <p class="monospace-font text-xs">&copy; 2026 ${nameUpper}. ALL RIGHTS RESERVED.</p>
            <p class="text-slate text-xxs">AUTODESK INTEROP INTEGRATION // DESIGN BLOCK: v1.0.0</p>
          </div>
          <div class="footer-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#resume">Resume</a>
          </div>
        </div>
      </footer>
    `;
  },
  init(data) {}
};
