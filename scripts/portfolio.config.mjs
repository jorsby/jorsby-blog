// ───────────────────────────────────────────────────────────────────────────
// PORTFOLIO CONFIG — the curated layer the sync pipeline reads.
//
// This is the ONLY place show selection + marketing copy live. `sync-portfolio.mjs`
// merges this with the episode list (from Supabase, or the committed snapshot)
// to produce `src/data/shows.generated.ts`.
//
// GUARDRAIL: shows are chosen by explicit UUID here. Do NOT switch to
// "all ACTIVE projects" — that would leak The Sin Clause (adult) and pilots.
// ───────────────────────────────────────────────────────────────────────────

// The 6 customer-facing shows, in wall order. `handle` is the brand mark burned
// into the watermark; `social` is only set when the channel links are confirmed
// live (leave undefined rather than ship a dead link on a sales site).
export const PORTFOLIO_SHOWS = [
  {
    id: "70b3f9d3-27f8-42b4-9cab-ecc5fb54433a",
    slug: "married-to-the-alpha",
    genre: "drama",
    format: "series",
    order: 1,
    primaryLang: "en",
    languages: ["EN", "TR"],
    handle: "@alpharuinedme",
    epCap: 15,
    copy: {
      title: { en: "Married to the Alpha Who Ruined Me", tr: "Beni Mahveden Alfa ile Evlendim" },
      tagline: {
        en: "She signed a 99-year marriage contract to save her mother. No one told her about the wolves.",
        tr: "Annesini kurtarmak için 99 yıllık bir evlilik sözleşmesi imzaladı. Kurtlardan kimse söz etmedi.",
      },
      synopsis: {
        en: "After the billionaire who destroyed her father offers to save her dying mother, Lena Ashford marries the man she hates — and learns on her wedding night that he isn't human, that an ancient bloodline runs in her veins, and that she is the one thing his pack has hunted for a hundred years. A supernatural romance in vertical episodes, produced in English and Turkish.",
        tr: "Babasını mahveden milyarder, ölmek üzere olan annesini kurtarmayı teklif edince Lena Ashford nefret ettiği adamla evlenir — ve düğün gecesi onun insan olmadığını, damarlarında kadim bir kan hattının dolaştığını ve sürüsünün yüz yıldır avladığı tek şeyin kendisi olduğunu öğrenir. İngilizce ve Türkçe üretilen, dikey bölümlerden oluşan doğaüstü bir aşk.",
      },
    },
    social: {
      en: {
        youtube: "https://www.youtube.com/@alpharuinedme",
        instagram: "https://www.instagram.com/alpharuinedme",
        facebook: "https://www.facebook.com/1135959962931609",
        tiktok: "https://www.tiktok.com/@alpharuinedme",
        x: "https://x.com/AlphaRuinedMe",
      },
      tr: {
        youtube: "https://www.youtube.com/@mahvedenalfa",
        instagram: "https://www.instagram.com/mahvedenalfa",
        facebook: "https://www.facebook.com/1110443765489628",
        tiktok: "https://www.tiktok.com/@mahvedenalfa",
        x: "https://x.com/MahvedenAlfa",
      },
    },
  },
  {
    id: "2fcbe6c3-7031-4454-84ea-70604f1c7538",
    slug: "ahlak-masallari",
    genre: "moral",
    format: "shorts",
    order: 2,
    primaryLang: "tr",
    languages: ["TR"],
    handle: "@ahlak.masallari",
    epCap: 18,
    copy: {
      title: { en: "Tales of Virtue", tr: "Ahlak Masalları" },
      tagline: {
        en: "Small acts of kindness that ache — moral tales that stop a scrolling thumb.",
        tr: "İnsanın içini titreten küçük iyilikler — kaydırmayı durduran ahlak masalları.",
      },
      synopsis: {
        en: "A Turkish short-form series of self-contained moral tales — quiet, warm stories about kindness, honesty and mercy, each built to land an emotional gut-punch in just a few minutes.",
        tr: "Kendi içinde tamamlanan ahlak masallarından oluşan kısa video serisi — iyilik, dürüstlük ve merhamet üzerine sıcak, sade hikâyeler; her biri birkaç dakika içinde yüreğe dokunmak için kurgulandı.",
      },
    },
    social: {
      tr: {
        youtube: "https://www.youtube.com/@ahlakmasallari",
        instagram: "https://www.instagram.com/ahlakmasallari",
        tiktok: "https://www.tiktok.com/@ahlakmasallari",
      },
    },
  },
  {
    id: "872e0626-6446-495b-a2ce-633b0036e0cf",
    slug: "jorsby-bilim",
    genre: "science",
    format: "shorts",
    order: 3,
    primaryLang: "tr",
    languages: ["TR"],
    handle: "@jorsbybilim",
    epCap: 16,
    copy: {
      title: { en: "Jorsby Science", tr: "Jorsby Bilim" },
      tagline: {
        en: "One astonishing true story a day — history, science and mysteries in 60 seconds.",
        tr: "Her gün bir şaşırtıcı gerçek — tarih, bilim ve gizemler 60 saniyede.",
      },
      synopsis: {
        en: "A high-cadence Turkish curiosity channel: sunken treasure, forgotten heists, scientific riddles and stranger-than-fiction history — each a tight vertical short built to be binged.",
        tr: "Yüksek tempolu bir Türkçe merak kanalı: batık hazineler, unutulmuş soygunlar, bilimsel bilmeceler ve inanması güç tarih — her biri art arda izlenmek için kurgulanmış kısa dikey videolar.",
      },
    },
    social: {
      tr: {
        youtube: "https://www.youtube.com/@jorsbybilim",
        instagram: "https://www.instagram.com/jorsbybilim",
        tiktok: "https://www.tiktok.com/@jorsbybilim",
      },
    },
  },
  {
    id: "a50688ac-10ad-4bcc-a2e7-cc1f47e040e8",
    slug: "buyuk-zihinler",
    genre: "history",
    format: "series",
    order: 4,
    primaryLang: "tr",
    languages: ["TR"],
    handle: "@buyukzihinler",
    epCap: 8,
    copy: {
      title: { en: "Great Minds", tr: "Büyük Zihinler" },
      tagline: {
        en: "History's greatest minds tell their own story — in their own voice.",
        tr: "Tarihin en büyük zihinleri kendi hikâyesini kendi ağzından anlatıyor.",
      },
      synopsis: {
        en: "First-person biographical documentaries in Turkish — Tesla, Marie Curie, Da Vinci, Einstein and more, each recounting their life and final regrets in their own voice.",
        tr: "Türkçe, birinci ağızdan biyografik belgeseller — Tesla, Marie Curie, Da Vinci, Einstein ve daha fazlası; her biri hayatını ve son pişmanlıklarını kendi diliyle anlatıyor.",
      },
    },
    social: {
      tr: {
        youtube: "https://www.youtube.com/@buyukzihinler",
        tiktok: "https://www.tiktok.com/@buyukzihinler",
      },
    },
  },
  {
    id: "08d1165c-a302-44bd-b3b7-0c302f249082",
    slug: "kara-sayfa",
    genre: "dark-history",
    format: "series",
    order: 5,
    primaryLang: "tr",
    languages: ["TR"],
    handle: "@karasayfahikayeler",
    epCap: 8,
    copy: {
      title: { en: "The Black Page", tr: "Kara Sayfa" },
      tagline: {
        en: "The chapters history would rather forget.",
        tr: "Tarihin unutmak istediği sayfalar.",
      },
      synopsis: {
        en: "Cinematic Turkish documentaries on the darkest chapters of Ottoman and world history — fratricide, palace intrigue and the price of power, told with restraint and dread.",
        tr: "Osmanlı ve dünya tarihinin en karanlık sayfaları üzerine sinematik Türkçe belgeseller — kardeş katli, saray entrikaları ve iktidarın bedeli; ölçülü ve ürpertici bir dille.",
      },
    },
    social: {
      tr: {
        youtube: "https://www.youtube.com/@karasayfahikayeler",
      },
    },
  },
  {
    id: "45aa336e-7466-439d-bcb0-b6983917c23c",
    slug: "para-hikayeleri",
    genre: "finance",
    format: "series",
    order: 6,
    primaryLang: "tr",
    languages: ["TR"],
    handle: "@girisimseruvenleri",
    epCap: 8,
    copy: {
      title: { en: "Money Stories", tr: "Para Hikayeleri" },
      tagline: {
        en: "How fortunes are built — and how they collapse overnight.",
        tr: "Servetler nasıl kurulur — ve bir gecede nasıl çöker.",
      },
      synopsis: {
        en: "Turkish business documentaries on spectacular rises and falls — billion-dollar startups, pyramid schemes and the anatomy of financial collapse, told like true-crime.",
        tr: "Görkemli yükseliş ve çöküşler üzerine Türkçe iş belgeselleri — milyar dolarlık girişimler, saadet zincirleri ve finansal çöküşün anatomisi; suç dosyası tadında.",
      },
    },
    social: {
      tr: {
        youtube: "https://www.youtube.com/@girisimseruvenleri",
      },
    },
  },
];

