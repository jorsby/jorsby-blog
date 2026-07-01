/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // Porcelain light theme
        bg: "#faf7f2", // warm porcelain page background
        surface: "#ffffff", // cards
        "surface-light": "#fffdf9",
        border: "#ece6dc", // warm hairline
        ink: "#1a1613", // near-black warm — headings
        // Cinematic gold accent system (kept as brand)
        accent: "#e8b14c", // fills, borders, icons
        "accent-warm": "#f0c674",
        "accent-deep": "#b8860b",
        "accent-ink": "#8a6410", // darker gold for small TEXT/links on white (contrast)
        "accent-blue": "#3b82f6",
        // Text that sits over dark poster images (must stay light)
        "media-ink": "#f5f0e6",
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
        display: ['"Bricolage Grotesque"', '"Inter"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 24px rgba(232, 177, 76, 0.18)",
        "glow-md": "0 6px 40px rgba(232, 177, 76, 0.24)",
        "glow-poster": "0 18px 50px rgba(30, 20, 8, 0.28)",
        soft: "0 8px 30px rgba(40, 28, 12, 0.08)",
        lift: "0 18px 48px rgba(40, 28, 12, 0.14)",
      },
      backgroundImage: {
        // soft warm gold glow at the top of a section, on porcelain
        cinematic:
          "radial-gradient(120% 80% at 50% 0%, rgba(232, 177, 76, 0.16), transparent 62%)",
        // dark bottom vignette — used ONLY over dark poster images
        vignette:
          "linear-gradient(to top, rgba(10, 10, 10, 0.95), rgba(10, 10, 10, 0) 55%)",
        // gold headline gradient, darkened so it reads on white
        "gold-text": "linear-gradient(92deg, #d99b2b, #b8860b 55%, #8a6410)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
