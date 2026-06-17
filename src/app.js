import Header from './components/Header.js';
import Hero from './components/Hero.js';
import RecruiterDashboard from './components/RecruiterDashboard.js';
import About from './components/About.js';
import Skills from './components/Skills.js';
import Bim from './components/Bim.js';
import Services from './components/Services.js';
import Education from './components/Education.js';
import Projects from './components/Projects.js';
import Experience from './components/Experience.js';
import Certifications from './components/Certifications.js';
import Achievements from './components/Achievements.js';
import Gallery from './components/Gallery.js';
import Testimonials from './components/Testimonials.js';
import Resume from './components/Resume.js';
import Faq from './components/Faq.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';
import FloatingUI from './components/FloatingUI.js';
import AdminPanel from './components/AdminPanel.js';
import Chatbot from './components/Chatbot.js';

const DEFAULT_PROFILE_DATA = {
  "personal": {
    "fullName": "Yaswanth Terli",
    "firstName": "Yaswanth",
    "lastName": "Terli",
    "title": "Civil CAD Designer | AutoCAD | Revit | BIM Specialist",
    "location": "Visakhapatnam, Andhra Pradesh, India",
    "email": "yaswanthterli09@gmail.com",
    "phone": "+91 9160578774",
    "whatsapp": "919160578774",
    "linkedin": "https://linkedin.com/in/yaswanth-terli-civil",
    "github": "https://github.com/yaswanth-terli",
    "portfolioUrl": "https://yaswanth-terli.com",
    "nationality": "Indian",
    "gender": "Male",
    "dateOfBirth": "15th August, 2004",
    "languages": ["Telugu", "English"],
    "profilePhoto": "/assets/images/profile.jpg",
    "resumeUrl": "/assets/resume.pdf"
  },
  "about": {
    "summary": "Civil Engineering graduate with strong knowledge of construction materials, concrete technology, CAD drafting, and civil engineering fundamentals. Skilled in analytical thinking, problem solving, documentation, and technical software. Seeking opportunities to contribute to engineering projects while continuously improving professional expertise.",
    "objective": "To secure a challenging role as a Civil CAD/Revit Designer in a forward-thinking construction or design firm, where I can apply my proficiency in BIM software, drafting standards, and structural detailing to contribute to large-scale infrastructure projects.",
    "yearsOfExperience": "Fresher (with 6 Months Internship experience)",
    "currentStatus": "Actively looking for opportunities & available for immediate joining"
  },
  "skills": [
    { "name": "AutoCAD", "level": 95 },
    { "name": "Revit", "level": 90 },
    { "name": "BIM", "level": 85 },
    { "name": "SQL", "level": 80 },
    { "name": "Microsoft Excel", "level": 90 },
    { "name": "Microsoft Office", "level": 85 },
    { "name": "Data Documentation", "level": 85 },
    { "name": "Civil Engineering Fundamentals", "level": 90 },
    { "name": "Construction Materials", "level": 90 },
    { "name": "Concrete Technology", "level": 90 },
    { "name": "Report Preparation", "level": 85 }
  ],
  "softwareProficiency": [
    { "name": "AutoCAD", "percentage": 95 },
    { "name": "Revit", "percentage": 90 },
    { "name": "SQL", "percentage": 75 },
    { "name": "Microsoft Excel", "percentage": 85 },
    { "name": "Microsoft Office", "percentage": 80 },
    { "name": "Civil 3D", "percentage": 75 },
    { "name": "Navisworks", "percentage": 80 }
  ],
  "bim": {
    "knowledge": "Sound understanding of BIM concepts, Level of Development (LOD 100 to LOD 400), and coordination processes.",
    "modeling": "Expertise in creating detailed 3D architectural and structural models in Revit based on 2D design inputs, ensuring high visual and parametric accuracy.",
    "clashDetection": "Proficient in federating models and executing clash tests in Autodesk Navisworks to detect spatial interferences between architectural, structural, and MEP disciplines.",
    "documentation": "Capable of extraction of precise construction drawings, floor plans, sections, elevations, and structural detailing sheets directly from 3D BIM models.",
    "quantityTakeoff": "Experienced in generating automated materials schedules and quantities takeoffs (QTO) in Revit and MS Excel, minimizing waste and material discrepancies."
  },
  "education": [
    {
      "degree": "Bachelor of Technology (B.Tech)",
      "branch": "Civil Engineering",
      "collegeName": "Swamy Vivekananda Engineering College",
      "university": "JNTU Kakinada",
      "cgpa": "71.40%",
      "startYear": "2017",
      "endYear": "2021"
    },
    {
      "degree": "Intermediate",
      "branch": "MPC (Maths, Physics, Chemistry)",
      "collegeName": "APTWRJ College",
      "university": "Board of Intermediate Education",
      "cgpa": "93.99%",
      "startYear": "2015",
      "endYear": "2017"
    },
    {
      "degree": "SSC (10th Grade)",
      "branch": "General Education",
      "collegeName": "Suvarna High School",
      "university": "State Board of Secondary Education",
      "cgpa": "73.00%",
      "startYear": "2014",
      "endYear": "2015"
    }
  ],
  "experience": [
    {
      "company": "BuildTech Infrastructure Solutions",
      "position": "Civil Design Intern (AutoCAD & Revit)",
      "duration": "Dec 2025 - May 2026 (6 Months)",
      "description": "Assisted senior design engineers in drafting residential submission plans using AutoCAD. Developed Revit 3D architectural models for client presentations. Drafted reinforcement details for structural columns and beams in accordance with IS 456 standards. Extracted material takeoff lists for costing reports."
    },
    {
      "company": "L&T Construction Site Visit Program",
      "position": "Graduate Trainee Observer",
      "duration": "Oct 2025 (2 Weeks)",
      "description": "Observed on-site operations of structural concreting, reinforcement binding, and foundation casting. Correlated site executions with approved structural blueprints to understand drawing interpretation and tolerances."
    },
    {
      "company": "Self-Employed / Freelance",
      "position": "Freelance CAD Drafter",
      "duration": "2024 - Present",
      "description": "Designed and finalized standard floor plan layouts for local individual home owners. Handled conversions of manual hand sketches into standardized digital dwg files for architectural approval."
    }
  ],
  "certifications": [
    {
      "name": "Autodesk Certified Professional: Revit for Architectural Design",
      "organization": "Autodesk",
      "issueDate": "Jan 2026",
      "link": "https://www.credly.com/org/autodesk",
      "image": "/assets/images/cert-autodesk.jpg"
    },
    {
      "name": "Advanced Civil CAD Drafting & BIM Modeling",
      "organization": "CADD Centre Training Services",
      "issueDate": "Nov 2025",
      "link": "https://caddcentre.com",
      "image": "/assets/images/cert-cadd.jpg"
    },
    {
      "name": "STAAD Pro V8i Structural Analysis & Detailing",
      "organization": "Bentley Institute Partner Certification",
      "issueDate": "Jul 2025",
      "link": "#",
      "image": "/assets/images/cert-bentley.jpg"
    }
  ],
  "projects": [
    {
      "id": "residential-bim",
      "title": "Residential Building BIM Modeling",
      "category": "Revit Architecture",
      "description": "High-fidelity parametric 3D modeling and space planning of a modern residential duplex using Autodesk Revit.",
      "overview": "This project covers the complete design cycle for a residential duplex. Starting with basic layouts, the design was built in Revit Architecture to create coordinated 3D models. Detailed reinforcement schedules and sheet layouts were compiled for building license clearance.",
      "challenges": "Ensuring structural grid stability with a light load-bearing column framework while conforming to municipal side-setback guidelines and ventilation codes.",
      "process": "Conducted space layout planning, engineered concrete column layouts, developed architectural elevations in Revit, and completed structural scheduling for staircase runs.",
      "softwareUsed": ["Revit", "AutoCAD", "Excel"],
      "duration": "4 Weeks",
      "status": "Completed",
      "image": "/assets/images/proj-residential.jpg",
      "pdf": "/assets/docs/residential-drawing.pdf",
      "video": "",
      "drawingsPreview": ["/assets/images/proj-residential.jpg", "/assets/images/proj-residential-cad1.jpg", "/assets/images/proj-residential-cad2.jpg"],
      "modelPreview": "interactive-3d-villa",
      "builtUpArea": "3,200 sq ft",
      "floors": "G+2",
      "drawingsCount": 12,
      "projectType": "Residential",
      "complexity": "Intermediate",
      "caseStudy": {
        "problem": "Designing a compact structural layout on a tight plot limit with strict local setback codes.",
        "approach": "Integrated column dimensions into internal walls and customized riser heights to keep the layout open.",
        "designProcess": "Developed zoning drafts, calculated stair run clearances, structured frame details, and extracted permit drawings.",
        "outcome": "Drafted a complete municipal sheet set approved on first submittal with zero corrections."
      },
      "sheets": {
        "plans": "/assets/docs/residential-drawing.pdf#page=1",
        "elevations": "/assets/docs/residential-drawing.pdf#page=2",
        "sections": "/assets/docs/residential-drawing.pdf#page=3",
        "report": "/assets/docs/residential-report.pdf",
        "boq": "/assets/docs/residential-boq.xlsx"
      }
    },
    {
      "id": "commercial-cad",
      "title": "Commercial Complex CAD Drafting",
      "category": "AutoCAD Drafting",
      "description": "Comprehensive 2D architectural drafting, structural layouts, and municipal submission drawing sheets using AutoCAD.",
      "overview": "Developed complete municipal approval blueprints for a multi-story commercial complex, including structural gridlines, column sizes, elevations, and sections.",
      "challenges": "Optimizing commercial space utility while complying strictly with municipal side setbacks and local code regulations.",
      "process": "Drafted structural grid systems, designed floor layouts, configured staircase riser runs, and set up sheet layouts.",
      "softwareUsed": ["AutoCAD", "Excel"],
      "duration": "6 Weeks",
      "status": "Completed",
      "image": "/assets/images/proj-commercial.jpg",
      "pdf": "/assets/docs/structural-detailing.pdf",
      "video": "",
      "drawingsPreview": ["/assets/images/proj-commercial.jpg", "/assets/images/proj-commercial-str1.jpg", "/assets/images/proj-commercial-str2.jpg"],
      "modelPreview": "interactive-3d-structure",
      "builtUpArea": "18,500 sq ft",
      "floors": "G+4",
      "drawingsCount": 32,
      "projectType": "Commercial",
      "complexity": "Advanced",
      "caseStudy": {
        "problem": "Coordinating concrete reinforcement schedules and structural dimensions with MEP clearances.",
        "approach": "Linked structural grids to Revit schedules and ran interference checks using federated models.",
        "designProcess": "Calculated structural design loads, drafted columns/beams modeling, ran spatial clash reports, and compiled documentation.",
        "outcome": "Created a clash-free physical model and structural sheets package, saving site rework expenses."
      },
      "sheets": {
        "plans": "/assets/docs/structural-detailing.pdf#page=1",
        "elevations": "/assets/docs/structural-detailing.pdf#page=2",
        "sections": "/assets/docs/structural-detailing.pdf#page=3",
        "report": "/assets/docs/structural-report.pdf",
        "boq": "/assets/docs/structural-boq.xlsx"
      }
    },
    {
      "id": "highway-design",
      "title": "Highway Alignment Design",
      "category": "Civil 3D",
      "description": "Geometric highway alignment, corridor modeling, profiling, and earthwork calculations using Autodesk Civil 3D.",
      "overview": "Designed a 2.5km rural highway stretch, including horizontal and vertical curves, profile views, corridors, cross-sections, and grading analysis.",
      "challenges": "Balancing cut-and-fill volumes to optimize earthwork costs while maintaining design speeds and safety standards.",
      "process": "Created alignment lines, configured profile views, built design corridors, calculated mass haul diagrams, and extracted sections.",
      "softwareUsed": ["Civil 3D", "Excel"],
      "duration": "8 Weeks",
      "status": "Completed",
      "image": "/assets/images/proj-revit-3d.jpg",
      "pdf": "/assets/docs/revit-villa-sheets.pdf",
      "video": "",
      "drawingsPreview": ["/assets/images/proj-revit-3d.jpg", "/assets/images/proj-revit-sheet1.jpg", "/assets/images/proj-revit-sheet2.jpg"],
      "modelPreview": "interactive-3d-villa",
      "builtUpArea": "25,000 sq m",
      "floors": "N/A",
      "drawingsCount": 18,
      "projectType": "Infrastructure",
      "complexity": "Advanced",
      "caseStudy": {
        "problem": "Optimizing earthwork balance in hilly terrain with severe slope angles.",
        "approach": "Adjusted vertical alignment slopes and ran cut/fill quantity analysis to find the optimal corridor profile.",
        "designProcess": "Developed terrain surfaces, horizontal alignments, profiles, assemblies, and corridors.",
        "outcome": "Reduced estimated excavation cost by 18% through optimized curve selection."
      },
      "sheets": {
        "plans": "/assets/docs/revit-villa-sheets.pdf#page=1",
        "elevations": "/assets/docs/revit-villa-sheets.pdf#page=2",
        "sections": "/assets/docs/revit-villa-sheets.pdf#page=3",
        "report": "/assets/docs/revit-villa-report.pdf",
        "boq": "/assets/docs/revit-villa-boq.xlsx"
      }
    },
    {
      "id": "structural-detailing",
      "title": "Structural Detailing Project",
      "category": "AutoCAD Drawings",
      "description": "Standardized structural concrete reinforcement drafting and detailed reinforcement schedules conforming to IS 456 codes.",
      "overview": "Detailed structural concrete shop drawings for foundations, columns, and slabs, compiling complete bar bending schedules (BBS).",
      "challenges": "Representing highly congested reinforcement detailing at column-beam joints clearly for on-site concrete binding crews.",
      "process": "Computed development lengths, mapped lap splices, detailed structural foundations, and generated Excel BBS.",
      "softwareUsed": ["AutoCAD", "Excel"],
      "duration": "5 Weeks",
      "status": "Completed",
      "image": "/assets/images/gallery-cad-detail.jpg",
      "pdf": "/assets/docs/structural-detailing-drawings.pdf",
      "video": "",
      "drawingsPreview": ["/assets/images/gallery-cad-detail.jpg", "/assets/images/proj-residential-cad1.jpg", "/assets/images/proj-residential-cad2.jpg"],
      "modelPreview": "interactive-3d-structure",
      "builtUpArea": "6,800 sq ft",
      "floors": "G+3",
      "drawingsCount": 15,
      "projectType": "Structural",
      "complexity": "Intermediate",
      "caseStudy": {
        "problem": "Representing dense structural reinforcement rebars clearly in 2D AutoCAD section drawings for on-site binding teams.",
        "approach": "Utilized color-coded drafting layers, clear dimensional offsets, and detailed localized cross-sections.",
        "designProcess": "Calculated structural rebar sizes, drafted cross-sections, compiled schedules, and finalized sheet layouts.",
        "outcome": "Delivered production-ready detailing prints that eliminated structural binding mistakes on site."
      },
      "sheets": {
        "plans": "/assets/docs/structural-detailing-drawings.pdf#page=1",
        "elevations": "/assets/docs/structural-detailing-drawings.pdf#page=2",
        "sections": "/assets/docs/structural-detailing-drawings.pdf#page=3",
        "report": "/assets/docs/structural-detailing-report.pdf",
        "boq": "/assets/docs/structural-detailing-boq.xlsx"
      }
    },
    {
      "id": "revit-coordination",
      "title": "Revit BIM Coordination Project",
      "category": "Revit & Navisworks",
      "description": "Multi-disciplinary model coordination, LOD 300 modeling, and Navisworks clash-detection interference reports.",
      "overview": "Coordinated architectural and structural design models with MEP layouts, performing clash detection runs in Autodesk Navisworks.",
      "challenges": "Detecting and resolving spatial piping interference conflicts within structural concrete beams and elevator shafts.",
      "process": "Federated design models, ran clash-tests, resolved model overlaps, and generated coordinated shop drawings.",
      "softwareUsed": ["Revit", "Navisworks", "AutoCAD"],
      "duration": "6 Weeks",
      "status": "Completed",
      "image": "/assets/images/gallery-site1.jpg",
      "pdf": "/assets/docs/apartment-sheets.pdf",
      "video": "",
      "drawingsPreview": ["/assets/images/gallery-site1.jpg", "/assets/images/proj-residential-cad2.jpg", "/assets/gallery-site2.jpg"],
      "modelPreview": "interactive-3d-structure",
      "builtUpArea": "12,400 sq ft",
      "floors": "G+3",
      "drawingsCount": 16,
      "projectType": "BIM Coordination",
      "complexity": "Advanced",
      "caseStudy": {
        "problem": "Compiling a precise and coordinated Bill of Quantities for structural estimation without BIM model database access.",
        "approach": "Developed mathematical estimation algorithms in Excel linked to AutoCAD structural grids for fast quantification.",
        "designProcess": "Calculated site areas, drafted floor sections, structured structural schedules, and finalized BOQ formulas.",
        "outcome": "Produced a highly accurate cost estimation list reducing material waste margins to less than 3%."
      },
      "sheets": {
        "plans": "/assets/docs/apartment-sheets.pdf#page=1",
        "elevations": "/assets/docs/apartment-sheets.pdf#page=2",
        "sections": "/assets/docs/apartment-sheets.pdf#page=3",
        "report": "/assets/docs/apartment-report.pdf",
        "boq": "/assets/docs/apartment-boq.xlsx"
      }
    }
  ],
  "achievements": [
    {
      "title": "1st Place - CAD Design Challenge",
      "description": "Awarded first place among 120 participants in the National CAD Drafting Competition organized during JNTUH TechFest 2025.",
      "category": "Competitions"
    },
    {
      "title": "Academic Excellence Award",
      "description": "Received a certificate of appreciation from the Dean of Civil Engineering for maintaining a top 5% rank in structural design modules.",
      "category": "Academic"
    },
    {
      "title": "Autodesk BIM Workshop Leader",
      "description": "Selected to coordinate and tutor a 3-day Revit bootcamp for junior students at JNTU College of Engineering.",
      "category": "Leadership"
    }
  ],
  "gallery": [
    {
      "url": "/assets/images/proj-residential.jpg",
      "caption": "AutoCAD G+2 Elevation View",
      "type": "AutoCAD Drawings"
    },
    {
      "url": "/assets/images/proj-revit-3d.jpg",
      "caption": "Revit Modern Villa Render",
      "type": "Revit Models"
    },
    {
      "url": "/assets/images/gallery-site1.jpg",
      "caption": "Structural Rebar Binding Inspection",
      "type": "Site Visits"
    },
    {
      "url": "/assets/images/proj-commercial.jpg",
      "caption": "BIM Structural Framing Wireframe",
      "type": "Revit Models"
    },
    {
      "url": "/assets/images/gallery-cad-detail.jpg",
      "caption": "Column Beam Connection Section Detail",
      "type": "AutoCAD Drawings"
    },
    {
      "url": "/assets/images/gallery-site2.jpg",
      "caption": "Foundation Trench Excavation",
      "type": "Site Visits"
    }
  ],
  "testimonials": [
    {
      "name": "Dr. Ramesh Babu",
      "designation": "Professor & Head of Civil Engineering",
      "company": "JNTU Hyderabad",
      "feedback": "Yaswanth possesses exceptional talent in CAD drafting and BIM processes. His design projects demonstrate clarity, structural accuracy, and careful attention to building code guidelines. He is highly capable.",
      "photo": "/assets/images/test-prof.jpg"
    },
    {
      "name": "Er. Suresh Kumar",
      "designation": "Senior Structural Consultant",
      "company": "BuildTech Infrastructure Solutions",
      "feedback": "Yaswanth proved to be quick at grasping Autodesk Revit structure modeling during his internship. His documentation extraction was precise and fit for production use. He has a bright career in BIM ahead.",
      "photo": "/assets/images/test-eng.jpg"
    }
  ],
  "resumeData": {
    "summary": "Civil Engineering graduate with strong knowledge of construction materials, concrete technology, CAD drafting, and civil engineering fundamentals. Skilled in analytical thinking, problem solving, documentation, and technical software. Seeking opportunities to contribute to engineering projects while continuously improving professional expertise.",
    "strengths": [
      "Quick Learner",
      "Adaptability",
      "Team Collaboration",
      "Time Management",
      "Positive Attitude",
      "Analytical Thinking",
      "Problem Solving"
    ],
    "languages": [
      { "name": "Telugu", "fluency": "Native" },
      { "name": "English", "fluency": "Professional Working Proficiency" }
    ],
    "interests": [
      "Playing Chess",
      "Listening to Music",
      "Learning New Technologies"
    ],
    "academicProjects": [
      {
        "title": "Experimental Study on Waste Materials as Additives in Concrete",
        "duration": "Academic Year Project",
        "description": "Conducted an experimental study on Fly Ash and Rice Husk Ash as partial replacements in concrete production to improve sustainability, reduce costs, and evaluate concrete strength and durability. Responsible for: Mix Design Analysis, Material Testing, Data Collection, Documentation, and Report Preparation."
      }
    ]
  },
  "services": [
    { "title": "AutoCAD Drafting", "desc": "Precision 2D architectural plans, elevations, sections, and municipal permit drawings.", "icon": "fa-draw-polygon" },
    { "title": "BIM Modeling", "desc": "3D parametric modeling and coordination using Revit Architecture and Structure.", "icon": "fa-cube" },
    { "title": "Revit Design", "desc": "Custom parametric family creation, wall/floor scheduling, and detail extraction.", "icon": "fa-cubes" },
    { "title": "Quantity Estimation", "desc": "Accurate concrete and steel quantities takeoffs (QTO) and cost estimation reports.", "icon": "fa-calculator" },
    { "title": "Structural Detailing", "desc": "Reinforcement detailing shop drawings and bar bending schedules conforming to standards.", "icon": "fa-circle-nodes" }
  ],
  "statistics": [
    { "label": "Projects Completed", "value": 15 },
    { "label": "Years of Experience", "value": 1 },
    { "label": "CAD Drawings Created", "value": 120 },
    { "label": "BIM Models Delivered", "value": 25 }
  ],
  "faqs": [
    { "question": "What software do you specialize in?", "answer": "I specialize in AutoCAD, Autodesk Revit (Architecture & Structure), Navisworks, Civil 3D, and Microsoft Excel." },
    { "question": "What is your typical project delivery workflow?", "answer": "My workflow starts with 2D drafting in AutoCAD, migrating to Revit for 3D BIM modeling, executing clash-detection in Navisworks, and generating construction-ready detailing sheets." },
    { "question": "Are you open to immediate full-time opportunities?", "answer": "Yes, I have completed my B.Tech and internship, and I am available for immediate joining and relocation if required." },
    { "question": "Can you handle structural analysis?", "answer": "Yes, I have academic training and project experience using STAAD Pro for framing load calculations and reinforcement scheduling." }
  ]
};

