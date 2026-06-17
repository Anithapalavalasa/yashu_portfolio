export default {
  render(data) {
    const achievementsHtml = data.achievements ? data.achievements.map(a => `
      <div class="glass-card ach-card">
        <span class="ach-cat monospace-font">${a.category.toUpperCase()}</span>
        <h3 class="ach-title">${a.title}</h3>
        <p class="ach-desc">${a.description}</p>
      </div>
    `).join('') : '';

    return `
      <section id="achievements" class="achievements-section section-padding border-t">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title"><span class="section-num monospace-font">09 //</span> ACADEMIC ACHIEVEMENTS</h2>
            <div class="header-line"></div>
          </div>
          <div class="achievements-grid" id="achievements-container">
            ${achievementsHtml}
          </div>
        </div>
      </section>
    `;
  },
  init(data) {}
};
