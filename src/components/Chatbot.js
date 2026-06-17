export default {
  render(data) {
    const p = data.personal;
    return `
      <!-- AI CHATBOT WIDGET -->
      <div class="chatbot-container" id="chatbot-widget">
        <!-- Chat trigger button -->
        <button class="chatbot-trigger" id="chatbot-trigger-btn" aria-label="Open AI Assistant">
          <i class="fa-solid fa-robot"></i>
          <span class="chatbot-pulse-dot"></span>
        </button>

        <!-- Chat Panel Window -->
        <div class="chatbot-panel glass-card">
          <div class="chatbot-header monospace-font">
            <span class="chatbot-header-title">
              <i class="fa-solid fa-circle-nodes text-cyan"></i> PORTFOLIO_AI: RECV_01
            </span>
            <div style="display:flex; align-items:center; gap:0.6rem;">
              <span class="chatbot-header-status" title="Active"></span>
              <button class="chatbot-close-btn" id="chatbot-close-btn" aria-label="Close Chat">
                <i class="fa-solid fa-times"></i>
              </button>
            </div>
          </div>

          <!-- Messages scrollable box -->
          <div class="chatbot-messages-box" id="chatbot-messages-container">
            <div class="chat-bubble bot">
              Hi! I am Yaswanth's Portfolio AI Assistant. Ask me anything about his Civil CAD design skill set, BIM modeling experience, academic projects, or certifications!
            </div>
          </div>

          <!-- Suggested quick questions chips -->
          <div class="chatbot-suggestions">
            <button class="chat-chip" data-query="What software do you use?">🛠️ Software</button>
            <button class="chat-chip" data-query="Show me your projects">📁 Projects</button>
            <button class="chat-chip" data-query="What is your education?">🎓 Education</button>
            <button class="chat-chip" data-query="How can I contact you?">📧 Contact</button>
          </div>

          <!-- Input chat field -->
          <form class="chatbot-input-area" id="chatbot-form">
            <input type="text" class="chatbot-input" id="chatbot-user-input" required placeholder="Type a message..." autocomplete="off">
            <button type="submit" class="chatbot-send-btn" aria-label="Send message">
              <i class="fa-solid fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
    `;
  },
  init(data) {
    const widget = document.getElementById('chatbot-widget');
    const trigger = document.getElementById('chatbot-trigger-btn');
    const closeBtn = document.getElementById('chatbot-close-btn');
    const form = document.getElementById('chatbot-form');
    const input = document.getElementById('chatbot-user-input');
    const messagesContainer = document.getElementById('chatbot-messages-container');

    if (!widget || !trigger || !closeBtn || !form || !messagesContainer) return;

    // Toggle panel
    trigger.addEventListener('click', () => {
      widget.classList.toggle('active');
      const pulseDot = trigger.querySelector('.chatbot-pulse-dot');
      if (pulseDot) pulseDot.style.display = 'none'; // Hide red alert dot once opened
      
      // Auto-focus input
      if (widget.classList.contains('active')) {
        setTimeout(() => input.focus(), 150);
        scrollToBottom();
      }
    });

    closeBtn.addEventListener('click', () => {
      widget.classList.remove('active');
    });

    // Handle suggested chips clicks
    document.querySelectorAll('.chat-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const query = chip.getAttribute('data-query');
        handleUserMessage(query);
      });
    });

    // Handle form submissions
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const val = input.value.trim();
      if (!val) return;
      handleUserMessage(val);
      input.value = '';
    });

    function scrollToBottom() {
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    function appendMessage(text, isUser = false) {
      const bubble = document.createElement('div');
      bubble.className = `chat-bubble ${isUser ? 'user' : 'bot'}`;
      bubble.innerHTML = text;
      messagesContainer.appendChild(bubble);
      scrollToBottom();
    }

    function showTypingIndicator() {
      const indicator = document.createElement('div');
      indicator.className = 'chat-bubble bot typing-indicator';
      indicator.id = 'chatbot-typing-bubble';
      indicator.innerHTML = `
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
      `;
      messagesContainer.appendChild(indicator);
      scrollToBottom();
    }

    function removeTypingIndicator() {
      const indicator = document.getElementById('chatbot-typing-bubble');
      if (indicator) indicator.remove();
    }

    function handleUserMessage(msg) {
      appendMessage(msg, true);
      showTypingIndicator();

      setTimeout(() => {
        removeTypingIndicator();
        const response = generateBotResponse(msg);
        appendMessage(response);
      }, 700);
    }

    function generateBotResponse(query) {
      const q = query.toLowerCase();
      const p = data.personal || {};
      const a = data.about || {};
      const r = data.resumeData || {};
      const projs = data.projects || [];
      const edu = data.education || [];
      const exp = data.experience || [];
      
      // 1. GREETINGS
      if (q.includes('hello') || q.includes('hi ') || q.startsWith('hi') && q.length < 4 || q.includes('hey')) {
        return `Hello! How can I help you find information about Yaswanth Terli today? You can ask me about his software toolkit, academic projects, or direct contact links.`;
      }

      // 2. CONTACT / PHONE / EMAIL / HIRE
      if (q.includes('contact') || q.includes('phone') || q.includes('email') || q.includes('number') || q.includes('whatsapp') || q.includes('reach') || q.includes('hire') || q.includes('linkedin')) {
        return `
          Yaswanth's contact information:<br>
          📧 <strong>Email</strong>: <a href="mailto:${p.email}" class="text-cyan">${p.email}</a><br>
          📞 <strong>Phone</strong>: <a href="tel:${p.phone}" class="text-cyan">${p.phone}</a><br>
          💬 <strong>WhatsApp</strong>: <a href="https://wa.me/${p.whatsapp}" target="_blank" class="text-cyan">Direct WhatsApp Connect</a><br>
          🔗 <strong>LinkedIn</strong>: <a href="${p.linkedin}" target="_blank" class="text-cyan">Yaswanth's Profile</a>
        `;
      }

      // 3. SOFTWARE / TOOLKIT / AUTOCAD / REVIT / STAAD / EXCEL
      if (q.includes('software') || q.includes('tool') || q.includes('autocad') || q.includes('revit') || q.includes('staad') || q.includes('excel') || q.includes('civil 3d') || q.includes('navisworks')) {
        const skillsList = data.softwareProficiency ? data.softwareProficiency.map(s => `• <strong>${s.name}</strong>: ${s.percentage}%`).join('<br>') : '';
        return `
          Yaswanth is proficient in standard Civil Engineering software:<br>
          ${skillsList}<br><br>
          He has expert-level experience in 2D Municipal Drafting, Revit Parametric Families modeling, and Navisworks multi-disciplinary clash interference detections.
        `;
      }

      // 4. PROJECTS
      if (q.includes('project') || q.includes('duplex') || q.includes('villa') || q.includes('highway') || q.includes('commercial') || q.includes('design') || q.includes('work') || q.includes('portfolio')) {
        if (projs.length > 0) {
          const list = projs.map((pr, idx) => `[${idx+1}] <strong>${pr.title}</strong> (${pr.category}) - ${pr.duration}`).join('<br>');
          return `
            Yaswanth has worked on several realistic Civil CAD & BIM projects:<br>
            ${list}<br><br>
            <i>Tip: You can scroll up to the "Design Projects" section and click "View Detail" to see drawings and 3D models of these projects!</i>
          `;
        }
        return `Yaswanth has worked on AutoCAD drafting projects, structural details, and Revit villa space planning configurations.`;
      }

      // 5. EDUCATION / COLLEGE / GPA / CGPA / Intermediate / SSC
      if (q.includes('education') || q.includes('college') || q.includes('degree') || q.includes('b.tech') || q.includes('study') || q.includes('gpa') || q.includes('marks') || q.includes('percentage') || q.includes('school')) {
        if (edu.length > 0) {
          const eduList = edu.map(e => `🎓 <strong>${e.degree}</strong> (${e.branch}) at <i>${e.collegeName}</i> - CGPA: <strong>${e.cgpa}</strong> (${e.startYear}-${e.endYear})`).join('<br><br>');
          return `
            Yaswanth's academic qualifications:<br><br>
            ${eduList}
          `;
        }
        return `Yaswanth holds a Bachelor of Technology (B.Tech) degree in Civil Engineering from Swamy Vivekananda Engineering College with a CGPA score of 71.40%.`;
      }

      // 6. ACADEMIC PROJECT / FLY ASH / RICE HUSK / WASTE ADDITIVES
      if (q.includes('academic') || q.includes('experiment') || q.includes('concrete') || q.includes('additives') || q.includes('waste') || q.includes('fly ash')) {
        if (r.academicProjects && r.academicProjects.length > 0) {
          const ap = r.academicProjects[0];
          return `
            🧪 <strong>Academic Project:</strong> "${ap.title}"<br>
            <strong>Duration:</strong> ${ap.duration}<br>
            <strong>Overview:</strong> ${ap.description}<br><br>
            He was responsible for Mix Design calculations, compressive strength testing, material testing, and documentation report compiling.
          `;
        }
        return `Yaswanth's B.Tech academic project studied Fly Ash and Rice Husk Ash as partial concrete cement replacements to evaluate concrete compaction strengths and cost reductions.`;
      }

      // 7. EXPERIENCE / INTERNSHIP / L&T / BUILDTECH
      if (q.includes('experience') || q.includes('job') || q.includes('intern') || q.includes('work') || q.includes('l&t') || q.includes('buildtech')) {
        if (exp.length > 0) {
          const expList = exp.map(e => `💼 <strong>${e.position}</strong> at <i>${e.company}</i> (${e.duration})<br>• ${e.description}`).join('<br><br>');
          return `
            Yaswanth's professional training and experiences:<br><br>
            ${expList}
          `;
        }
        return `Yaswanth has completed a 6-month Civil Design Internship at BuildTech Infrastructure Solutions and observed structural concrete casting operations under an L&T Site Program.`;
      }

      // 8. STRENGTHS / HOBBIES / LANGUAGES
      if (q.includes('strength') || q.includes('hobby') || q.includes('hobbies') || q.includes('chess') || q.includes('language') || q.includes('interest')) {
        const str = r.strengths ? r.strengths.join(', ') : 'Quick Learner, Team Collaboration';
        const lang = p.languages ? p.languages.join(', ') : 'English, Telugu';
        const hobbies = r.interests ? r.interests.join(', ') : 'Chess, Music, Technology';
        return `
          📝 <strong>Core Strengths</strong>: ${str}<br>
          🗣️ <strong>Languages</strong>: ${lang}<br>
          🎮 <strong>Hobbies</strong>: ${hobbies}
        `;
      }

      // 9. BIM / LOD / CLASH DETECTION
      if (q.includes('bim') || q.includes('lod') || q.includes('clash') || q.includes('coordination')) {
        return `
          Yaswanth possesses a solid understanding of BIM workflows:<br>
          • <strong>LOD Matrix</strong>: Knows specifications from conceptual LOD 100 up to detailed fabrication LOD 400.<br>
          • <strong>Clash Detection</strong>: Federated architecture with structural and MEP plans inside Navisworks to run clash reports.<br>
          • <strong>Schedules</strong>: Extract schedules and material takeoffs (QTO) in Excel.
        `;
      }

      // 10. DEFAULT FALLBACK
      return `
        I'm not sure I understand that query. I can help you with:<br>
        • 🛠️ <strong>Skills</strong>: Ask "What software do you use?"<br>
        • 📁 <strong>Projects</strong>: Ask "Show me your projects"<br>
        • 💼 <strong>Experience</strong>: Ask "Do you have internship experience?"<br>
        • 🎓 <strong>Education</strong>: Ask "What are your college grades?"<br>
        • 📧 <strong>Contact</strong>: Ask "How can I contact you?"
      `;
    }
  }
};
