export default {
  render(data) {
    const p = data.personal;
    return `
      <!-- FLOATING COMPARE TRAY -->
      <div class="compare-tray" id="compare-tray">
        <div class="compare-tray-content monospace-font">
          <span class="compare-count"><i class="fa-solid fa-layer-group text-cyan"></i> <span
              id="compare-count-val">0</span> Selected</span>
          <div class="compare-actions">
            <button class="btn btn-secondary btn-outline" id="clear-compare-btn"
              style="padding: 0.35rem 0.75rem; font-size: 0.7rem;">Clear</button>
            <button class="btn btn-primary" id="trigger-compare-btn"
              style="padding: 0.35rem 0.75rem; font-size: 0.7rem;">Compare</button>
          </div>
        </div>
      </div>

      <!-- PROJECT COMPARISON MODAL -->
      <div class="compare-modal-overlay" id="compare-modal" aria-hidden="true" role="dialog">
        <div class="compare-modal-box glass-card">
          <button class="close-overlay-btn" id="close-compare-modal-btn" aria-label="Close Comparison">
            <i class="fa-solid fa-times"></i>
          </button>
          <h2 class="section-title text-white monospace-font" style="margin-bottom: 2rem;"><span
              class="text-cyan">COMPARE_MATRIX:</span> DESIGN PROJECT GRID</h2>
          <div class="compare-table-wrapper" id="compare-table-container">
            <!-- Rendered dynamically -->
          </div>
        </div>
      </div>

      <!-- STICKY FLOATING QUICK CONTACT CTA -->
      <div class="floating-cta-container" id="floating-cta">
        <button class="floating-cta-trigger" id="floating-cta-btn">
          <i class="fa-solid fa-briefcase"></i>
          <span class="monospace-font">Recruiter Opportunities</span>
          <span class="pulse-dot-green"></span>
        </button>
        <div class="floating-cta-menu glass-card">
          <h4 class="text-white monospace-font"
            style="margin-bottom:0.75rem; font-size:0.75rem; border-bottom:0.5px solid rgba(56,189,248,0.2); padding-bottom:0.25rem;">
            CONNECT CHANNELS</h4>
          <div class="floating-cta-links monospace-font">
            <a href="tel:${p.phone.replace(/[\s-()]/g, '')}" class="floating-cta-link" id="floating-call-link"><i
                class="fa-solid fa-phone text-cyan"></i> CALL DESIGNER</a>
            <a href="mailto:${p.email}" class="floating-cta-link" id="floating-email-link"><i
                class="fa-solid fa-envelope text-cyan"></i> EMAIL INQUIRY</a>
            <a href="https://wa.me/${p.whatsapp}?text=Hi%20Yaswanth,%20viewed%20your%20portfolio." target="_blank" class="floating-cta-link" id="floating-whatsapp-link"><i
                class="fa-brands fa-whatsapp text-emerald-500"></i> WHATSAPP CONNECT</a>
            <a href="${p.linkedin}" target="_blank" class="floating-cta-link"
              id="floating-linkedin-link"><i class="fa-brands fa-linkedin-in text-cyan"></i> LINKEDIN PROFILE</a>
          </div>
        </div>
      </div>

      <!-- 8. PROJECT DETAIL ROUTER / PAGE OVERLAY -->
      <div class="project-detail-overlay" id="project-detail-modal" aria-hidden="true" role="dialog">
        <div class="detail-container-box glass-card">
          <button class="close-overlay-btn" id="close-modal-btn" aria-label="Close Project Detail">
            <i class="fa-solid fa-times"></i>
          </button>
          <div class="detail-modal-body" id="project-detail-body">
            <!-- Filled dynamically based on active project -->
          </div>
        </div>
      </div>

      <!-- GALLERY LIGHTBOX -->
      <div class="lightbox-overlay" id="gallery-lightbox" aria-hidden="true" role="dialog">
        <button class="close-lightbox-btn" id="close-lightbox-btn" aria-label="Close Preview">
          <i class="fa-solid fa-times"></i>
        </button>
        <div class="lightbox-content-box">
          <img src="" alt="" id="lightbox-img">
          <div class="lightbox-caption" id="lightbox-caption">Caption text</div>
        </div>
      </div>
    `;
  },
  init(data) {
    // Expose helpers globally
    window.comparedProjectIds = [];

    window.handleProjectCompareSelect = function(checkbox) {
      const id = checkbox.getAttribute('data-id');
      if (checkbox.checked) {
        if (!window.comparedProjectIds.includes(id)) window.comparedProjectIds.push(id);
      } else {
        window.comparedProjectIds = window.comparedProjectIds.filter(pid => pid !== id);
      }
      updateCompareTray();
    };

    window.viewComparedProject = function(id) {
      const compareModal = document.getElementById('compare-modal');
      if (compareModal) {
        compareModal.classList.remove('active');
        compareModal.setAttribute('aria-hidden', 'true');
      }
      window.openProjectDetail(id);
    };

    window.renderProjectDetail = function(proj) {
      const container = document.getElementById('project-detail-body');
      if (!container) return;

      const slides = proj.drawingsPreview || [proj.image];
      const cs = proj.caseStudy || {
        problem: proj.challenges || "No problem statement defined.",
        approach: proj.overview || "No approach details provided.",
        designProcess: proj.process || "No process details provided.",
        outcome: proj.description || "No outcome details provided."
      };

      const sheets = proj.sheets || {
        plans: "#",
        elevations: "#",
        sections: "#",
        report: "#",
        boq: "#"
      };

      const softHtml = proj.softwareUsed.map(s => `<span class="tech-tag-item">${s}</span>`).join('');

      const sheetOptions = slides.map((img, idx) => `
        <option value="${idx}">Sheet ${idx + 1}: ${idx === 0 ? 'Model Space Plan' : 'Section Layout D-' + (100 + idx)}</option>
      `).join('');

      container.innerHTML = `
        <div class="proj-detail-header">
          <span class="proj-detail-cat monospace-font">${proj.projectType.toUpperCase()} // ${proj.category}</span>
          <h1 class="proj-detail-title">${proj.title}</h1>
        </div>

        <div class="engineering-viewer glass-card" id="eng-drawing-viewer">
          <div class="viewer-toolbar monospace-font">
            <div class="toolbar-title"><i class="fa-solid fa-expand text-cyan"></i> VIEWER: ${proj.id.toUpperCase()}_REV02.DWG</div>
            <div class="toolbar-controls">
              <button class="viewer-btn" id="viewer-zoom-in" title="Zoom In"><i class="fa-solid fa-magnifying-glass-plus"></i></button>
              <button class="viewer-btn" id="viewer-zoom-out" title="Zoom Out"><i class="fa-solid fa-magnifying-glass-minus"></i></button>
              <button class="viewer-btn" id="viewer-zoom-reset" title="Reset Viewport"><i class="fa-solid fa-rotate-left"></i></button>
              <button class="viewer-btn" id="viewer-cad-mode" title="Toggle CAD Space (Invert)"><i class="fa-solid fa-circle-half-stroke"></i> CAD</button>
              <button class="viewer-btn" id="viewer-fullscreen" title="Toggle Fullscreen"><i class="fa-solid fa-expand"></i></button>
              <button class="viewer-btn" id="viewer-grid-toggle" title="Toggle Sheets Grid"><i class="fa-solid fa-table-cells"></i> Sheets</button>
            </div>
          </div>
          
          <div class="viewer-viewport-container" id="viewer-viewport-box">
            <div class="viewer-crosshairs"></div>
            <div class="viewer-coords monospace-font" id="viewer-coords-read">X: 0.00, Y: 0.00</div>
            
            <div class="viewer-canvas-wrapper" id="viewer-canvas-wrap">
              <img id="viewer-active-sheet" src="${slides[0]}" alt="${proj.title}" onerror="this.src='/assets/images/proj-placeholder.jpg'">
            </div>
            
            <div class="viewer-grid-overlay" id="viewer-grid-overlay">
              <div class="viewer-grid-header">
                <span class="monospace-font text-white">DRAWINGS SHEET INDEX</span>
                <button class="viewer-btn" id="viewer-grid-close"><i class="fa-solid fa-times"></i></button>
              </div>
              <div class="viewer-thumbnails">
                ${slides.map((img, idx) => `
                  <div class="viewer-thumb-card" data-idx="${idx}">
                    <img src="${img}" onerror="this.src='/assets/images/proj-placeholder.jpg'">
                    <span class="monospace-font">SHEET D-${101 + idx}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
          
          <div class="viewer-statusbar monospace-font">
            <button class="statusbar-nav" id="viewer-prev-sheet"><i class="fa-solid fa-chevron-left"></i> PREV</button>
            <div class="statusbar-sheet-select">
              <select id="viewer-sheet-select">
                ${sheetOptions}
              </select>
            </div>
            <button class="statusbar-nav" id="viewer-next-sheet">NEXT <i class="fa-solid fa-chevron-right"></i></button>
            <div class="statusbar-scale">SCALE: 1:${proj.projectType === 'Structural' ? '50' : '100'} // UNIT: MM</div>
          </div>
        </div>

        <div class="proj-detail-grid" style="margin-top: 3rem;">
          <div class="proj-detail-content">
            <div>
              <h2 class="proj-detail-section-title">Case Study: Problem Statement</h2>
              <p class="proj-detail-desc text-slate">${cs.problem}</p>
            </div>

            <div>
              <h2 class="proj-detail-section-title">Engineering Design Approach</h2>
              <p class="proj-detail-desc text-slate">${cs.approach}</p>
            </div>

            <div>
              <h2 class="proj-detail-section-title">Execution & Drafting Process</h2>
              <p class="proj-detail-desc text-slate">${cs.designProcess}</p>
            </div>

            <div>
              <h2 class="proj-detail-section-title">Design Deliverables & Outcome</h2>
              <p class="proj-detail-desc text-slate">${cs.outcome}</p>
            </div>

            <div class="downloadable-sheets-container">
              <h2 class="proj-detail-section-title">CAD Transmittal Sheets Index & Downloads</h2>
              <div class="sheets-table-wrapper monospace-font">
                <table class="sheets-table">
                  <thead>
                    <tr>
                      <th>SHEET NO.</th>
                      <th>DRAWING TITLE / DOCUMENT</th>
                      <th>FORMAT</th>
                      <th>DOWNLOAD LINK</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>D-101</td>
                      <td>Architectural Floor Plans & Section Detail Layouts</td>
                      <td>PDF Vector</td>
                      <td><a href="${sheets.plans}" download class="sheet-download-link"><i class="fa-solid fa-download"></i> Plan Sheets</a></td>
                    </tr>
                    <tr>
                      <td>D-102</td>
                      <td>Structural Concrete Columns & Beam Layout Drawings</td>
                      <td>PDF Detailing</td>
                      <td><a href="${sheets.elevations}" download class="sheet-download-link"><i class="fa-solid fa-download"></i> Structural Elevations</a></td>
                    </tr>
                    <tr>
                      <td>D-103</td>
                      <td>Staircase Detail Detailing Cross-Section Sheets</td>
                      <td>PDF Vector</td>
                      <td><a href="${sheets.sections}" download class="sheet-download-link"><i class="fa-solid fa-download"></i> Section Details</a></td>
                    </tr>
                    <tr>
                      <td>R-101</td>
                      <td>BIM Design & Coordination Structural Report</td>
                      <td>PDF Report</td>
                      <td><a href="${sheets.report}" download class="sheet-download-link"><i class="fa-solid fa-file-pdf"></i> Technical Report</a></td>
                    </tr>
                    <tr>
                      <td>B-101</td>
                      <td>Bar Bending Schedule & Bill of Quantities (BBS & BOQ)</td>
                      <td>MS Excel</td>
                      <td><a href="${sheets.boq}" download class="sheet-download-link"><i class="fa-solid fa-file-excel text-emerald-500"></i> Quantity Takeoffs</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            ${proj.modelPreview ? `
              <div>
                <h2 class="proj-detail-section-title">Interactive Revit 3D Model Showcase</h2>
                <div class="modal-3d-viewport" id="showcase-3d-viewport-box">
                  <div class="modal-3d-toolbar monospace-font">
                    <div class="toolbar-title"><i class="fa-solid fa-cube text-cyan"></i> 3D_SHOWCASE: ${proj.modelPreview.toUpperCase()}</div>
                    <div class="toolbar-controls">
                      <button class="viewer-btn" id="showcase-3d-rot-l" title="Rotate Left"><i class="fa-solid fa-rotate-left"></i></button>
                      <button class="viewer-btn" id="showcase-3d-rot-r" title="Rotate Right"><i class="fa-solid fa-rotate-right"></i></button>
                      <button class="viewer-btn" id="showcase-3d-zoom-in" title="Zoom In"><i class="fa-solid fa-plus"></i></button>
                      <button class="viewer-btn" id="showcase-3d-zoom-out" title="Zoom Out"><i class="fa-solid fa-minus"></i></button>
                      <button class="viewer-btn" id="showcase-3d-reset" title="Reset Viewport"><i class="fa-solid fa-home"></i></button>
                      <select id="showcase-3d-shade-mode" class="viewer-btn" style="border:none; border-radius:4px; padding:0 0.5rem; background:rgba(30,41,59,0.85); color:var(--accent);">
                        <option value="wireframe">Wireframe</option>
                        <option value="shaded">Solid Shaded</option>
                        <option value="xray">X-Ray Glass</option>
                      </select>
                      <button class="viewer-btn" id="showcase-3d-fullscreen" title="Toggle Fullscreen"><i class="fa-solid fa-expand"></i></button>
                    </div>
                  </div>
                  <div class="modal-3d-help monospace-font">SYSTEM: LOAD_SUCCESS // ROTATE: DRAG WITH MOUSE // ZOOM: SCROLL WHEEL</div>
                  <canvas id="modal-3d-canvas"></canvas>
                </div>
              </div>
            ` : ''}
          </div>

          <div class="proj-detail-sidebar">
            <div class="glass-card sidebar-details-card">
              <h3 class="text-white card-title" style="font-size: 1.1rem; margin-bottom: 1rem;"><i class="fa-solid fa-info-circle text-cyan"></i> Specifications</h3>
              
              <div class="sidebar-spec-row">
                <span class="spec-label">PROJECT TYPE:</span>
                <span class="spec-val text-white font-bold monospace-font" style="font-size: 0.8rem;">${proj.projectType.toUpperCase()}</span>
              </div>
              <div class="sidebar-spec-row">
                <span class="spec-label">BUILT-UP AREA:</span>
                <span class="spec-val monospace-font">${proj.builtUpArea}</span>
              </div>
              <div class="sidebar-spec-row">
                <span class="spec-label">FLOORS:</span>
                <span class="spec-val">${proj.floors}</span>
              </div>
              <div class="sidebar-spec-row">
                <span class="spec-label">DRAWINGS SHEET COUNT:</span>
                <span class="spec-val monospace-font">${proj.drawingsCount} Sheets</span>
              </div>
              <div class="sidebar-spec-row">
                <span class="spec-label">STATUS:</span>
                <span class="spec-val monospace-font" style="font-size: 0.8rem; color:#10B981;">${proj.status}</span>
              </div>
              <div class="sidebar-spec-row">
                <span class="spec-label">TIMELINE:</span>
                <span class="spec-val">${proj.duration}</span>
              </div>
              <div class="sidebar-spec-row">
                <span class="spec-label">COMPLEXITY:</span>
                <span class="spec-val monospace-font text-cyan">${proj.complexity.toUpperCase()}</span>
              </div>
              <div class="sidebar-spec-row">
                <span class="spec-label">SOFTWARE:</span>
                <div class="tech-tags-list">
                  ${softHtml}
                </div>
              </div>
            </div>
          </div>
        </div>
      `;

      initEngineeringViewer(slides);
      if (proj.modelPreview) {
        initShowcase3DCanvas(proj.modelPreview);
      }
    };

    function updateCompareTray() {
      const tray = document.getElementById('compare-tray');
      const countVal = document.getElementById('compare-count-val');
      if (!tray || !countVal) return;

      countVal.innerText = window.comparedProjectIds.length;
      if (window.comparedProjectIds.length > 0) {
        tray.classList.add('active');
      } else {
        tray.classList.remove('active');
      }
    }

    function setupLightbox() {
      const lightbox = document.getElementById('gallery-lightbox');
      const lightboxImg = document.getElementById('lightbox-img');
      const lightboxCap = document.getElementById('lightbox-caption');
      const closeBtn = document.getElementById('close-lightbox-btn');
      const galleryContainer = document.getElementById('gallery-container');

      if (!lightbox || !galleryContainer) return;

      galleryContainer.addEventListener('click', (e) => {
        const item = e.target.closest('.gallery-item');
        if (!item) return;

        const img = item.querySelector('img');
        const caption = item.querySelector('.gal-caption').innerText;

        lightboxImg.src = img.src;
        lightboxCap.innerText = caption;
        lightbox.classList.add('active');
        lightbox.setAttribute('aria-hidden', 'false');
      });

      const closeLightbox = () => {
        lightbox.classList.remove('active');
        lightbox.setAttribute('aria-hidden', 'true');
      };

      closeBtn.addEventListener('click', closeLightbox);
      lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
      });
    }

    function setupFloatingCTA() {
      const ctaBtn = document.getElementById('floating-cta-btn');
      const cta = document.getElementById('floating-cta');

      if (ctaBtn && cta) {
        ctaBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          cta.classList.toggle('active');
        });

        window.addEventListener('click', () => {
          cta.classList.remove('active');
        });
      }
    }

    function setupProjectCompare() {
      const clearBtn = document.getElementById('clear-compare-btn');
      const triggerBtn = document.getElementById('trigger-compare-btn');
      const closeBtn = document.getElementById('close-compare-modal-btn');
      const compareModal = document.getElementById('compare-modal');

      if (clearBtn) {
        clearBtn.addEventListener('click', () => {
          window.comparedProjectIds = [];
          document.querySelectorAll('.compare-checkbox').forEach(cb => cb.checked = false);
          updateCompareTray();
        });
      }

      if (triggerBtn) {
        triggerBtn.addEventListener('click', () => {
          if (window.comparedProjectIds.length < 2) {
            alert('Please select at least 2 projects to compare.');
            return;
          }
          renderCompareMatrix();
          if (compareModal) {
            compareModal.classList.add('active');
            compareModal.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
          }
        });
      }

      const closeCompare = () => {
        if (compareModal) {
          compareModal.classList.remove('active');
          compareModal.setAttribute('aria-hidden', 'true');
          document.body.style.overflow = '';
        }
      };

      if (closeBtn) closeBtn.addEventListener('click', closeCompare);
      if (compareModal) {
        compareModal.addEventListener('click', (e) => {
          if (e.target === compareModal) closeCompare();
        });
      }
    }

    function renderCompareMatrix() {
      const container = document.getElementById('compare-table-container');
      if (!container) return;

      const projects = window.profileData.projects.filter(p => window.comparedProjectIds.includes(p.id));

      let tableHtml = `
        <table class="compare-table monospace-font">
          <thead>
            <tr>
              <th>SPECIFICATION</th>
              ${projects.map(p => `<th>${p.title}</th>`).join('')}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>PROJECT TYPE</strong></td>
              ${projects.map(p => `<td class="text-cyan font-bold">${p.projectType.toUpperCase()}</td>`).join('')}
            </tr>
            <tr>
              <td><strong>BUILT-UP AREA</strong></td>
              ${projects.map(p => `<td>${p.builtUpArea}</td>`).join('')}
            </tr>
            <tr>
              <td><strong>FLOORS</strong></td>
              ${projects.map(p => `<td>${p.floors}</td>`).join('')}
            </tr>
            <tr>
              <td><strong>SOFTWARE</strong></td>
              ${projects.map(p => `<td>${p.softwareUsed.join(', ')}</td>`).join('')}
            </tr>
            <tr>
              <td><strong>COMPLEXITY</strong></td>
              ${projects.map(p => `<td class="text-cyan">${p.complexity.toUpperCase()}</td>`).join('')}
            </tr>
            <tr>
              <td><strong>TIMELINE / DURATION</strong></td>
              ${projects.map(p => `<td>${p.duration}</td>`).join('')}
            </tr>
            <tr>
              <td><strong>DRAWINGS COUNT</strong></td>
              ${projects.map(p => `<td>${p.drawingsCount} Sheets</td>`).join('')}
            </tr>
            <tr>
              <td><strong>STATUS</strong></td>
              ${projects.map(p => `<td style="color:#10B981;">${p.status}</td>`).join('')}
            </tr>
            <tr>
              <td><strong>ACTIONS</strong></td>
              ${projects.map(p => `
                <td>
                  <button class="btn btn-secondary w-full" style="padding: 0.35rem; font-size: 0.75rem;" onclick="viewComparedProject('${p.id}')">
                    <i class="fa-solid fa-eye"></i> View Detail
                  </button>
                </td>
              `).join('')}
            </tr>
          </tbody>
        </table>
      `;

      container.innerHTML = tableHtml;
    }

    function initEngineeringViewer(slides) {
      const activeImg = document.getElementById('viewer-active-sheet');
      const viewport = document.getElementById('viewer-viewport-box');
      const wrapper = document.getElementById('viewer-canvas-wrap');
      const coordDisplay = document.getElementById('viewer-coords-read');
      const select = document.getElementById('viewer-sheet-select');

      const zoomIn = document.getElementById('viewer-zoom-in');
      const zoomOut = document.getElementById('viewer-zoom-out');
      const zoomReset = document.getElementById('viewer-zoom-reset');
      const cadMode = document.getElementById('viewer-cad-mode');
      const fullscreen = document.getElementById('viewer-fullscreen');
      
      const gridToggle = document.getElementById('viewer-grid-toggle');
      const gridOverlay = document.getElementById('viewer-grid-overlay');
      const gridClose = document.getElementById('viewer-grid-close');

      const prevSheet = document.getElementById('viewer-prev-sheet');
      const nextSheet = document.getElementById('viewer-next-sheet');

      if (!activeImg || !wrapper || !viewport) return;

      let currentIdx = 0;
      let scale = 1.0;
      let translateX = 0;
      let translateY = 0;
      let isPanning = false;
      let startX = 0, startY = 0;

      const updateViewportTransform = () => {
        wrapper.style.transform = `scale(${scale}) translate(${translateX}px, ${translateY}px)`;
      };

      if (zoomIn) {
        zoomIn.addEventListener('click', () => {
          scale = Math.min(scale + 0.25, 4.0);
          updateViewportTransform();
        });
      }
      if (zoomOut) {
        zoomOut.addEventListener('click', () => {
          scale = Math.max(scale - 0.25, 0.5);
          updateViewportTransform();
        });
      }
      if (zoomReset) {
        zoomReset.addEventListener('click', () => {
          scale = 1.0;
          translateX = 0;
          translateY = 0;
          updateViewportTransform();
        });
      }

      wrapper.addEventListener('mousedown', (e) => {
        e.preventDefault();
        isPanning = true;
        startX = e.clientX - translateX;
        startY = e.clientY - translateY;
        wrapper.style.cursor = 'grabbing';
      });

      window.addEventListener('mousemove', (e) => {
        if (!isPanning) return;
        translateX = (e.clientX - startX) / scale;
        translateY = (e.clientY - startY) / scale;
        updateViewportTransform();
      });

      window.addEventListener('mouseup', () => {
        isPanning = false;
        if (wrapper) wrapper.style.cursor = 'grab';
      });

      viewport.addEventListener('mousemove', (e) => {
        if (!coordDisplay) return;
        const rect = viewport.getBoundingClientRect();
        const x = ((e.clientX - rect.left) * (100 / scale)).toFixed(2);
        const y = (((rect.bottom - e.clientY)) * (100 / scale)).toFixed(2);
        coordDisplay.innerText = `X: ${x}, Y: ${y}, Z: 0.00`;
      });

      if (cadMode) {
        cadMode.addEventListener('click', () => {
          wrapper.classList.toggle('cad-invert-mode');
          cadMode.classList.toggle('active');
        });
      }

      if (fullscreen) {
        fullscreen.addEventListener('click', () => {
          if (!document.fullscreenElement) {
            viewport.requestFullscreen().catch(err => {
              console.error(`Error attempting to enable full-screen: ${err.message}`);
            });
          } else {
            document.exitFullscreen();
          }
        });
      }

      const selectSheet = (idx) => {
        currentIdx = idx;
        activeImg.src = slides[idx];
        if (select) select.value = idx;
        
        if (idx === 0) {
          wrapper.classList.add('cad-invert-mode');
          if (cadMode) cadMode.classList.add('active');
        } else {
          wrapper.classList.remove('cad-invert-mode');
          if (cadMode) cadMode.classList.remove('active');
        }
        
        scale = 1.0;
        translateX = 0;
        translateY = 0;
        updateViewportTransform();
      };

      if (select) {
        select.addEventListener('change', (e) => {
          selectSheet(parseInt(e.target.value));
        });
      }

      if (prevSheet) {
        prevSheet.addEventListener('click', () => {
          let prevIdx = currentIdx - 1;
          if (prevIdx < 0) prevIdx = slides.length - 1;
          selectSheet(prevIdx);
        });
      }

      if (nextSheet) {
        nextSheet.addEventListener('click', () => {
          let nextIdx = currentIdx + 1;
          if (nextIdx >= slides.length) nextIdx = 0;
          selectSheet(nextIdx);
        });
      }

      if (gridToggle && gridOverlay) {
        gridToggle.addEventListener('click', () => {
          gridOverlay.classList.toggle('active');
        });
      }
      if (gridClose && gridOverlay) {
        gridClose.addEventListener('click', () => {
          gridOverlay.classList.remove('active');
        });
      }

      document.querySelectorAll('.viewer-thumb-card').forEach(card => {
        card.addEventListener('click', () => {
          const idx = parseInt(card.getAttribute('data-idx'));
          selectSheet(idx);
          if (gridOverlay) gridOverlay.classList.remove('active');
        });
      });

      selectSheet(0);
    }

    function initShowcase3DCanvas(type) {
      const canvas = document.getElementById('modal-3d-canvas');
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      
      const rotL = document.getElementById('showcase-3d-rot-l');
      const rotR = document.getElementById('showcase-3d-rot-r');
      const zIn = document.getElementById('showcase-3d-zoom-in');
      const zOut = document.getElementById('showcase-3d-zoom-out');
      const resetBtn = document.getElementById('showcase-3d-reset');
      const shadeMode = document.getElementById('showcase-3d-shade-mode');
      const fScreen = document.getElementById('showcase-3d-fullscreen');
      const viewportBox = document.getElementById('showcase-3d-viewport-box');

      const resizeCanvas = () => {
        if (canvas.parentElement) {
          canvas.width = canvas.parentElement.clientWidth || 600;
          canvas.height = canvas.parentElement.clientHeight || 400;
          draw();
        }
      };

      const resizeObserver = new ResizeObserver((entries) => {
        for (let entry of entries) {
          const { width, height } = entry.contentRect;
          if (width > 0 && height > 0) {
            canvas.width = width;
            canvas.height = height;
            draw();
          }
        }
      });
      if (canvas.parentElement) {
        resizeObserver.observe(canvas.parentElement);
      }

      let vertices = [];
      let edges = [];
      let faces = [];

      if (type === 'interactive-3d-villa') {
        vertices = [
          {x: -1.2, y: -0.8, z: -0.8}, {x: 1.2, y: -0.8, z: -0.8}, {x: 1.2, y: -0.8, z: 0.8}, {x: -1.2, y: -0.8, z: 0.8},
          {x: -1.2, y: 0.4, z: -0.8}, {x: 1.2, y: 0.4, z: -0.8}, {x: 1.2, y: 0.4, z: 0.8}, {x: -1.2, y: 0.4, z: 0.8},
          {x: -0.4, y: 0.4, z: -0.8}, {x: 1.2, y: 0.4, z: -0.8}, {x: 1.2, y: 0.4, z: 0.4}, {x: -0.4, y: 0.4, z: 0.4},
          {x: -0.4, y: 1.2, z: -0.8}, {x: 1.2, y: 1.2, z: -0.8}, {x: 1.2, y: 1.2, z: 0.4}, {x: -0.4, y: 1.2, z: 0.4}
        ];
        edges = [
          [0,1], [1,2], [2,3], [3,0],
          [0,4], [1,5], [2,6], [3,7],
          [4,5], [5,6], [6,7], [7,4],
          [8,9], [9,10], [10,11], [11,8],
          [8,12], [9,13], [10,14], [11,15],
          [12,13], [13,14], [14,15], [15,12]
        ];
        faces = [
          [0,1,5,4], [1,2,6,5], [2,3,7,6], [3,0,4,7],
          [12,13,14,15], [8,9,13,12], [9,10,14,13], [10,11,15,14]
        ];
      } else {
        vertices = [
          {x: -2.0, y: -0.4, z: -0.4}, {x: -1.0, y: -0.4, z: -0.4}, {x: 0, y: -0.4, z: -0.4}, {x: 1.0, y: -0.4, z: -0.4}, {x: 2.0, y: -0.4, z: -0.4},
          {x: -1.5, y: 0.4, z: -0.4}, {x: -0.5, y: 0.4, z: -0.4}, {x: 0.5, y: 0.4, z: -0.4}, {x: 1.5, y: 0.4, z: -0.4},
          {x: -2.0, y: -0.4, z: 0.4}, {x: -1.0, y: -0.4, z: 0.4}, {x: 0, y: -0.4, z: 0.4}, {x: 1.0, y: -0.4, z: 0.4}, {x: 2.0, y: -0.4, z: 0.4},
          {x: -1.5, y: 0.4, z: 0.4}, {x: -0.5, y: 0.4, z: 0.4}, {x: 0.5, y: 0.4, z: 0.4}, {x: 1.5, y: 0.4, z: 0.4}
        ];
        edges = [
          [0,1], [1,2], [2,3], [3,4], [9,10], [10,11], [11,12], [12,13],
          [5,6], [6,7], [7,8], [14,15], [15,16], [16,17],
          [0,5], [1,5], [1,6], [2,6], [2,7], [3,7], [3,8], [4,8],
          [9,14], [10,14], [10,15], [11,15], [11,16], [12,16], [12,17], [13,17],
          [0,9], [1,10], [2,11], [3,12], [4,13], [5,14], [6,15], [7,16], [8,17]
        ];
        faces = [
          [0,1,10,9], [1,2,11,10], [2,3,12,11], [3,4,13,12],
          [5,6,15,14], [6,7,16,15], [7,8,17,16]
        ];
      }

      let angleX = 0.4;
      let angleY = 0.5;
      let zoom = 1.0;
      let shading = 'wireframe';
      let isDragging = false;
      let prevMouseX = 0;
      let prevMouseY = 0;

      const handleStart = (clientX, clientY) => {
        isDragging = true;
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
        draw();
      };

      canvas.addEventListener('mousedown', (e) => handleStart(e.clientX, e.clientY));
      window.addEventListener('mousemove', (e) => handleMove(e.clientX, e.clientY));
      window.addEventListener('mouseup', () => { isDragging = false; });

      canvas.addEventListener('touchstart', (e) => handleStart(e.touches[0].clientX, e.touches[0].clientY));
      window.addEventListener('touchmove', (e) => handleMove(e.touches[0].clientX, e.touches[0].clientY));
      window.addEventListener('touchend', () => { isDragging = false; });

      if (rotL) rotL.addEventListener('click', () => { angleY -= 0.15; draw(); });
      if (rotR) rotR.addEventListener('click', () => { angleY += 0.15; draw(); });
      if (zIn) zIn.addEventListener('click', () => { zoom = Math.min(zoom + 0.15, 2.5); draw(); });
      if (zOut) zOut.addEventListener('click', () => { zoom = Math.max(zoom - 0.15, 0.4); draw(); });
      if (resetBtn) resetBtn.addEventListener('click', () => { angleX = 0.4; angleY = 0.5; zoom = 1.0; draw(); });
      if (shadeMode) {
        shadeMode.addEventListener('change', (e) => {
          shading = e.target.value;
          draw();
        });
      }
      if (fScreen) {
        fScreen.addEventListener('click', () => {
          if (!document.fullscreenElement) {
            viewportBox.requestFullscreen().then(resizeCanvas).catch(err => {
              console.error(err);
            });
          } else {
            document.exitFullscreen().then(resizeCanvas);
          }
        });
      }

      function project(vertex, width, height) {
        const scale = Math.min(width, height) * 0.22 * zoom;
        let x = vertex.x * Math.cos(angleY) - vertex.z * Math.sin(angleY);
        let z = vertex.x * Math.sin(angleY) + vertex.z * Math.cos(angleY);
        let y = vertex.y;
        const tempY = y * Math.cos(angleX) - z * Math.sin(angleX);
        z = y * Math.sin(angleX) + z * Math.cos(angleX);
        y = tempY;
        
        const distance = 3.5;
        const perspective = distance / (distance - z);
        
        return {
          x: (x * perspective) * scale + width / 2,
          y: -(y * perspective) * scale + height / 2,
          z: z
        };
      }

      function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.02)';
        ctx.lineWidth = 0.5;
        for (let i = -10; i <= 10; i++) {
          ctx.beginPath();
          ctx.moveTo(0, canvas.height / 2 + i * 20);
          ctx.lineTo(canvas.width, canvas.height / 2 + i * 20);
          ctx.stroke();

          ctx.beginPath();
          ctx.moveTo(canvas.width / 2 + i * 20, 0);
          ctx.lineTo(canvas.width / 2 + i * 20, canvas.height);
          ctx.stroke();
        }

        const projected = vertices.map(v => project(v, canvas.width, canvas.height));

        if (shading === 'shaded' || shading === 'xray') {
          ctx.fillStyle = shading === 'shaded' ? 'rgba(30, 41, 59, 0.85)' : 'rgba(56, 189, 248, 0.15)';
          ctx.strokeStyle = '#38BDF8';
          ctx.lineWidth = 1;

          faces.forEach(face => {
            ctx.beginPath();
            ctx.moveTo(projected[face[0]].x, projected[face[0]].y);
            for (let i = 1; i < face.length; i++) {
              ctx.lineTo(projected[face[i]].x, projected[face[i]].y);
            }
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
          });
        }

        ctx.strokeStyle = '#2563EB';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        edges.forEach(edge => {
          const p1 = projected[edge[0]];
          const p2 = projected[edge[1]];
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
        });
        ctx.stroke();

        ctx.fillStyle = '#38BDF8';
        projected.forEach(p => {
          ctx.beginPath();
          ctx.arc(p.x, p.y, 3, 0, 2 * Math.PI);
          ctx.fill();
        });
      }

      draw();
    }
  }
};
