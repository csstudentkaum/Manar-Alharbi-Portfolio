/* ══════════════════════════════════════════════════════════
   MANAR ALHARBI — PORTFOLIO  |  script.js
══════════════════════════════════════════════════════════ */

/* ─────────────────────────────────────────────────────────
   PROJECT DATA
   ✏️  Add your own projects here anytime!
   Each object supports:
     title    — project name
     badge    — short label like "Graduation Project" or "AI"
     icon     — emoji shown in the card icon circle
     desc     — 2–3 sentence description
     tags     — array of tech tags
     github   — GitHub repo URL (set to "" to hide link)
     live     — live demo URL  (set to "" to hide link)
───────────────────────────────────────────────────────── */
const projects = [
  {
    title: "KHOTAA — Diabetic Foot Shield",
    categories: ["AI/ML", "Mobile"],
    badge: "Graduation Project",
    icon: "🩺",
    image: "assets/khotaa.png",
    desc: "AI-powered healthcare system for diabetic foot risk detection using smart insole data, deep learning models, and rule-based clinical thresholds with mobile monitoring. Model achieved 84.04% accuracy.",
    tags: ["Python", "Deep Learning", "Computer Vision", "Flutter", "Firebase", "REST API"],
    github: "",
    live: "",
    video: "assets/khotaa-demo.mp4",
    date: "Sep 2025 – May 2026",
    metrics: {
      summary: "Final model: EfficientNetV2-S with a custom classification head, trained on combined train+validation data for 30 epochs. Evaluated on a held-out test set for diabetic foot risk detection using smart insole sensor data.",
      stats: [
        { value: "84.04%", label: "Accuracy",    sub: "Test set" },
        { value: "82.93%", label: "Macro F1",    sub: "Balanced classes" },
        { value: "81.64%", label: "Precision",   sub: "Macro average" },
        { value: "86.53%", label: "Recall",      sub: "Macro average" },
        { value: "95.91%", label: "AUC-ROC",     sub: "Excellent discrimination" },
      ],
      perClass: [
        { label: "Ischaemia",  value: 99.84, best: true  },
        { label: "Both",       value: 98.85, best: true  },
        { label: "None",       value: 93.00, best: false },
        { label: "Infection",  value: 91.94, best: false },
      ],
    },
  },
  {
    title: "YOLO Emergency Detection in Hajj Crowds",
    category: "AI/ML",
    badge: "Computer Vision",
    icon: "🔍",
    image: "assets/yolo.png",
    desc: "YOLO-based computer vision model to detect medical emergency cases in Hajj crowd scenes, achieving 93.35% detection performance on the test set.",
    tags: ["Python", "YOLO", "Computer Vision", "Deep Learning", "Object Detection"],
    github: "https://github.com/csstudentkaum/YOLOv26-Based-Deep-Learning-Approach-for-Detecting-Medical-Emergencies-in-Hajj-Crowd",
    live: "",
    video: "assets/yolo-demo.mp4",
    date: "Apr 2026 – Jun 2026",
    metrics: {
      summary: "YOLOv8 model evaluated on a held-out test set for detecting medical emergencies in Hajj crowd scenes. Trained to distinguish between passed-out individuals and normal persons in dense crowd conditions.",
      stats: [
        { value: "93.35%", label: "mAP@0.5",       sub: "Primary detection metric" },
        { value: "76.44%", label: "mAP@0.5:0.95",  sub: "Strict IoU threshold" },
        { value: "88.96%", label: "Precision",      sub: "Low false-positive rate" },
        { value: "89.08%", label: "Recall",         sub: "Low false-negative rate" },
        { value: "89.02%", label: "F1-Score",       sub: "Balanced performance" },
      ],
      perClass: [
        { label: "Passed Out",     value: 84.46, best: true  },
        { label: "Normal Person",  value: 68.43, best: false },
      ],
    },
  },
  {
    title: "Skin Lesion Classification",
    category: "AI/ML",
    badge: "AI / Healthcare",
    icon: "🔬",
    image: "assets/skin.png",
    desc: "Multi-task deep learning system for skin lesion analysis — classification, detection, and segmentation. Achieved 86.97% classification accuracy and 92.57% segmentation performance, deployed via Flask.",
    tags: ["Python", "Flask", "Deep Learning", "Computer Vision", "Segmentation"],
    github: "",
    live: "",
    video: "assets/skin-lesion-demo.mp4",
    date: "Oct 2025 – Dec 2025",
    metrics: {
      summary: "Multi-task deep learning system evaluated across three tasks: classification, segmentation, and detection. Best classification model (ResNet50) achieved 86.97% accuracy. SegFormer led segmentation with 92.57% Dice Score. YOLOv8 handled detection with 88.37% IoU.",
      stats: [
        { value: "86.97%", label: "Classification",  sub: "ResNet50 accuracy" },
        { value: "92.57%", label: "Dice Score",       sub: "SegFormer segmentation" },
        { value: "95.97%", label: "Pixel Accuracy",   sub: "SegFormer" },
        { value: "88.37%", label: "Detection IoU",    sub: "YOLOv8" },
        { value: "60.76%", label: "Detection mAP",    sub: "YOLOv8" },
      ],
      perClass: [],
    },
  },
  {
    title: "ShipSmart — Shipment Tracking Platform",
    category: "Web",
    badge: "Web App",
    icon: "📦",
    image: "assets/shipsmart.png",
    desc: "Full-stack shipment tracking platform using the TrackingMore API, featuring search filters, authentication, shipment management, document upload, and an admin dashboard.",
    tags: ["JavaScript", "REST API", "TrackingMore API", "Authentication", "Full-Stack"],
    github: "",
    live: "",
    video: "assets/shipsmart-demo.mp4",
    date: "Apr 2026 – Jun 2026",
  },
  {
    title: "Metropolitan Museum App",
    category: "Mobile",
    badge: "Mobile App",
    icon: "🏛️",
    desc: "Mobile application built during the Saudia Digital Products & Services training program for exploring museum artworks, featuring REST API integration, Firebase services, and Figma-based mobile interfaces.",
    tags: ["Angular", "Ionic", "Flutter", "Firebase", "REST APIs", "Figma"],
    github: "https://github.com/csstudentkaum/The-Metropolitan-Museum-of-Art",
    live: "",
    video: "assets/metroplotina-demo.mp4",
    image: "assets/metroplotina.png",
    date: "Jun 2025 – Jul 2025",
  },
  /* ─────────────────────────────────────────────────────
     ➕  Add a new project by copying this block:
  {
    title: "Project Name",
    category: "Web",
    badge: "Category",
    icon: "⚡",
    desc: "What it does and what makes it interesting.",
    tags: ["Tech1", "Tech2"],
    github: "https://github.com/csstudentkaum/repo",
    live: "",
    date: "Mon YYYY – Mon YYYY",
  },
  ───────────────────────────────────────────────────── */
];

