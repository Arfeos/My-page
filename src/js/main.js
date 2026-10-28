import { initLanguage } from "./language.js";
import { initNavigation } from "./navigation.js";
import { initFooter } from "./footer.js";

document.addEventListener("DOMContentLoaded", () => {
  initLanguage();
  initNavigation();
  initFooter();
});