// ── Alpha: the 15 curated episodes (ported from the original episodes.ts) ────
// These already live watermarked on the blog's own R2, with committed posters.
// The pipeline uses these verbatim instead of the raw Arc-2/3 DB rows (which
// include a "do not post" master and are not the curated public cut).
const ALPHA_R2 = "https://pub-acd1440124614ccb9c0b6dcdfd9cd4af.r2.dev/married-to-the-alpha";
const ALPHA_V = "2"; // cache-bust token: v2 = watermarked
const TR_AUDIO_THROUGH = 10; // eps 11+ carry EN audio in the TR slot

const ALPHA_EN = [
  ["The Devil's Offer", "1:34", "To keep her dying mother on life support, Lena agrees to a billionaire stranger's impossible terms: a marriage contract, ninety-nine years, signed before midnight."],
  ["The Wedding Night", "0:51", "At the altar he says “mine,” not “I do” — and as wolves gather outside the estate, he demands she take off her mother's necklace."],
  ["What He Is", "1:14", "A portrait gallery gives up a secret: the necklace marks a Luna, the Alpha's mate — and for the first time Lena sees fear behind her husband's control."],
  ["The Fiancée", "0:59", "The woman promised to Kael for twenty years arrives with a warning — his last wife's death was no accident, and nothing in his world ever is."],
  ["The Hospital", "1:02", "Lena's mother wakes with a plea and a revelation — never let him touch the necklace, and the charming friend from the wedding killed her father."],
  ["The Frame", "0:51", "Kael admits the truth behind his ruined name: Damien framed him and left him for dead three years ago — and now Damien is at the door."],
  ["The Forest", "1:12", "Hunted by the pack, Kael runs Lena into the trees and shields her with his body — and she finally sees what he becomes."],
  ["The Bloodline", "1:29", "An ancient codex names what Lena is: the last Luna of the Crescent Pack, a bloodline that doesn't dilute — it waits."],
  ["The Mark", "1:30", "Kael confesses he never married her to save her mother — he claimed her to keep every other Alpha away — as enemies surround the house."],
  ["The Brother", "1:24", "Cornered by Seraphine's blade, Lena meets the one person she never knew existed — and learns the Crescent Pack never fell."],
  ["The Claim", "1:36", "The Crescent Pack's claim turns a private marriage into open war."],
  ["The Cost", "1:21", "Loyalties fracture as Lena learns what being a Luna will cost her."],
  ["The Blade", "1:50", "An old promise and a silver blade force an impossible choice."],
  ["The Truth", "1:21", "The truth about her father's death rewrites everything Lena thought she knew."],
  ["The Reckoning", "1:29", "Two packs, one Luna, and a reckoning a hundred years in the making."],
];