/* ─────────────────────────────────────────────────────────
   RENDER PROJECT CARDS (projects section)
───────────────────────────────────────────────────────── */
const githubSVG  = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`;
const liveSVG    = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`;
const metricsSVG = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`;
const demoSVG    = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>`;

const PROJECTS_INTERACTIVE =
  "a, button, input, textarea, select, label, summary, .card-action, .card-footer, .card-actions, [role='button'], [role='link']";

let openMetricsModalFn = null;
let openVideoModalFn = null;

function projectCardFooterHTML(p, i) {
  const parts = [];
  if (p.github) {
    parts.push(`<a href="${p.github}" target="_blank" rel="noopener" class="card-action card-action-icon" aria-label="View on GitHub">${githubSVG}</a>`);
  }
  if (p.video) {
    parts.push(`<button type="button" class="card-action card-action-btn card-action-demo card-link-video" data-video="${p.video}" data-title="${p.title}">${demoSVG}<span>Demo</span></button>`);
  } else if (p.demo) {
    parts.push(`<a href="${p.demo}" target="_blank" rel="noopener" class="card-action card-action-btn card-action-demo" aria-label="Demo">${demoSVG}<span>Demo</span></a>`);
  }
  if (p.live) {
    parts.push(`<a href="${p.live}" target="_blank" rel="noopener" class="card-action card-action-icon" aria-label="Live site">${liveSVG}</a>`);
  }
  if (p.metrics) {
    parts.push(`<button type="button" class="card-action card-action-btn card-metrics-btn" data-idx="${i}">${metricsSVG}<span>Metrics</span></button>`);
  }

  const tagsHTML = p.tags?.length
    ? `<div class="card-tags">${projectCardTagsHTML(p.tags)}</div>`
    : "";
  const actionsHTML = parts.length
    ? `<div class="card-actions" role="group" aria-label="Project links">${parts.join("")}</div>`
    : "";

  if (!tagsHTML && !actionsHTML) return "";

  return `<div class="card-footer">${tagsHTML}${actionsHTML}</div>`;
}

function projectCardTagsHTML(tags) {
  return tags.map(t => `<span class="card-tag">${t}</span>`).join("");
}

function projectCardHTML(p, i) {
  const footerHTML = projectCardFooterHTML(p, i);

  return `
    <article class="project-card reveal" data-idx="${i}" style="transition-delay:${i * 100}ms" role="article">
      <div class="card-visual">
        <div class="card-visual-bg${p.image ? '' : ' card-grad'}" ${p.image ? `style="background-image:url('${p.image}');background-size:cover;background-position:center;background-blend-mode:normal;"` : ''}></div>
        ${p.image ? '' : `<div class="card-visual-icon" aria-hidden="true">${p.icon}</div>`}
      </div>
      <div class="card-body">
        <div class="card-header">
          <span class="card-date">${p.date || ""}</span>
          ${p.badge ? `<span class="card-badge">${p.badge}</span>` : ""}
        </div>
        <h3 class="card-title">${p.title}</h3>
        <p class="card-desc">${p.desc}</p>
        ${footerHTML}
      </div>
    </article>
  `;
}

function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;

  grid.innerHTML = projects.map((p, i) => projectCardHTML(p, i)).join("");
  // Horizontal scroll: viewport IntersectionObserver never sees off-screen cards — show all immediately
  grid.querySelectorAll(".project-card").forEach(card => card.classList.add("visible"));
}

/* ─────────────────────────────────────────────────────────
   THEME TOGGLE — dark / light mode
───────────────────────────────────────────────────────── */
const THEME_STORAGE_KEY = 'theme';
let _metricPalette = null;

function getSiteBasePath() {
  const match = location.pathname.match(/^(.*?\/Manar-Alharbi-Portfolio)(?:\/|$)/);
  return match ? `${match[1]}/` : '';
}

const FAVICON_PATHS = {
  dark: {
    ico: `${getSiteBasePath()}favicon.ico`,
    png32: `${getSiteBasePath()}assets/favicon-32.png`,
    png16: `${getSiteBasePath()}assets/favicon-16.png`,
    svg: `${getSiteBasePath()}assets/favicon.svg`,
    apple: `${getSiteBasePath()}assets/apple-touch-icon.png`,
  },
  light: {
    ico: `${getSiteBasePath()}favicon.ico`,
    png32: `${getSiteBasePath()}assets/favicon-light-32.png`,
    png16: `${getSiteBasePath()}assets/favicon-light-16.png`,
    svg: `${getSiteBasePath()}assets/favicon-light.svg`,
    apple: `${getSiteBasePath()}assets/apple-touch-icon-light.png`,
  },
};

function getTheme() {
  return document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
}

function updateFavicon(theme) {
  const paths = FAVICON_PATHS[theme === 'light' ? 'light' : 'dark'];
  document.querySelectorAll('link[data-favicon]').forEach(link => {
    const kind = link.dataset.favicon;
    if (paths[kind]) link.href = paths[kind];
  });
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch (_) { /* private browsing */ }

  _metricPalette = null;
  updateFavicon(theme);

  const toggle = document.getElementById('themeToggle');
  if (toggle) {
    toggle.setAttribute('aria-pressed', theme === 'light');
    toggle.setAttribute(
      'aria-label',
      theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
    );
  }
}

function initThemeToggle() {
  const toggle = document.getElementById('themeToggle');
  if (!toggle) return;

  applyTheme(getTheme());

  toggle.addEventListener('click', () => {
    applyTheme(getTheme() === 'dark' ? 'light' : 'dark');
  });
}

/* ─────────────────────────────────────────────────────────
   NAVBAR — scroll behaviour
───────────────────────────────────────────────────────── */
function getNavOffset() {
  const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--nav-h"), 10);
  return Number.isFinite(navH) ? navH : 68;
}

function scrollToSection(target, behavior = "smooth") {
  if (!target) return;
  const top = Math.max(0, target.getBoundingClientRect().top + window.scrollY - getNavOffset());
  window.scrollTo({ top, behavior });
}

function fixProjectsHashScroll() {
  if (window.location.hash !== "#projects" || window.innerWidth > 900) return;
  const target = document.getElementById("projects");
  if (!target) return;
  requestAnimationFrame(() => scrollToSection(target, "auto"));
}

