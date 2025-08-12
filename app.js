/*
  Portfolio Shell JS
  - Small, defer-loaded, no dependencies
  - Theme and language toggles with localStorage
  - Active link highlighting via IntersectionObserver
  - Mobile drawer with ESC + focus trap
  - Projects filter chips
  - Simple contact validation with mailto fallback
  - Resume mode when path is /resume (hide nav etc.)
*/

// i18n dictionary (placeholders). Replace text later.
const i18n = {
  en: {
    siteName: "Portfolio",
    navHome: "Home",
    navProjects: "Projects",
    navDemos: "Demos",
    navExperience: "Experience",
    navAbout: "About",
    navContact: "Contact",
    ctaCV: "CV",
    heroTitle: "Industrial IoT & Automation Engineer",
    heroSubtitle: "I design end-to-end IIoT systems that turn factory data into real-time decisions.",
    ctaDownloadCV: "Download CV",
    ctaContact: "Contact",
    projectsTitle: "Projects",
    demosTitle: "Demos & Templates",
    experienceTitle: "Experience",
    aboutTitle: "About",
    contactTitle: "Contact",
    footerCopyright: "All rights reserved.",
  },
  es: {
    siteName: "Portafolio",
    navHome: "Inicio",
    navProjects: "Proyectos",
    navDemos: "Demos",
    navExperience: "Experiencia",
    navAbout: "Acerca",
    navContact: "Contacto",
    ctaCV: "CV",
    heroTitle: "Ingeniero de IIoT y Automatización",
    heroSubtitle: "Diseño soluciones IIoT de punta a punta que convierten datos de planta en decisiones en tiempo real.",
    ctaDownloadCV: "Descargar CV",
    ctaContact: "Contacto",
    projectsTitle: "Proyectos",
    demosTitle: "Demos y Templates",
    experienceTitle: "Experiencia",
    aboutTitle: "Acerca de mí",
    contactTitle: "Contacto",
    footerCopyright: "Todos los derechos reservados.",
  },
};