const ALPHA_TR = [
  ["Şeytanın Teklifi", "Ölmek üzere olan annesini yaşatmak için Lena, bir milyarderin imkânsız şartlarını kabul eder: bir evlilik sözleşmesi, doksan dokuz yıl, gece yarısından önce imzalanacak."],
  ["Düğün Gecesi", "Nikâhta “evet” yerine “benim” der — ve malikânenin etrafında kurtlar toplanırken, annesinin kolyesini çıkarmasını ister."],
  ["Onun Sırrı", "Bir portre galerisi sır veriyor: kolye bir Luna'yı, Alfa'nın eşini işaret ediyor — ve Lena ilk kez kocasının kontrolünün ardındaki korkuyu görüyor."],
  ["Nişanlı", "Yirmi yıldır Kael'e vaat edilen kadın bir uyarıyla gelir — son eşinin ölümü kaza değildi, bu dünyada hiçbir şey asla kaza değil."],
  ["Hastane", "Lena'nın annesi bir yalvarış ve bir itirafla uyanır — kolyeye asla dokundurma, ve düğündeki o cana yakın dost babasını öldürdü."],
  ["Tuzak", "Kael lekelenen adının ardındaki gerçeği itiraf eder: Damien üç yıl önce ona tuzak kurup onu ölüme terk etti — ve şimdi Damien kapıda."],
  ["Orman", "Sürü tarafından avlanırken Kael, Lena'yı ağaçların arasına kaçırır ve onu bedeniyle korur — ve Lena sonunda neye dönüştüğünü görür."],
  ["Kan Hattı", "Kadim bir kodeks Lena'nın ne olduğunu söyler: Hilal Sürüsü'nün son Luna'sı, seyrelmeyen bir kan hattı — sadece bekler."],
  ["Mühür", "Kael, annesini kurtarmak için onunla evlenmediğini itiraf eder — onu her Alfa'dan uzak tutmak için sahiplendi — düşmanlar evi sararken."],
  ["Ağabey", "Seraphine'in hançeriyle köşeye sıkışan Lena, var olduğunu hiç bilmediği biriyle tanışır — ve Hilal Sürüsü'nün hiç yok olmadığını öğrenir."],
  ["Sahiplenme", "Hilal Sürüsü'nün talebi, özel bir evliliği açık bir savaşa çevirir."],
  ["Bedel", "Luna olmanın bedelini öğrendikçe sadakatler çatlar."],
  ["Hançer", "Eski bir söz ve gümüş bir hançer imkânsız bir seçime zorlar."],
  ["Gerçek", "Babasının ölümüyle ilgili gerçek, Lena'nın bildiği her şeyi yeniden yazar."],
  ["Hesaplaşma", "İki sürü, tek bir Luna ve yüz yıllık bir hesaplaşma."],
];

