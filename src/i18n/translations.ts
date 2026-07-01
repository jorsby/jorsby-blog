export const languages = {
  en: "English",
  tr: "Türkçe",
} as const;

export const defaultLang = "en" as const;

export type Lang = keyof typeof languages;

export const ui = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.work": "The Work",
    "nav.services": "Services",
    "nav.about": "Studio",
    "nav.contact": "Contact",
    "nav.cta": "Start a project",

    // Hero
    "hero.eyebrow": "AI Video Production Studio",
    "hero.title1": "A studio that ships",
    "hero.title2": "shows your audience can't scroll past.",
    "hero.subtitle":
      "Jorsby is a mass video-production studio. We write, voice, generate, score and edit original series and short-form channels across genres — in Turkish and English — and run them at scale.",
    "hero.ctaPrimary": "Start a project",
    "hero.ctaSecondary": "See our shows",
    "hero.stat1": "shows",
    "hero.stat1Label": "shows across genres",
    "hero.stat2": "episodes",
    "hero.stat2Label": "episodes shipped",
    "hero.stat3": "languages",
    "hero.stat3Label": "languages, produced natively",

    // Featured drama (home teaser)
    "featured.eyebrow": "Flagship series",
    "featured.viewAll": "Watch the full series",
    "featured.langLabel": "Available in",
    "featured.genreLabel": "Genre",

    // Services
    "services.title": "A full-service video studio",
    "services.subtitle":
      "From a single viral short to a whole channel — we handle script, voice, visuals, music, captions and publishing. Pick a lane; we run the rest, in Turkish and English.",
    "services.series.title": "Vertical drama series",
    "services.series.desc":
      "Bingeable 9:16 shows with recurring characters and cliffhangers — the format that built our flagship, ready for your brand.",
    "services.history.title": "High-volume short-form",
    "services.history.desc":
      "Daily Reels, TikToks and Shorts at channel scale — a steady drip of scroll-stopping videos, not one-off posts.",
    "services.educational.title": "Faceless documentary channels",
    "services.educational.desc":
      "Science, history and money told as cinematic docs — a consistent voice and world across an entire channel, no on-camera talent.",
    "services.character.title": "End-to-end & localized",
    "services.character.desc":
      "We own the whole pipeline — script → voice → video → music → captions → publish — and version every piece across languages for global reach.",

    // Value props
    "value.title": "Built for volume",
    "value.subtitle":
      "The reach of a studio, at the speed and cost of a content sprint.",
    "value.speed.title": "Speed",
    "value.speed.desc":
      "From brief to a full episode arc in days. No casting, no crew, no scheduling.",
    "value.cost.title": "Cost",
    "value.cost.desc":
      "A fraction of a live shoot. Iterate on scripts and looks without reshoots.",
    "value.scale.title": "Scale",
    "value.scale.desc":
      "One brief, a whole channel — endless cutdowns for every platform and format.",
    "value.reach.title": "Multilingual reach",
    "value.reach.desc":
      "Ship the same drama in every market — localized voices, not just subtitles.",

    // Process
    "process.title": "How it works",
    "process.subtitle": "A simple pipeline from idea to a series in your feed.",
    "process.step1.title": "Brief",
    "process.step1.desc":
      "You tell us the brand, the goal and the audience. We come back with a concept.",
    "process.step2.title": "Script & style",
    "process.step2.desc":
      "We write the arc and lock the visual language — characters, tone, world.",
    "process.step3.title": "Produce",
    "process.step3.desc":
      "We generate, edit and score every vertical episode, optimized for the scroll.",
    "process.step4.title": "Deliver in any language",
    "process.step4.desc":
      "You get launch-ready episodes — localized for every market you sell in.",

    // Work / showcase
    "work.eyebrow": "The Work",
    "work.featuredLabel": "Featured episode",
    "work.episodeLabel": "Episode",
    "work.genreLabel": "Genre",
    "work.languagesLabel": "Languages",
    "work.allEpisodes": "All episodes",
    "work.playLabel": "Play",
    "work.closeLabel": "Close",
    "work.watchSeries": "Watch the full series on",

    // Work index (the show wall)
    "work.indexEyebrow": "The Work",
    "work.indexTitle": "Shows we produce",
    "work.indexSubtitle":
      "Original vertical series and high-volume short-form — written, voiced, generated, scored and edited in-house, in Turkish and English.",

    // Shows / genres / formats
    "shows.title": "Our shows",
    "shows.subtitle":
      "A working studio — original series and short-form channels we produce and run across genres, in Turkish and English.",
    "shows.viewShow": "View show",
    "shows.viewAll": "See all shows",
    "shows.episodesLabel": "episodes",
    "shows.turkishAudio": "Turkish audio",
    "shows.watchOn": "Watch on",
    "shows.empty": "No shows match those filters.",
    "genre.drama": "Drama",
    "genre.moral": "Moral tales",
    "genre.science": "Science",
    "genre.history": "History",
    "genre.darkHistory": "Dark history",
    "genre.finance": "Business & money",
    "format.series": "Series",
    "format.shorts": "Shorts",
    "filter.all": "All",
    "filter.language": "Language",
    "filter.genre": "Genre",
    "filter.format": "Format",

    // Portfolio stats
    "stats.eyebrow": "A production studio, not a single show",
    "stats.showsLabel": "shows in production",
    "stats.genresLabel": "genres",
    "stats.languagesLabel": "languages",
    "stats.episodesLabel": "episodes shipped",

    // Traction / data-viz
    "traction.eyebrow": "By the numbers",
    "traction.title": "Real traction, not just reels",
    "traction.subtitle":
      "What the machine has produced — and the audience it has earned — measured across every channel we run.",
    "traction.viewsLabel": "views",
    "traction.likesLabel": "likes",
    "traction.postsLabel": "posts published",
    "traction.episodesLabel": "episodes",
    "traction.reachTitle": "Reach by show",
    "traction.reachUnit": "views",
    "traction.platformsTitle": "Every platform",
    "traction.platformsCenter": "posts",
    "traction.outputTitle": "Output",
    "traction.outputSubtitle": "Posts published per month",
    "traction.outputHighlight": "47 episodes shipped in a single month.",

    // Contact
    "contact.title": "Start a project",
    "contact.subtitle":
      "Tell us about your brand and we'll come back with a series concept and a quote.",
    "contact.name": "Name",
    "contact.namePh": "Your name",
    "contact.company": "Company",
    "contact.companyPh": "Company name",
    "contact.email": "Email",
    "contact.emailPh": "you@company.com",
    "contact.message": "What do you want to make?",
    "contact.messagePh": "A few lines about your brand, goal and timeline…",
    "contact.submit": "Send inquiry",
    "contact.sending": "Sending…",
    "contact.success": "Thanks — we'll be in touch shortly.",
    "contact.error": "Something went wrong. Email us at serhat@jorsby.ai.",
    "contact.directLabel": "Prefer email?",
    "contact.directText": "Reach us directly at",

    // CTA banner
    "cta.title": "Ready to build your channel?",
    "cta.subtitle":
      "Tell us the brand and the goal — we'll pitch you a show before you commit to anything.",
    "cta.button": "Start a project",

    // Footer
    "footer.brand": "AI video production studio.\nOriginal series and short-form channels, in Turkish and English.",
    "footer.studio": "Studio",
    "footer.connect": "Connect",
    "footer.copyright": "Jorsby. All rights reserved.",

    // About
    "about.title": "About Jorsby",
    "about.subtitle": "A mass AI video-production studio — series and short-form your audience chooses to watch.",

    // Meta
    "meta.defaultDescription":
      "Jorsby is a mass AI video-production studio — we produce binge-worthy vertical series, short-form channels and documentaries across genres, in Turkish and English.",
    "meta.siteTitle": "Jorsby — AI Video Production Studio",
  },
  tr: {
    // Navigation
    "nav.home": "Ana Sayfa",
    "nav.work": "İşler",
    "nav.services": "Hizmetler",
    "nav.about": "Stüdyo",
    "nav.contact": "İletişim",
    "nav.cta": "Projeye başla",

    // Hero
    "hero.eyebrow": "Yapay Zeka Video Prodüksiyon Stüdyosu",
    "hero.title1": "İzleyicinin geçemeyeceği içerikleri",
    "hero.title2": "ölçekte üreten stüdyo.",
    "hero.subtitle":
      "Jorsby bir seri video prodüksiyon stüdyosudur. Türler arası özgün dizileri ve kısa video kanallarını yazar, seslendirir, üretir, müziklendirir ve kurgularız — Türkçe ve İngilizce — ve ölçekte yönetiriz.",
    "hero.ctaPrimary": "Projeye başla",
    "hero.ctaSecondary": "Şovları gör",
    "hero.stat1": "şov",
    "hero.stat1Label": "türlerde şov",
    "hero.stat2": "bölüm",
    "hero.stat2Label": "yayınlanan bölüm",
    "hero.stat3": "dil",
    "hero.stat3Label": "dilde, native üretim",

    // Featured drama (home teaser)
    "featured.eyebrow": "Amiral gemisi dizi",
    "featured.viewAll": "Tüm diziyi izle",
    "featured.langLabel": "Şu dillerde",
    "featured.genreLabel": "Tür",

    // Services
    "services.title": "Tam kapsamlı bir video stüdyosu",
    "services.subtitle":
      "Tek bir viral kısa videodan koca bir kanala kadar — senaryo, seslendirme, görsel, müzik, altyazı ve yayını biz üstleniyoruz. Bir alan seçin, gerisini biz yürütelim; Türkçe ve İngilizce.",
    "services.series.title": "Dikey dizi serileri",
    "services.series.desc":
      "Tekrar eden karakterler ve merak uyandıran finallerle bağımlılık yapan 9:16 diziler — amiral gemimizi kuran format, markanız için hazır.",
    "services.history.title": "Yüksek hacimli kısa video",
    "services.history.desc":
      "Kanal ölçeğinde günlük Reels, TikTok ve Shorts — tek seferlik paylaşımlar değil, kaydırmayı durduran videoların istikrarlı akışı.",
    "services.educational.title": "Yüzsüz belgesel kanalları",
    "services.educational.desc":
      "Bilim, tarih ve para; sinematik belgeseller olarak anlatılır — kamera önünde oyuncu olmadan, tüm kanal boyunca tutarlı bir ses ve dünya.",
    "services.character.title": "Uçtan uca & yerelleştirilmiş",
    "services.character.desc":
      "Tüm süreci biz yönetiriz — senaryo → ses → video → müzik → altyazı → yayın — ve her içeriği küresel erişim için dillere uyarlarız.",

    // Value props
    "value.title": "Ölçek için kurulu",
    "value.subtitle":
      "Bir stüdyonun erişimi, bir içerik sprintinin hızı ve maliyetiyle.",
    "value.speed.title": "Hız",
    "value.speed.desc":
      "Brieften tam bir bölüm kurgusuna günler içinde. Oyuncu, ekip, planlama yok.",
    "value.cost.title": "Maliyet",
    "value.cost.desc":
      "Canlı çekimin küçük bir kısmı. Yeniden çekim olmadan senaryo ve görünümde deneyin.",
    "value.scale.title": "Ölçek",
    "value.scale.desc":
      "Tek bir brief, koca bir kanal — her platform ve format için sonsuz kısa kurgu.",
    "value.reach.title": "Çok dilli erişim",
    "value.reach.desc":
      "Aynı diziyi her pazarda yayınlayın — sadece altyazı değil, yerel sesler.",

    // Process
    "process.title": "Nasıl çalışıyor",
    "process.subtitle": "Fikirden akışınızdaki bir seriye basit bir süreç.",
    "process.step1.title": "Brief",
    "process.step1.desc":
      "Markayı, hedefi ve kitleyi anlatırsınız. Biz bir konseptle döneriz.",
    "process.step2.title": "Senaryo ve stil",
    "process.step2.desc":
      "Kurguyu yazar, görsel dili sabitleriz — karakterler, ton, dünya.",
    "process.step3.title": "Üretim",
    "process.step3.desc":
      "Her dikey bölümü üretir, kurgular ve müziklendiririz — akış için optimize.",
    "process.step4.title": "Her dilde teslim",
    "process.step4.desc":
      "Lansmana hazır bölümler alırsınız — sattığınız her pazar için yerelleştirilmiş.",

    // Work / showcase
    "work.eyebrow": "İşler",
    "work.featuredLabel": "Öne çıkan bölüm",
    "work.episodeLabel": "Bölüm",
    "work.genreLabel": "Tür",
    "work.languagesLabel": "Diller",
    "work.allEpisodes": "Tüm bölümler",
    "work.playLabel": "Oynat",
    "work.closeLabel": "Kapat",
    "work.watchSeries": "Diziyi şuradan izleyin",

    // Work index (the show wall)
    "work.indexEyebrow": "İşler",
    "work.indexTitle": "Ürettiğimiz şovlar",
    "work.indexSubtitle":
      "Özgün dikey diziler ve yüksek hacimli kısa videolar — evde yazılır, seslendirilir, üretilir, müziklendirilir ve kurgulanır; Türkçe ve İngilizce.",

    // Shows / genres / formats
    "shows.title": "Şovlarımız",
    "shows.subtitle":
      "Çalışan bir stüdyo — türler arası, Türkçe ve İngilizce ürettiğimiz ve yönettiğimiz özgün diziler ve kısa video kanalları.",
    "shows.viewShow": "Şovu gör",
    "shows.viewAll": "Tüm şovları gör",
    "shows.episodesLabel": "bölüm",
    "shows.turkishAudio": "Türkçe seslendirme",
    "shows.watchOn": "İzle:",
    "shows.empty": "Bu filtrelere uygun şov yok.",
    "genre.drama": "Drama",
    "genre.moral": "Ahlak masalları",
    "genre.science": "Bilim",
    "genre.history": "Tarih",
    "genre.darkHistory": "Karanlık tarih",
    "genre.finance": "İş & para",
    "format.series": "Dizi",
    "format.shorts": "Kısa video",
    "filter.all": "Tümü",
    "filter.language": "Dil",
    "filter.genre": "Tür",
    "filter.format": "Format",

    // Portfolio stats
    "stats.eyebrow": "Tek bir şov değil, bir prodüksiyon stüdyosu",
    "stats.showsLabel": "prodüksiyonda şov",
    "stats.genresLabel": "tür",
    "stats.languagesLabel": "dil",
    "stats.episodesLabel": "yayınlanan bölüm",

    // Traction / data-viz
    "traction.eyebrow": "Rakamlarla",
    "traction.title": "Sadece video değil, gerçek etkileşim",
    "traction.subtitle":
      "Makinenin ürettikleri — ve kazandığı izleyici — yönettiğimiz her kanalda ölçüldü.",
    "traction.viewsLabel": "görüntülenme",
    "traction.likesLabel": "beğeni",
    "traction.postsLabel": "paylaşım",
    "traction.episodesLabel": "bölüm",
    "traction.reachTitle": "Şova göre erişim",
    "traction.reachUnit": "görüntülenme",
    "traction.platformsTitle": "Her platform",
    "traction.platformsCenter": "paylaşım",
    "traction.outputTitle": "Üretim",
    "traction.outputSubtitle": "Aylık paylaşım sayısı",
    "traction.outputHighlight": "Tek ayda 47 bölüm yayınlandı.",

    // Contact
    "contact.title": "Projeye başla",
    "contact.subtitle":
      "Bize markanızı anlatın, biz size bir seri konsepti ve teklifle dönelim.",
    "contact.name": "Ad",
    "contact.namePh": "Adınız",
    "contact.company": "Şirket",
    "contact.companyPh": "Şirket adı",
    "contact.email": "E-posta",
    "contact.emailPh": "siz@sirket.com",
    "contact.message": "Ne üretmek istiyorsunuz?",
    "contact.messagePh": "Markanız, hedefiniz ve zaman planınız hakkında birkaç satır…",
    "contact.submit": "Gönder",
    "contact.sending": "Gönderiliyor…",
    "contact.success": "Teşekkürler — kısa süre içinde dönüş yapacağız.",
    "contact.error": "Bir şeyler ters gitti. Bize serhat@jorsby.ai adresinden yazın.",
    "contact.directLabel": "E-postayı mı tercih edersiniz?",
    "contact.directText": "Bize doğrudan ulaşın:",

    // CTA banner
    "cta.title": "Kanalınızı kurmaya hazır mısınız?",
    "cta.subtitle":
      "Markayı ve hedefi anlatın — hiçbir şeye bağlanmadan önce size bir şov sunalım.",
    "cta.button": "Projeye başla",

    // Footer
    "footer.brand": "Yapay zeka video prodüksiyon stüdyosu.\nÖzgün diziler ve kısa video kanalları; Türkçe ve İngilizce.",
    "footer.studio": "Stüdyo",
    "footer.connect": "Bağlantı",
    "footer.copyright": "Jorsby. Tüm hakları saklıdır.",

    // About
    "about.title": "Jorsby Hakkında",
    "about.subtitle": "Bir seri yapay zeka video prodüksiyon stüdyosu — izleyicinin izlemeyi seçtiği diziler ve kısa videolar.",

    // Meta
    "meta.defaultDescription":
      "Jorsby bir seri yapay zeka video prodüksiyon stüdyosudur — türler arası bağımlılık yapan dikey diziler, kısa video kanalları ve belgeseller üretiyoruz; Türkçe ve İngilizce.",
    "meta.siteTitle": "Jorsby — Yapay Zeka Video Prodüksiyon Stüdyosu",
  },
} as const;
