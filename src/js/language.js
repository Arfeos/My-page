
const translations = {
  es: {
    "meta.title": "Ángel Martínez Castellanos — Portfolio Full-Stack",
    "meta.description":
      "Portfolio de Ángel Martínez Castellanos, desarrolladora full-stack. Proyectos, tecnologías y contacto.",

    "accessibility.skip": "Saltar al contenido",

    "nav.mainLabel": "Navegación principal",
    "nav.about": "Sobre mí",
    "nav.technologies": "Tecnologías",
    "nav.projects": "Proyectos",
    "nav.education": "Formación",
    "nav.contact": "Contacto",
    "nav.openMenu": "Abrir menú",
    "nav.closeMenu": "Cerrar menú",

    "language.switchToEnglish": "Cambiar idioma a inglés",
    "language.switchToSpanish": "Cambiar idioma a español",

    "hero.status": "Disponible para nuevos proyectos",
    "hero.greeting": "Hola, soy",
    "hero.role": "Full Stack Developer",
    "hero.description":
      "Desarrollo aplicaciones web combinando interfaces intuitivas, APIs robustas y bases de datos bien estructuradas. Me gusta transformar ideas en soluciones funcionales y mantenibles.",
    "hero.projectsButton": "Explorar proyectos",
    "hero.contactButton": "Contactar",
    "hero.technologiesLabel": "Tecnologías principales",
    "hero.codeWindowLabel": "Panel de código de presentación",
    "hero.codeLabel": "Mi perfil",
    "hero.codeCaption": "Diseñando, construyendo y aprendiendo.",
    "hero.scroll": "Descubre más",

    "about.eyebrow": "Un poco sobre mí",
    "about.title": "Desarrollo con propósito.",
    "about.intro": "Me gusta entender los problemas, diseñar soluciones y convertirlas en aplicaciones útiles, claras y mantenibles.",
    "about.profileTitle": "Más que escribir código",
    "about.profileText": "Disfruto trabajando en distintas partes de una aplicación web: desde construir interfaces hasta desarrollar APIs y organizar bases de datos. Me interesa crear soluciones coherentes, cuidar los detalles y entender cómo encaja cada pieza.",
    "about.approachText": "Mi forma de aprender consiste en construir proyectos, enfrentarme a problemas reales y mejorar el código paso a paso.",
    "about.focusTitle": "Mi enfoque",
    "about.focus1": "Desarrollo frontend y backend",
    "about.focus2": "Diseño y consumo de APIs REST",
    "about.focus3": "Modelado y gestión de bases de datos",
    "about.focus4": "Código organizado y mantenible",
    "about.learningTitle": "Siempre aprendiendo",
    "about.learningText": "Cada proyecto es una oportunidad para descubrir nuevas herramientas, reforzar fundamentos y encontrar mejores formas de resolver problemas.",
    "about.interestsLabel": "Áreas de interés",

    "technologies.eyebrow": "Mi stack tecnológico",
    "technologies.title": "Herramientas para construir.",
    "technologies.intro": "Tecnologías con las que desarrollo aplicaciones web, construyo APIs y trabajo con datos.",
    "technologies.frontend": "Frontend",
    "technologies.frontendDescription": "Interfaces web, estructura y experiencia de usuario.",
    "technologies.backend": "Backend",
    "technologies.backendDescription": "Lógica de negocio, servicios y APIs.",
    "technologies.database": "Bases de datos",
    "technologies.databaseDescription": "Modelado, consultas y persistencia de información.",
    "technologies.tools": "Herramientas y despliegue",
    "technologies.toolsDescription": "Herramientas para desarrollar, gestionar y publicar aplicaciones.",

    "footer.brandLabel": "Volver al inicio",
    "footer.socialLabel": "Redes profesionales",
    "footer.note": "Hecho con intención.",
    "footer.backToTop": "Volver arriba",

  },

  en: {
    "meta.title": "Ángel Martínez Castellanos — Full-Stack Portfolio",
    "meta.description":
      "Portfolio of Ángel Martínez Castellanos, full-stack developer. Projects, technologies and contact.",

    "accessibility.skip": "Skip to content",

    "nav.mainLabel": "Main navigation",
    "nav.about": "About me",
    "nav.technologies": "Technologies",
    "nav.projects": "Projects",
    "nav.education": "Education",
    "nav.contact": "Contact",
    "nav.openMenu": "Open menu",
    "nav.closeMenu": "Close menu",

    "language.switchToEnglish": "Switch language to English",
    "language.switchToSpanish": "Switch language to Spanish",

    "hero.status": "Available for new projects",
    "hero.greeting": "Hi, I'm",
    "hero.role": "Full Stack Developer",
    "hero.description":
      "I build web applications combining intuitive interfaces, robust APIs and well-structured databases. I enjoy turning ideas into functional, maintainable solutions.",
    "hero.projectsButton": "Explore projects",
    "hero.contactButton": "Get in touch",
    "hero.technologiesLabel": "Main technologies",
    "hero.codeWindowLabel": "Developer introduction code panel",
    "hero.codeLabel": "My profile",
    "hero.codeCaption": "Designing, building and learning.",
    "hero.scroll": "Discover more",


    "about.eyebrow": "A little about me",
    "about.title": "Development with purpose.",
    "about.intro": "I enjoy understanding problems, designing solutions and turning them into useful, clear and maintainable applications.",
    "about.profileTitle": "More than writing code",
    "about.profileText": "I enjoy working on different parts of a web application: from building interfaces to developing APIs and organizing databases. I care about creating coherent solutions, paying attention to details and understanding how each piece fits together.",
    "about.approachText": "I learn by building projects, tackling real-world problems and improving my code step by step.",
    "about.focusTitle": "My approach",
    "about.focus1": "Frontend and backend development",
    "about.focus2": "REST API design and integration",
    "about.focus3": "Database modeling and management",
    "about.focus4": "Clean and maintainable code",
    "about.learningTitle": "Always learning",
    "about.learningText": "Every project is an opportunity to explore new tools, strengthen my fundamentals and find better ways to solve problems.",
    "about.interestsLabel": "Areas of interest",


    "technologies.eyebrow": "My tech stack",
    "technologies.title": "Tools to build with.",
    "technologies.intro": "Technologies I use to develop web applications, build APIs and work with data.",
    "technologies.frontend": "Frontend",
    "technologies.frontendDescription": "Web interfaces, structure and user experience.",
    "technologies.backend": "Backend",
    "technologies.backendDescription": "Business logic, services and APIs.",
    "technologies.database": "Databases",
    "technologies.databaseDescription": "Data modeling, queries and persistence.",
    "technologies.tools": "Tools and deployment",
    "technologies.toolsDescription": "Tools for developing, managing and deploying applications.",


    "footer.brandLabel": "Back to home",
    "footer.socialLabel": "Professional networks",
    "footer.note": "Made with intention.",
    "footer.backToTop": "Back to top"
  }
};

