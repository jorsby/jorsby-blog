import type { Lang } from "../i18n/utils";

export interface Episode {
  number: number;
  title: string;
  synopsis: string;
  duration: string;
  videoUrl: string;
  posterUrl: string;
}

export interface Drama {
  title: string;
  tagline: string;
  synopsis: string;
  genre: string;
  languages: string[];
  teaserVideoUrl: string;
  teaserPosterUrl: string;
  episodes: Episode[];
}

// ───────────────────────────────────────────────────────────────────────────
// REAL SERIES — "Married to the Alpha Who Ruined Me" (15 vertical episodes).
//
// VIDEOS live on Cloudflare R2. Set R2_BASE to your bucket's PUBLIC base URL
// (a custom domain like https://media.jorsby.ai, or the pub-xxxx.r2.dev URL).
// Files are expected at:  {R2_BASE}/{SERIES}/ep-01.en.mp4, ep-01.tr.mp4, …
//   - Eps 1–10: EN + TR audio.   - Eps 11–15: EN only (TR falls back to EN).
//
// POSTERS are committed in /public/posters/ep-01.jpg … ep-15.jpg (shared by lang).
//
// TODO before go-live:
//   1. Replace R2_BASE below with the real public bucket URL.
//   2. Eps 11–15 titles/synopses are PLACEHOLDERS (no transcript existed) —
//      replace with the real ones. Eps 1–10 are final.
//   3. Optional: swap teaser* for a dedicated sizzle reel + poster.
// ───────────────────────────────────────────────────────────────────────────

// jorsby-media bucket, public r2.dev URL (dev). Swap for https://media.jorsby.ai
// once that custom domain is connected to the bucket for production.
const R2_BASE = "https://pub-acd1440124614ccb9c0b6dcdfd9cd4af.r2.dev";
const SERIES = "married-to-the-alpha";
const TR_AUDIO_THROUGH = 10; // eps 11–15 have no TR audio yet → fall back to EN

const pad = (n: number) => String(n).padStart(2, "0");
const vid = (n: number, lang: "en" | "tr") =>
  `${R2_BASE}/${SERIES}/ep-${pad(n)}.${lang}.mp4`;
const poster = (n: number) => `/posters/ep-${pad(n)}.jpg`;

type Entry = { title: string; synopsis: string; duration: string };

const buildEpisodes = (entries: Entry[], lang: "en" | "tr"): Episode[] =>
  entries.map((e, i) => {
    const n = i + 1;
    const audio = lang === "tr" && n > TR_AUDIO_THROUGH ? "en" : lang;
    return {
      number: n,
      title: e.title,
      synopsis: e.synopsis,
      duration: e.duration,
      videoUrl: vid(n, audio),
      posterUrl: poster(n),
    };
  });

// Eps 1–10: titles + synopses final (drawn from the episodes' own dialogue).
// Eps 11–15: PLACEHOLDER titles/synopses — confirm with the real arc.
const EN_EPISODES: Entry[] = [
  { title: "The Devil's Offer", duration: "1:34", synopsis: "To keep her dying mother on life support, Lena agrees to a billionaire stranger's impossible terms: a marriage contract, ninety-nine years, signed before midnight." },
  { title: "The Wedding Night", duration: "0:51", synopsis: "At the altar he says “mine,” not “I do” — and as wolves gather outside the estate, he demands she take off her mother's necklace." },
  { title: "What He Is", duration: "1:14", synopsis: "A portrait gallery gives up a secret: the necklace marks a Luna, the Alpha's mate — and for the first time Lena sees fear behind her husband's control." },
  { title: "The Fiancée", duration: "0:59", synopsis: "The woman promised to Kael for twenty years arrives with a warning — his last wife's death was no accident, and nothing in his world ever is." },
  { title: "The Hospital", duration: "1:02", synopsis: "Lena's mother wakes with a plea and a revelation — never let him touch the necklace, and the charming friend from the wedding killed her father." },
  { title: "The Frame", duration: "0:51", synopsis: "Kael admits the truth behind his ruined name: Damien framed him and left him for dead three years ago — and now Damien is at the door." },
  { title: "The Forest", duration: "1:12", synopsis: "Hunted by the pack, Kael runs Lena into the trees and shields her with his body — and she finally sees what he becomes." },
  { title: "The Bloodline", duration: "1:29", synopsis: "An ancient codex names what Lena is: the last Luna of the Crescent Pack, a bloodline that doesn't dilute — it waits." },
  { title: "The Mark", duration: "1:30", synopsis: "Kael confesses he never married her to save her mother — he claimed her to keep every other Alpha away — as enemies surround the house." },
  { title: "The Brother", duration: "1:24", synopsis: "Cornered by Seraphine's blade, Lena meets the one person she never knew existed — and learns the Crescent Pack never fell." },
  { title: "The Claim", duration: "1:36", synopsis: "The Crescent Pack's claim turns a private marriage into open war. (Placeholder — confirm.)" },
  { title: "The Cost", duration: "1:21", synopsis: "Loyalties fracture as Lena learns what being a Luna will cost her. (Placeholder — confirm.)" },
  { title: "The Blade", duration: "1:50", synopsis: "An old promise and a silver blade force an impossible choice. (Placeholder — confirm.)" },
  { title: "The Truth", duration: "1:21", synopsis: "The truth about her father's death rewrites everything Lena thought she knew. (Placeholder — confirm.)" },
  { title: "The Reckoning", duration: "1:29", synopsis: "Two packs, one Luna, and a reckoning a hundred years in the making. (Placeholder — confirm.)" },
];

