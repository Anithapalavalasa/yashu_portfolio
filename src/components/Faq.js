export default {
  render(data) {
    const faqsHtml = data.faqs ? data.faqs.map((f, idx) => `
      <div class="faq-item" data-idx="${idx}">
        <div class="faq-question">
          <span>${f.question}</span>
          <span class="faq-icon"><i class="fa-solid fa-chevron-down"></i></span>
        </div>
        <div class="faq-answer">
          <p>${f.answer}</p>
        </div>
      </div>
    `).join('') : '';

    return `
      <section id="faq" class="faq-section section-padding border-t">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title"><span class="section-num monospace-font">12a //</span> FREQUENTLY ASKED QUESTIONS</h2>
            <div class="header-line"></div>
          </div>
          <div class="faq-grid" id="faq-container">
            ${faqsHtml}
          </div>
        </div>
      </section>
    `;
  },
  init(data) {
    const container = document.getElementById('faq-container');
    if (!container) return;

    container.querySelectorAll('.faq-question').forEach(q => {
      q.addEventListener('click', () => {
        const item = q.closest('.faq-item');
        const isActive = item.classList.contains('active');
        
        container.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
        
        if (!isActive) {
          item.classList.add('active');
        }
      });
    });
  }
};