(function () {
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  // Year in footer
  const y = new Date().getFullYear();
  const yEl = $("#year");
  if (yEl) yEl.textContent = String(y);

  // Detect resume mode (/resume)
  if (location.pathname.endsWith("/resume")) {
    document.documentElement.classList.add("resume-mode");
  }

  // Theme toggle: respect prefers-color-scheme
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedTheme = localStorage.getItem('theme');
  const theme = savedTheme || (prefersDark ? 'dark' : 'light');
  setTheme(theme);

  function setTheme(next) {
    document.documentElement.setAttribute('data-theme', next);
    const pressed = next === 'dark';
    $$('#theme-toggle, #theme-toggle-m').forEach(btn => btn && btn.setAttribute('aria-pressed', String(pressed)));
    localStorage.setItem('theme', next);
  }
  function toggleTheme() { setTheme((document.documentElement.getAttribute('data-theme') === 'dark') ? 'light' : 'dark'); toast('Theme updated'); }
  $$('#theme-toggle, #theme-toggle-m').forEach(btn => btn?.addEventListener('click', toggleTheme));

  // Language toggle and content rendering
  const detected = (localStorage.getItem('lang') || (navigator.language || 'en').slice(0,2)).toLowerCase();
  const initialLang = (detected === 'es') ? 'es' : 'en';
  const content = {
    en: {
      hero: {
        name: 'Rodrigo Aliaga',
        title: 'Industrial IoT & Automation Engineer (Lean Six Sigma Black Belt)',
        summary: 'Industrial IoT & Automation engineer with international delivery across LATAM, UAE and KSA. I integrate PLCs, gateways, MQTT/OPC‑UA, and time‑series databases with clean dashboards and robust data acquisition in Python. I also lead maintenance and reliability initiatives grounded in Lean Six Sigma and RCM, consistently improving uptime, throughput, and safety.',
        oneLiner: 'I design, deploy, and scale end‑to‑end IIoT & automation systems that turn factory data into reliable, real‑time decisions.',
        ctas: { contactHref: '#contact', linkedinHref: 'https://linkedin.com/in/raliagav', cvHref: '/resume' },
        tldr: ['+31% throughput', 'MTBF 18h→165h', 'MQTT · OPC‑UA · Grafana']
      },
      projects: [
        {
          category: 'automation',
          title: 'Brewery Degermination Line Reliability Uplift',
          context: 'AB InBev, La Paz–El Alto',
          what: 'Led maintenance + automation strategy, upgraded controls, tightened spares/KPIs.',
          impact: ['Stoppages 30→4/month', 'MTBF 18h→165h', 'MTTR 6h→42min', '>30% production (2× dispatch capacity)'],
        },
        {
          category: 'automation',
          title: 'Packaging Line Automation & Controls',
          context: 'AB InBev, Santa Cruz',
          what: 'Led automation/controls modernization and line improvements.',
          impact: ['+31% production in two years'],
        },
        {
          category: 'iiot',
          title: 'IIoT for Water Plants (KSA & Dubai)',
          context: 'Fogsphere (remote, UK)',
          what: 'Teltonika gateways; MQTT (EMQX); OPC‑UA/Profinet/PCCC; Grafana; InfluxDB/MongoDB/PostgreSQL; Docker on Linux.',
          impact: ['Standardized data acquisition/visualization for SWRO and municipal sites'],
        },
        {
          category: 'energy',
          title: 'Plant‑wide Energy Metering (Modbus RTU)',
          context: 'AB InBev',
          what: 'IIoT for 15 electrical meters with Grafana dashboards for energy & production KPIs.',
          impact: ['Real‑time visibility and cost tracking for utilities'],
        },
      ],
      experience: [
        {
          period: 'Jun 2023–Present',
          role: 'IoT & Automation Engineer · Fogsphere',
          bullets: [
            'Integrate Siemens/Mitsubishi/Allen‑Bradley PLCs; configure Teltonika gateways; EMQX MQTT + OPC‑UA.',
            'Python data collectors; Grafana; Docker; QA for data reliability.',
            'Deliver IIoT deployments for KSA water plants and Dubai SWRO.'
          ]
        },
        {
          period: '2017–2022',
          role: 'Maintenance & Automation · AB InBev',
          bullets: [
            'Led teams (up to 41). RCM plans, shutdowns, KPI governance (MPA/MTTR/MTBF/OEE).',
            'Automated packaging line (+31%); 3D safety device (~400 units).',
            'Energy metering (15 Modbus RTU); PLC obsolescence 12%→85%.',
            'Safety programs: ESM 16%→70%, SSM 70%→96%.'
          ]
        },
        {
          period: '2016–2017',
          role: 'Project Engineer · Rugged Controls SRL',
          bullets: ['Industrial automation; electrical drawings; control panels; migrations; web apps.']
        },
        {
          period: '2014–2016',
          role: 'Software & Microelectronics · PFM',
          bullets: ['Cleanroom metrology; production journaling platform; PCB assembly and MCU programming.']
        }
      ],
      about: {
        bio: 'Industrial IoT & Automation engineer with international delivery across LATAM, UAE and KSA. I integrate PLCs, gateways, MQTT/OPC‑UA, and time‑series databases with clean dashboards and robust data acquisition in Python. I also lead maintenance and reliability initiatives grounded in Lean Six Sigma and RCM, consistently improving uptime, throughput, and safety.',
        skills: ['Siemens TIA Portal','Allen‑Bradley','Mitsubishi','OPC‑UA','Profinet','Profibus','PCCC','Modbus TCP/RTU','Teltonika','MQTT (EMQX)','Node‑RED','InfluxDB','MongoDB','PostgreSQL','Grafana','Python','JavaScript','HTML/CSS','Docker','Linux','Power BI','SAP R/3','Lean Six Sigma Black Belt','RCM','Agile/SCRUM'],
        certs: ['Lean Six Sigma Black Belt','Scrum Foundation Professional Certificate (CertiProf)','HiveMQ Associate (v3.1.1)','OPC‑UA/MQTT/Azure IoT & Industry 4.0','ABB PLCs & Industrial Instrumentation','Electrical/Ammonia Safety (ESM/PSM)','Industrial Services'],
        education: [
          'M.Sc. Corporate Management in Industry 4.0 (in progress) — LSSI & UCAM',
          'B.Eng. Mechatronics — Universidad Católica Boliviana “San Pablo”',
          'Graduate Certificates: Agile PM; Instrumentation & Advanced Process Control; Automation in Mechatronic Processes',
          'Diploma: Teaching & Curriculum Design'
        ],
        publications: ['Technical Reviewer — Practical IoT Handbook (BPB, 2025). Areas: IIoT, MQTT/CoAP, Raspberry Pi, InfluxDB, Grafana.']
      },
      contact: { email: 'rodrigo.aliaga.velez@gmail.com', linkedin: 'https://linkedin.com/in/raliagav' }
    },
    es: {
      hero: {
        name: 'Rodrigo Aliaga',
        title: 'Ingeniero de IIoT y Automatización (Lean Six Sigma Black Belt)',
        summary: 'Ingeniero de IIoT y Automatización con entregas internacionales (LATAM, EAU y Arabia Saudita). Integro PLCs, gateways, MQTT/OPC‑UA y bases de datos de series temporales con dashboards claros y adquisición robusta de datos en Python. Lidero iniciativas de mantenimiento y confiabilidad con Lean Six Sigma y RCM, mejorando disponibilidad, rendimiento y seguridad.',
        oneLiner: 'Diseño y despliego soluciones IIoT de punta a punta que convierten datos de planta en decisiones confiables en tiempo real.',
        ctas: { contactHref: '#contact', linkedinHref: 'https://linkedin.com/in/raliagav', cvHref: '/resume' },
        tldr: ['+31% producción', 'MTBF 18h→165h', 'MQTT · OPC‑UA · Grafana']
      },
      projects: [
        { category: 'automation', title: 'Confiabilidad Línea de Desgerminado (Cervecería)', context: 'AB InBev, La Paz–El Alto', what: 'Estrategia de mantenimiento y automatización; upgrades de control; repuestos/KPIs.', impact: ['30→4 paradas/mes','MTBF 18h→165h','MTTR 6h→42min','>30% producción (2× despacho)'] },
        { category: 'automation', title: 'Automatización y Control en Empaque', context: 'AB InBev, Santa Cruz', what: 'Modernización de automatización/control y mejoras de línea.', impact: ['+31% producción en 2 años'] },
        { category: 'iiot', title: 'IIoT para Plantas de Agua (KSA y Dubái)', context: 'Fogsphere (remoto, UK)', what: 'Gateways Teltonika; MQTT (EMQX); OPC‑UA/Profinet/PCCC; Grafana; InfluxDB/MongoDB/PostgreSQL; Docker en Linux.', impact: ['Estandarización de adquisición/visualización para SWRO y municipales'] },
        { category: 'energy', title: 'Medición Energética Planta (Modbus RTU)', context: 'AB InBev', what: 'IIoT para 15 medidores y dashboards Grafana de energía y KPIs de producción.', impact: ['Visibilidad en tiempo real y costos de utilidades'] },
      ],
      experience: [
        { period: 'jun 2023–actual', role: 'IoT & Automation Engineer · Fogsphere', bullets: ['Integración de PLCs Siemens/Mitsubishi/Allen‑Bradley; gateways Teltonika; EMQX + OPC‑UA.', 'Collectors en Python; Grafana; Docker; QA de datos.', 'Despliegues IIoT para plantas de agua (KSA/Dubái).'] },
        { period: '2017–2022', role: 'Mantenimiento & Automatización · AB InBev', bullets: ['Liderazgo (hasta 41). RCM, paradas, KPIs (MPA/MTTR/MTBF/OEE).', 'Empaque +31%; dispositivo 3D (~400 uds.).', 'Medición eléctrica (15 Modbus RTU); obsolescencia PLC 12%→85%.', 'Seguridad: ESM 16%→70%, SSM 70%→96%.'] },
        { period: '2016–2017', role: 'Ing. de Proyectos · Rugged Controls SRL', bullets: ['Automatización; diagramas; tableros; migraciones; apps web.'] },
        { period: '2014–2016', role: 'Software & Microelectrónica · PFM', bullets: ['Metrología; plataforma de producción; PCBs y MCUs.'] },
      ],
      about: {
        bio: 'Ingeniero de IIoT y Automatización con entregas internacionales (LATAM, EAU y Arabia Saudita). Integro PLCs, gateways, MQTT/OPC‑UA y TSDB con dashboards claros y adquisición robusta en Python. Lidero mantenimiento y confiabilidad (Lean Six Sigma y RCM) mejorando disponibilidad, rendimiento y seguridad.',
        skills: ['Siemens TIA Portal','Allen‑Bradley','Mitsubishi','OPC‑UA','Profinet','Profibus','PCCC','Modbus TCP/RTU','Teltonika','MQTT (EMQX)','Node‑RED','InfluxDB','MongoDB','PostgreSQL','Grafana','Python','JavaScript','HTML/CSS','Docker','Linux','Power BI','SAP R/3','Lean Six Sigma Black Belt','RCM','Agile/SCRUM'],
        certs: ['Lean Six Sigma Black Belt','Scrum Foundation (CertiProf)','HiveMQ Associate','OPC‑UA/MQTT/Azure IoT & Ind. 4.0','Instrumentación/ABB PLCs','Seguridad Eléctrica y de Amoniaco (ESM/PSM)','Servicios Industriales'],
        education: ['Maestría en Dirección Corporativa en Industria 4.0 (en curso) — LSSI & UCAM', 'Ing. Mecatrónica — U. Católica Boliviana “San Pablo”', 'Posgrados: Gestión Ágil; Instrumentación y Control Avanzado; Automatización', 'Diploma: Educación y Diseño Curricular'],
        publications: ['Revisor Técnico — Practical IoT Handbook (BPB, 2025).']
      },
      contact: { email: 'rodrigo.aliaga.velez@gmail.com', linkedin: 'https://linkedin.com/in/raliagav' }
    }
  };
  setLang(initialLang);

  function setLang(lang) {
    document.documentElement.lang = lang;
    localStorage.setItem('lang', lang);
    const dict = i18n[lang];
    $$('[data-i18n-key]').forEach(el => {
      const key = el.getAttribute('data-i18n-key');
      if (!key) return;
      if (dict[key] !== undefined) el.textContent = dict[key];
    });
    // Update switches state
    const checked = lang === 'es';
    $$('#lang-toggle, #lang-toggle-m').forEach(sw => sw?.setAttribute('aria-checked', String(checked)));

    // Render content from copy
    const c = content[lang];
    // Hero
    const heroTitle = $('#hero-title');
    if (heroTitle) heroTitle.textContent = `${c.hero.name} — ${c.hero.title}`;
    const heroSubtitle = $('#hero-subtitle');
    const heroSummary = $('#hero-summary');
    if (heroSummary) heroSummary.textContent = c.hero.summary;
    if (heroSubtitle) heroSubtitle.textContent = c.hero.oneLiner;
    const btnContact = $('#cta-contact'); if (btnContact) btnContact.textContent = (lang==='es'?'Contacto':'Contact');
    const btnLinkedIn = $('#cta-linkedin'); if (btnLinkedIn) { btnLinkedIn.textContent = 'LinkedIn'; btnLinkedIn.href = c.hero.ctas.linkedinHref; }
    const btnCV = $('#cta-cv'); if (btnCV) { btnCV.textContent = (lang==='es'?'Descargar CV':'Download CV'); btnCV.href = c.hero.ctas.cvHref; }
    const badges = $('#tldr-badges'); if (badges) { badges.innerHTML=''; c.hero.tldr.forEach(t => { const li=document.createElement('li'); li.textContent=t; badges.appendChild(li); }); }

    // Projects
    const grid = $('#projects-grid');
    if (grid) {
      grid.innerHTML='';
      c.projects.forEach(p => {
        const art = document.createElement('article');
        art.className = 'card'; art.setAttribute('data-category', p.category);
        art.innerHTML = `
          <header>
            <h3>${p.title}</h3>
            <p class="muted">${p.context}</p>
          </header>
          <div class="body">
            <p>${(lang==='es'?'Qué hice: ':'What I did: ')}${p.what}</p>
            <ul class="impact">${p.impact.map(i=>`<li>${i}</li>`).join('')}</ul>
          </div>
          <footer>
            <button class="btn small ghost" data-modal-open>${lang==='es'?'Detalles':'Details'}</button>
          </footer>
        `;
        grid.appendChild(art);
      });
    }

    // Experience
    const timeline = $('#timeline');
    if (timeline) {
      timeline.innerHTML='';
      c.experience.forEach(item => {
        const li = document.createElement('li'); li.className='timeline-item';
        li.innerHTML = `
          <div class="time">${item.period}</div>
          <div class="content">
            <h3>${item.role}</h3>
            <ul class="bullets">${item.bullets.map(b=>`<li>${b}</li>`).join('')}</ul>
          </div>
        `;
        timeline.appendChild(li);
      });
    }

    // About
    const bio = $('#about-bio'); if (bio) bio.textContent = c.about.bio;
    const skills = $('#skills-list'); if (skills) { skills.innerHTML=''; c.about.skills.forEach(s=>{ const li=document.createElement('li'); li.textContent=s; skills.appendChild(li);}); }
    const certs = $('#certs-list'); if (certs) { certs.innerHTML=''; c.about.certs.forEach(s=>{ const li=document.createElement('li'); li.textContent=s; certs.appendChild(li);}); }
    const edu = $('#edu-list'); if (edu) { edu.innerHTML=''; c.about.education.forEach(s=>{ const li=document.createElement('li'); li.textContent=s; edu.appendChild(li);}); }

    // Contact links
    const emailBtn = $('#btn-email'); if (emailBtn) emailBtn.href = `mailto:${c.contact.email}`;
    const linkedinBtn = $('#btn-linkedin'); if (linkedinBtn) linkedinBtn.href = c.contact.linkedin;
    const cvBtnHeader = $('#cv-button'); if (cvBtnHeader) cvBtnHeader.href = c.hero.ctas.cvHref;
  }
  function toggleLang() {
    const next = (localStorage.getItem('lang') === 'es') ? 'en' : 'es';
    setLang(next);
    toast('Language updated');
  }
  $$('#lang-toggle, #lang-toggle-m').forEach(sw => sw?.addEventListener('click', toggleLang));

  // Active section highlighting via IntersectionObserver
  const sections = ['home','projects','demos','experience','about','contact'];
  const navLinks = new Map(sections.map(id => [id, $$(`a[href="#${id}"]`)]));
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach((links, key) => links.forEach(a => a.classList.toggle('active', key === id)));
      }
    });
  }, { rootMargin: '-40% 0px -50% 0px', threshold: 0.01 });
  sections.forEach(id => { const el = document.getElementById(id); if (el) io.observe(el); });

  // Mobile drawer: open/close + ESC + focus trap
  const drawer = $('#mobile-drawer');
  const overlay = $('#mobile-overlay');
  const menuBtn = $('#menu-toggle');
  const closeBtn = $('#menu-close');
  const focusableSelector = 'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';
  let prevFocused = null;
  function openDrawer() {
    prevFocused = document.activeElement;
    drawer?.setAttribute('aria-hidden', 'false');
    overlay?.removeAttribute('hidden');
    menuBtn?.setAttribute('aria-expanded', 'true');
    trapFocus(drawer);
  }
  function closeDrawer() {
    drawer?.setAttribute('aria-hidden', 'true');
    overlay?.setAttribute('hidden', '');
    menuBtn?.setAttribute('aria-expanded', 'false');
    if (prevFocused) prevFocused.focus();
  }
  function onKeydown(e) {
    if (e.key === 'Escape') closeDrawer();
  }
  function trapFocus(container) {
    const f = $$(focusableSelector, container);
    const first = f[0]; const last = f[f.length - 1];
    first?.focus();
    function loop(e) {
      if (e.key !== 'Tab') return;
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last?.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first?.focus(); }
    }
    container.addEventListener('keydown', loop);
    overlay?.addEventListener('click', closeDrawer, { once: true });
    closeBtn?.addEventListener('click', closeDrawer, { once: true });
    document.addEventListener('keydown', onKeydown, { once: true });
  }
  menuBtn?.addEventListener('click', openDrawer);
  // Close on drawer link click
  $$('.drawer-link').forEach(a => a.addEventListener('click', closeDrawer));

  // Projects filter chips
  const chips = $$('.filters .chip');
  const cards = $$('#projects-grid .card');
  chips.forEach(chip => chip.addEventListener('click', () => {
    const val = chip.getAttribute('data-filter');
    chips.forEach(c => c.classList.toggle('active', c === chip));
    cards.forEach(card => {
      const cat = card.getAttribute('data-category');
      const show = (val === 'all') || (cat === val);
      card.style.display = show ? '' : 'none';
    });
  }));

  // Project modal (simple placeholder content)
  const modal = $('#project-modal');
  const modalClose = $('#modal-close');
  $$('[data-modal-open]').forEach(btn => btn.addEventListener('click', () => {
    modal?.removeAttribute('hidden');
    trapModal(modal);
  }));
  modalClose?.addEventListener('click', () => modal?.setAttribute('hidden', ''));
  function trapModal(container) {
    const f = $$(focusableSelector, container);
    const first = f[0]; const last = f[f.length-1];
    first?.focus();
    function loop(e){ if(e.key==='Tab'){ if(e.shiftKey && document.activeElement===first){e.preventDefault(); last?.focus();} else if(!e.shiftKey && document.activeElement===last){e.preventDefault(); first?.focus();}} if(e.key==='Escape'){container.setAttribute('hidden','');}}
    container.addEventListener('keydown', loop, { once: false });
  }

  // Contact form validation + mailto fallback
  const form = $('#contact-form');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = $('#name').value.trim();
    const email = $('#email').value.trim();
    const message = $('#message').value.trim();
    if (!name || !email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) || !message) {
      alert('Please fill in Name, valid Email, and Message.');
      return;
    }
    console.log({ name, email, message });
    const subject = encodeURIComponent('Portfolio contact');
    const body = encodeURIComponent(`From: ${name} <${email}>\n\n${message}`);
    location.href = `mailto:you@example.com?subject=${subject}&body=${body}`;
  });

  // Back to top button
  const backTop = $('#back-to-top');
  window.addEventListener('scroll', () => {
    backTop?.classList.toggle('show', window.scrollY > 800);
    const header = $('#site-header');
    if (header) header.style.boxShadow = window.scrollY > 6 ? 'var(--shadow)' : 'none';
  });
  backTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // Small toast for feedback (nice-to-have)
  let toastEl;
  function toast(msg) {
    if (!toastEl) {
      toastEl = document.createElement('div');
      toastEl.style.position = 'fixed';
      toastEl.style.bottom = '16px';
      toastEl.style.right = '16px';
      toastEl.style.padding = '8px 12px';
      toastEl.style.border = '1px solid var(--border)';
      toastEl.style.borderRadius = '8px';
      toastEl.style.background = 'var(--card)';
      toastEl.style.boxShadow = 'var(--shadow)';
      document.body.appendChild(toastEl);
    }
    toastEl.textContent = msg;
    toastEl.style.opacity = '1';
    setTimeout(() => { toastEl.style.opacity = '0'; }, 1200);
  }
})();