function initNavbar() {
  const navbar = document.getElementById("navbar");
  const onScroll = () => {
    navbar.classList.toggle("scrolled", window.scrollY > 40);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* ─────────────────────────────────────────────────────────
   MOBILE HAMBURGER MENU
───────────────────────────────────────────────────────── */
function initMobileMenu() {
  const hamburger = document.getElementById("hamburger");
  const drawer    = document.getElementById("mobileDrawer");
  const overlay   = document.getElementById("drawerOverlay");
  if (!hamburger || !drawer) return;

  const drawerLinks = drawer.querySelectorAll(".drawer-link, .drawer-cta");

  const setOpen = (open) => {
    hamburger.classList.toggle("open", open);
    drawer.classList.toggle("open", open);
    drawer.setAttribute("aria-hidden", open ? "false" : "true");
    overlay?.setAttribute("aria-hidden", open ? "false" : "true");
    document.body.classList.toggle("menu-open", open);
    document.body.style.overflow = open ? "hidden" : "";
    hamburger.setAttribute("aria-expanded", open ? "true" : "false");
    hamburger.setAttribute("aria-label", open ? "Close menu" : "Menu");
  };

  hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    setOpen(!drawer.classList.contains("open"));
  });

  overlay?.addEventListener("click", () => setOpen(false));

  drawerLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (href?.startsWith("#")) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          setOpen(false);
          scrollToSection(target);
          history.pushState(null, "", href);
          return;
        }
      }
      setOpen(false);
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && drawer.classList.contains("open")) setOpen(false);
  });
}

/* ─────────────────────────────────────────────────────────
   CONTACT HEADLINE — flashlight scan reveal
───────────────────────────────────────────────────────── */
function initContactHeadline() {
  const flashlight = document.querySelector(".flashlight");
  const stage = document.querySelector(".flashlight-stage");
  const canvas = document.querySelector(".flashlight-sparks");
  const contactLeft = document.querySelector(".contact-left");
  if (!flashlight || !stage || !contactLeft) return;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reducedMotion) {
    flashlight.classList.add("flashlight--static");
    return;
  }

  let scan = 0;
  let running = false;
  let rafId = null;
  let sweepStart = 0;
  let mouseActive = false;
  let inView = false;
  const SWEEP_MS = 4800;
  const PAUSE_MS = 900;
  const particles = [];
  const MAX_PARTICLES = 36;

  const setScan = (progress) => {
    scan = Math.max(0, Math.min(1, progress));
    const width = stage.offsetWidth;
    stage.style.setProperty("--scan-x", `${scan * width}px`);
    stage.style.setProperty("--scan-pct", `${scan * 100}%`);
    stage.classList.toggle("flashlight--revealed", scan >= 0.992);
  };

  const spawnParticle = () => {
    if (particles.length >= MAX_PARTICLES) return;
    const height = stage.offsetHeight;
    particles.push({
      x: scan * stage.offsetWidth + (Math.random() - 0.5) * 6,
      y: height * (0.12 + Math.random() * 0.76),
      vx: 0.35 + Math.random() * 1.1,
      vy: (Math.random() - 0.5) * 0.35,
      life: 0.55 + Math.random() * 0.45,
      age: 0,
      size: 0.6 + Math.random() * 1.6,
    });
  };

  const resizeCanvas = () => {
    if (!canvas) return;
    const rect = stage.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.ceil(rect.width * dpr);
    canvas.height = Math.ceil(rect.height * dpr);
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;
  };

  const drawParticles = (ctx, dt) => {
    if (!canvas) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.age += dt;
      if (p.age >= p.life) {
        particles.splice(i, 1);
        continue;
      }
      p.x += p.vx;
      p.y += p.vy;
      const t = 1 - p.age / p.life;
      const alpha = t * t * 0.85;
      ctx.beginPath();
      ctx.fillStyle = `rgba(255, 220, 180, ${alpha})`;
      ctx.arc(p.x * dpr, p.y * dpr, p.size * dpr * t, 0, Math.PI * 2);
      ctx.fill();
    }
  };

  let lastTs = 0;
  const tick = (ts) => {
    if (!running) return;
    const dt = lastTs ? Math.min(0.05, (ts - lastTs) / 1000) : 0.016;
    lastTs = ts;

    if (!mouseActive && inView) {
      const elapsed = ts - sweepStart;
      const cycle = SWEEP_MS + PAUSE_MS;
      const phase = elapsed % cycle;
      if (phase <= SWEEP_MS) {
        const eased = 0.5 - Math.cos((phase / SWEEP_MS) * Math.PI) * 0.5;
        setScan(eased);
      }
    }

    if (inView && scan > 0.02 && scan < 0.98 && Math.random() < 0.45) {
      spawnParticle();
    }

    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) drawParticles(ctx, dt);
    }

    rafId = requestAnimationFrame(tick);
  };

  const start = () => {
    if (running) return;
    running = true;
    sweepStart = performance.now();
    lastTs = 0;
    stage.classList.add("is-active");
    resizeCanvas();
    rafId = requestAnimationFrame(tick);
  };

  const stop = () => {
    running = false;
    if (rafId) cancelAnimationFrame(rafId);
    rafId = null;
    stage.classList.remove("is-active");
    particles.length = 0;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  stage.addEventListener("mouseenter", () => { mouseActive = true; });
  stage.addEventListener("mouseleave", () => {
    mouseActive = false;
    sweepStart = performance.now() - scan * SWEEP_MS;
  });
  stage.addEventListener("mousemove", (e) => {
    if (!mouseActive) return;
    const rect = stage.getBoundingClientRect();
    setScan((e.clientX - rect.left) / rect.width);
  });

  window.addEventListener("resize", resizeCanvas, { passive: true });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        inView = entry.isIntersecting;
        if (inView) {
          contactLeft.classList.add("visible");
          start();
        } else {
          stop();
        }
      });
    },
    { threshold: 0.25, rootMargin: "0px 0px -10% 0px" }
  );

  observer.observe(contactLeft);
}

/* ─────────────────────────────────────────────────────────
   SCROLL REVEAL — Intersection Observer
───────────────────────────────────────────────────────── */
function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  document.querySelectorAll(".reveal").forEach(el => {
    if (el.classList.contains("contact-left")) return;
    if (el.classList.contains("project-card")) return;
    observer.observe(el);
  });
}

/* ─────────────────────────────────────────────────────────
   ACTIVE NAV LINK — highlights as you scroll
───────────────────────────────────────────────────────── */
function initActiveNav() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach(a => {
            a.style.color = a.getAttribute("href") === `#${id}`
              ? "var(--accent)"
              : "";
          });
        }
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );

  sections.forEach(s => sectionObserver.observe(s));
}

/* ─────────────────────────────────────────────────────────
   HERO — stagger reveal on load
───────────────────────────────────────────────────────── */
function initHeroReveal() {
  const heroRevealEls = document.querySelectorAll("#hero .reveal");
  heroRevealEls.forEach((el, i) => {
    setTimeout(() => {
      el.classList.add("visible");
    }, 200 + i * 130);
  });
}

