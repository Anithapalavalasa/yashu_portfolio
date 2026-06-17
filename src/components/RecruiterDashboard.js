export default {
  render(data) {
    const statsHtml = data.statistics ? data.statistics.map(s => `
      <div class="glass-card stat-item">
        <div class="stat-num text-cyan" data-target="${s.value}">0</div>
        <div class="stat-label">${s.label}</div>
      </div>
    `).join('') : '';

    return `
      <section id="why-hire-me" class="why-hire-me-section section-padding border-t">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title"><span class="section-num monospace-font">01 //</span> WHY HIRE ME: RECRUITER DASHBOARD</h2>
            <div class="header-line"></div>
          </div>

          <div class="why-hire-me-grid">
            <div class="why-hire-me-left">
              <div class="kpi-grid">
                <div class="glass-card kpi-card">
                  <div class="kpi-icon"><i class="fa-solid fa-drafting-compass text-cyan"></i></div>
                  <h3 class="kpi-title text-white">AutoCAD Expertise</h3>
                  <p class="kpi-value text-cyan monospace-font">95% Speed & Precision</p>
                  <p class="kpi-desc text-slate">Highly proficient in structural detailing, municipal setbacks planning,
                    dynamic blocks, external references (Xrefs), and sheet set managers.</p>
                </div>
                <div class="glass-card kpi-card">
                  <div class="kpi-icon"><i class="fa-solid fa-cube text-cyan"></i></div>
                  <h3 class="kpi-title text-white">Revit Expertise</h3>
                  <p class="kpi-value text-cyan monospace-font">90% Parametric Flow</p>
                  <p class="kpi-desc text-slate">Advanced creation of nested parametric families, wall/floor structural
                    scheduling, phase staging, and database coordinate extraction.</p>
                </div>
                <div class="glass-card kpi-card">
                  <div class="kpi-icon"><i class="fa-solid fa-network-wired text-cyan"></i></div>
                  <h3 class="kpi-title text-white">BIM Coordination</h3>
                  <p class="kpi-value text-cyan monospace-font">LOD 300/400 Standards</p>
                  <p class="kpi-desc text-slate">Strong capability in coordinating multi-disciplinary models, managing design
                    tolerances, and federating structural with MEP systems.</p>
                </div>
                <div class="glass-card kpi-card">
                  <div class="kpi-icon"><i class="fa-solid fa-bullseye text-cyan"></i></div>
                  <h3 class="kpi-title text-white">Drafting Accuracy</h3>
                  <p class="kpi-value text-cyan monospace-font">&lt;2mm Site Tolerance</p>
                  <p class="kpi-desc text-slate">Strict compliance with engineering guidelines (IS 456, SP 34 standards),
                    clean snapping, closed loops, and perfect alignment checks.</p>
                </div>
                <div class="glass-card kpi-card">
                  <div class="kpi-icon"><i class="fa-solid fa-file-invoice text-cyan"></i></div>
                  <h3 class="kpi-title text-white">Project Documentation</h3>
                  <p class="kpi-value text-cyan monospace-font">BBS & BOQ Compilation</p>
                  <p class="kpi-desc text-slate">Formulating precise structural reinforcement bar bending schedules and
                    comprehensive cost estimation spreadsheets directly from models.</p>
                </div>
                <div class="glass-card kpi-card">
                  <div class="kpi-icon"><i class="fa-solid fa-trowel-bricks text-cyan"></i></div>
                  <h3 class="kpi-title text-white">Construction Drawing</h3>
                  <p class="kpi-value text-cyan monospace-font">Execution-Ready</p>
                  <p class="kpi-desc text-slate">Specialized in concrete formwork, deep-foundation rebar binding layouts,
                    columns-beam detailing sheets, and site-level plans.</p>
                </div>
              </div>
            </div>
            <div class="why-hire-me-right">
              <div class="blueprint-canvas-container dashboard-3d-container">
                <canvas id="dashboard-3d-canvas"></canvas>
                <div class="canvas-controls">
                  <span class="control-label monospace-font">STRUCTURE: TRUSS_BRIDGE_3D</span>
                  <button class="canvas-btn" id="dashboard-rotate-toggle" title="Toggle Auto-Rotation"><i
                      class="fa-solid fa-sync fa-spin"></i></button>
                </div>
              </div>
            </div>
          </div>

          <div class="stats-grid monospace-font" style="margin-top: 4rem;">
            ${statsHtml}
          </div>
        </div>
      </section>
    `;
  },
  init(data) {
    setupTrussBridge3D();
    setupStatsCounters();
  }
};

