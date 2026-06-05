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
// PLACEHOLDER DATA — swap these for the real series.
// 1. Videos:   replace SAMPLE_VIDEO + each episode `videoUrl` with your R2/CDN
//              MP4 URLs (e.g. https://media.jorsby.ai/the-glass-tower/ep-01.mp4).
// 2. Posters:  drop real images into /public/posters/ (e.g. ep-01.jpg) and
//              update the matching `posterUrl` extension.
// 3. Copy:     edit titles/synopsis below and the drama-level fields per language.
// ───────────────────────────────────────────────────────────────────────────

const SAMPLE_VIDEO =
  "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"; // TODO: replace with real R2 URLs

const poster = (n: number) =>
  `/posters/ep-${String(n).padStart(2, "0")}.svg`;

const buildEpisodes = (entries: { title: string; synopsis: string }[]): Episode[] =>
  entries.map((e, i) => ({
    number: i + 1,
    title: e.title,
    synopsis: e.synopsis,
    duration: ["1:28", "1:41", "1:33", "1:52", "1:37"][i % 5],
    videoUrl: SAMPLE_VIDEO,
    posterUrl: poster(i + 1),
  }));

const EN_EPISODES = [
  { title: "The Offer", synopsis: "A new hire signs a contract that promises everything — and asks for nothing in writing." },
  { title: "Floor 41", synopsis: "There's a floor the elevator won't stop on. Tonight, it does." },
  { title: "After Hours", synopsis: "The building empties. The cameras don't." },
  { title: "The Memo", synopsis: "One leaked document. Twelve people who can't admit they read it." },
  { title: "Quiet Money", synopsis: "A bonus arrives before the work is done. So does the threat." },
  { title: "The Mentor", synopsis: "Everyone wants to be in her corner. No one survives leaving it." },
  { title: "Glass Walls", synopsis: "Transparency is the company value. Secrets are the company currency." },
  { title: "The Audit", synopsis: "They sent someone to check the numbers. The numbers checked back." },
  { title: "Severance", synopsis: "Getting fired is the easy part. Staying gone is not." },
  { title: "The Whistle", synopsis: "She has proof. She has forty seconds. She has one signal bar." },
  { title: "Reorg", synopsis: "A restructuring on paper. A reckoning in person." },
  { title: "The Client", synopsis: "He brings in the biggest account in company history. And a reason for all of it." },
  { title: "Lockdown", synopsis: "The badges stop working at 9 p.m. No one knows who triggered it." },
  { title: "The Promotion", synopsis: "There's one seat left at the top. There were three of them this morning." },
  { title: "Last Floor", synopsis: "Everything the tower was hiding fits in a single elevator ride down." },
];

const TR_EPISODES = [
  { title: "Teklif", synopsis: "Yeni bir çalışan, her şeyi vaat eden ama hiçbir şeyi yazıya dökmeyen bir sözleşme imzalar." },
  { title: "41. Kat", synopsis: "Asansörün durmadığı bir kat var. Bu gece duruyor." },
  { title: "Mesai Sonrası", synopsis: "Bina boşalıyor. Kameralar boşalmıyor." },
  { title: "Not", synopsis: "Sızdırılan tek bir belge. Okuduğunu itiraf edemeyen on iki kişi." },
  { title: "Sessiz Para", synopsis: "İş bitmeden prim geliyor. Tehdit de öyle." },
  { title: "Akıl Hocası", synopsis: "Herkes onun yanında olmak istiyor. Yanından ayrılan kimse kurtulamıyor." },
  { title: "Cam Duvarlar", synopsis: "Şeffaflık şirketin değeri. Sırlar şirketin para birimi." },
  { title: "Denetim", synopsis: "Rakamları kontrol etmeye birini gönderdiler. Rakamlar onları kontrol etti." },
  { title: "Tazminat", synopsis: "Kovulmak kolay kısmı. Bir daha geri dönmemek değil." },
  { title: "İhbar", synopsis: "Kanıtı var. Kırk saniyesi var. Tek çubuk çekiyor." },
  { title: "Yeniden Yapılanma", synopsis: "Kâğıt üzerinde bir yapılanma. Yüz yüze bir hesaplaşma." },
  { title: "Müşteri", synopsis: "Şirket tarihinin en büyük hesabını getiriyor. Ve hepsinin bir nedenini." },
  { title: "Karantina", synopsis: "Kartlar gece dokuzda çalışmayı bırakıyor. Kimin tetiklediğini kimse bilmiyor." },
  { title: "Terfi", synopsis: "Tepede tek bir koltuk kaldı. Bu sabah üç taneydi." },
  { title: "Son Kat", synopsis: "Kulenin sakladığı her şey, aşağı inen tek bir asansör yolculuğuna sığıyor." },
];

export const drama: Record<Lang, Drama> = {
  en: {
    title: "The Glass Tower",
    tagline: "A corporate thriller, told one vertical episode at a time.",
    synopsis:
      "Inside a gleaming headquarters where everyone is watched and no one is safe, a junior analyst pulls one thread — and the whole tower starts to unravel. Fifteen episodes, designed for the scroll.",
    genre: "Corporate thriller",
    languages: ["EN", "TR"],
    teaserVideoUrl: SAMPLE_VIDEO,
    teaserPosterUrl: "/posters/teaser.svg",
    episodes: buildEpisodes(EN_EPISODES),
  },
  tr: {
    title: "Cam Kule",
    tagline: "Her dikey bölümde anlatılan bir kurumsal gerilim.",
    synopsis:
      "Herkesin izlendiği ve kimsenin güvende olmadığı parlak bir genel merkezde, genç bir analist tek bir ipi çeker — ve bütün kule çözülmeye başlar. Akış için tasarlanmış on beş bölüm.",
    genre: "Kurumsal gerilim",
    languages: ["EN", "TR"],
    teaserVideoUrl: SAMPLE_VIDEO,
    teaserPosterUrl: "/posters/teaser.svg",
    episodes: buildEpisodes(TR_EPISODES),
  },
};