let profileData = null;

document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

async function initApp() {
  try {
    const cachedData = localStorage.getItem('portfolio_custom_profile');
    if (cachedData) {
      try {
        profileData = JSON.parse(cachedData);
        console.log('Loaded custom profile from LocalStorage.');
      } catch (e) {
        console.warn('Failed to parse cached profile data, falling back to default.');
      }
    }

    if (!profileData) {
      try {
        const files = ['profile', 'projects', 'skills', 'education', 'gallery', 'resume'];
        const results = await Promise.all(
          files.map(async (file) => {
            try {
              const res = await fetch(`/config/${file}.json`);
              if (!res.ok) throw new Error(`HTTP error ${res.status}`);
              return [file, await res.json()];
            } catch (e) {
              console.warn(`Failed to fetch ${file}.json, using fallback:`, e);
              return [file, null];
            }
          })
        );

        const dataMap = Object.fromEntries(results);
        const baseProfile = dataMap.profile || DEFAULT_PROFILE_DATA;

        profileData = {
          ...baseProfile,
          projects: dataMap.projects || DEFAULT_PROFILE_DATA.projects,
          skills: dataMap.skills?.skills || DEFAULT_PROFILE_DATA.skills,
          softwareProficiency: dataMap.skills?.softwareProficiency || DEFAULT_PROFILE_DATA.softwareProficiency,
          education: dataMap.education || DEFAULT_PROFILE_DATA.education,
          gallery: dataMap.gallery || DEFAULT_PROFILE_DATA.gallery,
          resumeData: dataMap.resume || DEFAULT_PROFILE_DATA.resumeData || null,
          services: baseProfile.services || DEFAULT_PROFILE_DATA.services || [],
          statistics: baseProfile.statistics || DEFAULT_PROFILE_DATA.statistics || [],
          faqs: baseProfile.faqs || DEFAULT_PROFILE_DATA.faqs || [],
          achievements: baseProfile.achievements || DEFAULT_PROFILE_DATA.achievements || [],
          testimonials: baseProfile.testimonials || DEFAULT_PROFILE_DATA.testimonials || []
        };
      } catch (fetchError) {
        console.warn('Failed to fetch config files, falling back to embedded default config:', fetchError);
        profileData = DEFAULT_PROFILE_DATA;
      }
    }
    
    if (profileData) {
      renderAllViews();
    }
  } catch (error) {
    console.error('Initialization Error:', error);
  }
}

