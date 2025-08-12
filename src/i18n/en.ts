export const en = {
  nav: {
    home: 'Home',
    projects: 'Projects',
    experience: 'Experience',
    about: 'About',
    contact: 'Contact',
    cv: 'CV',
    switchTo: 'Español',
  },
  home: {
    title: 'Home | Portfolio',
    heroTitle: 'Hi, I’m',
    heroSubtitle: 'Industrial IoT & Automation engineer with international delivery across LATAM, UAE and KSA. I integrate PLCs, gateways, MQTT/OPC‑UA, and time‑series databases with clean dashboards and robust data acquisition in Python. I also lead maintenance and reliability initiatives grounded in Lean Six Sigma and RCM, consistently improving uptime, throughput, and safety.',
    ctaProjects: 'View Projects',
    ctaContact: 'Get in touch',
    ctaCV: 'Download CV',
    featured: 'Featured Projects',
    values: 'What I value',
    valueClarity: { h: 'Clarity', p: 'Content-first, readable typography and balanced spacing.' },
    valuePerf: { h: 'Performance', p: 'Ship less JS, optimize images, respect users’ devices.' },
    valueA11y: { h: 'Accessibility', p: 'Inclusive by default with semantic HTML and strong contrast.' },
  },
  projects: {
    title: 'Projects | Portfolio',
    h1: 'Projects',
    intro: 'A selection of recent work. Each project emphasizes clarity and user experience.'
  },
  about: {
    title: 'About | Portfolio',
    h1: 'About',
    intro: 'Web developer focused on fast, accessible, delightful UIs. I care about clear content, visual hierarchy, and consistent design systems.',
    principles: 'Principles',
    p1: 'Ship content first; enhance progressively.',
    p2: 'Prefer simplicity over cleverness.',
    p3: 'Design with accessibility from the start.',
    tools: 'Tools',
    toolsList: 'Astro, TypeScript, Tailwind CSS, and small focused utilities.',
    cv: { h: 'Curriculum Vitae', sub: 'Download my CV in your preferred language.' }
  },
  contact: {
    title: 'Contact | Portfolio',
    h1: 'Contact',
    intro: 'Have a project in mind? I’d love to hear about it.',
    form: { name: 'Name', email: 'Email', message: 'Message', send: 'Send', note: 'This is a static form. Wire up your backend or use a service like Netlify Forms.' },
    elsewhere: 'Elsewhere',
    emailPlaceholder: 'you@example.com',
    cvLink: 'Download CV',
  },
  experience: {
    title: 'Experience | Portfolio',
    h1: 'Experience',
    intro: (name: string) => `Professional experience of ${name}. You can view or download the CV.`,
    preview: { h: 'CV preview', p: 'If your browser supports it, the embedded CV is shown below (ES). You can also open it in a new tab.', open: 'Open in new tab' },
    sections: {
      summary: 'Summary',
      experience: 'Experience',
      skills: 'Skills',
      education: 'Education',
      languages: 'Languages',
      frontend: 'Frontend', backend: 'Backend', devops: 'DevOps/Cloud', tools: 'Tools'
    }
  },
  footer: { rights: 'All rights reserved.' }
} as const;