const TR_EPISODES: Entry[] = [
  { title: "Şeytanın Teklifi", duration: "1:34", synopsis: "Ölmek üzere olan annesini yaşatmak için Lena, bir milyarderin imkânsız şartlarını kabul eder: bir evlilik sözleşmesi, doksan dokuz yıl, gece yarısından önce imzalanacak." },
  { title: "Düğün Gecesi", duration: "0:51", synopsis: "Nikâhta “evet” yerine “benim” der — ve malikânenin etrafında kurtlar toplanırken, annesinin kolyesini çıkarmasını ister." },
  { title: "Onun Sırrı", duration: "1:14", synopsis: "Bir portre galerisi sır veriyor: kolye bir Luna'yı, Alfa'nın eşini işaret ediyor — ve Lena ilk kez kocasının kontrolünün ardındaki korkuyu görüyor." },
  { title: "Nişanlı", duration: "0:59", synopsis: "Yirmi yıldır Kael'e vaat edilen kadın bir uyarıyla gelir — son eşinin ölümü kaza değildi, bu dünyada hiçbir şey asla kaza değil." },
  { title: "Hastane", duration: "1:02", synopsis: "Lena'nın annesi bir yalvarış ve bir itirafla uyanır — kolyeye asla dokundurma, ve düğündeki o cana yakın dost babasını öldürdü." },
  { title: "Tuzak", duration: "0:51", synopsis: "Kael lekelenen adının ardındaki gerçeği itiraf eder: Damien üç yıl önce ona tuzak kurup onu ölüme terk etti — ve şimdi Damien kapıda." },
  { title: "Orman", duration: "1:12", synopsis: "Sürü tarafından avlanırken Kael, Lena'yı ağaçların arasına kaçırır ve onu bedeniyle korur — ve Lena sonunda neye dönüştüğünü görür." },
  { title: "Kan Hattı", duration: "1:29", synopsis: "Kadim bir kodeks Lena'nın ne olduğunu söyler: Hilal Sürüsü'nün son Luna'sı, seyrelmeyen bir kan hattı — sadece bekler." },
  { title: "Mühür", duration: "1:30", synopsis: "Kael, annesini kurtarmak için onunla evlenmediğini itiraf eder — onu her Alfa'dan uzak tutmak için sahiplendi — düşmanlar evi sararken." },
  { title: "Ağabey", duration: "1:24", synopsis: "Seraphine'in hançeriyle köşeye sıkışan Lena, var olduğunu hiç bilmediği biriyle tanışır — ve Hilal Sürüsü'nün hiç yok olmadığını öğrenir." },
  { title: "Sahiplenme", duration: "1:36", synopsis: "Hilal Sürüsü'nün talebi, özel bir evliliği açık bir savaşa çevirir. (Geçici — onaylanacak.)" },
  { title: "Bedel", duration: "1:21", synopsis: "Luna olmanın bedelini öğrendikçe sadakatler çatlar. (Geçici — onaylanacak.)" },
  { title: "Hançer", duration: "1:50", synopsis: "Eski bir söz ve gümüş bir hançer imkânsız bir seçime zorlar. (Geçici — onaylanacak.)" },
  { title: "Gerçek", duration: "1:21", synopsis: "Babasının ölümüyle ilgili gerçek, Lena'nın bildiği her şeyi yeniden yazar. (Geçici — onaylanacak.)" },
  { title: "Hesaplaşma", duration: "1:29", synopsis: "İki sürü, tek bir Luna ve yüz yıllık bir hesaplaşma. (Geçici — onaylanacak.)" },
];

export const drama: Record<Lang, Drama> = {
  en: {
    title: "Married to the Alpha Who Ruined Me",
    tagline:
      "She signed a 99-year marriage contract to save her mother. No one told her about the wolves.",
    synopsis:
      "After the billionaire who destroyed her father offers to save her dying mother, Lena Ashford marries the man she hates — and learns on her wedding night that he isn't human, that an ancient bloodline runs in her veins, and that she is the one thing his pack has hunted for a hundred years. A supernatural romance in fifteen vertical episodes.",
    genre: "Werewolf romance · Fated mates",
    languages: ["EN", "TR"],
    teaserVideoUrl: `${R2_BASE}/${SERIES}/sizzle.mp4`,
    teaserPosterUrl: "/posters/teaser.jpg",
    episodes: buildEpisodes(EN_EPISODES, "en"),
  },
  tr: {
    title: "Beni Mahveden Alfa ile Evlendim",
    tagline:
      "Annesini kurtarmak için 99 yıllık bir evlilik sözleşmesi imzaladı. Kurtlardan kimse söz etmedi.",
    synopsis:
      "Babasını mahveden milyarder, ölmek üzere olan annesini kurtarmayı teklif edince Lena Ashford nefret ettiği adamla evlenir — ve düğün gecesi onun insan olmadığını, damarlarında kadim bir kan hattının dolaştığını ve sürüsünün yüz yıldır avladığı tek şeyin kendisi olduğunu öğrenir. On beş dikey bölümde doğaüstü bir aşk.",
    genre: "Kurt adam aşkı · Kader eşi",
    languages: ["EN", "TR"],
    teaserVideoUrl: `${R2_BASE}/${SERIES}/sizzle.tr.mp4`,
    teaserPosterUrl: "/posters/teaser.tr.jpg",
    episodes: buildEpisodes(TR_EPISODES, "tr"),
  },
};
