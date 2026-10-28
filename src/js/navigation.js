
import { setLanguage, getLanguage, translate } from "./language.js";

export function initNavigation() {
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector("#main-navigation");
  const languageButton = document.querySelector(".language-toggle");

  if (menuButton && navigation) {
    const closeMenu = () => {
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", translate("nav.openMenu"));
      navigation.classList.remove("is-open");
    };

    menuButton.addEventListener("click", () => {
      const isOpen =
        menuButton.getAttribute("aria-expanded") === "true";

      const nextState = !isOpen;

      menuButton.setAttribute("aria-expanded", String(nextState));
      menuButton.setAttribute(
        "aria-label",
        translate(nextState ? "nav.closeMenu" : "nav.openMenu")
      );

      navigation.classList.toggle("is-open", nextState);
    });

    navigation.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMenu();
        menuButton.focus();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 760) {
        closeMenu();
      }
    });
  }

  if (languageButton) {
    languageButton.addEventListener("click", () => {
      const nextLanguage = getLanguage() === "es" ? "en" : "es";
      setLanguage(nextLanguage);
    });
  }
}
