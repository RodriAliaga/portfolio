export const es = {
  nav: {
    home: 'Inicio',
    projects: 'Proyectos',
    experience: 'Experiencia',
    about: 'Sobre mí',
    contact: 'Contacto',
    cv: 'CV',
    switchTo: 'English',
  },
  home: {
    title: 'Inicio | Portafolio',
    heroTitle: 'Hola, soy',
    heroSubtitle: 'Diseñador y desarrollador de experiencias web rápidas y accesibles. Aquí una selección de mi trabajo.',
    ctaProjects: 'Ver proyectos',
    ctaContact: 'Contactarme',
    ctaCV: 'Descargar CV',
    featured: 'Proyectos destacados',
    values: 'Lo que valoro',
    valueClarity: { h: 'Claridad', p: 'Contenido primero, tipografía legible y espaciado equilibrado.' },
    valuePerf: { h: 'Rendimiento', p: 'Menos JS, imágenes optimizadas y respeto por el dispositivo del usuario.' },
    valueA11y: { h: 'Accesibilidad', p: 'Inclusivo por defecto con HTML semántico y alto contraste.' },
  },
  projects: {
    title: 'Proyectos | Portafolio',
    h1: 'Proyectos',
    intro: 'Una selección de trabajos recientes. Cada proyecto enfatiza la claridad y la experiencia de usuario.'
  },
  about: {
    title: 'Sobre mí | Portafolio',
    h1: 'Sobre mí',
    intro: 'Desarrollador web orientado a interfaces rápidas, accesibles y agradables. Priorizo el contenido claro, la jerarquía visual y la consistencia del sistema de diseño.',
    principles: 'Principios',
    p1: 'Contenido primero; mejora progresiva.',
    p2: 'Simplicidad sobre complejidad innecesaria.',
    p3: 'Accesibilidad desde el inicio.',
    tools: 'Herramientas',
    toolsList: 'Astro, TypeScript, Tailwind CSS y utilidades pequeñas y enfocadas.',
    cv: { h: 'Currículum Vitae', sub: 'Descarga mi CV en tu idioma preferido.' }
  },
  contact: {
    title: 'Contacto | Portafolio',
    h1: 'Contacto',
    intro: '¿Tienes un proyecto en mente? Me encantará conocerlo.',
    form: { name: 'Nombre', email: 'Email', message: 'Mensaje', send: 'Enviar', note: 'Este formulario es estático. Conéctalo a tu backend o usa un servicio como Netlify Forms.' },
    elsewhere: 'En otros lugares',
    emailPlaceholder: 'tu-email@ejemplo.com',
    cvLink: 'Descargar CV',
  },
  experience: {
    title: 'Experiencia | Portafolio',
    h1: 'Experiencia',
    intro: (name: string) => `Experiencia profesional de ${name}. Puedes visualizar o descargar el CV.`,
    preview: { h: 'Vista previa del CV', p: 'Si tu navegador lo permite, abajo se muestra el CV embebido (ES). También puedes abrirlo en una pestaña nueva.', open: 'Abrir en nueva pestaña' },
    sections: {
      summary: 'Resumen',
      experience: 'Experiencia',
      skills: 'Habilidades',
      education: 'Educación',
      languages: 'Idiomas',
      frontend: 'Frontend', backend: 'Backend', devops: 'DevOps/Cloud', tools: 'Herramientas'
    }
  },
  footer: { rights: 'Todos los derechos reservados.' }
} as const;

