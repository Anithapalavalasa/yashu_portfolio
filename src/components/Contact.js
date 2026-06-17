export default {
  render(data) {
    const p = data.personal;
    return `
      <section id="contact" class="contact-section section-padding border-t">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title"><span class="section-num monospace-font">13 //</span> INITIATE CONTACT</h2>
            <div class="header-line"></div>
          </div>

          <div class="contact-grid">
            <div class="contact-info-panel">
              <div class="glass-card contact-card">
                <h3 class="text-white card-title">Direct Inquiries</h3>
                <p class="text-slate">Feel free to reach out for internship opportunities, full-time employment, or design
                  consultations. I'll get back to you within 24 hours.</p>

                <div class="contact-methods-list monospace-font">
                  <a href="mailto:${p.email}" class="method-item" id="contact-email-link">
                    <div class="method-icon"><i class="fa-solid fa-envelope"></i></div>
                    <div class="method-details">
                      <span class="method-label">EMAIL:</span>
                      <span class="method-val" id="contact-email">${p.email}</span>
                    </div>
                  </a>
                  <a href="tel:${p.phone.replace(/[\s-()]/g, '')}" class="method-item" id="contact-phone-link">
                    <div class="method-icon"><i class="fa-solid fa-phone"></i></div>
                    <div class="method-details">
                      <span class="method-label">PHONE:</span>
                      <span class="method-val" id="contact-phone">${p.phone}</span>
                    </div>
                  </a>
                  <a href="https://wa.me/${p.whatsapp}?text=Hi%20Yaswanth,%20viewed%20your%20portfolio." target="_blank" class="method-item" id="contact-whatsapp-link">
                    <div class="method-icon"><i class="fa-brands fa-whatsapp text-emerald-500"></i></div>
                    <div class="method-details">
                      <span class="method-label">WHATSAPP:</span>
                      <span class="method-val">Quick Connect</span>
                    </div>
                  </a>
                  <div class="method-item">
                    <div class="method-icon"><i class="fa-solid fa-map-location-dot"></i></div>
                    <div class="method-details">
                      <span class="method-label">ADDRESS:</span>
                      <span class="method-val" id="contact-address">${p.location}</span>
                    </div>
                  </div>
                </div>

                <div class="social-links-container">
                  <a href="${p.linkedin}" target="_blank" class="social-link" id="contact-linkedin-link" title="LinkedIn"><i
                      class="fa-brands fa-linkedin-in"></i></a>
                  <a href="${p.github}" target="_blank" class="social-link" id="contact-github-link" title="GitHub"><i
                      class="fa-brands fa-github"></i></a>
                </div>
              </div>
            </div>

            <div class="contact-form-panel">
              <div class="glass-card form-card">
                <h3 class="text-white card-title">Submit Message</h3>
                <form id="portfolio-contact-form" class="contact-form">
                  <div class="form-group">
                    <input type="text" id="form-name" required placeholder=" " class="form-input">
                    <label for="form-name" class="form-label">Full Name</label>
                  </div>
                  <div class="form-group">
                    <input type="email" id="form-email" required placeholder=" " class="form-input">
                    <label for="form-email" class="form-label">Email Address</label>
                  </div>
                  <div class="form-group">
                    <textarea id="form-message" rows="5" required placeholder=" " class="form-input"></textarea>
                    <label for="form-message" class="form-label">Project Details / Message</label>
                  </div>
                  <button type="submit" class="btn btn-primary w-full form-submit-btn">
                    <span>SEND TRANSMISSION</span> <i class="fa-solid fa-paper-plane"></i>
                  </button>
                </form>
                <div class="form-status" id="form-status-msg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  },
  init(data) {
    const form = document.getElementById('portfolio-contact-form');
    const status = document.getElementById('form-status-msg');

    if (!form || !status) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('.form-submit-btn');
      
      btn.disabled = true;
      btn.querySelector('span').innerText = 'TRANSMITTING DESIGN...';
      btn.querySelector('i').className = 'fa-solid fa-sync fa-spin';

      setTimeout(() => {
        status.innerText = 'TRANSMISSION COMPLETE. Recruiter contact log registered.';
        status.className = 'form-status success';
        btn.disabled = false;
        btn.querySelector('span').innerText = 'SEND TRANSMISSION';
        btn.querySelector('i').className = 'fa-solid fa-paper-plane';

        form.reset();
        
        setTimeout(() => {
          status.innerText = '';
          status.className = 'form-status';
        }, 5000);
      }, 1500);
    });
  }
};
