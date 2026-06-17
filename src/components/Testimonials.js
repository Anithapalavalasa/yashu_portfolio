export default {
  render(data) {
    const testimonialsHtml = data.testimonials ? data.testimonials.map(t => `
      <div class="glass-card test-card corporate-testimonial">
        <div class="test-header-corporate">
          <i class="fa-solid fa-quote-left quote-icon-corporate"></i>
          <div class="rating-stars text-cyan">
            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
          </div>
        </div>
        <p class="test-feedback">"${t.feedback}"</p>
        <div class="test-user border-t-corporate">
          <img class="test-avatar" src="${t.photo}" alt="${t.name}" onerror="this.src='/assets/images/user-placeholder.jpg'">
          <div class="test-meta">
            <span class="test-name text-white">${t.name}</span>
            <span class="test-role monospace-font">${t.designation}</span>
            <span class="test-company text-cyan font-bold">${t.company}</span>
          </div>
        </div>
      </div>
    `).join('') : '';

    return `
      <section id="testimonials" class="testimonials-section section-padding border-t">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title"><span class="section-num monospace-font">11 //</span> TESTIMONIALS</h2>
            <div class="header-line"></div>
          </div>
          <div class="testimonials-slider-container">
            <div class="testimonials-grid" id="testimonials-container">
              ${testimonialsHtml}
            </div>
          </div>
        </div>
      </section>
    `;
  },
  init(data) {}
};