function renderAllViews() {
  // 1. Render all HTML markup into semantic root tags
  document.getElementById('header-root').innerHTML = Header.render(profileData);
  
  const mainSections = [
    Hero,
    RecruiterDashboard,
    About,
    Skills,
    Bim,
    Services,
    Education,
    Projects,
    Experience,
    Certifications,
    Achievements,
    Gallery,
    Testimonials,
    Resume,
    Faq,
    Contact
  ];
  
  document.getElementById('main-root').innerHTML = mainSections.map(c => c.render(profileData)).join('');
  
  document.getElementById('footer-root').innerHTML = Footer.render(profileData);
  document.getElementById('floating-ui-root').innerHTML = FloatingUI.render(profileData);
  document.getElementById('admin-panel-root').innerHTML = AdminPanel.render(profileData);
  document.getElementById('chatbot-root').innerHTML = Chatbot.render(profileData);

  // 2. Initialize logic / observers sequentially
  Header.init(profileData);
  Hero.init(profileData);
  RecruiterDashboard.init(profileData);
  About.init(profileData);
  Skills.init(profileData);
  Bim.init(profileData);
  Services.init(profileData);
  Education.init(profileData);
  Projects.init(profileData);
  Experience.init(profileData);
  Certifications.init(profileData);
  Achievements.init(profileData);
  Gallery.init(profileData);
  Testimonials.init(profileData);
  Resume.init(profileData);
  Faq.init(profileData);
  Contact.init(profileData);
  Footer.init(profileData);
  FloatingUI.init(profileData);
  AdminPanel.init(profileData);
  Chatbot.init(profileData);

  initRouter();
}

