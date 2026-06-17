export default {
  render(data) {
    const p = data.personal;
    const a = data.about;
    const resData = data.resumeData || {
      "summary": "",
      "strengths": [],
      "languages": [],
      "interests": [],
      "academicProjects": []
    };

    const eduHtml = data.education ? data.education.map(e => `
      <div style="margin-bottom: 0.5rem;">
        <div class="res-item-title-row">
          <span>${e.degree} in ${e.branch}</span>
          <span>${e.startYear} - ${e.endYear}</span>
        </div>
        <div class="res-item-sub">${e.collegeName} (${e.university}) - CGPA: ${e.cgpa}</div>
      </div>
    `).join('') : '';

    const expHtml = data.experience ? data.experience.map(exp => `
      <div style="margin-bottom: 0.75rem;">
        <div class="res-item-title-row">
          <span>${exp.position}</span>
          <span>${exp.duration}</span>
        </div>
        <div class="res-item-sub" style="font-weight: bold; color: #1e3a8a;">${exp.company}</div>
        <div style="margin-top: 0.25rem; line-height: 1.4; color: #475569;">${exp.description}</div>
      </div>
    `).join('') : '';

    const certHtml = data.certifications ? data.certifications.map(c => `
      <div style="margin-bottom: 0.4rem;">
        <div class="res-item-title-row">
          <span>${c.name}</span>
          <span>${c.issueDate}</span>
        </div>
        <div class="res-item-sub">Issuer: ${c.organization}</div>
      </div>
    `).join('') : '';

    const strengthsHtml = resData.strengths ? resData.strengths.map(s => `<li>${s}</li>`).join('') : '';

    const academicProjectsHtml = resData.academicProjects ? resData.academicProjects.map(proj => `
      <div style="border-bottom: 0.5px solid rgba(56, 189, 248, 0.1); padding-bottom: 0.5rem; margin-bottom: 0.25rem;">
        <div style="display:flex; justify-content:space-between; font-weight:bold; font-size:0.8rem;">
          <span class="text-white">${proj.title}</span>
          <span class="text-cyan" style="font-size:0.75rem;">${proj.duration}</span>
        </div>
        <p style="font-size:0.75rem; color:var(--text-slate); margin-top:0.25rem;">${proj.description}</p>
      </div>
    `).join('') : '';

    const languagesHtml = resData.languages ? resData.languages.map(l => `
      <div style="display:flex; justify-content:space-between;">
        <span class="text-white">${l.name}</span>
        <span class="text-slate">${l.fluency}</span>
      </div>
    `).join('') : '';

    const interestsHtml = resData.interests ? resData.interests.map(i => `
      <div style="display:flex; align-items:center; gap:0.5rem;">
        <i class="fa-solid fa-chevron-right text-cyan" style="font-size:0.6rem;"></i>
        <span>${i}</span>
      </div>
    `).join('') : '';

    return `
      <section id="resume" class="resume-section section-padding border-t">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title"><span class="section-num monospace-font">12 //</span> PROFESSIONAL RESUME</h2>
            <div class="header-line"></div>
          </div>

          <div class="resume-container glass-card">
            <div class="resume-meta-grid">
              <div class="resume-meta">
                <h3 class="text-white">Curriculum Vitae</h3>
                <p class="text-slate">Review my qualifications, training, and academic background below. You can download
                  the print-ready PDF file for offline viewing.</p>
                <div class="resume-actions">
                  <a href="${p.resumeUrl || '/assets/resume.pdf'}" download class="btn btn-primary" id="download-resume-btn"><i
                      class="fa-solid fa-download"></i> Download PDF</a>
                  <button class="btn btn-secondary" onclick="window.print()"><i class="fa-solid fa-print"></i> Print
                    Document</button>
                </div>
              </div>

              <!-- ATS ANALYZER CARD -->
              <div class="ats-analyzer-card glass-card">
                <div class="ats-header">
                  <span class="logo-text" style="font-size: 0.95rem;"><i class="fa-solid fa-circle-nodes text-cyan"></i>
                    ATS_RESUME_SCANNER</span>
                  <span class="ats-badge monospace-font">SYS: READY</span>
                </div>
                <div class="ats-body-grid">
                  <div class="ats-gauge-container">
                    <svg class="ats-gauge" width="80" height="80" viewBox="0 0 36 36">
                      <path class="gauge-bg"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none"
                        stroke="rgba(30, 41, 59, 0.8)" stroke-width="3" />
                      <path class="gauge-fill"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none"
                        stroke="url(#cyanGrad2)" stroke-width="3" stroke-dasharray="96, 100" id="ats-gauge-fill-arc" />
                    </svg>
                    <div class="ats-score-display monospace-font"><span id="ats-score-val">96</span>%</div>
                  </div>
                  <div class="ats-specs monospace-font">
                    <div><strong>ATS FRIENDLY:</strong> <span class="text-cyan">YES</span></div>
                    <div><strong>ALIGNMENT:</strong> CIVIL / BIM</div>
                    <div><strong>KEYWORDS MATCHED:</strong> <span id="ats-keywords-count">14 / 15</span></div>
                  </div>
                </div>
                <div class="ats-actions">
                  <button class="btn btn-secondary w-full" id="run-ats-scan-btn"><i class="fa-solid fa-qrcode"></i> RUN
                    ATS ALIGNMENT SCAN</button>
                </div>
                <div class="ats-keywords-matches text-xxs" id="ats-keywords-container">
                  <span class="keyword-tag matched"><i class="fa-solid fa-check"></i> AutoCAD</span>
                  <span class="keyword-tag matched"><i class="fa-solid fa-check"></i> Revit</span>
                  <span class="keyword-tag matched"><i class="fa-solid fa-check"></i> BIM</span>
                  <span class="keyword-tag matched"><i class="fa-solid fa-check"></i> LOD 300</span>
                  <span class="keyword-tag matched"><i class="fa-solid fa-check"></i> Clash Detection</span>
                  <span class="keyword-tag matched"><i class="fa-solid fa-check"></i> Navisworks</span>
                  <span class="keyword-tag matched"><i class="fa-solid fa-check"></i> STAAD Pro</span>
                  <span class="keyword-tag matched"><i class="fa-solid fa-check"></i> Quantity Takeoff</span>
                  <span class="keyword-tag matched"><i class="fa-solid fa-check"></i> Schedules</span>
                  <span class="keyword-tag matched"><i class="fa-solid fa-check"></i> IS 456</span>
                  <span class="keyword-tag matched"><i class="fa-solid fa-check"></i> Drafting Tolerance</span>
                  <span class="keyword-tag matched"><i class="fa-solid fa-check"></i> Structural Detailing</span>
                  <span class="keyword-tag matched"><i class="fa-solid fa-check"></i> Civil 3D</span>
                  <span class="keyword-tag matched"><i class="fa-solid fa-check"></i> Excel</span>
                  <span class="keyword-tag missing"><i class="fa-solid fa-circle-exclamation"></i> Dynamo</span>
                </div>
              </div>
            </div>

            <div class="resume-viewer-frame">
              <div class="resume-viewer-mockup" id="resume-mockup">
                <div class="res-header">
                  <div>
                    <div class="res-name">${p.fullName}</div>
                    <div class="res-title">${p.title}</div>
                  </div>
                  <div class="res-contact-info">
                    <div>${p.email}</div>
                    <div>${p.phone}</div>
                    <div>${p.location}</div>
                    <div>linkedin.com/in/yaswanth-terli-civil</div>
                  </div>
                </div>

                <div class="res-section">
                  <div class="res-sec-title">Objective</div>
                  <div class="res-sec-body">
                    <p style="color: #475569; line-height: 1.5;">${a.objective}</p>
                  </div>
                </div>

                <div class="res-section">
                  <div class="res-sec-title">Education</div>
                  <div class="res-sec-body">
                    ${eduHtml}
                  </div>
                </div>

                <div class="res-section">
                  <div class="res-sec-title">Experience</div>
                  <div class="res-sec-body">
                    ${expHtml}
                  </div>
                </div>

                <div class="res-section">
                  <div class="res-sec-title">Skills</div>
                  <div class="res-sec-body">
                    <div class="res-skills-list">
                      ${data.skills ? data.skills.map(s => `<div>• <strong>${s.name}</strong></div>`).join('') : ''}
                    </div>
                  </div>
                </div>

                <div class="res-section">
                  <div class="res-sec-title">Credentials</div>
                  <div class="res-sec-body">
                    ${certHtml}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Resume Details Cards Grid -->
          <div class="resume-details-cards-grid monospace-font" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-top: 2.5rem;">
            
            <!-- Card 1: Strengths -->
            <div class="glass-card resume-detail-card" style="padding: 1.5rem;">
              <h4 class="text-white card-subtitle" style="font-size: 0.9rem; margin-bottom: 1rem;"><i class="fa-solid fa-star text-cyan"></i> CORE STRENGTHS</h4>
              <ul class="resume-card-list" id="resume-strengths-list" style="list-style: none; font-size: 0.8rem; display: flex; flex-direction: column; gap: 0.6rem; padding-left: 0; margin-top: 0; margin-bottom: 0;">
                ${strengthsHtml}
              </ul>
            </div>

            <!-- Card 2: Academic Projects -->
            <div class="glass-card resume-detail-card" style="padding: 1.5rem; grid-column: span 2;">
              <h4 class="text-white card-subtitle" style="font-size: 0.9rem; margin-bottom: 1rem;"><i class="fa-solid fa-project-diagram text-cyan"></i> ACADEMIC PROJECTS</h4>
              <div id="resume-academic-projects" style="display: flex; flex-direction: column; gap: 0.75rem;">
                ${academicProjectsHtml}
              </div>
            </div>

            <!-- Card 3: Languages -->
            <div class="glass-card resume-detail-card" style="padding: 1.5rem;">
              <h4 class="text-white card-subtitle" style="font-size: 0.9rem; margin-bottom: 1rem;"><i class="fa-solid fa-language text-cyan"></i> LANGUAGES</h4>
              <div id="resume-languages-list" style="display: flex; flex-direction: column; gap: 0.5rem; font-size: 0.8rem;">
                ${languagesHtml}
              </div>
            </div>

            <!-- Card 4: Interests -->
            <div class="glass-card resume-detail-card" style="padding: 1.5rem; grid-column: span 2;">
              <h4 class="text-white card-subtitle" style="font-size: 0.9rem; margin-bottom: 1rem;"><i class="fa-solid fa-compass text-cyan"></i> INTERESTS & FOCUS AREAS</h4>
              <div id="resume-interests-list" style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; font-size: 0.8rem;">
                ${interestsHtml}
              </div>
            </div>

          </div>

        </div>
      </section>
    `;
  },
  init(data) {
    setupATSResumeScan();
  }
};

