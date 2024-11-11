import { theme } from "../stores/theme-store";

function applyThemeClass(themeValue) {
  if (themeValue === "night") {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
}

// Apply the initial theme class
applyThemeClass(theme.get());

// Listen for theme changes and update the body class
theme.subscribe((newTheme) => {
  applyThemeClass(newTheme);
});
