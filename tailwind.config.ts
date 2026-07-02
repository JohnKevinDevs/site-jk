const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        background: "var(--bg)",
        foreground: "var(--text)",
        surface: "var(--surface)",
        "surface-2": "var(--surface2)",
        border: "var(--border)",
        "border-strong": "var(--border-strong)",
        strong: "var(--strong)",
        head: "var(--head)",
        muted: "var(--muted)",
        soft: "var(--soft)",
        faint: "var(--faint)",
        accent: "var(--accent)",
        "accent-2": "var(--accent2)",
        "accent-soft": "var(--accent-soft)",
        "accent-deep": "var(--accent-deep)",
      },
      borderRadius: {
        card: "var(--radius-card)",
        "card-lg": "var(--radius-card-lg)",
        chip: "var(--radius-chip)",
        pill: "var(--radius-pill)",
      },
      boxShadow: {
        blue: "var(--shadow-blue)",
        soft: "var(--shadow-soft)",
      },
      fontFamily: {
        sans: ["Manrope", "Manrope Fallback", "ui-sans-serif", "system-ui"],
        display: [
          "Space Grotesk",
          "Space Grotesk Fallback",
          "ui-sans-serif",
          "system-ui",
        ],
        mono: [
          "JetBrains Mono",
          "JetBrains Mono Fallback",
          "ui-monospace",
          "monospace",
        ],
      },
    },
  },
};

export default config;
