export default {
  render(data) {
    const experienceHtml = data.experience ? data.experience.map(exp => `
      <div class="glass-card experience-card">
        <div class="exp-time-meta">
          <span class="exp-duration monospace-font">${exp.duration}</span>
          <span class="exp-company text-cyan">${exp.company}</span>
        </div>
        <div class="exp-details">
          <h3 class="exp-role">${exp.position}</h3>
          <p class="exp-desc">${exp.description}</p>
        </div>
      </div>
    `).join('') : '';

    return `
      <section id="experience" class="experience-section section-padding border-t">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title"><span class="section-num monospace-font">07 //</span> EXPERIENCE & OBSERVATIONS</h2>
            <div class="header-line"></div>
          </div>
          <div class="experience-timeline" id="experience-container">
            ${experienceHtml}
          </div>
        </div>
      </section>
    `;
  },
  init(data) {}
};
