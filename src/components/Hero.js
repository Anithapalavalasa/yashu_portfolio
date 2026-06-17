import * as THREE from 'three';

export default {
  render(data) {
    const p = data.personal;
    return `
      <section id="hero" class="hero-section">
        <div class="container hero-container grid-2">
          <div class="hero-content">
            <img id="hero-profile-pic" class="hero-avatar-image" src="${p.profilePhoto || '/assets/images/profile.jpg'}" onerror="this.src='/assets/images/profile.jpg'">
            <h1 class="hero-title">
              <span class="sub-title">CIVIL CAD & BIM</span>
              <span class="main-name text-white" id="hero-name">${p.fullName}</span>
            </h1>
            <p class="hero-lead text-cyan monospace-font" id="hero-title-text">${p.title}</p>
            <div class="hero-info-grid monospace-font">
              <div class="info-item"><i class="fa-solid fa-location-dot"></i> <span id="hero-loc">${p.location}</span></div>
              <div class="info-item"><i class="fa-solid fa-envelope"></i> <span id="hero-email">${p.email}</span></div>
              <div class="info-item"><i class="fa-solid fa-phone"></i> <span id="hero-phone">${p.phone}</span></div>
            </div>
            <div class="hero-actions">
              <a href="${p.resumeUrl || '#resume'}" id="hero-resume-btn" download class="btn btn-primary"><i class="fa-solid fa-file-pdf"></i> Download Resume</a>
              <a href="#projects" class="btn btn-secondary"><i class="fa-solid fa-compass"></i> View Projects</a>
              <a href="#contact" class="btn btn-outline"><i class="fa-solid fa-paper-plane"></i> Hire Me</a>
            </div>
          </div>
          <div class="hero-visual">
            <div class="blueprint-canvas-container">
              <!-- Canvas to render 3D rotating structural wireframe -->
              <canvas id="hero-blueprint-canvas"></canvas>
              <div class="compass-rose">
                <svg width="60" height="60" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" stroke="#38BDF8" stroke-width="1" fill="none" stroke-dasharray="3 3" />
                  <line x1="50" y1="5" x2="50" y2="95" stroke="#38BDF8" stroke-width="0.5" />
                  <line x1="5" y1="50" x2="95" y2="50" stroke="#38BDF8" stroke-width="0.5" />
                  <polygon points="50,15 45,50 50,55" fill="#2563EB" />
                  <polygon points="50,15 55,50 50,55" fill="#38BDF8" />
                  <polygon points="50,85 45,50 50,55" fill="#0F172A" />
                  <polygon points="50,85 55,50 50,55" fill="#1E293B" />
                  <text x="47" y="14" fill="#38BDF8" font-size="10" font-family="monospace">N</text>
                </svg>
              </div>
              <div class="canvas-controls">
                <span class="control-label monospace-font">MODEL: ISO_WIRE_01</span>
                <button class="canvas-btn" id="canvas-rotate-toggle" title="Toggle Auto-Rotation"><i
                    class="fa-solid fa-sync fa-spin"></i></button>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  },
  init(data) {
    // A. MOUSE CROSSHAIR INTERACTION
    const crosshair = document.getElementById('cad-crosshair');
    const hero = document.getElementById('hero');
    
    if (crosshair && hero) {
      const showCrosshair = () => { crosshair.style.display = 'block'; };
      const hideCrosshair = () => { crosshair.style.display = 'none'; };

      hero.addEventListener('mouseenter', showCrosshair);
      hero.addEventListener('mouseleave', hideCrosshair);
      
      window.addEventListener('mousemove', (e) => {
        crosshair.style.left = `${e.clientX}px`;
        crosshair.style.top = `${e.clientY}px`;
        
        const rect = hero.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width * 100).toFixed(2);
        const y = (((rect.bottom - e.clientY) / rect.height * 100)).toFixed(2);
        
        const coordDisplay = document.getElementById('crosshair-coords');
        if (coordDisplay) coordDisplay.innerText = `X: ${x}, Y: ${y}`;
      });
    }

    // B. 3D ROTATING WIREFRAME BLUEPRINT (CANVAS ENGINE)
    const container = document.querySelector('.blueprint-canvas-container');
    const canvas = document.getElementById('hero-blueprint-canvas');
    if (!container || !canvas) return;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x020617, 0.1);

    let width = container.clientWidth || 450;
    let height = container.clientHeight || 450;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 1.2, 4.8);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      alpha: true
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;

    const ambientLight = new THREE.AmbientLight(0x0d1c33, 2.0);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 4.0);
    dirLight.position.set(6, 12, 5);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    scene.add(dirLight);

    const dirLightFill = new THREE.DirectionalLight(0x1e3a8a, 2.0);
    dirLightFill.position.set(-6, 2, -5);
    scene.add(dirLightFill);

    const baseLight = new THREE.PointLight(0x0ea5e9, 15, 12);
    baseLight.position.set(0, -1.8, 0);
    scene.add(baseLight);

    const topLight = new THREE.PointLight(0xd946ef, 12, 10);
    topLight.position.set(0, 2.2, 0);
    scene.add(topLight);

    const towerGroup = new THREE.Group();
    towerGroup.scale.set(1.28, 1.28, 1.28);
    scene.add(towerGroup);

    const levels = 10;
    const heightBetweenLevels = 0.44;
    const baseRadius = 1.2;
    const twistAngle = 0.12;
    const segments = 6;

    const floorMaterials = new THREE.MeshStandardMaterial({
      color: 0x0ea5e9,
      emissive: 0x0284c7,
      emissiveIntensity: 0.45,
      metalness: 0.85,
      roughness: 0.15,
      transparent: true,
      opacity: 0.65,
      side: THREE.DoubleSide
    });

    const steelMaterial = new THREE.MeshStandardMaterial({
      color: 0x64748b,
      metalness: 0.95,
      roughness: 0.1
    });

    const floors = [];

    function createBeam(p1, p2, radius, material) {
      const distance = p1.distanceTo(p2);
      const geo = new THREE.CylinderGeometry(radius, radius, distance, 6);
      const mesh = new THREE.Mesh(geo, material);
      mesh.position.copy(p1).add(p2).multiplyScalar(0.5);
      mesh.lookAt(p2);
      mesh.rotateX(Math.PI / 2);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      return mesh;
    }

    for (let i = 0; i < levels; i++) {
      const y = -1.8 + i * heightBetweenLevels;
      const factor = 1 - (i * 0.045);
      const radius = baseRadius * factor;
      const angleOffset = i * twistAngle;

      const floorGeo = new THREE.CylinderGeometry(radius, radius, 0.035, segments, 1);
      const floorMesh = new THREE.Mesh(floorGeo, floorMaterials);
      floorMesh.position.set(0, y, 0);
      floorMesh.rotation.y = angleOffset;
      floorMesh.castShadow = true;
      floorMesh.receiveShadow = true;
      towerGroup.add(floorMesh);

      const floorVertices = [];
      for (let j = 0; j < segments; j++) {
        const angle = (j / segments) * Math.PI * 2 + angleOffset;
        floorVertices.push(new THREE.Vector3(
          Math.cos(angle) * radius,
          y,
          Math.sin(angle) * radius
        ));
      }
      floors.push({ y, radius, vertices: floorVertices });
    }

    const coreColGeo = new THREE.CylinderGeometry(0.12, 0.16, levels * heightBetweenLevels, 12);
    const coreColMesh = new THREE.Mesh(coreColGeo, steelMaterial);
    coreColMesh.position.set(0, -1.8 + (levels * heightBetweenLevels) / 2, 0);
    coreColMesh.castShadow = true;
    coreColMesh.receiveShadow = true;
    towerGroup.add(coreColMesh);

    const coreGeo = new THREE.CylinderGeometry(0.15, 0.19, levels * heightBetweenLevels, 8, 1, true);
    const coreWireframe = new THREE.WireframeGeometry(coreGeo);
    const coreLine = new THREE.LineSegments(coreWireframe, new THREE.LineBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.55
    }));
    coreLine.position.copy(coreColMesh.position);
    towerGroup.add(coreLine);

    const basePadGeo = new THREE.CylinderGeometry(1.35, 1.45, 0.15, 6);
    const basePadMesh = new THREE.Mesh(basePadGeo, steelMaterial);
    basePadMesh.position.set(0, -1.9, 0);
    basePadMesh.receiveShadow = true;
    towerGroup.add(basePadMesh);

    const nodeMaterial = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x0284c7,
      emissiveIntensity: 0.8,
      metalness: 0.9,
      roughness: 0.1
    });
    
    for (let i = 0; i < levels; i++) {
      const verts = floors[i].vertices;
      for (let j = 0; j < segments; j++) {
        const nodeGeo = new THREE.SphereGeometry(0.032, 8, 8);
        const nodeMesh = new THREE.Mesh(nodeGeo, nodeMaterial);
        nodeMesh.position.copy(verts[j]);
        towerGroup.add(nodeMesh);
      }
    }

    const helixMaterial1 = new THREE.MeshStandardMaterial({
      color: 0xd946ef,
      emissive: 0x701a75,
      emissiveIntensity: 0.6,
      metalness: 0.9,
      roughness: 0.1
    });
    
    const helixMaterial2 = new THREE.MeshStandardMaterial({
      color: 0x0ea5e9,
      emissive: 0x0369a1,
      emissiveIntensity: 0.6,
      metalness: 0.9,
      roughness: 0.1
    });

    for (let i = 0; i < levels - 1; i++) {
      const v1_1 = floors[i].vertices[i % segments];
      const v1_2 = floors[i+1].vertices[(i + 1) % segments];
      towerGroup.add(createBeam(v1_1, v1_2, 0.022, helixMaterial1));

      const v2_1 = floors[i].vertices[(i + Math.floor(segments / 2)) % segments];
      const v2_2 = floors[i+1].vertices[(i + 1 + Math.floor(segments / 2)) % segments];
      towerGroup.add(createBeam(v2_1, v2_2, 0.022, helixMaterial2));
    }

    for (let i = 0; i < levels - 1; i++) {
      const f1 = floors[i].vertices;
      const f2 = floors[i+1].vertices;

      for (let j = 0; j < segments; j++) {
        const nextJ = (j + 1) % segments;
        towerGroup.add(createBeam(f1[j], f2[j], 0.018, steelMaterial));
        towerGroup.add(createBeam(f1[j], f2[nextJ], 0.008, steelMaterial));
        towerGroup.add(createBeam(f1[nextJ], f2[j], 0.008, steelMaterial));
        towerGroup.add(createBeam(f1[j], f1[nextJ], 0.011, steelMaterial));
      }
    }

    const topFloor = floors[levels - 1].vertices;
    for (let j = 0; j < segments; j++) {
      const nextJ = (j + 1) % segments;
      towerGroup.add(createBeam(topFloor[j], topFloor[nextJ], 0.011, steelMaterial));
    }

    const gridGroup = new THREE.Group();
    scene.add(gridGroup);

    const ringMaterial = new THREE.LineBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.15
    });

    for (let r = 0; r <= 3.5; r += 0.5) {
      if (r === 0) continue;
      const ringGeo = new THREE.RingGeometry(r - 0.004, r + 0.004, 64);
      const ring = new THREE.Line(ringGeo, ringMaterial);
      ring.rotation.x = Math.PI / 2;
      ring.position.y = -1.82;
      gridGroup.add(ring);
    }

    const radialLines = 12;
    const gridLinesGeo = new THREE.BufferGeometry();
    const gridLinesVerts = [];
    for (let i = 0; i < radialLines; i++) {
      const angle = (i / radialLines) * Math.PI * 2;
      gridLinesVerts.push(0, -1.82, 0);
      gridLinesVerts.push(Math.cos(angle) * 3.5, -1.82, Math.sin(angle) * 3.5);
    }
    gridLinesGeo.setAttribute('position', new THREE.Float32BufferAttribute(gridLinesVerts, 3));
    const gridLines = new THREE.LineSegments(gridLinesGeo, ringMaterial);
    gridGroup.add(gridLines);

    const particleCount = 75;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = [];

    for (let i = 0; i < particleCount; i++) {
      const radius = 0.8 + Math.random() * 2.8;
      const angle = Math.random() * Math.PI * 2;
      const y = -1.8 + Math.random() * 4.0;
      
      particlePositions.push(
        Math.cos(angle) * radius,
        y,
        Math.sin(angle) * radius
      );
    }

    particleGeo.setAttribute('position', new THREE.Float32BufferAttribute(particlePositions, 3));
    
    const createParticleTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 16;
      canvas.height = 16;
      const ctx = canvas.getContext('2d');
      const grad = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
      grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
      grad.addColorStop(0.25, 'rgba(56, 189, 248, 1)');
      grad.addColorStop(0.6, 'rgba(37, 99, 235, 0.3)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 16, 16);
      return new THREE.CanvasTexture(canvas);
    };

    const particleMat = new THREE.PointsMaterial({
      size: 0.14,
      map: createParticleTexture(),
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    let mouseX = 0, mouseY = 0;
    let targetX = 0, targetY = 0;
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let rotationSpeed = 0.0025;
    let angleX = 0.45;
    let angleY = 0.8;

    const viewCube = document.getElementById('view-cube');

    const handleStart = (clientX, clientY) => {
      isDragging = true;
      prevMouseX = clientX;
      prevMouseY = clientY;
    };

    const handleMove = (clientX, clientY) => {
      if (isDragging) {
        const deltaX = clientX - prevMouseX;
        const deltaY = clientY - prevMouseY;
        angleY += deltaX * 0.007;
        angleX = Math.max(0.1, Math.min(1.2, angleX + deltaY * 0.007));
        prevMouseX = clientX;
        prevMouseY = clientY;
      } else {
        const rect = container.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;
        mouseX = Math.max(-1.2, Math.min(1.2, (x / rect.width) * 2 - 1));
        mouseY = Math.max(-1.2, Math.min(1.2, -(y / rect.height) * 2 + 1));
      }
    };

    container.addEventListener('mousedown', (e) => handleStart(e.clientX, e.clientY));
    window.addEventListener('mousemove', (e) => handleMove(e.clientX, e.clientY));
    window.addEventListener('mouseup', () => { isDragging = false; });

    container.addEventListener('touchstart', (e) => handleStart(e.touches[0].clientX, e.touches[0].clientY), { passive: true });
    window.addEventListener('touchmove', (e) => handleMove(e.touches[0].clientX, e.touches[0].clientY), { passive: true });
    window.addEventListener('touchend', () => { isDragging = false; });

    const rotToggle = document.getElementById('canvas-rotate-toggle');
    if (rotToggle) {
      rotToggle.addEventListener('click', () => {
        if (rotationSpeed > 0) {
          rotationSpeed = 0;
          rotToggle.querySelector('i').className = 'fa-solid fa-play';
        } else {
          rotationSpeed = 0.0025;
          rotToggle.querySelector('i').className = 'fa-solid fa-sync fa-spin';
        }
      });
    }

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width, height } = entry.contentRect;
        if (width > 0 && height > 0) {
          camera.aspect = width / height;
          camera.updateProjectionMatrix();
          renderer.setSize(width, height);
        }
      }
    });
    resizeObserver.observe(container);

    const clock = new THREE.Clock();
    let animationId = null;

    function animate() {
      animationId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      towerGroup.position.y = Math.sin(elapsedTime * 0.7) * 0.08;

      if (!isDragging) {
        angleY += rotationSpeed;
      }

      towerGroup.rotation.y = angleY;
      towerGroup.rotation.x = angleX;

      particles.rotation.y = elapsedTime * 0.015;
      
      targetX += (mouseX - targetX) * 0.04;
      targetY += (mouseY - targetY) * 0.04;
      camera.position.x = targetX * 0.45;
      camera.position.y = 1.2 + targetY * 0.3;
      camera.lookAt(0, 0, 0);

      if (viewCube) {
        viewCube.style.transform = `rotateX(${-towerGroup.rotation.x * 57.3}deg) rotateY(${towerGroup.rotation.y * 57.3}deg)`;
      }

      renderer.render(scene, camera);
    }

    animate();
  }
};