/* ─────────────────────────────────────────────────────────
   CURSOR GLASS — minimal frosted circle follows mouse
   (desktop only, disabled if prefers-reduced-motion)
───────────────────────────────────────────────────────── */
function initHeroSmileEyes() {
  const smile = document.querySelector(".hero-smile");
  if (!smile) return null;
  if (window.matchMedia("(max-width: 900px)").matches) return null;

  const eyes = smile.querySelectorAll(".smile-eye");
  const pupils = smile.querySelectorAll(".smile-pupil");
  if (!pupils.length) return null;

  const INFLUENCE = 140;
  const LERP = 0.11;
  const DEFAULT_OX = 1;
  const DEFAULT_OY = 0;

  const getMaxOffset = () => {
    const eye = eyes[0];
    const pupil = pupils[0];
    if (!eye || !pupil) return 3;
    const travel = (eye.offsetWidth - pupil.offsetWidth) / 2 - 0.5;
    return Math.max(travel, 1.5);
  };

  let maxOffset = getMaxOffset();
  let targetOx = DEFAULT_OX;
  let targetOy = DEFAULT_OY;
  let currentOx = DEFAULT_OX;
  let currentOy = DEFAULT_OY;

  const tick = () => {
    currentOx += (targetOx - currentOx) * LERP;
    currentOy += (targetOy - currentOy) * LERP;
    const transform = `translate(${currentOx.toFixed(2)}px, ${currentOy.toFixed(2)}px)`;
    pupils.forEach(pupil => {
      pupil.style.transform = transform;
    });
    requestAnimationFrame(tick);
  };

  requestAnimationFrame(tick);

  window.addEventListener("resize", () => {
    maxOffset = getMaxOffset();
  }, { passive: true });

  return (clientX, clientY) => {
    const rect = smile.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = clientX - cx;
    const dy = clientY - cy;
    const dist = Math.min(Math.hypot(dx, dy) / INFLUENCE, 1);
    const angle = Math.atan2(dy, dx);
    targetOx = DEFAULT_OX + Math.cos(angle) * maxOffset * dist;
    targetOy = DEFAULT_OY + Math.sin(angle) * maxOffset * dist;
  };
}

function initCursorGlow() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (window.matchMedia("(pointer: coarse)").matches) return; // no touch

  document.documentElement.classList.add("custom-cursor");

  const cursor = document.createElement("div");
  cursor.className = "cursor-glass";
  cursor.id = "cursorGlow";
  cursor.setAttribute("aria-hidden", "true");
  document.body.appendChild(cursor);

  const updateSmileEyes = initHeroSmileEyes();

  const move = (x, y) => {
    cursor.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
    if (updateSmileEyes) updateSmileEyes(x, y);
  };

  window.addEventListener("mousemove", e => {
    move(e.clientX, e.clientY);
  }, { passive: true });
}

/* ─────────────────────────────────────────────────────────
   INIT
───────────────────────────────────────────────────────── */
/* ─────────────────────────────────────────────────────────
   MORPHING WORD TICKER  (hero creative statement)
───────────────────────────────────────────────────────── */
function initMorphTicker() {
  const ticker = document.getElementById("morphTicker");
  if (!ticker) return;

  const words = Array.from(ticker.querySelectorAll("span"));
  const total = words.length;
  let current = 0;

  // Use the rendered height of one word (reliable after layout)
  function wordH() {
    return words[0] ? words[0].offsetHeight || 80 : 80;
  }

  function goTo(idx) {
    ticker.style.transform = `translateY(-${idx * wordH()}px)`;
  }

  function advance() {
    current = (current + 1) % total;
    goTo(current);
  }

  // Wait two frames so fonts/layout are fully painted
  requestAnimationFrame(() => requestAnimationFrame(() => goTo(0)));
  window.addEventListener("resize", () => goTo(current));

  setInterval(advance, 2500); // one word every 2.5 s
}

/* ─────────────────────────────────────────────────────────
   INIT
───────────────────────────────────────────────────────── */
/* ─────────────────────────────────────────────────────────
   METRICS MODAL
───────────────────────────────────────────────────────── */
const METRIC_PALETTE_COUNT = 5;

function isLightTheme() {
  return document.documentElement.getAttribute("data-theme") === "light";
}

function getMetricPaletteRoot() {
  return document.getElementById("metricsModal") || document.documentElement;
}

function getMetricPalette() {
  if (!_metricPalette) {
    const root = getMetricPaletteRoot();
    const style = getComputedStyle(root);
    _metricPalette = Array.from({ length: METRIC_PALETTE_COUNT }, (_, i) => {
      const n = i + 1;
      return {
        fill: style.getPropertyValue(`--dash-viz-${n}`).trim(),
        glow: style.getPropertyValue(`--dash-viz-${n}-glow`).trim(),
      };
    });
  }
  return _metricPalette;
}

function metricColor(i) {
  const palette = getMetricPalette();
  return palette[i % palette.length];
}