function initRouter() {
  handleHashChange();
  window.addEventListener('hashchange', handleHashChange);

  const closeBtn = document.getElementById('close-modal-btn');
  const overlay = document.getElementById('project-detail-modal');

  const closeOverlay = () => { window.location.hash = '#projects'; };
  if (closeBtn) closeBtn.addEventListener('click', closeOverlay);
  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeOverlay();
    });
  }

  const closeAdminBtn = document.getElementById('close-admin-btn');
  const adminOverlay = document.getElementById('admin-panel-modal');

  const closeAdmin = () => { window.location.hash = '#about'; };
  if (closeAdminBtn) closeAdminBtn.addEventListener('click', closeAdmin);
  if (adminOverlay) {
    adminOverlay.addEventListener('click', (e) => {
      if (e.target === adminOverlay) closeAdmin();
    });
  }
}

function handleHashChange() {
  const hash = window.location.hash;
  const projOverlay = document.getElementById('project-detail-modal');
  const adminOverlay = document.getElementById('admin-panel-modal');

  if (projOverlay) {
    projOverlay.classList.remove('active');
    projOverlay.setAttribute('aria-hidden', 'true');
  }
  if (adminOverlay) {
    adminOverlay.classList.remove('active');
    adminOverlay.setAttribute('aria-hidden', 'true');
  }
  document.body.style.overflow = '';

  if (hash.startsWith('#/project/')) {
    const projectId = hash.replace('#/project/', '');
    if (profileData) {
      const project = profileData.projects.find(p => p.id === projectId);
      if (project) {
        if (window.renderProjectDetail) {
          window.renderProjectDetail(project);
        }
        projOverlay.classList.add('active');
        projOverlay.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        return;
      }
    }
  }

  if (hash === '#admin' || hash.startsWith('#/admin')) {
    if (adminOverlay) {
      adminOverlay.classList.add('active');
      adminOverlay.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      if (window.checkAdminLoginState) {
        window.checkAdminLoginState();
      }
      return;
    }
  }
}