let currentLanguage = "es";

export function getLanguage() {
  return currentLanguage;
}

export function translate(key) {
  return translations[currentLanguage][key] ?? key;
}

function renderTranslations() {
  // Traducir textos sin eliminar elementos HTML anidados.
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const value = translate(key);

    if (value !== key) {
      element.textContent = value;
    }
  });

  // Traducir atributos accesibles.
  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute(
      "aria-label",
      translate(element.dataset.i18nAriaLabel)
    );
  });

  // Traducir el título y la descripción de la página.
  const title = document.querySelector("title[data-i18n]");
  if (title) {
    title.textContent = translate(title.dataset.i18n);
  }

  document.querySelectorAll("[data-i18n-content]").forEach((element) => {
    element.setAttribute(
      "content",
      translate(element.dataset.i18nContent)
    );
  });

  // Actualizar el idioma del documento.
  document.documentElement.lang = currentLanguage;

  // Mantener el estado visual y accesible del selector.
  const languageButton = document.querySelector(".language-toggle");

  if (languageButton) {
    const options = languageButton.querySelectorAll(
      "span:not(.language-separator)"
    );

    options.forEach((option) => {
      const isActive = option.textContent.trim().toLowerCase() === currentLanguage;
      option.classList.toggle("language-active", isActive);
    });

    languageButton.setAttribute(
      "aria-label",
      translate(
        currentLanguage === "es"
          ? "language.switchToEnglish"
          : "language.switchToSpanish"
      )
    );

    languageButton.setAttribute(
      "aria-pressed",
      String(currentLanguage === "en")
    );
  }

  // Mantener actualizado el nombre accesible del menú.
  const menuButton = document.querySelector(".menu-toggle");

  if (menuButton) {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";

    menuButton.setAttribute(
      "aria-label",
      translate(isOpen ? "nav.closeMenu" : "nav.openMenu")
    );
  }

  // Avisar a otros módulos de que ha cambiado el idioma.
  document.dispatchEvent(
    new CustomEvent("languagechange", {
      detail: { language: currentLanguage }
    })
  );
}

export function setLanguage(language) {
  if (!Object.hasOwn(translations, language)) {
    return;
  }

  currentLanguage = language;
  renderTranslations();
}

export function initLanguage() {
  currentLanguage = "es";
  renderTranslations();
}
