export default {
  render(data) {
    const projectsHtml = data.projects ? data.projects.map(p => `
      <div class="glass-card project-card" data-project-type="${p.projectType}" data-category="${p.category}" onclick="openProjectDetail('${p.id}')">
        <div class="project-thumbnail">
          <img src="${p.image}" alt="${p.title}" onerror="this.src='/assets/images/proj-placeholder.jpg'">
          <span class="project-card-type-tag monospace-font">${p.projectType.toUpperCase()}</span>
        </div>
        <div class="project-card-body">
          <span class="project-card-cat">${p.category}</span>
          <h3 class="project-card-title">${p.title}</h3>
          <p class="project-card-desc">${p.description}</p>
          
          <!-- Impact Metrics Row -->
          <div class="project-metrics-row monospace-font">
            <div class="metric-badge" title="Built-up Area"><i class="fa-solid fa-ruler-combined"></i> ${p.builtUpArea}</div>
            <div class="metric-badge" title="Floors"><i class="fa-solid fa-building"></i> ${p.floors}</div>
            <div class="metric-badge" title="Drawings Created"><i class="fa-solid fa-file-lines"></i> ${p.drawingsCount} Sheets</div>
          </div>

          <div class="project-card-footer">
            <span class="proj-software"><i class="fa-solid fa-screwdriver-wrench"></i> ${p.softwareUsed.slice(0, 3).join(', ')}</span>
            <span class="proj-link-label">CASE STUDY <i class="fa-solid fa-arrow-right"></i></span>
          </div>
        </div>
        
        <!-- Project Compare Checkbox -->
        <div class="compare-checkbox-container" onclick="event.stopPropagation();">
          <label class="compare-checkbox-label monospace-font">
            <input type="checkbox" class="compare-checkbox" data-id="${p.id}" onchange="handleProjectCompareSelect(this)">
            <span>Compare</span>
          </label>
        </div>
      </div>
    `).join('') : '';

    return `
      <section id="projects" class="projects-section section-padding border-t">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title"><span class="section-num monospace-font">06 //</span> DESIGN PROJECTS</h2>
            <div class="header-line"></div>
          </div>

          <!-- Category Filters -->
          <div class="projects-filters">
            <button class="filter-btn active" data-filter="all">ALL PROJECTS</button>
            <button class="filter-btn" data-filter="Residential">RESIDENTIAL</button>
            <button class="filter-btn" data-filter="Commercial">COMMERCIAL</button>
            <button class="filter-btn" data-filter="Structural">STRUCTURAL</button>
            <button class="filter-btn" data-filter="Architectural">ARCHITECTURAL</button>
          </div>

          <!-- Projects Grid -->
          <div class="projects-grid" id="projects-grid">
            ${projectsHtml}
          </div>
        </div>
      </section>
    `;
  },
  init(data) {
    const projButtons = document.querySelectorAll('.filter-btn');
    projButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        projButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');
        const cards = document.querySelectorAll('.project-card');

        cards.forEach(card => {
          if (filterValue === 'all' || card.getAttribute('data-project-type') === filterValue) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });

    window.openProjectDetail = function(id) {
      window.location.hash = `#/project/${id}`;
    };
  }
};
