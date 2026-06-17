export default {
  render(data) {
    return `
      <div class="admin-panel-overlay" id="admin-panel-modal" aria-hidden="true" role="dialog">
        <div class="admin-container-box glass-card">
          <button class="close-overlay-btn" id="close-admin-btn" aria-label="Close Admin Panel">
            <i class="fa-solid fa-times"></i>
          </button>

          <div class="admin-modal-body">

            <!-- ADMIN LOGIN STATE -->
            <div id="admin-login-view" class="admin-login-card">
              <div class="cad-badge"><span class="badge-dot"></span>SECURITY CHECK</div>
              <h2 class="text-white monospace-font" style="margin-top: 1rem;">ADMIN AUTHENTICATION</h2>
              <p class="text-slate" style="font-size:0.8rem; margin-bottom: 2rem;">Enter admin passcode to unlock the
                configuration portal.</p>
              <form id="admin-login-form" class="contact-form" style="gap: 1.5rem;">
                <div class="form-group">
                  <input type="password" id="admin-passcode" required placeholder=" " class="form-input">
                  <label for="admin-passcode" class="form-label">Passcode</label>
                </div>
                <button type="submit" class="btn btn-primary w-full">ACCESS CMS PORTAL</button>
              </form>
              <div id="admin-login-error" class="form-status error" style="margin-top: 1.25rem;"></div>
            </div>

            <!-- ADMIN DASHBOARD STATE -->
            <div id="admin-dashboard-view" class="admin-dashboard-layout" style="display: none;">
              <div class="admin-db-header">
                <div>
                  <span class="logo-text">PORTFOLIO <span class="accent-text">CMS BUILDER</span></span>
                  <p class="text-slate text-xxs monospace-font" style="margin-top: 0.25rem;">REFLECT STATE IN BROWSER OR
                    EXPORT TO FILE</p>
                </div>
                <div class="admin-db-header-actions">
                  <button class="btn btn-outline text-rose-500" style="border-color: rgba(239, 68, 68, 0.2);"
                    id="admin-reset-btn"><i class="fa-solid fa-arrow-rotate-left"></i> Reset</button>
                  <button class="btn btn-secondary" id="admin-export-btn"><i class="fa-solid fa-download"></i> Export
                    JSON</button>
                  <button class="btn btn-primary" id="admin-save-btn"><i class="fa-solid fa-save"></i> Save & Apply</button>
                  <button class="btn btn-outline" id="admin-logout-btn"><i class="fa-solid fa-sign-out"></i> Exit</button>
                </div>
              </div>

              <div class="admin-db-body">
                <!-- Sidebar tabs -->
                <div class="admin-db-sidebar">
                  <button class="admin-tab-btn active" data-tab="general">General Info</button>
                  <button class="admin-tab-btn" data-tab="photo">Profile Photo</button>
                  <button class="admin-tab-btn" data-tab="skills-tab">Skills & Software</button>
                  <button class="admin-tab-btn" data-tab="experience-tab">Projects Editor</button>
                  <button class="admin-tab-btn" data-tab="academics-tab">Academics & Experience</button>
                  <button class="admin-tab-btn" data-tab="services-tab">Services, Stats & FAQ</button>
                  <button class="admin-tab-btn" data-tab="resume-details-tab">Resume Details</button>
                  <button class="admin-tab-btn" data-tab="gallery-tab">Gallery Manager</button>
                </div>

                <!-- Forms Content pane -->
                <div class="admin-db-content">

                  <!-- Tab 1: General Info -->
                  <div class="admin-tab-content active" id="tab-general">
                    <h3 class="text-white font-bold" style="margin-bottom: 1.5rem;"><i
                        class="fa-solid fa-user text-cyan"></i> Personal Details</h3>
                    <div class="admin-form-grid">
                      <div class="form-group">
                        <input type="text" id="admin-fullName" placeholder=" " class="form-input">
                        <label for="admin-fullName" class="form-label">Full Name</label>
                      </div>
                      <div class="form-group">
                        <input type="text" id="admin-title" placeholder=" " class="form-input">
                        <label for="admin-title" class="form-label">Professional Title</label>
                      </div>
                      <div class="form-group">
                        <input type="text" id="admin-location" placeholder=" " class="form-input">
                        <label for="admin-location" class="form-label">Location</label>
                      </div>
                      <div class="form-group">
                        <input type="email" id="admin-email" placeholder=" " class="form-input">
                        <label for="admin-email" class="form-label">Email</label>
                      </div>
                      <div class="form-group">
                        <input type="text" id="admin-phone" placeholder=" " class="form-input">
                        <label for="admin-phone" class="form-label">Phone</label>
                      </div>
                      <div class="form-group">
                        <input type="text" id="admin-whatsapp" placeholder=" " class="form-input">
                        <label for="admin-whatsapp" class="form-label">WhatsApp (Intl format)</label>
                      </div>
                      <div class="form-group">
                        <input type="text" id="admin-nationality" placeholder=" " class="form-input">
                        <label for="admin-nationality" class="form-label">Nationality</label>
                      </div>
                      <div class="form-group">
                        <input type="text" id="admin-dob" placeholder=" " class="form-input">
                        <label for="admin-dob" class="form-label">Date of Birth</label>
                      </div>
                      <div class="form-group">
                        <input type="text" id="admin-gender" placeholder=" " class="form-input">
                        <label for="admin-gender" class="form-label">Gender</label>
                      </div>
                      <div class="form-group">
                        <input type="text" id="admin-resumeUrl" placeholder=" " class="form-input">
                        <label for="admin-resumeUrl" class="form-label">Resume PDF Link</label>
                      </div>
                      <div class="form-group">
                        <input type="text" id="admin-linkedin" placeholder=" " class="form-input">
                        <label for="admin-linkedin" class="form-label">LinkedIn URL</label>
                      </div>
                      <div class="form-group">
                        <input type="text" id="admin-github" placeholder=" " class="form-input">
                        <label for="admin-github" class="form-label">GitHub URL</label>
                      </div>
                    </div>

                    <h3 class="text-white font-bold" style="margin: 2rem 0 1.5rem;"><i
                        class="fa-solid fa-address-card text-cyan"></i> Career Bio</h3>
                    <div class="form-group" style="margin-bottom: 1.5rem;">
                      <textarea id="admin-summary" rows="3" placeholder=" " class="form-input"></textarea>
                      <label for="admin-summary" class="form-label">Professional Summary</label>
                    </div>
                    <div class="form-group" style="margin-bottom: 1.5rem;">
                      <textarea id="admin-objective" rows="3" placeholder=" " class="form-input"></textarea>
                      <label for="admin-objective" class="form-label">Career Objective</label>
                    </div>
                    <div class="admin-form-grid">
                      <div class="form-group">
                        <input type="text" id="admin-yearsExp" placeholder=" " class="form-input">
                        <label for="admin-yearsExp" class="form-label">Years of Experience</label>
                      </div>
                      <div class="form-group">
                        <input type="text" id="admin-currentStatus" placeholder=" " class="form-input">
                        <label for="admin-currentStatus" class="form-label">Current Status</label>
                      </div>
                    </div>
                  </div>

                  <!-- Tab 2: Profile Photo -->
                  <div class="admin-tab-content" id="tab-photo">
                    <h3 class="text-white font-bold" style="margin-bottom: 1rem;"><i
                        class="fa-solid fa-image text-cyan"></i> Profile Image</h3>
                    <p class="text-slate" style="font-size:0.8rem; margin-bottom: 2rem;">Upload a new profile picture. It
                      will be stored in your browser as a Base64 string and reflected on the portfolio. Use "Export JSON" to
                      compile it into your settings.</p>

                    <div class="photo-upload-zone">
                      <div class="photo-preview-box">
                        <img id="admin-photo-preview" src="" alt="Profile Preview"
                          style="width:100%; height:100%; object-fit:cover;">
                      </div>
                      <div class="file-uploader-box">
                        <input type="file" id="admin-photo-file" accept="image/*" class="photo-file-input">
                        <div class="uploader-overlay">
                          <i class="fa-solid fa-cloud-upload-alt text-cyan"
                            style="font-size: 2rem; margin-bottom:0.5rem;"></i>
                          <span class="monospace-font" style="font-size: 0.8rem;">Select Image File</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Tab 3: Skills & Software -->
                  <div class="admin-tab-content" id="tab-skills-tab">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 1.5rem;">
                      <h3 class="text-white font-bold"><i class="fa-solid fa-sliders text-cyan"></i> Technical Skill Levels</h3>
                      <button class="btn btn-secondary btn-outline" style="padding: 0.35rem 0.75rem; font-size: 0.7rem;" id="add-skill-btn"><i class="fa-solid fa-plus"></i> ADD SKILL</button>
                    </div>
                    <div id="admin-skills-list-container" class="admin-sliders-list">
                      <!-- Generated dynamically -->
                    </div>

                    <div style="display:flex; justify-content:space-between; align-items:center; margin: 2.5rem 0 1.5rem;">
                      <h3 class="text-white font-bold"><i class="fa-solid fa-laptop-code text-cyan"></i> Software Proficiencies</h3>
                      <button class="btn btn-secondary btn-outline" style="padding: 0.35rem 0.75rem; font-size: 0.7rem;" id="add-software-btn"><i class="fa-solid fa-plus"></i> ADD SOFTWARE</button>
                    </div>
                    <div id="admin-software-list-container" class="admin-sliders-list">
                      <!-- Generated dynamically -->
                    </div>
                  </div>

                  <!-- Tab 4: Projects & Timeline -->
                  <div class="admin-tab-content" id="tab-experience-tab">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 1.5rem;">
                      <h3 class="text-white font-bold"><i class="fa-solid fa-briefcase text-cyan"></i> Manage Projects</h3>
                      <button class="btn btn-secondary btn-outline" style="padding: 0.35rem 0.75rem; font-size: 0.7rem;"
                        id="add-project-btn"><i class="fa-solid fa-plus"></i> ADD NEW PROJECT</button>
                    </div>
                    <div id="admin-projects-list-container" class="admin-items-editor-list">
                      <!-- Generated dynamically -->
                    </div>
                  </div>

                  <!-- Tab 5: Academics & Experience -->
                  <div class="admin-tab-content" id="tab-academics-tab">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 1.5rem;">
                      <h3 class="text-white font-bold"><i class="fa-solid fa-graduation-cap text-cyan"></i> Education History</h3>
                      <button class="btn btn-secondary btn-outline" style="padding: 0.35rem 0.75rem; font-size: 0.7rem;"
                        id="add-education-btn"><i class="fa-solid fa-plus"></i> ADD EDUCATION</button>
                    </div>
                    <div id="admin-education-list-container" class="admin-items-editor-list" style="margin-bottom: 3rem;">
                      <!-- Generated dynamically -->
                    </div>

                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 1.5rem;">
                      <h3 class="text-white font-bold"><i class="fa-solid fa-briefcase text-cyan"></i> Work Experience</h3>
                      <button class="btn btn-secondary btn-outline" style="padding: 0.35rem 0.75rem; font-size: 0.7rem;"
                        id="add-experience-btn"><i class="fa-solid fa-plus"></i> ADD EXPERIENCE</button>
                    </div>
                    <div id="admin-experience-list-container" class="admin-items-editor-list" style="margin-bottom: 3rem;">
                      <!-- Generated dynamically -->
                    </div>

                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 1.5rem;">
                      <h3 class="text-white font-bold"><i class="fa-solid fa-certificate text-cyan"></i> Certifications</h3>
                      <button class="btn btn-secondary btn-outline" style="padding: 0.35rem 0.75rem; font-size: 0.7rem;"
                        id="add-cert-btn"><i class="fa-solid fa-plus"></i> ADD CERTIFICATE</button>
                    </div>
                    <div id="admin-certs-list-container" class="admin-items-editor-list">
                      <!-- Generated dynamically -->
                    </div>

                    <div style="display:flex; justify-content:space-between; align-items:center; margin-top: 3rem; margin-bottom: 1.5rem;">
                      <h3 class="text-white font-bold"><i class="fa-solid fa-trophy text-cyan"></i> Achievements</h3>
                      <button class="btn btn-secondary btn-outline" style="padding: 0.35rem 0.75rem; font-size: 0.7rem;"
                        id="add-achievement-btn"><i class="fa-solid fa-plus"></i> ADD ACHIEVEMENT</button>
                    </div>
                    <div id="admin-achievements-list-container" class="admin-items-editor-list">
                      <!-- Generated dynamically -->
                    </div>
                  </div>

                  <!-- Tab 6: Services, Stats & FAQ -->
                  <div class="admin-tab-content" id="tab-services-tab">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 1.5rem;">
                      <h3 class="text-white font-bold"><i class="fa-solid fa-gears text-cyan"></i> Services Offered</h3>
                      <button class="btn btn-secondary btn-outline" style="padding: 0.35rem 0.75rem; font-size: 0.7rem;"
                        id="add-service-btn"><i class="fa-solid fa-plus"></i> ADD SERVICE</button>
                    </div>
                    <div id="admin-services-list-container" class="admin-items-editor-list" style="margin-bottom: 3rem;">
                      <!-- Generated dynamically -->
                    </div>

                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 1.5rem;">
                      <h3 class="text-white font-bold"><i class="fa-solid fa-chart-column text-cyan"></i> Project Statistics</h3>
                    </div>
                    <div id="admin-stats-list-container" class="admin-items-editor-list" style="margin-bottom: 3rem;">
                      <!-- Generated dynamically -->
                    </div>

                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 1.5rem;">
                      <h3 class="text-white font-bold"><i class="fa-solid fa-circle-question text-cyan"></i> FAQ Accordions</h3>
                      <button class="btn btn-secondary btn-outline" style="padding: 0.35rem 0.75rem; font-size: 0.7rem;"
                        id="add-faq-btn"><i class="fa-solid fa-plus"></i> ADD FAQ</button>
                    </div>
                    <div id="admin-faqs-list-container" class="admin-items-editor-list">
                      <!-- Generated dynamically -->
                    </div>

                    <div style="display:flex; justify-content:space-between; align-items:center; margin-top: 3rem; margin-bottom: 1.5rem;">
                      <h3 class="text-white font-bold"><i class="fa-solid fa-comment-dots text-cyan"></i> Testimonials</h3>
                      <button class="btn btn-secondary btn-outline" style="padding: 0.35rem 0.75rem; font-size: 0.7rem;"
                        id="add-testimonial-btn"><i class="fa-solid fa-plus"></i> ADD TESTIMONIAL</button>
                    </div>
                    <div id="admin-testimonials-list-container" class="admin-items-editor-list" style="margin-bottom: 3rem;">
                      <!-- Generated dynamically -->
                    </div>
                  </div>

                  <!-- Tab 7: Resume Details -->
                  <div class="admin-tab-content" id="tab-resume-details-tab">
                    <h3 class="text-white font-bold" style="margin-bottom: 1.5rem;"><i class="fa-solid fa-file-invoice text-cyan"></i> Resume Technical Details</h3>
                    
                    <div class="form-group" style="margin-bottom: 1.5rem;">
                      <textarea id="admin-resume-strengths" rows="2" placeholder=" " class="form-input"></textarea>
                      <label for="admin-resume-strengths" class="form-label">Key Strengths (Comma separated)</label>
                    </div>

                    <div class="form-group" style="margin-bottom: 1.5rem;">
                      <textarea id="admin-resume-interests" rows="2" placeholder=" " class="form-input"></textarea>
                      <label for="admin-resume-interests" class="form-label">Hobbies & Interests (Comma separated)</label>
                    </div>

                    <div style="display:flex; justify-content:space-between; align-items:center; margin-top: 2rem; margin-bottom: 1.5rem;">
                      <h3 class="text-white font-bold" style="font-size: 1rem;"><i class="fa-solid fa-language text-cyan"></i> Languages Known</h3>
                      <button class="btn btn-secondary btn-outline" style="padding: 0.35rem 0.75rem; font-size: 0.7rem;"
                        id="add-resume-lang-btn"><i class="fa-solid fa-plus"></i> ADD LANGUAGE</button>
                    </div>
                    <div id="admin-resume-lang-container" class="admin-items-editor-list" style="margin-bottom: 2.5rem;">
                      <!-- Generated dynamically -->
                    </div>

                    <div style="display:flex; justify-content:space-between; align-items:center; margin-top: 2rem; margin-bottom: 1.5rem;">
                      <h3 class="text-white font-bold" style="font-size: 1rem;"><i class="fa-solid fa-diagram-project text-cyan"></i> Academic Projects</h3>
                      <button class="btn btn-secondary btn-outline" style="padding: 0.35rem 0.75rem; font-size: 0.7rem;"
                        id="add-resume-acad-btn"><i class="fa-solid fa-plus"></i> ADD ACADEMIC PROJECT</button>
                    </div>
                    <div id="admin-resume-acad-container" class="admin-items-editor-list">
                      <!-- Generated dynamically -->
                    </div>
                  </div>

                  <!-- Tab 8: Gallery Manager -->
                  <div class="admin-tab-content" id="tab-gallery-tab">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 1.5rem;">
                      <h3 class="text-white font-bold"><i class="fa-solid fa-images text-cyan"></i> Portfolio Gallery</h3>
                      <button class="btn btn-secondary btn-outline" style="padding: 0.35rem 0.75rem; font-size: 0.7rem;"
                        id="add-gallery-item-btn"><i class="fa-solid fa-plus"></i> ADD GALLERY ITEM</button>
                    </div>
                    <div id="admin-gallery-container" class="admin-items-editor-list">
                      <!-- Generated dynamically -->
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    `;
  },
  init(data) {
    // Save locally
    let profileData = data;

    checkAdminLoginState();
    setupAdminDashboard();
    window.checkAdminLoginState = checkAdminLoginState;

    function checkAdminLoginState() {
      const loggedIn = sessionStorage.getItem('portfolio_admin_logged_in') === 'true';
      const loginView = document.getElementById('admin-login-view');
      const dashboardView = document.getElementById('admin-dashboard-view');
      
      if (loggedIn) {
        if (loginView) loginView.style.display = 'none';
        if (dashboardView) dashboardView.style.display = 'block';
        populateAdminForms();
      } else {
        if (loginView) loginView.style.display = 'block';
        if (dashboardView) dashboardView.style.display = 'none';
      }
    }

    function setupAdminDashboard() {
      const loginForm = document.getElementById('admin-login-form');
      const loginError = document.getElementById('admin-login-error');
      
      if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
          e.preventDefault();
          const passcode = document.getElementById('admin-passcode').value;
          
          if (passcode === 'Yashu@123') {
            sessionStorage.setItem('portfolio_admin_logged_in', 'true');
            if (loginError) loginError.innerText = '';
            loginForm.reset();
            checkAdminLoginState();
          } else {
            if (loginError) loginError.innerText = 'INVALID PASSCODE. ACCESS BLOCKED.';
          }
        });
      }

      const logoutBtn = document.getElementById('admin-logout-btn');
      if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
          sessionStorage.removeItem('portfolio_admin_logged_in');
          checkAdminLoginState();
        });
      }

      const tabButtons = document.querySelectorAll('.admin-tab-btn');
      tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          tabButtons.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');

          const targetTab = btn.getAttribute('data-tab');
          document.querySelectorAll('.admin-tab-content').forEach(pane => {
            pane.classList.remove('active');
          });
          document.getElementById(`tab-${targetTab}`).classList.add('active');
        });
      });

      const resetBtn = document.getElementById('admin-reset-btn');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          if (confirm('Are you sure you want to discard ALL modifications and restore defaults?')) {
            localStorage.removeItem('portfolio_custom_profile');
            location.reload();
          }
        });
      }

      const exportBtn = document.getElementById('admin-export-btn');
      if (exportBtn) {
        exportBtn.addEventListener('click', () => {
          saveGeneralValues();
          const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(profileData, null, 2));
          const downloadAnchor = document.createElement('a');
          downloadAnchor.setAttribute("href",     dataStr);
          downloadAnchor.setAttribute("download", "profile.json");
          document.body.appendChild(downloadAnchor);
          downloadAnchor.click();
          downloadAnchor.remove();
        });
      }

      const saveBtn = document.getElementById('admin-save-btn');
      if (saveBtn) {
        saveBtn.addEventListener('click', () => {
          saveGeneralValues();
          localStorage.setItem('portfolio_custom_profile', JSON.stringify(profileData));
          alert('CMS state saved locally inside browser cache. Portfolio reloaded.');
          location.reload();
        });
      }

      const fileInput = document.getElementById('admin-photo-file');
      const previewImg = document.getElementById('admin-photo-preview');
      
      if (fileInput && previewImg) {
        fileInput.addEventListener('change', (e) => {
          const file = e.target.files[0];
          if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
              const base64String = event.target.result;
              previewImg.src = base64String;
              profileData.personal.profilePhoto = base64String;
            };
            reader.readAsDataURL(file);
          }
        });
      }

      const addSkillBtn = document.getElementById('add-skill-btn');
      if (addSkillBtn) {
        addSkillBtn.addEventListener('click', () => {
          profileData.skills.push({ name: "New Technical Skill", level: 80 });
          populateSkillsSliders();
        });
      }

      const addSoftwareBtn = document.getElementById('add-software-btn');
      if (addSoftwareBtn) {
        addSoftwareBtn.addEventListener('click', () => {
          profileData.softwareProficiency.push({ name: "New Software", percentage: 80 });
          populateSkillsSliders();
        });
      }

      const addProjectBtn = document.getElementById('add-project-btn');
      if (addProjectBtn) {
        addProjectBtn.addEventListener('click', () => {
          const newProjId = `project-${Date.now()}`;
          const newProject = {
            id: newProjId,
            title: "New Drafting Design Project",
            category: "AutoCAD Drafting",
            description: "Standard project summary and specifications layout.",
            overview: "A details overview describing spacing planning and dimension coordinates.",
            challenges: "Adhering to municipal setbacks and structural grid margins.",
            process: "Formulated spatial lines, drafted structural concrete frames.",
            softwareUsed: ["AutoCAD", "Excel"],
            duration: "3 Weeks",
            status: "In Progress",
            image: "/assets/images/proj-residential.jpg",
            builtUpArea: "2,000 sq ft",
            floors: "G+1",
            drawingsCount: 8,
            complexity: "Intermediate",
            caseStudy: {
              problem: "Sample problem statement...",
              approach: "Sample approach...",
              designProcess: "Sample process...",
              outcome: "Sample outcome..."
            },
            sheets: {
              plans: "#",
              elevations: "#",
              sections: "#",
              report: "#",
              boq: "#"
            }
          };
          
          profileData.projects.push(newProject);
          populateProjectsEditor();
        });
      }

      const addEduBtn = document.getElementById('add-education-btn');
      if (addEduBtn) {
        addEduBtn.addEventListener('click', () => {
          profileData.education.push({
            degree: "New Certificate / Degree",
            branch: "Civil Detailing",
            collegeName: "College Name",
            university: "University",
            cgpa: "80%",
            startYear: "2020",
            endYear: "2024"
          });
          populateAcademicsEditor();
        });
      }

      const addExpBtn = document.getElementById('add-experience-btn');
      if (addExpBtn) {
        addExpBtn.addEventListener('click', () => {
          profileData.experience.push({
            company: "New Company",
            position: "Design Engineer",
            duration: "3 Months",
            description: "Assisted in AutoCAD layouts design."
          });
          populateAcademicsEditor();
        });
      }

      const addCertBtn = document.getElementById('add-cert-btn');
      if (addCertBtn) {
        addCertBtn.addEventListener('click', () => {
          profileData.certifications.push({
            name: "Autodesk Workshop",
            organization: "Autodesk",
            issueDate: "2026",
            link: "#",
            image: "/assets/images/cert-placeholder.jpg"
          });
          populateAcademicsEditor();
        });
      }

      const addServBtn = document.getElementById('add-service-btn');
      if (addServBtn) {
        addServBtn.addEventListener('click', () => {
          profileData.services.push({
            title: "New Drafting Service",
            desc: "Precision structural plans and detailing.",
            icon: "fa-draw-polygon"
          });
          populateServicesEditor();
        });
      }

      const addFaqBtn = document.getElementById('add-faq-btn');
      if (addFaqBtn) {
        addFaqBtn.addEventListener('click', () => {
          profileData.faqs.push({
            question: "New Question?",
            answer: "Accordion answer detail goes here."
          });
          populateServicesEditor();
        });
      }

      const addAchBtn = document.getElementById('add-achievement-btn');
      if (addAchBtn) {
        addAchBtn.addEventListener('click', () => {
          if (!profileData.achievements) profileData.achievements = [];
          profileData.achievements.push({
            title: "New Achievement",
            description: "Details about the award or achievement.",
            category: "Other"
          });
          populateAchievementsEditor();
        });
      }

      const addTestBtn = document.getElementById('add-testimonial-btn');
      if (addTestBtn) {
        addTestBtn.addEventListener('click', () => {
          if (!profileData.testimonials) profileData.testimonials = [];
          profileData.testimonials.push({
            name: "Client / Colleague",
            designation: "Role",
            company: "Company Name",
            feedback: "Yaswanth did a great job.",
            photo: "/assets/images/user-placeholder.jpg"
          });
          populateTestimonialsEditor();
        });
      }

      const addLangBtn = document.getElementById('add-resume-lang-btn');
      if (addLangBtn) {
        addLangBtn.addEventListener('click', () => {
          if (!profileData.resumeData) profileData.resumeData = {};
          if (!profileData.resumeData.languages) profileData.resumeData.languages = [];
          profileData.resumeData.languages.push({
            name: "New Language",
            fluency: "Professional"
          });
          populateResumeDetailsEditor();
        });
      }

      const addAcadBtn = document.getElementById('add-resume-acad-btn');
      if (addAcadBtn) {
        addAcadBtn.addEventListener('click', () => {
          if (!profileData.resumeData) profileData.resumeData = {};
          if (!profileData.resumeData.academicProjects) profileData.resumeData.academicProjects = [];
          profileData.resumeData.academicProjects.push({
            title: "New Design Project Study",
            duration: "4 Weeks",
            description: "Conducted studies and prepared reports."
          });
          populateResumeDetailsEditor();
        });
      }

      const addGalBtn = document.getElementById('add-gallery-item-btn');
      if (addGalBtn) {
        addGalBtn.addEventListener('click', () => {
          if (!profileData.gallery) profileData.gallery = [];
          profileData.gallery.push({
            url: "/assets/images/gallery-placeholder.jpg",
            caption: "New CAD Blueprint Sheet",
            type: "AutoCAD Drawings"
          });
          populateGalleryEditor();
        });
      }
    }

    function populateAdminForms() {
      const p = profileData.personal;
      const a = profileData.about;

      document.getElementById('admin-fullName').value = p.fullName;
      document.getElementById('admin-title').value = p.title;
      document.getElementById('admin-location').value = p.location;
      document.getElementById('admin-email').value = p.email;
      document.getElementById('admin-phone').value = p.phone;
      document.getElementById('admin-whatsapp').value = p.whatsapp;
      document.getElementById('admin-nationality').value = p.nationality;
      document.getElementById('admin-dob').value = p.dateOfBirth;
      document.getElementById('admin-gender').value = p.gender;
      document.getElementById('admin-resumeUrl').value = p.resumeUrl || '';
      document.getElementById('admin-linkedin').value = p.linkedin || '';
      document.getElementById('admin-github').value = p.github || '';
      
      document.getElementById('admin-summary').value = a.summary;
      document.getElementById('admin-objective').value = a.objective;
      document.getElementById('admin-yearsExp').value = a.yearsOfExperience;
      document.getElementById('admin-currentStatus').value = a.currentStatus;

      const photoPreview = document.getElementById('admin-photo-preview');
      if (photoPreview) {
        photoPreview.src = p.profilePhoto || '/assets/images/profile.jpg';
      }

      populateSkillsSliders();
      populateProjectsEditor();
      populateAcademicsEditor();
      populateServicesEditor();
      populateAchievementsEditor();
      populateTestimonialsEditor();
      populateResumeDetailsEditor();
      populateGalleryEditor();
    }

    function populateSkillsSliders() {
      const skillsContainer = document.getElementById('admin-skills-list-container');
      if (skillsContainer) {
        skillsContainer.innerHTML = profileData.skills.map((s, idx) => `
          <div class="admin-slider-row" data-idx="${idx}" style="display: grid; grid-template-columns: 180px 1fr 60px 40px; gap: 1.5rem; align-items: center;">
            <input type="text" class="form-input skill-edit-name" value="${s.name}" placeholder=" " style="font-size:0.85rem; padding:0.25rem 0; border:none; border-bottom:1.5px solid rgba(148,163,184,0.2); background:none; color:var(--text-white);">
            <input type="range" class="admin-slider-input skill-slider" min="0" max="100" value="${s.level}">
            <span class="admin-slider-val">${s.level}%</span>
            <button class="admin-item-delete-btn" onclick="deleteAdminSkill(${idx})"><i class="fa-solid fa-trash"></i></button>
          </div>
        `).join('');

        skillsContainer.querySelectorAll('.admin-slider-row').forEach(row => {
          const idx = parseInt(row.getAttribute('data-idx'));
          row.querySelector('.skill-edit-name').addEventListener('change', (e) => {
            profileData.skills[idx].name = e.target.value;
          });
          row.querySelector('.skill-slider').addEventListener('input', (e) => {
            const val = e.target.value;
            row.querySelector('.admin-slider-val').innerText = `${val}%`;
            profileData.skills[idx].level = parseInt(val);
          });
        });
      }

      const softwareContainer = document.getElementById('admin-software-list-container');
      if (softwareContainer) {
        softwareContainer.innerHTML = profileData.softwareProficiency.map((s, idx) => `
          <div class="admin-slider-row" data-idx="${idx}" style="display: grid; grid-template-columns: 180px 1fr 60px 40px; gap: 1.5rem; align-items: center;">
            <input type="text" class="form-input software-edit-name" value="${s.name}" placeholder=" " style="font-size:0.85rem; padding:0.25rem 0; border:none; border-bottom:1.5px solid rgba(148,163,184,0.2); background:none; color:var(--text-white);">
            <input type="range" class="admin-slider-input software-slider" min="0" max="100" value="${s.percentage}">
            <span class="admin-slider-val">${s.percentage}%</span>
            <button class="admin-item-delete-btn" onclick="deleteAdminSoftware(${idx})"><i class="fa-solid fa-trash"></i></button>
          </div>
        `).join('');

        softwareContainer.querySelectorAll('.admin-slider-row').forEach(row => {
          const idx = parseInt(row.getAttribute('data-idx'));
          row.querySelector('.software-edit-name').addEventListener('change', (e) => {
            profileData.softwareProficiency[idx].name = e.target.value;
          });
          row.querySelector('.software-slider').addEventListener('input', (e) => {
            const val = e.target.value;
            row.querySelector('.admin-slider-val').innerText = `${val}%`;
            profileData.softwareProficiency[idx].percentage = parseInt(val);
          });
        });
      }
    }

    function populateProjectsEditor() {
      const container = document.getElementById('admin-projects-list-container');
      if (!container) return;

      container.innerHTML = profileData.projects.map((proj, idx) => {
        const cs = proj.caseStudy || { problem: '', approach: '', designProcess: '', outcome: '' };
        const sheets = proj.sheets || { plans: '', elevations: '', sections: '', report: '', boq: '' };
        return `
          <div class="admin-item-row" data-proj-id="${proj.id}" data-idx="${idx}" style="border: 1.5px solid var(--accent); margin-bottom: 2rem; padding: 1.5rem;">
            <div class="admin-item-row-header">
              <span class="admin-item-row-title monospace-font">[${idx + 1}] ID: ${proj.id}</span>
              <button class="admin-item-delete-btn" onclick="deleteAdminProject('${proj.id}')"><i class="fa-solid fa-trash"></i> DELETE</button>
            </div>
            
            <div class="admin-form-grid">
              <div class="form-group">
                <input type="text" class="form-input proj-edit-title" value="${proj.title}" placeholder=" ">
                <label class="form-label">Project Title</label>
              </div>
              <div class="form-group">
                <input type="text" class="form-input proj-edit-cat" value="${proj.category}" placeholder=" ">
                <label class="form-label">Category</label>
              </div>
              <div class="form-group">
                <input type="text" class="form-input proj-edit-duration" value="${proj.duration}" placeholder=" ">
                <label class="form-label">Duration</label>
              </div>
              <div class="form-group">
                <input type="text" class="form-input proj-edit-status" value="${proj.status}" placeholder=" ">
                <label class="form-label">Status</label>
              </div>
            </div>

            <div class="admin-form-grid">
              <div class="form-group">
                <input type="text" class="form-input proj-edit-builtUpArea" value="${proj.builtUpArea || ''}" placeholder=" ">
                <label class="form-label">Built-Up Area</label>
              </div>
              <div class="form-group">
                <input type="text" class="form-input proj-edit-floors" value="${proj.floors || ''}" placeholder=" ">
                <label class="form-label">Floors</label>
              </div>
              <div class="form-group">
                <input type="number" class="form-input proj-edit-drawingsCount" value="${proj.drawingsCount || 0}" placeholder=" ">
                <label class="form-label">Drawings Count</label>
              </div>
              <div class="form-group">
                <input type="text" class="form-input proj-edit-complexity" value="${proj.complexity || ''}" placeholder=" ">
                <label class="form-label">Complexity</label>
              </div>
            </div>

            <div class="admin-form-grid">
              <div class="form-group">
                <input type="text" class="form-input proj-edit-tech" value="${proj.softwareUsed ? proj.softwareUsed.join(', ') : ''}" placeholder=" ">
                <label class="form-label">Software/Tech Used (comma-separated)</label>
              </div>
              <div class="form-group">
                <input type="text" class="form-input proj-edit-image" value="${proj.image || ''}" placeholder=" ">
                <label class="form-label">Project Image URL or Path</label>
              </div>
              <div class="form-group" style="display:flex; flex-direction:column; justify-content:center;">
                <input type="file" class="proj-edit-image-file" accept="image/*" style="font-size:0.75rem;">
                <div class="text-xxs text-slate" style="margin-top:0.2rem;">Or upload image file</div>
              </div>
            </div>

            <div class="form-group">
              <textarea class="form-input proj-edit-desc" placeholder=" " rows="2">${proj.description}</textarea>
              <label class="form-label">Card Summary Description</label>
            </div>
            <div class="form-group">
              <textarea class="form-input proj-edit-overview" placeholder=" " rows="3">${proj.overview || ''}</textarea>
              <label class="form-label">Detailed Project Overview</label>
            </div>

            <!-- Case Study Fields -->
            <h4 class="text-cyan monospace-font" style="font-size:0.75rem; margin-top:0.5rem; border-bottom:0.5px solid rgba(56,189,248,0.1); padding-bottom:0.25rem;">CASE STUDY DETAILS</h4>
            <div class="admin-form-grid">
              <div class="form-group">
                <textarea class="form-input proj-edit-cs-problem" placeholder=" " rows="2">${cs.problem || ''}</textarea>
                <label class="form-label">Case Study: Problem / Challenges</label>
              </div>
              <div class="form-group">
                <textarea class="form-input proj-edit-cs-approach" placeholder=" " rows="2">${cs.approach || ''}</textarea>
                <label class="form-label">Case Study: Approach</label>
              </div>
            </div>
            <div class="admin-form-grid">
              <div class="form-group">
                <textarea class="form-input proj-edit-cs-process" placeholder=" " rows="2">${cs.designProcess || ''}</textarea>
                <label class="form-label">Case Study: Process</label>
              </div>
              <div class="form-group">
                <textarea class="form-input proj-edit-cs-outcome" placeholder=" " rows="2">${cs.outcome || ''}</textarea>
                <label class="form-label">Case Study: Outcome / Deliverables</label>
              </div>
            </div>

            <!-- Document Sheets -->
            <h4 class="text-cyan monospace-font" style="font-size:0.75rem; margin-top:0.5rem; border-bottom:0.5px solid rgba(56,189,248,0.1); padding-bottom:0.25rem;">CAD / BIM TRANSMITTAL DOWNLOAD LINKS</h4>
            <div class="admin-form-grid">
              <div class="form-group">
                <input type="text" class="form-input proj-edit-sheet-plans" value="${sheets.plans || ''}" placeholder=" ">
                <label class="form-label">D-101 Floor Plans Link</label>
              </div>
              <div class="form-group">
                <input type="text" class="form-input proj-edit-sheet-elevations" value="${sheets.elevations || ''}" placeholder=" ">
                <label class="form-label">D-102 Elevations Link</label>
              </div>
              <div class="form-group">
                <input type="text" class="form-input proj-edit-sheet-sections" value="${sheets.sections || ''}" placeholder=" ">
                <label class="form-label">D-103 Section Details Link</label>
              </div>
              <div class="form-group">
                <input type="text" class="form-input proj-edit-sheet-report" value="${sheets.report || ''}" placeholder=" ">
                <label class="form-label">R-101 Report Link</label>
              </div>
              <div class="form-group">
                <input type="text" class="form-input proj-edit-sheet-boq" value="${sheets.boq || ''}" placeholder=" ">
                <label class="form-label">B-101 BOQ / QTO Link</label>
              </div>
            </div>

            <div class="admin-reorder-buttons" style="display: flex; gap: 0.5rem; margin-top: 0.5rem; border-top: 0.5px solid rgba(56,189,248,0.1); padding-top: 0.5rem;">
              <button class="btn btn-secondary btn-outline reorder-up-btn" style="padding: 0.25rem 0.5rem; font-size: 0.65rem;" onclick="moveProjectUp(${idx})"><i class="fa-solid fa-arrow-up"></i> Move Up</button>
              <button class="btn btn-secondary btn-outline reorder-down-btn" style="padding: 0.25rem 0.5rem; font-size: 0.65rem;" onclick="moveProjectDown(${idx})"><i class="fa-solid fa-arrow-down"></i> Move Down</button>
            </div>
          </div>
        `;
      }).join('');

      container.querySelectorAll('.admin-item-row').forEach(row => {
        const idx = parseInt(row.getAttribute('data-idx'));
        
        row.querySelector('.proj-edit-title').addEventListener('change', (e) => { profileData.projects[idx].title = e.target.value; });
        row.querySelector('.proj-edit-cat').addEventListener('change', (e) => { profileData.projects[idx].category = e.target.value; });
        row.querySelector('.proj-edit-duration').addEventListener('change', (e) => { profileData.projects[idx].duration = e.target.value; });
        row.querySelector('.proj-edit-status').addEventListener('change', (e) => { profileData.projects[idx].status = e.target.value; });
        
        row.querySelector('.proj-edit-builtUpArea').addEventListener('change', (e) => { profileData.projects[idx].builtUpArea = e.target.value; });
        row.querySelector('.proj-edit-floors').addEventListener('change', (e) => { profileData.projects[idx].floors = e.target.value; });
        row.querySelector('.proj-edit-drawingsCount').addEventListener('change', (e) => { profileData.projects[idx].drawingsCount = parseInt(e.target.value) || 0; });
        row.querySelector('.proj-edit-complexity').addEventListener('change', (e) => { profileData.projects[idx].complexity = e.target.value; });
        
        row.querySelector('.proj-edit-tech').addEventListener('change', (e) => {
          profileData.projects[idx].softwareUsed = e.target.value.split(',').map(s => s.trim()).filter(Boolean);
        });
        row.querySelector('.proj-edit-image').addEventListener('change', (e) => { profileData.projects[idx].image = e.target.value; });
        
        row.querySelector('.proj-edit-image-file').addEventListener('change', (e) => {
          const file = e.target.files[0];
          if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
              const base64 = event.target.result;
              profileData.projects[idx].image = base64;
              row.querySelector('.proj-edit-image').value = base64;
            };
            reader.readAsDataURL(file);
          }
        });

        row.querySelector('.proj-edit-desc').addEventListener('change', (e) => { profileData.projects[idx].description = e.target.value; });
        row.querySelector('.proj-edit-overview').addEventListener('change', (e) => { profileData.projects[idx].overview = e.target.value; });

        if (!profileData.projects[idx].caseStudy) {
          profileData.projects[idx].caseStudy = { problem: '', approach: '', designProcess: '', outcome: '' };
        }
        row.querySelector('.proj-edit-cs-problem').addEventListener('change', (e) => { profileData.projects[idx].caseStudy.problem = e.target.value; });
        row.querySelector('.proj-edit-cs-approach').addEventListener('change', (e) => { profileData.projects[idx].caseStudy.approach = e.target.value; });
        row.querySelector('.proj-edit-cs-process').addEventListener('change', (e) => { profileData.projects[idx].caseStudy.designProcess = e.target.value; });
        row.querySelector('.proj-edit-cs-outcome').addEventListener('change', (e) => { profileData.projects[idx].caseStudy.outcome = e.target.value; });

        if (!profileData.projects[idx].sheets) {
          profileData.projects[idx].sheets = { plans: '', elevations: '', sections: '', report: '', boq: '' };
        }
        row.querySelector('.proj-edit-sheet-plans').addEventListener('change', (e) => { profileData.projects[idx].sheets.plans = e.target.value; });
        row.querySelector('.proj-edit-sheet-elevations').addEventListener('change', (e) => { profileData.projects[idx].sheets.elevations = e.target.value; });
        row.querySelector('.proj-edit-sheet-sections').addEventListener('change', (e) => { profileData.projects[idx].sheets.sections = e.target.value; });
        row.querySelector('.proj-edit-sheet-report').addEventListener('change', (e) => { profileData.projects[idx].sheets.report = e.target.value; });
        row.querySelector('.proj-edit-sheet-boq').addEventListener('change', (e) => { profileData.projects[idx].sheets.boq = e.target.value; });
      });
    }

    function saveGeneralValues() {
      const p = profileData.personal;
      const a = profileData.about;

      p.fullName = document.getElementById('admin-fullName').value;
      p.title = document.getElementById('admin-title').value;
      p.location = document.getElementById('admin-location').value;
      p.email = document.getElementById('admin-email').value;
      p.phone = document.getElementById('admin-phone').value;
      p.whatsapp = document.getElementById('admin-whatsapp').value;
      p.nationality = document.getElementById('admin-nationality').value;
      p.dateOfBirth = document.getElementById('admin-dob').value;
      p.gender = document.getElementById('admin-gender').value;
      p.resumeUrl = document.getElementById('admin-resumeUrl').value;
      p.linkedin = document.getElementById('admin-linkedin').value;
      p.github = document.getElementById('admin-github').value;

      a.summary = document.getElementById('admin-summary').value;
      a.objective = document.getElementById('admin-objective').value;
      a.yearsOfExperience = document.getElementById('admin-yearsExp').value;
      a.currentStatus = document.getElementById('admin-currentStatus').value;

      if (!profileData.resumeData) profileData.resumeData = {};
      const strengthsInput = document.getElementById('admin-resume-strengths');
      if (strengthsInput) {
        profileData.resumeData.strengths = strengthsInput.value.split(',').map(s => s.trim()).filter(s => s !== '');
      }
      const interestsInput = document.getElementById('admin-resume-interests');
      if (interestsInput) {
        profileData.resumeData.interests = interestsInput.value.split(',').map(s => s.trim()).filter(s => s !== '');
      }
    }

    function populateAcademicsEditor() {
      const eduContainer = document.getElementById('admin-education-list-container');
      if (eduContainer && profileData.education) {
        eduContainer.innerHTML = profileData.education.map((edu, idx) => `
          <div class="admin-item-row" data-idx="${idx}">
            <div class="admin-item-row-header">
              <span class="admin-item-row-title monospace-font">[Edu ${idx + 1}]</span>
              <button class="admin-item-delete-btn" onclick="deleteAdminEducation(${idx})"><i class="fa-solid fa-trash"></i> DELETE</button>
            </div>
            <div class="admin-form-grid">
              <div class="form-group">
                <input type="text" class="form-input edu-edit-degree" value="${edu.degree}" placeholder=" ">
                <label class="form-label">Degree</label>
              </div>
              <div class="form-group">
                <input type="text" class="form-input edu-edit-branch" value="${edu.branch}" placeholder=" ">
                <label class="form-label">Branch</label>
              </div>
              <div class="form-group">
                <input type="text" class="form-input edu-edit-college" value="${edu.collegeName}" placeholder=" ">
                <label class="form-label">College</label>
              </div>
              <div class="form-group">
                <input type="text" class="form-input edu-edit-univ" value="${edu.university}" placeholder=" ">
                <label class="form-label">University</label>
              </div>
              <div class="form-group">
                <input type="text" class="form-input edu-edit-cgpa" value="${edu.cgpa}" placeholder=" ">
                <label class="form-label">Score / CGPA</label>
              </div>
              <div class="form-group">
                <input type="text" class="form-input edu-edit-start" value="${edu.startYear}" placeholder=" ">
                <label class="form-label">Start Year</label>
              </div>
              <div class="form-group">
                <input type="text" class="form-input edu-edit-end" value="${edu.endYear}" placeholder=" ">
                <label class="form-label">End Year</label>
              </div>
            </div>
          </div>
        `).join('');

        eduContainer.querySelectorAll('.admin-item-row').forEach(row => {
          const idx = parseInt(row.getAttribute('data-idx'));
          row.querySelector('.edu-edit-degree').addEventListener('change', (e) => { profileData.education[idx].degree = e.target.value; });
          row.querySelector('.edu-edit-branch').addEventListener('change', (e) => { profileData.education[idx].branch = e.target.value; });
          row.querySelector('.edu-edit-college').addEventListener('change', (e) => { profileData.education[idx].collegeName = e.target.value; });
          row.querySelector('.edu-edit-univ').addEventListener('change', (e) => { profileData.education[idx].university = e.target.value; });
          row.querySelector('.edu-edit-cgpa').addEventListener('change', (e) => { profileData.education[idx].cgpa = e.target.value; });
          row.querySelector('.edu-edit-start').addEventListener('change', (e) => { profileData.education[idx].startYear = e.target.value; });
          row.querySelector('.edu-edit-end').addEventListener('change', (e) => { profileData.education[idx].endYear = e.target.value; });
        });
      }

      const expContainer = document.getElementById('admin-experience-list-container');
      if (expContainer && profileData.experience) {
        expContainer.innerHTML = profileData.experience.map((exp, idx) => `
          <div class="admin-item-row" data-idx="${idx}">
            <div class="admin-item-row-header">
              <span class="admin-item-row-title monospace-font">[Exp ${idx + 1}]</span>
              <button class="admin-item-delete-btn" onclick="deleteAdminExperience(${idx})"><i class="fa-solid fa-trash"></i> DELETE</button>
            </div>
            <div class="admin-form-grid">
              <div class="form-group">
                <input type="text" class="form-input exp-edit-company" value="${exp.company}" placeholder=" ">
                <label class="form-label">Company Name</label>
              </div>
              <div class="form-group">
                <input type="text" class="form-input exp-edit-position" value="${exp.position}" placeholder=" ">
                <label class="form-label">Position / Role</label>
              </div>
              <div class="form-group">
                <input type="text" class="form-input exp-edit-duration" value="${exp.duration}" placeholder=" ">
                <label class="form-label">Duration</label>
              </div>
            </div>
            <div class="form-group" style="margin-top: 1rem;">
              <textarea class="form-input exp-edit-desc" rows="2" placeholder=" ">${exp.description}</textarea>
              <label class="form-label">Description</label>
            </div>
          </div>
        `).join('');

        expContainer.querySelectorAll('.admin-item-row').forEach(row => {
          const idx = parseInt(row.getAttribute('data-idx'));
          row.querySelector('.exp-edit-company').addEventListener('change', (e) => { profileData.experience[idx].company = e.target.value; });
          row.querySelector('.exp-edit-position').addEventListener('change', (e) => { profileData.experience[idx].position = e.target.value; });
          row.querySelector('.exp-edit-duration').addEventListener('change', (e) => { profileData.experience[idx].duration = e.target.value; });
          row.querySelector('.exp-edit-desc').addEventListener('change', (e) => { profileData.experience[idx].description = e.target.value; });
        });
      }

      const certContainer = document.getElementById('admin-certs-list-container');
      if (certContainer && profileData.certifications) {
        certContainer.innerHTML = profileData.certifications.map((c, idx) => `
          <div class="admin-item-row" data-idx="${idx}">
            <div class="admin-item-row-header">
              <span class="admin-item-row-title monospace-font">[Cert ${idx + 1}]</span>
              <button class="admin-item-delete-btn" onclick="deleteAdminCert(${idx})"><i class="fa-solid fa-trash"></i> DELETE</button>
            </div>
            <div class="admin-form-grid">
              <div class="form-group">
                <input type="text" class="form-input cert-edit-name" value="${c.name}" placeholder=" ">
                <label class="form-label">Certificate Name</label>
              </div>
              <div class="form-group">
                <input type="text" class="form-input cert-edit-org" value="${c.organization}" placeholder=" ">
                <label class="form-label">Issuing Organization</label>
              </div>
              <div class="form-group">
                <input type="text" class="form-input cert-edit-date" value="${c.issueDate}" placeholder=" ">
                <label class="form-label">Issue Date</label>
              </div>
              <div class="form-group">
                <input type="text" class="form-input cert-edit-link" value="${c.link}" placeholder=" ">
                <label class="form-label">Verification Link</label>
              </div>
              <div class="form-group">
                <input type="text" class="form-input cert-edit-image" value="${c.image}" placeholder=" ">
                <label class="form-label">Image Path</label>
              </div>
            </div>
          </div>
        `).join('');

        certContainer.querySelectorAll('.admin-item-row').forEach(row => {
          const idx = parseInt(row.getAttribute('data-idx'));
          row.querySelector('.cert-edit-name').addEventListener('change', (e) => { profileData.certifications[idx].name = e.target.value; });
          row.querySelector('.cert-edit-org').addEventListener('change', (e) => { profileData.certifications[idx].organization = e.target.value; });
          row.querySelector('.cert-edit-date').addEventListener('change', (e) => { profileData.certifications[idx].issueDate = e.target.value; });
          row.querySelector('.cert-edit-link').addEventListener('change', (e) => { profileData.certifications[idx].link = e.target.value; });
          row.querySelector('.cert-edit-image').addEventListener('change', (e) => { profileData.certifications[idx].image = e.target.value; });
        });
      }
    }

    function populateServicesEditor() {
      const servContainer = document.getElementById('admin-services-list-container');
      if (servContainer && profileData.services) {
        servContainer.innerHTML = profileData.services.map((s, idx) => `
          <div class="admin-item-row" data-idx="${idx}">
            <div class="admin-item-row-header">
              <span class="admin-item-row-title monospace-font">[Service ${idx + 1}]</span>
              <button class="admin-item-delete-btn" onclick="deleteAdminService(${idx})"><i class="fa-solid fa-trash"></i> DELETE</button>
            </div>
            <div class="admin-form-grid">
              <div class="form-group">
                <input type="text" class="form-input serv-edit-title" value="${s.title}" placeholder=" ">
                <label class="form-label">Service Title</label>
              </div>
              <div class="form-group">
                <input type="text" class="form-input serv-edit-icon" value="${s.icon}" placeholder=" ">
                <label class="form-label">FontAwesome Icon</label>
              </div>
            </div>
            <div class="form-group" style="margin-top: 1rem;">
              <textarea class="form-input serv-edit-desc" rows="2" placeholder=" ">${s.desc}</textarea>
              <label class="form-label">Description</label>
            </div>
          </div>
        `).join('');

        servContainer.querySelectorAll('.admin-item-row').forEach(row => {
          const idx = parseInt(row.getAttribute('data-idx'));
          row.querySelector('.serv-edit-title').addEventListener('change', (e) => { profileData.services[idx].title = e.target.value; });
          row.querySelector('.serv-edit-icon').addEventListener('change', (e) => { profileData.services[idx].icon = e.target.value; });
          row.querySelector('.serv-edit-desc').addEventListener('change', (e) => { profileData.services[idx].desc = e.target.value; });
        });
      }

      const statsContainer = document.getElementById('admin-stats-list-container');
      if (statsContainer && profileData.statistics) {
        statsContainer.innerHTML = profileData.statistics.map((s, idx) => `
          <div class="admin-item-row" data-idx="${idx}">
            <div class="admin-form-grid">
              <div class="form-group">
                <input type="text" class="form-input stat-edit-label" value="${s.label}" placeholder=" " readonly>
                <label class="form-label">Statistic Category</label>
              </div>
              <div class="form-group">
                <input type="number" class="form-input stat-edit-val" value="${s.value}" placeholder=" ">
                <label class="form-label">Numeric Value</label>
              </div>
            </div>
          </div>
        `).join('');

        statsContainer.querySelectorAll('.admin-item-row').forEach(row => {
          const idx = parseInt(row.getAttribute('data-idx'));
          row.querySelector('.stat-edit-val').addEventListener('change', (e) => { profileData.statistics[idx].value = parseInt(e.target.value) || 0; });
        });
      }

      const faqContainer = document.getElementById('admin-faqs-list-container');
      if (faqContainer && profileData.faqs) {
        faqContainer.innerHTML = profileData.faqs.map((f, idx) => `
          <div class="admin-item-row" data-idx="${idx}">
            <div class="admin-item-row-header">
              <span class="admin-item-row-title monospace-font">[FAQ ${idx + 1}]</span>
              <button class="admin-item-delete-btn" onclick="deleteAdminFaq(${idx})"><i class="fa-solid fa-trash"></i> DELETE</button>
            </div>
            <div class="form-group">
              <input type="text" class="form-input faq-edit-q" value="${f.question}" placeholder=" ">
              <label class="form-label">Question</label>
            </div>
            <div class="form-group" style="margin-top: 1rem;">
              <textarea class="form-input faq-edit-a" rows="2" placeholder=" ">${f.answer}</textarea>
              <label class="form-label">Answer</label>
            </div>
          </div>
        `).join('');

        faqContainer.querySelectorAll('.admin-item-row').forEach(row => {
          const idx = parseInt(row.getAttribute('data-idx'));
          row.querySelector('.faq-edit-q').addEventListener('change', (e) => { profileData.faqs[idx].question = e.target.value; });
          row.querySelector('.faq-edit-a').addEventListener('change', (e) => { profileData.faqs[idx].answer = e.target.value; });
        });
      }
    }

    function populateAchievementsEditor() {
      const container = document.getElementById('admin-achievements-list-container');
      if (!container || !profileData.achievements) return;

      container.innerHTML = profileData.achievements.map((ach, idx) => `
        <div class="admin-item-row" data-idx="${idx}">
          <div class="admin-item-row-header">
            <span class="admin-item-row-title monospace-font">[Achievement ${idx + 1}]</span>
            <button class="admin-item-delete-btn" onclick="deleteAdminAchievement(${idx})"><i class="fa-solid fa-trash"></i> DELETE</button>
          </div>
          <div class="admin-form-grid">
            <div class="form-group">
              <input type="text" class="form-input ach-edit-title" value="${ach.title}" placeholder=" ">
              <label class="form-label">Achievement Title</label>
            </div>
            <div class="form-group">
              <input type="text" class="form-input ach-edit-cat" value="${ach.category}" placeholder=" ">
              <label class="form-label">Category</label>
            </div>
          </div>
          <div class="form-group" style="margin-top: 1rem;">
            <textarea class="form-input ach-edit-desc" rows="2" placeholder=" ">${ach.description}</textarea>
            <label class="form-label">Description</label>
          </div>
        </div>
      `).join('');

      container.querySelectorAll('.admin-item-row').forEach(row => {
        const idx = parseInt(row.getAttribute('data-idx'));
        row.querySelector('.ach-edit-title').addEventListener('change', (e) => { profileData.achievements[idx].title = e.target.value; });
        row.querySelector('.ach-edit-cat').addEventListener('change', (e) => { profileData.achievements[idx].category = e.target.value; });
        row.querySelector('.ach-edit-desc').addEventListener('change', (e) => { profileData.achievements[idx].description = e.target.value; });
      });
    }

    function populateTestimonialsEditor() {
      const container = document.getElementById('admin-testimonials-list-container');
      if (!container || !profileData.testimonials) return;

      container.innerHTML = profileData.testimonials.map((t, idx) => `
        <div class="admin-item-row" data-idx="${idx}">
          <div class="admin-item-row-header">
            <span class="admin-item-row-title monospace-font">[Testimonial ${idx + 1}]</span>
            <button class="admin-item-delete-btn" onclick="deleteAdminTestimonial(${idx})"><i class="fa-solid fa-trash"></i> DELETE</button>
          </div>
          <div class="admin-form-grid">
            <div class="form-group">
              <input type="text" class="form-input test-edit-name" value="${t.name}" placeholder=" ">
              <label class="form-label">Name</label>
            </div>
            <div class="form-group">
              <input type="text" class="form-input test-edit-role" value="${t.designation}" placeholder=" ">
              <label class="form-label">Role/Designation</label>
            </div>
            <div class="form-group">
              <input type="text" class="form-input test-edit-company" value="${t.company}" placeholder=" ">
              <label class="form-label">Company</label>
            </div>
            <div class="form-group">
              <input type="text" class="form-input test-edit-photo" value="${t.photo}" placeholder=" ">
              <label class="form-label">Photo URL</label>
            </div>
          </div>
          <div class="form-group" style="margin-top: 1rem;">
            <textarea class="form-input test-edit-feedback" rows="2" placeholder=" ">${t.feedback}</textarea>
            <label class="form-label">Feedback Text</label>
          </div>
        </div>
      `).join('');

      container.querySelectorAll('.admin-item-row').forEach(row => {
        const idx = parseInt(row.getAttribute('data-idx'));
        row.querySelector('.test-edit-name').addEventListener('change', (e) => { profileData.testimonials[idx].name = e.target.value; });
        row.querySelector('.test-edit-role').addEventListener('change', (e) => { profileData.testimonials[idx].designation = e.target.value; });
        row.querySelector('.test-edit-company').addEventListener('change', (e) => { profileData.testimonials[idx].company = e.target.value; });
        row.querySelector('.test-edit-photo').addEventListener('change', (e) => { profileData.testimonials[idx].photo = e.target.value; });
        row.querySelector('.test-edit-feedback').addEventListener('change', (e) => { profileData.testimonials[idx].feedback = e.target.value; });
      });
    }

    function populateResumeDetailsEditor() {
      if (!profileData.resumeData) profileData.resumeData = {};
      const resData = profileData.resumeData;
      if (!resData.strengths) resData.strengths = [];
      if (!resData.interests) resData.interests = [];
      if (!resData.languages) resData.languages = [];
      if (!resData.academicProjects) resData.academicProjects = [];

      const strengthsInput = document.getElementById('admin-resume-strengths');
      if (strengthsInput) {
        strengthsInput.value = resData.strengths.join(', ');
      }

      const interestsInput = document.getElementById('admin-resume-interests');
      if (interestsInput) {
        interestsInput.value = resData.interests.join(', ');
      }

      const langContainer = document.getElementById('admin-resume-lang-container');
      if (langContainer) {
        langContainer.innerHTML = resData.languages.map((l, idx) => `
          <div class="admin-item-row" data-idx="${idx}">
            <div class="admin-item-row-header">
              <span class="admin-item-row-title monospace-font">[Language ${idx + 1}]</span>
              <button class="admin-item-delete-btn" onclick="deleteAdminResumeLang(${idx})"><i class="fa-solid fa-trash"></i> DELETE</button>
            </div>
            <div class="admin-form-grid">
              <div class="form-group">
                <input type="text" class="form-input lang-edit-name" value="${l.name}" placeholder=" ">
                <label class="form-label">Language</label>
              </div>
              <div class="form-group">
                <input type="text" class="form-input lang-edit-fluency" value="${l.fluency}" placeholder=" ">
                <label class="form-label">Fluency Level</label>
              </div>
            </div>
          </div>
        `).join('');

        langContainer.querySelectorAll('.admin-item-row').forEach(row => {
          const idx = parseInt(row.getAttribute('data-idx'));
          row.querySelector('.lang-edit-name').addEventListener('change', (e) => { resData.languages[idx].name = e.target.value; });
          row.querySelector('.lang-edit-fluency').addEventListener('change', (e) => { resData.languages[idx].fluency = e.target.value; });
        });
      }

      const acadContainer = document.getElementById('admin-resume-acad-container');
      if (acadContainer) {
        acadContainer.innerHTML = resData.academicProjects.map((p, idx) => `
          <div class="admin-item-row" data-idx="${idx}">
            <div class="admin-item-row-header">
              <span class="admin-item-row-title monospace-font">[Academic Project ${idx + 1}]</span>
              <button class="admin-item-delete-btn" onclick="deleteAdminResumeAcad(${idx})"><i class="fa-solid fa-trash"></i> DELETE</button>
            </div>
            <div class="admin-form-grid">
              <div class="form-group">
                <input type="text" class="form-input acad-edit-title" value="${p.title}" placeholder=" ">
                <label class="form-label">Project Title</label>
              </div>
              <div class="form-group">
                <input type="text" class="form-input acad-edit-duration" value="${p.duration}" placeholder=" ">
                <label class="form-label">Duration</label>
              </div>
            </div>
            <div class="form-group" style="margin-top: 1rem;">
              <textarea class="form-input acad-edit-desc" rows="3" placeholder=" ">${p.description}</textarea>
              <label class="form-label">Description / Responsibilities</label>
            </div>
          </div>
        `).join('');

        acadContainer.querySelectorAll('.admin-item-row').forEach(row => {
          const idx = parseInt(row.getAttribute('data-idx'));
          row.querySelector('.acad-edit-title').addEventListener('change', (e) => { resData.academicProjects[idx].title = e.target.value; });
          row.querySelector('.acad-edit-duration').addEventListener('change', (e) => { resData.academicProjects[idx].duration = e.target.value; });
          row.querySelector('.acad-edit-desc').addEventListener('change', (e) => { resData.academicProjects[idx].description = e.target.value; });
        });
      }
    }

    function populateGalleryEditor() {
      const container = document.getElementById('admin-gallery-container');
      if (!container || !profileData.gallery) return;

      container.innerHTML = profileData.gallery.map((g, idx) => `
        <div class="admin-item-row" data-idx="${idx}">
          <div class="admin-item-row-header">
            <span class="admin-item-row-title monospace-font">[Gallery Item ${idx + 1}]</span>
            <button class="admin-item-delete-btn" onclick="deleteAdminGalleryItem(${idx})"><i class="fa-solid fa-trash"></i> DELETE</button>
          </div>
          <div class="admin-form-grid">
            <div class="form-group">
              <input type="text" class="form-input gal-edit-url" value="${g.url}" placeholder=" ">
              <label class="form-label">Image URL / Path</label>
            </div>
            <div class="form-group">
              <input type="text" class="form-input gal-edit-caption" value="${g.caption}" placeholder=" ">
              <label class="form-label">Caption</label>
            </div>
            <div class="form-group">
              <input type="text" class="form-input gal-edit-type" value="${g.type}" placeholder=" ">
              <label class="form-label">Category (e.g. AutoCAD Drawings)</label>
            </div>
          </div>
        </div>
      `).join('');

      container.querySelectorAll('.admin-item-row').forEach(row => {
        const idx = parseInt(row.getAttribute('data-idx'));
        row.querySelector('.gal-edit-url').addEventListener('change', (e) => { profileData.gallery[idx].url = e.target.value; });
        row.querySelector('.gal-edit-caption').addEventListener('change', (e) => { profileData.gallery[idx].caption = e.target.value; });
        row.querySelector('.gal-edit-type').addEventListener('change', (e) => { profileData.gallery[idx].type = e.target.value; });
      });
    }

    // Windows exposed handlers
    window.deleteAdminProject = function(projectId) {
      if (confirm(`Are you sure you want to delete project ${projectId}?`)) {
        profileData.projects = profileData.projects.filter(p => p.id !== projectId);
        populateProjectsEditor();
      }
    };

    window.moveProjectUp = function(idx) {
      if (idx > 0) {
        const temp = profileData.projects[idx];
        profileData.projects[idx] = profileData.projects[idx - 1];
        profileData.projects[idx - 1] = temp;
        populateProjectsEditor();
      }
    };

    window.moveProjectDown = function(idx) {
      if (idx < profileData.projects.length - 1) {
        const temp = profileData.projects[idx];
        profileData.projects[idx] = profileData.projects[idx + 1];
        profileData.projects[idx + 1] = temp;
        populateProjectsEditor();
      }
    };

    window.deleteAdminEducation = function(idx) {
      if (confirm('Delete this education entry?')) {
        profileData.education.splice(idx, 1);
        populateAcademicsEditor();
      }
    };

    window.deleteAdminExperience = function(idx) {
      if (confirm('Delete this experience entry?')) {
        profileData.experience.splice(idx, 1);
        populateAcademicsEditor();
      }
    };

    window.deleteAdminCert = function(idx) {
      if (confirm('Delete this certification?')) {
        profileData.certifications.splice(idx, 1);
        populateAcademicsEditor();
      }
    };

    window.deleteAdminService = function(idx) {
      if (confirm('Delete this service?')) {
        profileData.services.splice(idx, 1);
        populateServicesEditor();
      }
    };

    window.deleteAdminFaq = function(idx) {
      if (confirm('Delete this FAQ accordion?')) {
        profileData.faqs.splice(idx, 1);
        populateServicesEditor();
      }
    };

    window.deleteAdminAchievement = function(idx) {
      if (confirm('Delete this achievement?')) {
        profileData.achievements.splice(idx, 1);
        populateAchievementsEditor();
      }
    };

    window.deleteAdminTestimonial = function(idx) {
      if (confirm('Delete this testimonial?')) {
        profileData.testimonials.splice(idx, 1);
        populateTestimonialsEditor();
      }
    };

    window.deleteAdminResumeLang = function(idx) {
      if (confirm('Delete this language?')) {
        profileData.resumeData.languages.splice(idx, 1);
        populateResumeDetailsEditor();
      }
    };

    window.deleteAdminResumeAcad = function(idx) {
      if (confirm('Delete this academic project?')) {
        profileData.resumeData.academicProjects.splice(idx, 1);
        populateResumeDetailsEditor();
      }
    };

    window.deleteAdminGalleryItem = function(idx) {
      if (confirm('Delete this gallery item?')) {
        profileData.gallery.splice(idx, 1);
        populateGalleryEditor();
      }
    };

    window.deleteAdminSkill = function(idx) {
      if (confirm('Delete this skill?')) {
        profileData.skills.splice(idx, 1);
        populateSkillsSliders();
      }
    };

    window.deleteAdminSoftware = function(idx) {
      if (confirm('Delete this software proficiency?')) {
        profileData.softwareProficiency.splice(idx, 1);
        populateSkillsSliders();
      }
    };
  }
};
