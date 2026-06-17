export default {
  render(data) {
    const servicesHtml = data.services ? data.services.map(s => `
      <div class="glass-card service-card">
        <div class="service-icon"><i class="fa-solid ${s.icon || 'fa-cubes'}"></i></div>
        <h3 class="service-title">${s.title}</h3>
        <p class="service-desc text-slate">${s.desc}</p>
      </div>
    `).join('') : '';

    return `
      <section id="services" class="services-section section-padding border-t">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title"><span class="section-num monospace-font">04a //</span> SERVICES OFFERED</h2>
            <div class="header-line"></div>
          </div>
          <div class="services-grid" id="services-container">
            ${servicesHtml}
          </div>
        </div>
      </section>
    `;
  },
  init(data) {}
};
