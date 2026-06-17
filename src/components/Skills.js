export default {
  render(data) {
    const skillBarsHtml = data.skills ? data.skills.map(s => `
      <div class="skill-bar-item">
        <div class="skill-bar-info">
          <span class="skill-bar-name">${s.name}</span>
          <span class="skill-bar-percent monospace-font">${s.level}%</span>
        </div>
        <div class="skill-bar-progress">
          <div class="skill-bar-fill" data-level="${s.level}"></div>
        </div>
      </div>
    `).join('') : '';

    const radialChartsHtml = data.softwareProficiency ? data.softwareProficiency.map(s => {
      const r = 40;
      const c = 2 * Math.PI * r;
      return `
        <div class="radial-item">
          <div class="radial-svg-box">
            <svg width="90" height="90">
              <circle class="radial-bg-circle" cx="45" cy="45" r="${r}" />
              <circle class="radial-fill-circle" cx="45" cy="45" r="${r}" data-offset="${c}" data-percent="${s.percentage}" />
            </svg>
            <div class="radial-percentage-text">${s.percentage}%</div>
          </div>
          <span class="radial-name">${s.name}</span>
        </div>
      `;
    }).join('') : '';

    const toolkitHtml = data.softwareProficiency ? data.softwareProficiency.map(s => {
      const nameLower = s.name.toLowerCase();
      let icon = "fa-screwdriver-wrench";
      let desc = "Engineering design software";
      
      if (nameLower.includes("autocad")) {
        icon = "fa-draw-polygon";
        desc = "2D Drafting, Layouts, Xrefs, Dynamic Blocks";
      } else if (nameLower.includes("revit")) {
        icon = "fa-cube";
        desc = "BIM Modeling, Parametric Families, Detailing";
      } else if (nameLower.includes("civil 3d") || nameLower.includes("civil3d")) {
        icon = "fa-road";
        desc = "Corridors, Grading, Land Alignment, Pipings";
      } else if (nameLower.includes("staad")) {
        icon = "fa-chart-line";
        desc = "Frame Analysis, Load Cases, Steel/RC Design";
      } else if (nameLower.includes("navisworks")) {
        icon = "fa-compress";
        desc = "Clash Tests, Model Federation, Timelining";
      } else if (nameLower.includes("sketchup")) {
        icon = "fa-shapes";
        desc = "Concept Modeling, Texturing, Speed Renders";
      } else if (nameLower.includes("project")) {
        icon = "fa-calendar-days";
        desc = "Gantt Charts, CPM Scheduling, Resource Alloc";
      } else if (nameLower.includes("excel") || nameLower.includes("office")) {
        icon = "fa-file-excel";
        desc = "Data Parsing, BBS Formulas, QTO Compilations";
      } else if (nameLower.includes("sql")) {
        icon = "fa-database";
        desc = "Relational Databases, Schema Queries, Data Organization";
      }
      
      return `
        <div class="glass-card tool-badge-card">
          <div class="tool-badge-icon text-cyan"><i class="fa-solid ${icon}"></i></div>
          <h4 class="text-white tool-badge-name">${s.name}</h4>
          <p class="text-slate text-xxs">${desc}</p>
          <div class="tool-badge-bar">
            <div class="tool-badge-fill" style="width: ${s.percentage}%;"></div>
          </div>
        </div>
      `;
    }).join('') : '';

    return `
      <section id="skills" class="skills-section section-padding border-t">
        <svg style="width:0;height:0;position:absolute;" id="svg-gradients">
          <defs>
            <linearGradient id="cyanGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#38BDF8" />
              <stop offset="100%" stop-color="#2563EB" />
            </linearGradient>
          </defs>
        </svg>

        <div class="container">
          <div class="section-header">
            <h2 class="section-title"><span class="section-num monospace-font">03 //</span> SKILLS & ABILITIES</h2>
            <div class="header-line"></div>
          </div>

          <div class="skills-grid">
            <!-- Left side: Skills bars -->
            <div class="skills-bars-container">
              <h3 class="skills-subheading text-white"><i class="fa-solid fa-sliders text-cyan"></i> Technical Skills</h3>
              <div class="skills-bars-wrapper" id="skills-bars-container">
                ${skillBarsHtml}
              </div>
            </div>

            <!-- Right side: Software Proficiency (Radial Charts) -->
            <div class="software-proficiency-container">
              <h3 class="skills-subheading text-white"><i class="fa-solid fa-chart-pie text-cyan"></i> Software Proficiency</h3>
              <div class="radials-wrapper" id="software-radials-container">
                ${radialChartsHtml}
              </div>
            </div>
          </div>

          <!-- INDUSTRY TOOLS SECTION -->
          <div class="industry-tools-box" style="margin-top: 5rem;">
            <h3 class="skills-subheading text-white" style="margin-bottom: 2rem;"><i
                class="fa-solid fa-screwdriver-wrench text-cyan"></i> Industry Software Toolkit</h3>
            <div class="tools-grid">
              ${toolkitHtml}
            </div>
          </div>
        </div>
      </section>
    `;
  },
  init(data) {
    const barsSection = document.getElementById('skills');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          document.querySelectorAll('.skill-bar-fill').forEach(bar => {
            const level = bar.getAttribute('data-level');
            bar.style.width = `${level}%`;
          });

          document.querySelectorAll('.radial-fill-circle').forEach(circle => {
            const offset = parseFloat(circle.getAttribute('data-offset'));
            const percent = parseFloat(circle.getAttribute('data-percent'));
            const targetOffset = offset - (percent / 100 * offset);
            circle.style.strokeDashoffset = targetOffset;
          });

          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    if (barsSection) observer.observe(barsSection);
  }
};
