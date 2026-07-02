import { THEME_COLORS, THEME_STORAGE_KEY, type Theme } from "./constants";

const themeScript = `
(function() {
  try {
    var storedTheme = window.localStorage.getItem('${THEME_STORAGE_KEY}');
    var theme = storedTheme === 'light' || storedTheme === 'dark' ? storedTheme : 'dark';
    var root = document.documentElement;
    root.dataset.theme = theme;
    root.classList.remove(theme === 'dark' ? 'light' : 'dark');
    root.classList.add(theme);
    var meta = document.querySelector('meta[name="theme-color"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'theme-color');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', theme === 'light' ? '${THEME_COLORS.light}' : '${THEME_COLORS.dark}');
  } catch (error) {
    document.documentElement.dataset.theme = 'dark';
    document.documentElement.classList.add('dark');
  }
})();`;

export function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{ __html: themeScript }}
      data-theme-script
    />
  );
}

export type { Theme };
