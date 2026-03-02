/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        bg: "#0a0a0a",
        surface: "#141414",
        border: "#1f1f1f",
        accent: "#3b82f6",
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
      typography: {
        invert: {
          css: {
            "--tw-prose-body": "#d4d4d4",
            "--tw-prose-headings": "#f5f5f5",
            "--tw-prose-links": "#3b82f6",
            "--tw-prose-bold": "#f5f5f5",
            "--tw-prose-code": "#e5e5e5",
            "--tw-prose-pre-bg": "#141414",
            "--tw-prose-pre-code": "#d4d4d4",
            "--tw-prose-quotes": "#a3a3a3",
            "--tw-prose-quote-borders": "#3b82f6",
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
