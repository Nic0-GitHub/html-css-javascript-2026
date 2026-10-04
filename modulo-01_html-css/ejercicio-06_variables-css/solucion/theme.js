const root = document.documentElement;
const savedTheme = localStorage.getItem("tema-cuentos");
if (savedTheme) root.dataset.theme = savedTheme;

const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
const currentTheme = () => root.dataset.theme || (systemTheme.matches ? "dark" : "light");

document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("#theme-toggle"), icon = button.querySelector(".theme-toggle__icon"), label = button.querySelector(".theme-toggle__label");
  const themes = ["light", "dark", "sepia"];
  const paintButton = () => { const theme = currentTheme(); icon.textContent = theme === "dark" ? "☾" : theme === "sepia" ? "◒" : "☼"; label.textContent = theme === "dark" ? "Modo noche" : theme === "sepia" ? "Modo sepia" : "Modo día"; button.setAttribute("aria-label", `Cambiar tema. Tema actual: ${label.textContent}`); };
  button.addEventListener("click", () => { const next = themes[(themes.indexOf(currentTheme()) + 1) % themes.length]; root.dataset.theme = next; localStorage.setItem("tema-cuentos", next); paintButton(); });
  systemTheme.addEventListener("change", () => { if (!root.dataset.theme) paintButton(); });
  paintButton();
});

// localStorage sirve para: almacenar variables entre diferentes tabs de navegación, para que se pueda persistir, sin necesidad de una base de datos, información básica de la página, para que al acceder de nuevo no se pierda toda la información.