function setupTrussBridge3D() {
  const canvas = document.getElementById('dashboard-3d-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let animationId = null;
  let isRotating = true;

  const resizeCanvas = () => {
    if (canvas.parentElement) {
      canvas.width = canvas.parentElement.clientWidth || 500;
      canvas.height = canvas.parentElement.clientHeight || 300;
    }
  };
  resizeCanvas();

  const resizeObserver = new ResizeObserver((entries) => {
    for (let entry of entries) {
      const { width, height } = entry.contentRect;
      if (width > 0 && height > 0) {
        canvas.width = width;
        canvas.height = height;
      }
    }
  });
  if (canvas.parentElement) {
    resizeObserver.observe(canvas.parentElement);
  }

  const vertices = [
    // Bottom Chord Left (6 nodes)
    {x: -1.5, y: -0.3, z: -0.35}, // B0_L (idx 0)
    {x: -0.9, y: -0.3, z: -0.35}, // B1_L (idx 1)
    {x: -0.3, y: -0.3, z: -0.35}, // B2_L (idx 2)
    {x: 0.3, y: -0.3, z: -0.35},  // B3_L (idx 3)
    {x: 0.9, y: -0.3, z: -0.35},  // B4_L (idx 4)
    {x: 1.5, y: -0.3, z: -0.35},  // B5_L (idx 5)

    // Bottom Chord Right (6 nodes)
    {x: -1.5, y: -0.3, z: 0.35}, // B0_R (idx 6)
    {x: -0.9, y: -0.3, z: 0.35}, // B1_R (idx 7)
    {x: -0.3, y: -0.3, z: 0.35}, // B2_R (idx 8)
    {x: 0.3, y: -0.3, z: 0.35},  // B3_R (idx 9)
    {x: 0.9, y: -0.3, z: 0.35},  // B4_R (idx 10)
    {x: 1.5, y: -0.3, z: 0.35},  // B5_R (idx 11)

    // Top Chord Left (4 nodes)
    {x: -0.9, y: 0.3, z: -0.35},  // T1_L (idx 12)
    {x: -0.3, y: 0.3, z: -0.35},  // T2_L (idx 13)
    {x: 0.3, y: 0.3, z: -0.35},   // T3_L (idx 14)
    {x: 0.9, y: 0.3, z: -0.35},   // T4_L (idx 15)

    // Top Chord Right (4 nodes)
    {x: -0.9, y: 0.3, z: 0.35},  // T1_R (idx 16)
    {x: -0.3, y: 0.3, z: 0.35},  // T2_R (idx 17)
    {x: 0.3, y: 0.3, z: 0.35},   // T3_R (idx 18)
    {x: 0.9, y: 0.3, z: 0.35}    // T4_R (idx 19)
  ];

  const edges = [
    // Bottom chords longitudinal
    [0, 1], [1, 2], [2, 3], [3, 4], [4, 5],
    [6, 7], [7, 8], [8, 9], [9, 10], [10, 11],

    // Top chords longitudinal
    [12, 13], [13, 14], [14, 15],
    [16, 17], [17, 18], [18, 19],

    // Transverse bottom deck cross-beams
    [0, 6], [1, 7], [2, 8], [3, 9], [4, 10], [5, 11],

    // Transverse top chord cross-beams
    [12, 16], [13, 17], [14, 18], [15, 19],

    // Left side vertical members
    [1, 12], [2, 13], [3, 14], [4, 15],

    // Right side vertical members
    [7, 16], [8, 17], [9, 18], [10, 19],

    // Left side diagonals
    [0, 12], [5, 15],
    [1, 13], [2, 12],
    [3, 13], [2, 14],
    [4, 14], [3, 15],

    // Right side diagonals
    [6, 16], [11, 19],
    [7, 17], [8, 16],
    [9, 17], [8, 18],
    [10, 18], [9, 19],

    // Top bracing diagonals (X-bracing)
    [12, 17], [16, 13],
    [13, 18], [17, 14],
    [14, 19], [18, 15]
  ];

  let angleX = 0.4;
  let angleY = -0.5;

  let isDragging = false;
  let prevMouseX = 0;
  let prevMouseY = 0;

  const handleStart = (clientX, clientY) => {
    isDragging = true;
    isRotating = false;
    prevMouseX = clientX;
    prevMouseY = clientY;
  };

  const handleMove = (clientX, clientY) => {
    if (!isDragging) return;
    const deltaX = clientX - prevMouseX;
    const deltaY = clientY - prevMouseY;

    angleY += deltaX * 0.01;
    angleX += deltaY * 0.01;

    prevMouseX = clientX;
    prevMouseY = clientY;
  };

  canvas.addEventListener('mousedown', (e) => handleStart(e.clientX, e.clientY));
  window.addEventListener('mousemove', (e) => handleMove(e.clientX, e.clientY));
  window.addEventListener('mouseup', () => { isDragging = false; });

  canvas.addEventListener('touchstart', (e) => handleStart(e.touches[0].clientX, e.touches[0].clientY));
  window.addEventListener('touchmove', (e) => handleMove(e.touches[0].clientX, e.touches[0].clientY));
  window.addEventListener('touchend', () => { isDragging = false; });

  const rotToggle = document.getElementById('dashboard-rotate-toggle');
  if (rotToggle) {
    rotToggle.addEventListener('click', () => {
      isRotating = !isRotating;
      rotToggle.querySelector('i').className = isRotating ? 'fa-solid fa-sync fa-spin' : 'fa-solid fa-play';
    });
  }

  function project(vertex, width, height) {
    const scale = Math.min(width, height) * 0.28;
    let x = vertex.x * Math.cos(angleY) - vertex.z * Math.sin(angleY);
    let z = vertex.x * Math.sin(angleY) + vertex.z * Math.cos(angleY);
    let y = vertex.y;
    
    const tempY = y * Math.cos(angleX) - z * Math.sin(angleX);
    z = y * Math.sin(angleX) + z * Math.cos(angleX);
    y = tempY;
    
    const distance = 4.0;
    const perspective = distance / (distance - z);
    
    return {
      x: (x * perspective) * scale + width / 2,
      y: -(y * perspective) * scale + height / 2,
      z: z
    };
  }

  let loadX = -1.6;
  let loadSpeed = 0.008;

  function draw() {
    if (!canvas.parentElement) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = 'rgba(56, 189, 248, 0.03)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, Math.min(canvas.width, canvas.height) * 0.4, 0, 2 * Math.PI);
    ctx.stroke();

    if (isRotating) {
      angleY += 0.0025;
    }

    loadX += loadSpeed;
    if (loadX > 1.6) {
      loadX = -1.6;
    }

    const projected = vertices.map(v => project(v, canvas.width, canvas.height));

    ctx.strokeStyle = 'rgba(56, 189, 248, 0.04)';
    ctx.lineWidth = 0.5;
    for (let i = 0; i < 5; i++) {
      const xLeft = -1.5 + i * 0.6;
      const p1 = project({x: xLeft, y: -0.3, z: -0.35}, canvas.width, canvas.height);
      const p2 = project({x: xLeft, y: -0.3, z: 0.35}, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.stroke();
    }

    edges.forEach(edge => {
      const p1 = projected[edge[0]];
      const p2 = projected[edge[1]];

      const originalMidX = (vertices[edge[0]].x + vertices[edge[1]].x) / 2;
      const dist = Math.abs(originalMidX - loadX);
      const stress = Math.max(0, 1 - dist / 0.85);

      let color = 'rgba(56, 189, 248, 0.2)';
      let width = 1.0;

      if (stress > 0.05) {
        width = 1.0 + stress * 2.2;
        const isCompression = (edge[0] >= 12 || (edge[0] < 12 && edge[1] >= 12 && edge[0] % 6 === edge[1] % 6));
        if (isCompression) {
          const r = Math.floor(56 + stress * (239 - 56));
          const g = Math.floor(189 - stress * (189 - 68));
          const b = Math.floor(248 - stress * (248 - 68));
          color = `rgba(${r}, ${g}, ${b}, ${0.25 + stress * 0.75})`;
        } else {
          const r = Math.floor(56 + stress * (245 - 56));
          const g = Math.floor(189 - stress * (189 - 158));
          const b = Math.floor(248 - stress * (248 - 11));
          color = `rgba(${r}, ${g}, ${b}, ${0.25 + stress * 0.75})`;
        }
      }

      ctx.strokeStyle = color;
      ctx.lineWidth = width;
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.stroke();
    });

    projected.forEach((p, idx) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, 2.5, 0, 2 * Math.PI);
      ctx.fillStyle = idx >= 12 ? '#ef4444' : '#38BDF8';
      ctx.fill();
    });

    const loadVertex = { x: loadX, y: -0.3, z: 0 };
    const pLoad = project(loadVertex, canvas.width, canvas.height);
    
    ctx.fillStyle = '#f59e0b';
    ctx.beginPath();
    ctx.arc(pLoad.x, pLoad.y, 4 + Math.sin(Date.now() * 0.015) * 1.5, 0, 2 * Math.PI);
    ctx.fill();
    
    ctx.strokeStyle = 'rgba(245, 158, 11, 0.4)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(pLoad.x, pLoad.y, 9 + Math.sin(Date.now() * 0.015) * 2.5, 0, 2 * Math.PI);
    ctx.stroke();

    animationId = requestAnimationFrame(draw);
  }

  draw();
}

function setupStatsCounters() {
  const statsSection = document.getElementById('why-hire-me');
  if (!statsSection) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.querySelectorAll('.stat-num').forEach(counter => {
          const target = parseInt(counter.getAttribute('data-target'));
          let count = 0;
          const speed = Math.ceil(target / 40);
          const updateCount = () => {
            count += speed;
            if (count < target) {
              counter.innerText = Math.floor(count);
              setTimeout(updateCount, 20);
            } else {
              counter.innerText = target + '+';
            }
          };
          updateCount();
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  observer.observe(statsSection);
}
