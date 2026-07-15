/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        bg: "#070707",
        surface: "#0d0d0d",
        "surface-light": "#141414",
        border: "#292929",
        ink: "#f2f0eb",
        "ink-soft": "#c8c6c0",
        "ink-faint": "#8d8b85",
        accent: "#e8ff47",
        "accent-warm": "#f2ff85",
        "accent-deep": "#bad02c",
        "accent-ink": "#e8ff47",
        "accent-blue": "#3b82f6",
        "media-ink": "#f2f0eb",
      },
      fontFamily: {
        mono: ['"Space Mono"', "ui-monospace", "monospace"],
        sans: ['"Archivo"', "system-ui", "sans-serif"],
        display: ['"Anton"', '"Archivo"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 28px rgba(232, 255, 71, 0.14)",
        "glow-md": "0 0 48px rgba(232, 255, 71, 0.24)",
        "glow-poster": "0 28px 80px rgba(0, 0, 0, 0.72)",
        soft: "0 12px 36px rgba(0, 0, 0, 0.28)",
        lift: "0 20px 56px rgba(0, 0, 0, 0.48)",
      },
      backgroundImage: {
        cinematic:
          "linear-gradient(180deg, rgba(232, 255, 71, 0.035), transparent 36%), linear-gradient(90deg, #070707, #0b0c08 52%, #070707)",
        vignette:
          "linear-gradient(to top, rgba(7, 7, 7, 0.98) 10%, rgba(7, 7, 7, 0.68) 40%, rgba(7, 7, 7, 0) 72%)",
        "gold-text": "linear-gradient(90deg, #e8ff47, #f2ff85)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
