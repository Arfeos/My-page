
export function initNavigation() {
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector("#main-navigation");
  const languageButton = document.querySelector(".language-toggle");

  if (menuButton && navigation) {
    const closeMenu = () => {
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Abrir menú");
      navigation.classList.remove("is-open");
    };

    menuButton.addEventListener("click", () => {
      const isOpen =
        menuButton.getAttribute("aria-expanded") === "true";

      menuButton.setAttribute("aria-expanded", String(!isOpen));
      menuButton.setAttribute(
        "aria-label",
        isOpen ? "Abrir menú" : "Cerrar menú"
      );

      navigation.classList.toggle("is-open", !isOpen);
    });

    navigation.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 760) {
        closeMenu();
      }
    });
  }

  if (languageButton) {
    const languages = languageButton.querySelectorAll(
      "span:not(.language-separator)"
    );

    let currentLanguage = "es";

    languageButton.addEventListener("click", () => {
      currentLanguage = currentLanguage === "es" ? "en" : "es";

      if (languages.length >= 2) {
        languages[0].textContent = currentLanguage.toUpperCase();
        languages[1].textContent =
          currentLanguage === "es" ? "EN" : "ES";
      }

      languageButton.setAttribute(
        "aria-label",
        currentLanguage === "es"
          ? "Cambiar idioma a inglés"
          : "Switch language to Spanish"
      );

      languageButton.setAttribute(
        "aria-pressed",
        String(currentLanguage === "en")
      );

      document.documentElement.lang = currentLanguage;
    });
  }
}