function vizRgba(hex, alpha) {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function metricTextColor() {
  const root = getMetricPaletteRoot();
  const text = getComputedStyle(root).getPropertyValue("--dash-text").trim();
  return text || "#FFFFFF";
}

function metricLabelColor() {
  const root = getMetricPaletteRoot();
  const label = getComputedStyle(root).getPropertyValue("--dash-label").trim();
  return label || "rgba(255, 255, 255, 0.75)";
}

function vizCardBg(hex, strong = 0.10) {
  if (isLightTheme()) {
    return `linear-gradient(145deg, rgba(255, 248, 240, 0.98) 0%, rgba(255, 237, 220, 0.92) 55%, ${vizRgba(hex, strong * 0.55)} 100%)`;
  }
  return `linear-gradient(145deg, rgba(26, 10, 15, 0.92) 0%, rgba(26, 10, 15, 0.86) 65%, ${vizRgba(hex, strong)} 100%)`;
}

function vizPanelBg(hex, soft = 0.04) {
  if (isLightTheme()) {
    return `linear-gradient(160deg, rgba(255, 255, 255, 0.96) 0%, rgba(255, 245, 240, 0.94) 60%, ${vizRgba(hex, soft * 0.7)} 100%)`;
  }
  return `linear-gradient(160deg, rgba(26, 10, 15, 0.94) 0%, rgba(26, 10, 15, 0.90) 60%, ${vizRgba(hex, soft)} 100%)`;
}

function vizPanelShadow() {
  return isLightTheme()
    ? "0 4px 16px rgba(76, 29, 61, 0.08)"
    : "0 4px 24px rgba(0,0,0,0.28)";
}

function parseMetricValue(str) {
  const match = String(str).match(/[\d.]+/);
  return match ? parseFloat(match[0]) : 0;
}

function formatAnimatedValue(num, original) {
  const decimals = (String(original).match(/\.(\d+)/) || [, "2"])[1].length;
  const formatted = num.toFixed(decimals);
  return String(original).includes("%") ? `${formatted}%` : formatted;
}

function animateCount(el, endValue, originalStr, duration = 900) {
  const start = performance.now();
  function tick(now) {
    const t = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - t, 3);
    el.textContent = formatAnimatedValue(endValue * ease, originalStr);
    if (t < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

function buildRadarSVG(stats) {
  if (stats.length < 3) return "";
  const n = stats.length;
  const cx = 120, cy = 120, maxR = 82;
  const levels = 4;

  const rings = [];
  for (let l = levels; l >= 1; l--) {
    const r = (l / levels) * maxR;
    const ringColor = metricColor(levels - l);
    const opacity = 0.14 + (l / levels) * 0.12;
    rings.push(`<circle cx="${cx}" cy="${cy}" r="${r}" fill="${ringColor.fill}" opacity="${opacity}" />`);
  }

  const points = stats.map((s, i) => {
    const angle = (Math.PI * 2 * i / n) - Math.PI / 2;
    const val = Math.min(parseFloat(s.value) / 100, 1);
    const r = val * maxR;
    const lx = cx + (maxR + 24) * Math.cos(angle);
    const ly = cy + (maxR + 24) * Math.sin(angle);
    const short = s.label.length > 12 ? s.label.split(/[\s@]/)[0] : s.label;
    return {
      x: cx + r * Math.cos(angle),
      y: cy + r * Math.sin(angle),
      lx, ly, short,
      color: metricColor(i).fill,
      textColor: metricLabelColor(),
    };
  });

  const polygon = points.map(p => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ");

  const dots = points.map((p, i) =>
    `<g class="radar-point" data-idx="${i}" tabindex="0" role="img"
         aria-label="${stats[i].label}: ${stats[i].value}">
       <circle class="radar-hit" cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="10"
               fill="${p.color}" opacity="0" />
       <circle class="radar-glow" cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="8"
               fill="${p.color}" opacity="0.18" />
       <circle class="radar-dot" cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="3.5"
               fill="${p.color}" />
     </g>`
  ).join("");

  const labels = points.map(p => {
    const anchor = Math.abs(p.lx - cx) < 10 ? "middle" : (p.lx > cx ? "start" : "end");
    const dy = p.ly > cy ? 5 : -3;
    return `<text x="${p.lx.toFixed(1)}" y="${(p.ly + dy).toFixed(1)}" text-anchor="${anchor}" class="radar-label" fill="${p.textColor}">${p.short}</text>`;
  }).join("");

  const light = isLightTheme();
  const centerGlow = light
    ? `<circle cx="${cx}" cy="${cy}" r="${maxR + 6}" fill="${metricColor(0).fill}" opacity="0.06" />`
    : `<circle cx="${cx}" cy="${cy}" r="${maxR + 6}" fill="url(#radarCenterGlow)" />`;

  return `
    <svg class="metrics-radar-svg" viewBox="0 0 240 240" aria-hidden="true">
      <defs>
        <radialGradient id="radarCenterGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="${metricColor(0).fill}" stop-opacity="${light ? 0.08 : 0.28}" />
          <stop offset="55%" stop-color="${metricColor(2).fill}" stop-opacity="${light ? 0.04 : 0.14}" />
          <stop offset="100%" stop-color="${light ? "rgba(255, 248, 240, 0)" : "rgba(26, 10, 15, 0)"}" />
        </radialGradient>
        <linearGradient id="radarPolyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${metricColor(0).fill}" stop-opacity="0.42" />
          <stop offset="45%" stop-color="${metricColor(2).fill}" stop-opacity="0.32" />
          <stop offset="100%" stop-color="${metricColor(4).fill}" stop-opacity="0.26" />
        </linearGradient>
        <filter id="radarSoftGlow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur"/>
          <feMerge>
            <feMergeNode in="blur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      ${centerGlow}
      <g class="radar-rings">${rings.join("")}</g>
      <polygon class="radar-polygon" points="${polygon}" fill="url(#radarPolyGrad)" filter="url(#radarSoftGlow)" />
      <g class="radar-dots">${dots}</g>
      <g class="radar-labels">${labels}</g>
    </svg>`;
}

function initMetricsModal() {
  const modal       = document.getElementById("metricsModal");
  const closeBtn    = document.getElementById("metricsClose");
  const backdrop    = modal.querySelector(".metrics-backdrop");
  const tooltip     = document.getElementById("metricsTooltip");
  const tabsNav     = document.getElementById("metricsTabsNav");
  const tabOverview = document.getElementById("metricsTabOverview");
  const tabBreakdown = document.getElementById("metricsTabBreakdown");
  let activeFilter  = null;
  let activeTab     = "overview";
  let hasBreakdownTab = false;

  function showTooltip(text, x, y) {
    if (!tooltip || !text) return;
    tooltip.textContent = text;
    tooltip.classList.add("visible");
    tooltip.setAttribute("aria-hidden", "false");
    const pad = 12;
    const rect = tooltip.getBoundingClientRect();
    const left = Math.min(x + pad, window.innerWidth - rect.width - pad);
    const top  = Math.max(y - rect.height - pad, pad);
    tooltip.style.left = `${Math.max(left, pad)}px`;
    tooltip.style.top  = `${top}px`;
  }

  function hideTooltip() {
    if (!tooltip) return;
    tooltip.classList.remove("visible");
    tooltip.setAttribute("aria-hidden", "true");
  }

  function setHighlight(idx) {
    const modalBody = modal.querySelector(".metrics-panel-body");
    if (!modalBody) return;
    const allIdx = modalBody.querySelectorAll("[data-idx]");
    allIdx.forEach(el => {
      const match = el.dataset.idx === String(idx);
      el.classList.toggle("is-highlighted", idx !== null && match);
      el.classList.toggle("is-dimmed", idx !== null && !match);
    });
  }

  function setFilter(idx) {
    activeFilter = activeFilter === idx ? null : idx;
    modal.querySelectorAll(".metrics-chart-legend-item").forEach(el => {
      const i = el.dataset.idx;
      el.classList.toggle("is-active", activeFilter !== null && i === String(activeFilter));
      el.classList.toggle("is-dimmed", activeFilter !== null && i !== String(activeFilter));
      el.setAttribute("aria-pressed", activeFilter !== null && i === String(activeFilter) ? "true" : "false");
    });
    setHighlight(activeFilter);
  }

  function switchTab(tab) {
    activeTab = tab;
    if (!hasBreakdownTab) return;

    tabsNav.querySelectorAll(".metrics-tab").forEach(btn => {
      const selected = btn.dataset.tab === tab;
      btn.classList.toggle("is-active", selected);
      btn.setAttribute("aria-selected", selected ? "true" : "false");
    });

    tabOverview.classList.toggle("is-active", tab === "overview");
    tabBreakdown.classList.toggle("is-active", tab === "breakdown");
    tabOverview.hidden = tab !== "overview";
    tabBreakdown.hidden = tab !== "breakdown";
    activeFilter = null;
    setHighlight(null);
    modal.querySelectorAll(".metrics-chart-legend-item").forEach(el => {
      el.classList.remove("is-active", "is-dimmed");
      el.setAttribute("aria-pressed", "false");
    });
  }

  function wireDashboardInteractions(stats) {
    hideTooltip();
    activeFilter = null;

    const bindHover = (el, text) => {
      el.addEventListener("mouseenter", e => showTooltip(text, e.clientX, e.clientY));
      el.addEventListener("mousemove", e => showTooltip(text, e.clientX, e.clientY));
      el.addEventListener("mouseleave", hideTooltip);
      el.addEventListener("focus", () => showTooltip(text, el.getBoundingClientRect().left + 20, el.getBoundingClientRect().top));
      el.addEventListener("blur", hideTooltip);
    };

    modal.querySelectorAll(".metrics-kpi-card[data-idx]").forEach(el => {
      const i = Number(el.dataset.idx);
      const s = stats[i];
      if (!s) return;
      bindHover(el, `${s.label}\n${s.value}${s.sub ? `\n${s.sub}` : ""}`);
      el.addEventListener("mouseenter", () => setHighlight(i));
      el.addEventListener("mouseleave", () => { if (activeFilter === null) setHighlight(null); else setHighlight(activeFilter); });
      el.addEventListener("click", () => setFilter(i));
    });

    modal.querySelectorAll(".metrics-chart-col[data-idx]").forEach(el => {
      const i = Number(el.dataset.idx);
      const s = stats[i];
      if (!s) return;
      bindHover(el, `${s.label}: ${s.value}${s.sub ? ` · ${s.sub}` : ""}`);
      el.addEventListener("mouseenter", () => setHighlight(i));
      el.addEventListener("mouseleave", () => { if (activeFilter === null) setHighlight(null); else setHighlight(activeFilter); });
      el.addEventListener("click", () => setFilter(i));
    });

    modal.querySelectorAll(".metrics-chart-legend-item[data-idx]").forEach(el => {
      const i = Number(el.dataset.idx);
      const s = stats[i];
      if (!s) return;
      el.setAttribute("role", "button");
      el.setAttribute("tabindex", "0");
      el.setAttribute("aria-pressed", "false");
      bindHover(el, `Filter: ${s.label} (${s.value})`);
      const toggle = () => setFilter(i);
      el.addEventListener("click", toggle);
      el.addEventListener("keydown", e => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); }
      });
    });

    modal.querySelectorAll(".radar-point[data-idx]").forEach(el => {
      const i = Number(el.dataset.idx);
      const s = stats[i];
      if (!s) return;
      bindHover(el, `${s.label}: ${s.value}`);
      el.addEventListener("mouseenter", () => setHighlight(i));
      el.addEventListener("mouseleave", () => { if (activeFilter === null) setHighlight(null); else setHighlight(activeFilter); });
      el.addEventListener("click", () => setFilter(i));
      el.addEventListener("keydown", e => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setFilter(i); }
      });
    });

    tabsNav.querySelectorAll(".metrics-tab").forEach(btn => {
      btn.addEventListener("click", () => switchTab(btn.dataset.tab));
      btn.addEventListener("keydown", e => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); switchTab(btn.dataset.tab); }
      });
    });
  }

  function openModal(idx) {
    const p = projects[idx];
    if (!p || !p.metrics) return;

    activeFilter = null;
    activeTab = "overview";
    hideTooltip();

    document.getElementById("modalBadge").textContent   = p.badge || "";
    document.getElementById("modalTitle").textContent   = p.title;
    document.getElementById("modalSummary").textContent = p.metrics.summary || "";

    const statsEl     = document.getElementById("modalStats");
    const chartEl     = document.getElementById("modalChart");
    const perClassEl  = document.getElementById("modalPerClass");
    const placeholder = document.getElementById("modalPlaceholder");
    const stats       = p.metrics.stats    || [];
    const perClass    = p.metrics.perClass || [];
    const hasBreakdown = perClass.length > 0;
    hasBreakdownTab = hasBreakdown;

    // ── Tabs ───────────────────────────────────────────────
    if (hasBreakdown) {
      tabsNav.hidden = false;
      tabsNav.innerHTML = `
        <button type="button" class="metrics-tab is-active" role="tab" data-tab="overview"
                aria-selected="true" aria-controls="metricsTabOverview">Overview</button>
        <button type="button" class="metrics-tab" role="tab" data-tab="breakdown"
                aria-selected="false" aria-controls="metricsTabBreakdown">Class Breakdown</button>`;
      tabOverview.hidden = false;
      tabBreakdown.hidden = true;
      tabOverview.classList.add("is-active");
      tabBreakdown.classList.remove("is-active");
    } else {
      tabsNav.hidden = true;
      tabsNav.innerHTML = "";
      tabOverview.hidden = false;
      tabBreakdown.hidden = true;
      tabOverview.classList.add("is-active");
    }

    // ── KPI cards ──────────────────────────────────────────
    if (stats.length > 0) {
      statsEl.innerHTML = stats.map((s, i) => {
        const c = metricColor(i);
        return `
        <div class="metrics-kpi-card" data-idx="${i}" tabindex="0"
             style="--metric-tint:${c.fill};background:${vizCardBg(c.fill)};box-shadow:inset 0 1px 0 ${vizRgba(c.fill, 0.14)}">
          <div class="metrics-kpi-accent" style="background:${c.fill};box-shadow:0 0 10px ${c.glow}"></div>
          <div class="metrics-kpi-body">
            <span class="metrics-kpi-value" data-raw="${s.value}" style="color:${metricTextColor()}">0</span>
            <span class="metrics-kpi-label">${s.label}</span>
            ${s.sub ? `<span class="metrics-kpi-sub">${s.sub}</span>` : ""}
          </div>
        </div>`;
      }).join("");
      statsEl.style.display = "grid";
      placeholder.style.display = "none";
    } else {
      statsEl.style.display = "none";
      placeholder.style.display = "flex";
    }

    // ── Radar + bar charts ─────────────────────────────────
    const CHART_H = 150;
    if (stats.length > 0) {
      const gridlines = [100, 75, 50, 25].map(pct =>
        `<div class="metrics-gridline" style="top: ${100 - pct}%"></div>`
      ).join("");

      const bars = stats.map((s, i) => {
        const c = metricColor(i);
        const barH  = (parseFloat(s.value) / 100) * CHART_H;
        const lblPx = barH + 6;
        return `
          <div class="metrics-chart-col" data-idx="${i}" tabindex="0"
               style="background:${vizRgba(c.fill, 0.08)};box-shadow:inset 0 1px 0 ${vizRgba(c.fill, 0.12)}">
            <span class="chart-val-label" style="bottom: ${lblPx}px;color:${metricTextColor()}">${s.value}</span>
            <div class="chart-bar" data-h="${barH}" data-color="${c.fill}" data-idx="${i}"
                 style="height:0;background:${c.fill};box-shadow:0 0 14px ${c.glow}"></div>
          </div>`;
      }).join("");

      const xLabels = stats.map(s => `<span class="chart-x-label">${s.label}</span>`).join("");

      const yLabels = ["100%", "75%", "50%", "25%"].map((lbl, i) =>
        `<span style="top: ${i * 25}%">${lbl}</span>`
      ).join("");

      const legend = stats.map((s, i) => {
        const c = metricColor(i);
        return `<span class="metrics-chart-legend-item" data-idx="${i}">
          <span class="metrics-chart-legend-swatch" style="background:${c.fill};box-shadow:0 0 6px ${c.glow}"></span>
          ${s.label}
        </span>`;
      }).join("");

      const radarTint = metricColor(2);
      const barTint = metricColor(0);
      const radarBlock = stats.length >= 3 ? `
        <div class="metrics-glass-panel metrics-radar-panel" style="--metric-tint:${radarTint.fill};background:${vizPanelBg(radarTint.fill)};box-shadow:inset 0 1px 0 ${vizRgba(radarTint.fill, isLightTheme() ? 0.20 : 0.14)}, ${vizPanelShadow()}">
          <div class="metrics-section-hdr">
            <span class="metrics-section-label">Performance Radar</span>
            <span class="metrics-section-meta">${stats.length} metrics · hover to inspect</span>
          </div>
          <div class="metrics-radar-wrap">${buildRadarSVG(stats)}</div>
        </div>` : "";

      chartEl.innerHTML = `
        <div class="metrics-viz-grid${stats.length >= 3 ? "" : " metrics-viz-single"}">
          ${radarBlock}
          <div class="metrics-glass-panel metrics-bar-panel" style="--metric-tint:${barTint.fill};background:${vizPanelBg(barTint.fill)};box-shadow:inset 0 1px 0 ${vizRgba(barTint.fill, isLightTheme() ? 0.20 : 0.14)}, ${vizPanelShadow()}">
            <div class="metrics-section-hdr">
              <span class="metrics-section-label">Metric Overview</span>
              <span class="metrics-section-meta">Test set · click legend to filter</span>
            </div>
            <div class="metrics-chart-outer">
              <div class="metrics-chart-yaxis">${yLabels}</div>
              <div class="metrics-chart-right">
                <div class="metrics-chart-area">
                  <div class="metrics-chart-grid">${gridlines}</div>
                  <div class="metrics-chart-bars">${bars}</div>
                </div>
                <div class="metrics-chart-xaxis">${xLabels}</div>
              </div>
            </div>
            <div class="metrics-chart-legend">${legend}</div>
          </div>
        </div>`;
      chartEl.style.display = "block";
    } else {
      chartEl.style.display = "none";
    }

    // ── Per-class breakdown ───────────────────────────────
    if (hasBreakdown) {
      const panelTint = metricColor(4);
      perClassEl.innerHTML = `
        <div class="metrics-glass-panel metrics-perclass-panel" style="--metric-tint:${panelTint.fill};background:${vizPanelBg(panelTint.fill)};box-shadow:inset 0 1px 0 ${vizRgba(panelTint.fill, isLightTheme() ? 0.20 : 0.14)}, ${vizPanelShadow()}">
        <div class="metrics-section-hdr">
          <span class="metrics-section-label">Performance Breakdown</span>
          <span class="metrics-section-meta">AUC-ROC per class</span>
        </div>
        ${perClass.map((c, i) => {
          const col = metricColor(i);
          return `
          <div class="metrics-perclass-row" style="--metric-tint:${col.fill};background:${vizCardBg(col.fill)};box-shadow:inset 0 1px 0 ${vizRgba(col.fill, 0.12)}">
            <div class="metrics-perclass-top">
              <span class="metrics-perclass-label">${c.label}</span>
              <div class="metrics-perclass-right">
                ${c.best
                  ? `<span class="metrics-perclass-badge best">Best</span>`
                  : `<span class="metrics-perclass-badge worst">Lowest</span>`}
                <span class="metrics-perclass-value" data-raw="${c.value}">0.00%</span>
              </div>
            </div>
            <div class="metrics-bar-track">
              <div class="metrics-bar-fill"
                   data-w="${c.value}%"
                   style="width:0;background:${col.fill};--bar-glow:${col.glow}"></div>
            </div>
          </div>`;
        }).join("")}
        <div class="metrics-footer">
          <span class="metrics-legend-item">
            <span class="metrics-legend-dot dot-viz-best"></span>Best performing class
          </span>
          <span class="metrics-legend-item">
            <span class="metrics-legend-dot dot-viz-worst"></span>Lowest performing class
          </span>
          <span class="metrics-legend-item">
            <span class="metrics-legend-dot dot-viz-cycle"></span>Per-class color key
          </span>
        </div>
        </div>`;
      perClassEl.style.display = "block";
    } else {
      perClassEl.style.display = "none";
      perClassEl.innerHTML = "";
    }

    modal.classList.add("open");
    document.body.style.overflow = "hidden";

    wireDashboardInteractions(stats);

    // Animate after paint — bars grow, numbers count up
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        perClassEl.querySelectorAll(".metrics-bar-fill").forEach(bar => {
          bar.style.width = bar.dataset.w;
        });
        chartEl.querySelectorAll(".chart-bar").forEach(bar => {
          bar.style.height = bar.dataset.h + "px";
        });
        const poly = chartEl.querySelector(".radar-polygon");
        if (poly) poly.classList.add("radar-polygon-visible");

        statsEl.querySelectorAll(".metrics-kpi-value[data-raw]").forEach(el => {
          const raw = el.dataset.raw;
          animateCount(el, parseMetricValue(raw), raw);
        });
        perClassEl.querySelectorAll(".metrics-perclass-value[data-raw]").forEach(el => {
          const raw = parseFloat(el.dataset.raw);
          animateCount(el, raw, `${raw.toFixed(2)}%`);
        });
      });
    });
  }

  function closeModal() {
    modal.classList.remove("open");
    document.body.style.overflow = "";
    hideTooltip();
    activeFilter = null;
  }

  closeBtn.addEventListener("click", closeModal);
  backdrop.addEventListener("click", closeModal);
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

  openMetricsModalFn = openModal;
}

