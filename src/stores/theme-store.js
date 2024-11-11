import { atom } from "nanostores";

export const theme = atom("day");

export function toggleTheme() {
  theme.set(theme.get() === "day" ? "night" : "day");
}

export function setTheme(newTheme) {
  theme.set(newTheme);
}
