import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://jorsby.ai",
  output: "static",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "tr"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    mdx(),
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en",
          tr: "tr",
        },
      },
    }),
    tailwind(),
  ],
});