function initVideoModal() {
  const modal    = document.getElementById("videoModal");
  const closeBtn = document.getElementById("videoClose");
  const backdrop = modal.querySelector(".video-backdrop");
  const panel    = modal.querySelector(".video-panel");
  const player   = document.getElementById("videoPlayer");
  const source   = document.getElementById("videoSource");
  const titleEl  = document.getElementById("videoModalTitle");

  function sizeVideoPanel() {
    const vw = player.videoWidth;
    const vh = player.videoHeight;
    if (!vw || !vh) return;
    const ratio = vw / vh;
    const maxW = Math.min(860, window.innerWidth * 0.94);
    const headerH = modal.querySelector(".video-panel-header")?.offsetHeight || 60;
    const maxVideoH = window.innerHeight * 0.8 - headerH;
    let w = maxW;
    let h = w / ratio;
    if (h > maxVideoH) {
      h = maxVideoH;
      w = h * ratio;
    }
    panel.style.width = `${Math.round(w)}px`;
  }

  player.addEventListener("loadedmetadata", sizeVideoPanel);
  window.addEventListener("resize", () => {
    if (modal.classList.contains("open")) sizeVideoPanel();
  });

  function openVideo(src, title) {
    source.src = src;
    source.type = src.endsWith('.mov') ? 'video/quicktime' : 'video/mp4';
    titleEl.textContent = title;
    panel.style.width = "";
    player.load();
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeVideo() {
    modal.classList.remove("open");
    player.pause();
    source.src = "";
    panel.style.width = "";
    document.body.style.overflow = "";
  }

  closeBtn.addEventListener("click", closeVideo);
  backdrop.addEventListener("click", closeVideo);
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeVideo(); });

  openVideoModalFn = openVideo;
}

