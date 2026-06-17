export default {
  render(data) {
    const b = data.bim;
    const bimCards = [
      { title: "3D Modeling", text: b.modeling, icon: "fa-cubes" },
      { title: "Clash Detection", text: b.clashDetection, icon: "fa-compress" },
      { title: "Construction Documentation", text: b.documentation, icon: "fa-file-lines" },
      { title: "Quantity Takeoff (QTO)", text: b.quantityTakeoff, icon: "fa-calculator" }
    ];

    const cardsHtml = bimCards.map(c => `
      <div class="glass-card bim-wf-card">
        <div class="bim-wf-icon"><i class="fa-solid ${c.icon}"></i></div>
        <h3 class="bim-wf-title">${c.title}</h3>
        <p class="bim-wf-text">${c.text}</p>
      </div>
    `).join('');

    return `
      <section id="bim" class="bim-section section-padding border-t">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title"><span class="section-num monospace-font">04 //</span> BIM COORDINATION WORKFLOW</h2>
            <div class="header-line"></div>
          </div>
          <div class="bim-intro glass-card">
            <div class="bim-intro-content">
              <h3 class="text-white">What is Building Information Modeling (BIM)?</h3>
              <p class="text-slate" id="bim-desc">${b.knowledge}</p>
            </div>
            <div class="bim-visual">
              <!-- Simulated isometric drafting -->
              <svg viewBox="0 0 200 200" class="bim-svg">
                <defs>
                  <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#38BDF8" stop-opacity="0.8" />
                    <stop offset="100%" stop-color="#2563EB" stop-opacity="0.2" />
                  </linearGradient>
                </defs>
                <g class="iso-grid">
                  <!-- Iso grid lines -->
                  <path d="M 0 100 L 100 50 L 200 100 L 100 150 Z" fill="none" stroke="#1E293B" stroke-width="1" />
                  <path d="M 0 130 L 100 80 L 200 130" fill="none" stroke="#1E293B" stroke-width="1" />
                  <path d="M 0 70 L 100 20 L 200 70" fill="none" stroke="#1E293B" stroke-width="1" />

                  <!-- Floor slabs -->
                  <polygon points="30,100 100,65 170,100 100,135" fill="url(#cyanGrad)" stroke="#38BDF8" stroke-width="1"
                    class="floorslab slab-1" />
                  <polygon points="30,80 100,45 170,80 100,115" fill="none" stroke="#38BDF8" stroke-width="0.75"
                    stroke-dasharray="3 3" class="floorslab slab-2" />
                  <polygon points="30,60 100,25 170,60 100,95" fill="none" stroke="#38BDF8" stroke-width="0.75"
                    class="floorslab slab-3" />

                  <!-- Structural Columns -->
                  <line x1="100" y1="135" x2="100" y2="95" stroke="#38BDF8" stroke-width="2" />
                  <line x1="65" y1="117" x2="65" y2="77" stroke="#38BDF8" stroke-width="1.5" />
                  <line x1="135" y1="117" x2="135" y2="77" stroke="#38BDF8" stroke-width="1.5" />
                  <line x1="100" y1="95" x2="100" y2="55" stroke="#2563EB" stroke-width="2" />

                  <!-- Coordinate markers -->
                  <circle cx="100" cy="135" r="3" fill="#EF4444" class="pulse-dot" />
                  <circle cx="65" cy="77" r="2" fill="#38BDF8" />
                  <circle cx="135" cy="77" r="2" fill="#38BDF8" />
                </g>
              </svg>
            </div>
          </div>

          <div class="bim-cards-grid" id="bim-cards-container">
            ${cardsHtml}
          </div>

          <!-- INTERACTIVE LOD SPECTRUM -->
          <div class="lod-spectrum-box glass-card" style="margin-top: 3rem;">
            <h3 class="skills-subheading text-white" style="margin-bottom: 1.5rem;"><i
                class="fa-solid fa-signal text-cyan"></i> BIM LOD (Level of Development) Matrix</h3>
            <p class="text-slate" style="font-size: 0.85rem; margin-bottom: 2.5rem;">Click each LOD stage below to examine
              model element detail specifications and coordination tolerances.</p>

            <div class="lod-tabs-nav monospace-font">
              <button class="lod-tab-btn active" data-lod="100">LOD 100</button>
              <button class="lod-tab-btn" data-lod="200">LOD 200</button>
              <button class="lod-tab-btn" data-lod="300">LOD 300</button>
              <button class="lod-tab-btn" data-lod="400">LOD 400</button>
              <button class="lod-tab-btn" data-lod="500">LOD 500</button>
            </div>

            <div class="lod-panes">
              <div class="lod-pane active" id="lod-pane-100">
                <h4 class="text-white font-bold" style="margin-bottom: 0.5rem;">LOD 100: Conceptual Design <span
                    class="text-cyan monospace-font">// Concept</span></h4>
                <p class="text-slate">Model elements are represented as overall masses with approximate size, shape, and
                  location. Ideal for volume studies, space plans, and spatial orientations.</p>
                <ul class="lod-spec-list text-xs monospace-font"
                  style="margin-top: 1rem; list-style: none; display: flex; flex-direction: column; gap: 0.25rem;">
                  <li>• Graphic Representation: Conceptual 3D blocks</li>
                  <li>• Level of Accuracy: &plusmn;1.5 Meters</li>
                  <li>• Primary Purpose: Feasibility studies & shadow analysis</li>
                </ul>
              </div>
              <div class="lod-pane" id="lod-pane-200">
                <h4 class="text-white font-bold" style="margin-bottom: 0.5rem;">LOD 200: Schematic Design <span
                    class="text-cyan monospace-font">// Approximate</span></h4>
                <p class="text-slate">Model elements are represented as general assemblies with approximate quantities,
                  sizing, shape, location, and orientation. Useful for system analysis and generic planning.</p>
                <ul class="lod-spec-list text-xs monospace-font"
                  style="margin-top: 1rem; list-style: none; display: flex; flex-direction: column; gap: 0.25rem;">
                  <li>• Graphic Representation: Structural grid layout and generic slabs</li>
                  <li>• Level of Accuracy: &plusmn;200 Millimeters</li>
                  <li>• Primary Purpose: Spatial coordination & system allocations</li>
                </ul>
              </div>
              <div class="lod-pane" id="lod-pane-300">
                <h4 class="text-white font-bold" style="margin-bottom: 0.5rem;">LOD 300: Construction Documentation <span
                    class="text-cyan monospace-font">// Precise Geometry</span></h4>
                <p class="text-slate">Model elements are graphically represented as specific systems, assemblies, or
                  components with precise quantities, dimensions, coordinates, and orientations. Sheets can be extracted
                  directly.</p>
                <ul class="lod-spec-list text-xs monospace-font"
                  style="margin-top: 1rem; list-style: none; display: flex; flex-direction: column; gap: 0.25rem;">
                  <li>• Graphic Representation: Accurate wall assemblies, windows, and main structural details</li>
                  <li>• Level of Accuracy: &plusmn;10 Millimeters</li>
                  <li>• Primary Purpose: Permit drawings extraction & material scheduling</li>
                </ul>
              </div>
              <div class="lod-pane" id="lod-pane-400">
                <h4 class="text-white font-bold" style="margin-bottom: 0.5rem;">LOD 400: Fabrication & Assembly <span
                    class="text-cyan monospace-font">// Detailing</span></h4>
                <p class="text-slate">Model elements are detailed with complete fabrication, assembly, and installation
                  details (e.g., specific rebar bend radius, structural steel connections, MEP fittings clearances).</p>
                <ul class="lod-spec-list text-xs monospace-font"
                  style="margin-top: 1rem; list-style: none; display: flex; flex-direction: column; gap: 0.25rem;">
                  <li>• Graphic Representation: Bar reinforcement binds, bolts, and MEP layout routing</li>
                  <li>• Level of Accuracy: &plusmn;2 Millimeters</li>
                  <li>• Primary Purpose: Fabrication, shop drawing approval & procurement</li>
                </ul>
              </div>
              <div class="lod-pane" id="lod-pane-500">
                <h4 class="text-white font-bold" style="margin-bottom: 0.5rem;">LOD 500: As-Built Operations <span
                    class="text-cyan monospace-font">// Lifecycle</span></h4>
                <p class="text-slate">Model elements are verified on-site for coordinates, orientation, dimensions, and
                  operational characteristics, functioning as a digital twin for facility management.</p>
                <ul class="lod-spec-list text-xs monospace-font"
                  style="margin-top: 1rem; list-style: none; display: flex; flex-direction: column; gap: 0.25rem;">
                  <li>• Graphic Representation: Site-verified spatial parameters & asset attributes</li>
                  <li>• Level of Accuracy: Survey-grade verification</li>
                  <li>• Primary Purpose: Operations, maintenance, and asset management</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  },
  init(data) {
    const tabs = document.querySelectorAll('.lod-tab-btn');
    const panes = document.querySelectorAll('.lod-pane');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        panes.forEach(p => p.classList.remove('active'));
        tab.classList.add('active');
        const lod = tab.getAttribute('data-lod');
        document.getElementById(`lod-pane-${lod}`).classList.add('active');
      });
    });
  }
};