function setupATSResumeScan() {
  const scanBtn = document.getElementById('run-ats-scan-btn');
  const scoreVal = document.getElementById('ats-score-val');
  const arcFill = document.getElementById('ats-gauge-fill-arc');
  const keywordsContainer = document.getElementById('ats-keywords-container');

  if (!scanBtn) return;

  scanBtn.addEventListener('click', () => {
    scanBtn.disabled = true;
    scanBtn.innerHTML = `<i class="fa-solid fa-sync fa-spin"></i> PARSING RESUME SECTIONS...`;
    if (keywordsContainer) keywordsContainer.classList.remove('active');

    let currentScore = 0;
    if (scoreVal) scoreVal.innerText = '0';
    if (arcFill) arcFill.setAttribute('stroke-dasharray', '0, 100');

    setTimeout(() => {
      scanBtn.innerHTML = `<i class="fa-solid fa-crosshairs text-cyan"></i> INDEXING KEYWORDS...`;
      
      setTimeout(() => {
        scanBtn.innerHTML = `<i class="fa-solid fa-check-double text-emerald-500"></i> ALIGNMENT SCAN COMPLETE`;
        scanBtn.disabled = false;
        
        const targetScore = 96;
        let score = 0;
        const updateScore = () => {
          score += 4;
          if (score <= targetScore) {
            if (scoreVal) scoreVal.innerText = score;
            if (arcFill) arcFill.setAttribute('stroke-dasharray', `${score}, 100`);
            setTimeout(updateScore, 25);
          }
        };
        updateScore();

        if (keywordsContainer) {
          keywordsContainer.classList.add('active');
        }
      }, 1000);
    }, 1000);
  });
}
