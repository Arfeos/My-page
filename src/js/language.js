
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

    "footer.brandLabel": "Volver al inicio",
    "footer.socialLabel": "Redes profesionales",
    "footer.note": "Hecho con intención.",
    "footer.backToTop": "Volver arriba"
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