const pad = (n) => String(n).padStart(2, "0");

/** Fully-formed Alpha episodes in the pipeline's episode shape. */
export const ALPHA_EPISODES = ALPHA_EN.map(([title, duration, synopsis], i) => {
  const n = i + 1;
  const tr = ALPHA_TR[i];
  const trAudio = n > TR_AUDIO_THROUGH; // eps 11+ have no TR cut → EN audio
  return {
    number: n,
    title: { en: title, tr: tr?.[0] },
    synopsis: { en: synopsis, tr: tr?.[1] },
    duration,
    poster: `/posters/ep-${pad(n)}.jpg`,
    // Pre-hosted + pre-watermarked on the blog's R2; the pipeline leaves these
    // as-is (already branded, stable). Not mirrored again.
    video: {
      en: `${ALPHA_R2}/ep-${pad(n)}.en.mp4?v=${ALPHA_V}`,
      tr: `${ALPHA_R2}/ep-${pad(n)}.${trAudio ? "en" : "tr"}.mp4?v=${ALPHA_V}`,
    },
    _prehosted: true, // signal to the mirror step: skip download/watermark/upload
  };
});

// ── R2 / watermark settings (used only by the --mirror step) ────────────────
export const R2 = {
  bucket: process.env.R2_BUCKET || "jorsby-blog-media",
  publicBase:
    process.env.R2_PUBLIC_BASE_URL ||
    "https://pub-acd1440124614ccb9c0b6dcdfd9cd4af.r2.dev",
  keyPrefix: "shows", // shows/<slug>/ep-NN.<lang>.mp4
};

export const WATERMARK = {
  brand: "jorsby.ai",
  fontFile: "scripts/assets/Inter-Bold.ttf", // bundled; falls back to a system font
  cacheVersion: "1", // bump to force clients past immutable cache on re-upload
};
