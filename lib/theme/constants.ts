export type Theme = "dark" | "light";

export const THEME_STORAGE_KEY = "jk-theme";

export const THEME_COLORS: Record<Theme, string> = {
  dark: "#070910",
  light: "#eef1f8",
};
