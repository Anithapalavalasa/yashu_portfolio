export default {
  render(data) {
    const educationHtml = data.education ? data.education.map(e => `
      <div class="timeline-item">
        <div class="timeline-node"></div>
        <div class="timeline-content glass-card">
          <span class="timeline-date monospace-font">${e.startYear} - ${e.endYear}</span>
          <h3 class="timeline-title">${e.degree}</h3>
          <p class="timeline-subtitle text-cyan">${e.branch}</p>
          <span class="timeline-univ">${e.collegeName} (${e.university})</span>
          <span class="timeline-grade">Score: ${e.cgpa}</span>
        </div>
      </div>
    `).join('') : '';

    return `
      <section id="education" class="education-section section-padding border-t">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title"><span class="section-num monospace-font">05 //</span> EDUCATION TIMELINE</h2>
            <div class="header-line"></div>
          </div>
          <div class="timeline-container" id="education-timeline">
            ${educationHtml}
          </div>
        </div>
      </section>
    `;
  },
  init(data) {}
};
