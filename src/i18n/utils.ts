import { ui, defaultLang, type Lang } from "./translations";
import type { Genre, Format } from "../data/shows";

export { defaultLang, type Lang } from "./translations";
export { languages } from "./translations";

type TranslationKey = keyof (typeof ui)[typeof defaultLang];

export function t(lang: Lang, key: TranslationKey): string {
  return ui[lang][key] || ui[defaultLang][key] || key;
}

const GENRE_KEY: Record<Genre, TranslationKey> = {
  drama: "genre.drama",
  moral: "genre.moral",
  science: "genre.science",
  history: "genre.history",
  "dark-history": "genre.darkHistory",
  finance: "genre.finance",
};

export const genreLabel = (lang: Lang, genre: Genre): string =>
  t(lang, GENRE_KEY[genre]);

export const formatLabel = (lang: Lang, format: Format): string =>
  t(lang, format === "series" ? "format.series" : "format.shorts");

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split("/");
  if (lang === "tr") return "tr";
  return defaultLang;
}

export function localizedPath(path: string, lang: Lang): string {
  if (lang === defaultLang) return path;
  return `/${lang}${path}`;
}

export function getAlternateLangPath(
  currentPath: string,
  targetLang: Lang,
): string {
  // Strip any existing lang prefix
  let cleanPath = currentPath;
  if (cleanPath.startsWith("/tr/") || cleanPath === "/tr") {
    cleanPath = cleanPath.slice(3) || "/";
  }

  if (targetLang === defaultLang) return cleanPath;
  return `/${targetLang}${cleanPath}`;
}
