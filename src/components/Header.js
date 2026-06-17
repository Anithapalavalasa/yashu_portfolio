export default {
  render(data) {
    const p = data.personal;
    let logoHtml = `${p.fullName.toUpperCase()}`;
    const spaceIdx = p.fullName.indexOf(' ');
    if (spaceIdx !== -1) {
      const first = p.fullName.substring(0, spaceIdx).toUpperCase();
      const last = p.fullName.substring(spaceIdx + 1);
      logoHtml = `${first} <span class="accent-text">${last}</span>`;
    }

    return `
      <header class="fixed-header">
        <div class="container header-container">
          <a href="#hero" class="logo-area">
            <svg class="logo-icon" width="28" height="28" viewBox="0 0 24 24" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M3 3H21V21H3V3Z" stroke="#38BDF8" stroke-width="1.5" stroke-dasharray="2 2" />
              <path d="M3 12H21" stroke="#38BDF8" stroke-width="0.5" stroke-dasharray="1 3" />
              <path d="M12 3V21" stroke="#38BDF8" stroke-width="0.5" stroke-dasharray="1 3" />
              <path d="M4 17L12 7L20 17H4Z" stroke="#2563EB" stroke-width="2" stroke-linejoin="round" />
              <circle cx="12" cy="7" r="2" fill="#38BDF8" />
            </svg>
            <span class="logo-text" id="header-logo-text">${logoHtml}</span>
          </a>

          <nav class="main-nav" id="main-nav">
            <ul>
              <li><a href="#about" class="nav-link">About</a></li>
              <li><a href="#skills" class="nav-link">Skills</a></li>
              <li><a href="#services" class="nav-link">Services</a></li>
              <li><a href="#bim" class="nav-link">BIM</a></li>
              <li><a href="#education" class="nav-link">Education</a></li>
              <li><a href="#projects" class="nav-link">Projects</a></li>
              <li><a href="#experience" class="nav-link">Experience</a></li>
              <li><a href="#gallery" class="nav-link">Gallery</a></li>
              <li><a href="#resume" class="nav-link">Resume</a></li>
              <li><a href="#faq" class="nav-link">FAQ</a></li>
              <li><a href="#contact" class="btn btn-primary nav-cta">Hire Me</a></li>
            </ul>
          </nav>

          <button class="mobile-nav-toggle" id="mobile-toggle" aria-label="Toggle Navigation">
            <i class="fa-solid fa-bars"></i>
          </button>
        </div>
      </header>
    `;
  },
  init(data) {
    const toggle = document.getElementById('mobile-toggle');
    const nav = document.getElementById('main-nav');

    if (!toggle || !nav) return;

    toggle.addEventListener('click', () => {
      nav.classList.toggle('active');
      toggle.querySelector('i').classList.toggle('fa-bars');
      toggle.querySelector('i').classList.toggle('fa-times');
    });

    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('active');
        toggle.querySelector('i').className = 'fa-solid fa-bars';
      });
    });
  }
};