function initProjectCardClicks() {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;

  grid.addEventListener("click", e => {
    const metricsBtn = e.target.closest(".card-metrics-btn");
    if (metricsBtn) {
      e.stopPropagation();
      openMetricsModalFn?.(Number(metricsBtn.dataset.idx));
      return;
    }

    const videoBtn = e.target.closest(".card-link-video");
    if (videoBtn) {
      e.stopPropagation();
      e.preventDefault();
      openVideoModalFn?.(videoBtn.dataset.video, videoBtn.dataset.title);
    }
  });
}

function initProjectsDrag() {
  const wrap = document.querySelector(".projects-scroll-wrap");
  if (!wrap) return;

  const DRAG_THRESHOLD = 6;
  const FRICTION = 0.92;
  const MIN_VELOCITY = 0.35;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let pointerActive = false;
  let dragging = false;
  let startX = 0;
  let scrollLeft = 0;
  let lastX = 0;
  let lastTime = 0;
  let velocity = 0;
  let momentumId = null;

  const isInteractive = target => target.closest(PROJECTS_INTERACTIVE);

  const clampScroll = () => {
    const max = Math.max(0, wrap.scrollWidth - wrap.clientWidth);
    wrap.scrollLeft = Math.max(0, Math.min(wrap.scrollLeft, max));
  };

  const stopMomentum = () => {
    if (momentumId) {
      cancelAnimationFrame(momentumId);
      momentumId = null;
    }
  };

  const runMomentum = () => {
    if (Math.abs(velocity) < MIN_VELOCITY) {
      momentumId = null;
      return;
    }
    wrap.scrollLeft -= velocity;
    velocity *= FRICTION;
    clampScroll();
    if (Math.abs(velocity) >= MIN_VELOCITY) {
      momentumId = requestAnimationFrame(runMomentum);
    } else {
      momentumId = null;
    }
  };

  const endDrag = () => {
    pointerActive = false;
    dragging = false;
    wrap.classList.remove("is-dragging");
  };

  const onPointerMove = e => {
    if (!pointerActive) return;

    const dx = e.clientX - startX;
    if (!dragging && Math.abs(dx) > DRAG_THRESHOLD) {
      dragging = true;
      wrap.classList.add("is-dragging");
      lastX = e.clientX;
      lastTime = performance.now();
      velocity = 0;
    }
    if (!dragging) return;

    e.preventDefault();

    const now = performance.now();
    const dt = now - lastTime;
    if (dt > 0) {
      velocity = (e.clientX - lastX) / dt * 16;
      lastX = e.clientX;
      lastTime = now;
    }

    wrap.scrollLeft = scrollLeft - dx;
    clampScroll();
  };

  const onPointerEnd = () => {
    document.removeEventListener("pointermove", onPointerMove);
    document.removeEventListener("pointerup", onPointerEnd);
    document.removeEventListener("pointercancel", onPointerEnd);

    if (dragging && !reducedMotion && Math.abs(velocity) >= MIN_VELOCITY) {
      runMomentum();
    }

    endDrag();
  };

  wrap.addEventListener("pointerdown", e => {
    if (e.pointerType !== "mouse" || e.button !== 0) return;
    if (isInteractive(e.target)) return;

    stopMomentum();
    pointerActive = true;
    dragging = false;
    startX = e.clientX;
    scrollLeft = wrap.scrollLeft;
    lastX = e.clientX;
    lastTime = performance.now();
    velocity = 0;

    document.addEventListener("pointermove", onPointerMove, { passive: false });
    document.addEventListener("pointerup", onPointerEnd);
    document.addEventListener("pointercancel", onPointerEnd);
  });

  wrap.addEventListener("wheel", e => {
    if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;
    stopMomentum();
  }, { passive: true });
}

