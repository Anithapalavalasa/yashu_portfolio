export default {
  render(data) {
    const certificationsHtml = data.certifications ? data.certifications.map(c => `
      <div class="glass-card cert-card">
        <div class="cert-img-box">
          <img src="${c.image}" alt="${c.name}" onerror="this.src='/assets/images/cert-placeholder.jpg'">
        </div>
        <div class="cert-details">
          <span class="cert-issuer">${c.organization}</span>
          <h3 class="cert-name">${c.name}</h3>
        </div>
        <div class="cert-meta">
          <span class="cert-date">${c.issueDate}</span>
          ${c.link !== '#' ? `<a href="${c.link}" target="_blank" class="cert-verify-link">Verify <i class="fa-solid fa-up-right-from-square"></i></a>` : ''}
        </div>
      </div>
    `).join('') : '';

    return `
      <section id="certifications" class="certifications-section section-padding border-t">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title"><span class="section-num monospace-font">08 //</span> CERTIFICATIONS</h2>
            <div class="header-line"></div>
          </div>
          <div class="certifications-grid" id="certifications-container">
            ${certificationsHtml}
          </div>
        </div>
      </section>
    `;
  },
  init(data) {}
};
