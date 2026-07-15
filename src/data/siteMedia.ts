const WEBSITE_MEDIA_BASE =
  "https://pub-acd1440124614ccb9c0b6dcdfd9cd4af.r2.dev/website-assets/v1/home";

const clip = (name: string) => `${WEBSITE_MEDIA_BASE}/clips/${name}`;
const poster = (name: string) => `${WEBSITE_MEDIA_BASE}/posters/${name}`;

// These assets are website-owned copies. They do not share project storage
// prefixes, so production cleanup cannot remove the public portfolio media.
export const siteMedia = {
  heroClips: [
    {
      id: "kara-sayfa",
      source: clip("kara-gates.mp4"),
      poster: poster("kara-gates.jpg"),
    },
    {
      id: "alpha",
      source: clip("alpha-hospital.mp4"),
      poster: poster("alpha.jpg"),
    },
    {
      id: "paper-throne",
      source: clip("paper-throne-confrontation.mp4"),
      poster: poster("paper-throne-clay.jpg"),
    },
    {
      id: "science",
      source: clip("science-storm.mp4"),
      poster: poster("science-storm.jpg"),
    },
    {
      id: "fenn-treasure",
      source: clip("fenn-treasure.mp4"),
      poster: poster("fenn-treasure.jpg"),
    },
  ],
  servicePreviews: {
    verticalDrama: poster("service-vertical-drama.jpg"),
    shortForm: poster("service-short-form.jpg"),
    documentary: poster("service-documentary.jpg"),
    localized: poster("service-localized.jpg"),
  },
} as const;
