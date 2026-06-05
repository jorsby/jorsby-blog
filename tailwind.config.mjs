/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        bg: "#0a0a0a",
        surface: "#141414",
        "surface-light": "#1a1a1a",
        border: "#1f1f1f",
        // Cinematic gold accent system
        accent: "#e8b14c",
        "accent-warm": "#f0c674",
        "accent-deep": "#b8860b",
        "accent-blue": "#3b82f6",
        ink: "#f5f0e6",
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
        display: ['"Bricolage Grotesque"', '"Inter"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 24px rgba(232, 177, 76, 0.10)",
        "glow-md": "0 0 48px rgba(232, 177, 76, 0.16)",
        "glow-poster": "0 8px 40px rgba(0, 0, 0, 0.55)",
      },
      backgroundImage: {
        cinematic:
          "radial-gradient(120% 80% at 50% 0%, rgba(232, 177, 76, 0.10), transparent 60%)",
        vignette:
          "linear-gradient(to top, rgba(10, 10, 10, 0.95), rgba(10, 10, 10, 0) 55%)",
        "gold-text": "linear-gradient(90deg, #f0c674, #e8b14c 50%, #b8860b)",
      },
      typography: {
        invert: {
          css: {
            "--tw-prose-body": "#d4d4d4",
            "--tw-prose-headings": "#f5f0e6",
            "--tw-prose-links": "#e8b14c",
            "--tw-prose-bold": "#f5f0e6",
            "--tw-prose-code": "#e5e5e5",
            "--tw-prose-pre-bg": "#141414",
            "--tw-prose-pre-code": "#d4d4d4",
            "--tw-prose-quotes": "#a3a3a3",
            "--tw-prose-quote-borders": "#e8b14c",
            "--tw-prose-counters": "#737373",
            "--tw-prose-bullets": "#525252",
            "--tw-prose-hr": "#1f1f1f",
            "--tw-prose-th-borders": "#1f1f1f",
            "--tw-prose-td-borders": "#141414",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
