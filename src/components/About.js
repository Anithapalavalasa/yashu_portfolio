export default {
  render(data) {
    const a = data.about;
    const p = data.personal;

    const matches = a.yearsOfExperience.match(/\d+/);
    const expYears = matches ? matches[0] : '0';

    const fields = [
      { label: "FULL NAME", val: p.fullName },
      { label: "DATE OF BIRTH", val: p.dateOfBirth },
      { label: "GENDER", val: p.gender },
      { label: "LOCATION", val: p.location },
      { label: "EMAIL", val: p.email },
      { label: "PHONE NO", val: p.phone },
      { label: "NATIONALITY", val: p.nationality },
      { label: "LANGUAGES KNOWN", val: p.languages.join(', ') },
      { label: "LINKEDIN URL", val: p.linkedin.replace('https://', '') },
      { label: "PORTFOLIO URL", val: p.portfolioUrl.replace('https://', '') }
    ];

    const fieldsHtml = fields.map(f => `
      <div class="tb-item">
        <div class="tb-label">${f.label}</div>
        <div class="tb-val">${f.val}</div>
      </div>
    `).join('');

    return `
      <section id="about" class="about-section section-padding border-t">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title"><span class="section-num monospace-font">02 //</span> ABOUT ME</h2>
            <div class="header-line"></div>
          </div>
          <div class="grid-about">
            <div class="about-text-container">
              <div class="glass-card about-card">
                <h3 class="card-title text-white">Professional Profile</h3>
                <p class="text-slate lead-paragraph" id="about-summary">${a.summary}</p>
                <div class="objective-box">
                  <h4 class="text-cyan monospace-font font-bold">CAREER OBJECTIVE:</h4>
                  <p class="text-slate italic-text" id="about-objective">${a.objective}</p>
                </div>
                <div class="experience-badge-row">
                  <div class="exp-badge">
                    <div class="exp-num" id="about-exp">${expYears}</div>
                    <div class="exp-label">Years Experience</div>
                  </div>
                  <div class="exp-badge">
                    <div class="exp-num text-cyan" id="about-status-short">ACTIVE</div>
                    <div class="exp-label" id="about-status-desc">${a.currentStatus}</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- TITLE BLOCK DESIGN SECTION -->
            <div class="about-details-container">
              <div class="glass-card title-block-card">
                <div class="title-block-header monospace-font">
                  <div class="tb-title">AUTODESK DESIGN SHEETS</div>
                  <div class="tb-sheet">SHEET: G-101</div>
                </div>
                <div class="title-block-grid monospace-font" id="personal-details-grid">
                  ${fieldsHtml}
                </div>
                <div class="title-block-footer monospace-font">
                  <div>SCALE: NTS</div>
                  <div>DRAWN BY: ${p.firstName ? p.firstName.toUpperCase() : 'YASWANTH'}</div>
                  <div>APPROVED: RECRUITER</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  },
  init(data) {}
};