function initProjectsScrollHint() {
  const wrap = document.querySelector(".projects-scroll-wrap");
  const hint = document.getElementById("projectsScrollHint");
  if (!wrap || !hint) return;

  const mobileMq = window.matchMedia("(max-width: 900px)");
  let dismissed = false;
  let autoTimer = null;

  const dismiss = () => {
    if (dismissed) return;
    dismissed = true;
    hint.classList.add("is-hidden");
    wrap.removeEventListener("scroll", onScroll);
    if (autoTimer) {
      clearTimeout(autoTimer);
      autoTimer = null;
    }
  };

  const onScroll = () => {
    if (wrap.scrollLeft > 6) dismiss();
  };

  const refresh = () => {
    wrap.removeEventListener("scroll", onScroll);
    if (autoTimer) {
      clearTimeout(autoTimer);
      autoTimer = null;
    }

    if (!mobileMq.matches) {
      dismissed = true;
      hint.classList.add("is-hidden");
      return;
    }

    const canScroll = wrap.scrollWidth > wrap.clientWidth + 4;
    if (!canScroll) {
      dismissed = true;
      hint.classList.add("is-hidden");
      return;
    }

    dismissed = false;
    hint.classList.remove("is-hidden");
    wrap.addEventListener("scroll", onScroll, { passive: true });
    autoTimer = setTimeout(dismiss, 4000);
  };

  refresh();
  mobileMq.addEventListener("change", refresh);
  window.addEventListener("resize", refresh, { passive: true });
}

document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle();
  renderProjects();
  initNavbar();
  initMobileMenu();
  initMorphTicker();
  initHeroReveal();
  initContactHeadline();
  initProjectsDrag();
  initProjectsScrollHint();
  initMetricsModal();
  initVideoModal();
  initProjectCardClicks();
  fixProjectsHashScroll();

  requestAnimationFrame(() => {
    initReveal();
    initActiveNav();
    initCursorGlow();
    fixProjectsHashScroll();
  });
});
