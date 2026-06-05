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
    "hero.eyebrow": "Vertical AI Drama Studio",
    "hero.title1": "Vertical dramas",
    "hero.title2": "your audience can't scroll past.",
    "hero.subtitle":
      "Jorsby produces binge-worthy vertical drama series for brands — written, filmed and voiced with AI, delivered in any language.",
    "hero.ctaPrimary": "Start a project",
    "hero.ctaSecondary": "Watch the series",
    "hero.stat1": "15 episodes",
    "hero.stat1Label": "produced for the launch series",
    "hero.stat2": "Any language",
    "hero.stat2Label": "same story, localized",
    "hero.stat3": "Days, not months",
    "hero.stat3Label": "from brief to delivery",

    // Featured drama (home teaser)
    "featured.eyebrow": "Now showing",
    "featured.viewAll": "View all 15 episodes",
    "featured.langLabel": "Available in",
    "featured.genreLabel": "Genre",

    // Services
    "services.title": "What we make for brands",
    "services.subtitle":
      "Drama that sells, not ads that interrupt. Pick a format — we handle the rest.",
    "services.brand.title": "Brand stories",
    "services.brand.desc":
      "Episodic series that build your world and keep viewers coming back for the next drop.",
    "services.launch.title": "Product launches",
    "services.launch.desc":
      "Turn a release into a storyline — tension, reveal, payoff — engineered for the feed.",
    "services.recruit.title": "Employer brand",
    "services.recruit.desc":
      "Recruitment dramas that make people want to work for you, not just apply.",
    "services.education.title": "Explainer dramas",
    "services.education.desc":
      "Teach a concept or a product through characters and conflict instead of a talking head.",

    // Value props
    "value.title": "Why vertical AI drama",
    "value.subtitle":
      "The reach of a series, at the speed and cost of a content sprint.",
    "value.speed.title": "Speed",
    "value.speed.desc":
      "From brief to a full episode arc in days. No casting, no crew, no scheduling.",
    "value.cost.title": "Cost",
    "value.cost.desc":
      "A fraction of a live shoot. Iterate on scripts and looks without reshoots.",
    "value.scale.title": "Scale",
    "value.scale.desc":
      "One series, fifteen episodes, endless cutdowns for every platform and format.",
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
    "contact.error": "Something went wrong. Email us at hello@jorsby.ai.",
    "contact.directLabel": "Prefer email?",
    "contact.directText": "Reach us directly at",

    // CTA banner
    "cta.title": "Ready to produce your series?",
    "cta.subtitle":
      "We'll pitch you a concept before you commit to anything.",
    "cta.button": "Start a project",

    // Footer
    "footer.brand": "Vertical AI drama studio.\nSeries for brands, in any language.",
    "footer.studio": "Studio",
    "footer.connect": "Connect",
    "footer.copyright": "Jorsby. All rights reserved.",

    // About
    "about.title": "About Jorsby",
    "about.subtitle": "A vertical AI drama studio for brands.",

    // Meta
    "meta.defaultDescription":
      "Jorsby is a vertical AI drama studio — we produce binge-worthy short-form drama series for brands, in any language.",
    "meta.siteTitle": "Jorsby — Vertical AI Drama Studio",
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
    "hero.eyebrow": "Dikey Yapay Zeka Dizi Stüdyosu",
    "hero.title1": "İzleyicinin geçemeyeceği",
    "hero.title2": "dikey diziler.",
    "hero.subtitle":
      "Jorsby, markalar için bağımlılık yapan dikey dizi serileri üretir — yapay zeka ile yazılır, çekilir ve seslendirilir, her dilde teslim edilir.",
    "hero.ctaPrimary": "Projeye başla",
    "hero.ctaSecondary": "Diziyi izle",
    "hero.stat1": "15 bölüm",
    "hero.stat1Label": "lansman serisi için üretildi",
    "hero.stat2": "Her dil",
    "hero.stat2Label": "aynı hikâye, yerelleştirilmiş",
    "hero.stat3": "Aylar değil, günler",
    "hero.stat3Label": "brieften teslimata",

    // Featured drama (home teaser)
    "featured.eyebrow": "Şimdi yayında",
    "featured.viewAll": "15 bölümün tümünü gör",
    "featured.langLabel": "Şu dillerde",
    "featured.genreLabel": "Tür",

    // Services
    "services.title": "Markalar için ne üretiyoruz",
    "services.subtitle":
      "Bölmeyen reklamlar değil, satan diziler. Bir format seçin — gerisini biz hallederiz.",
    "services.brand.title": "Marka hikâyeleri",
    "services.brand.desc":
      "Dünyanızı kuran ve izleyiciyi bir sonraki bölüm için geri getiren bölümlü seriler.",
    "services.launch.title": "Ürün lansmanları",
    "services.launch.desc":
      "Bir lansmanı kurguya dönüştürün — gerilim, açılış, ödül — akış için tasarlanmış.",
    "services.recruit.title": "İşveren markası",
    "services.recruit.desc":
      "İnsanların sadece başvurmak değil, sizin için çalışmak istemesini sağlayan işe alım dizileri.",
    "services.education.title": "Anlatım dizileri",
    "services.education.desc":
      "Bir kavramı ya da ürünü, konuşan kafa yerine karakterler ve çatışmayla anlatın.",

    // Value props
    "value.title": "Neden dikey yapay zeka dizisi",
    "value.subtitle":
      "Bir serinin erişimi, bir içerik sprintinin hızı ve maliyetiyle.",
    "value.speed.title": "Hız",
    "value.speed.desc":
      "Brieften tam bir bölüm kurgusuna günler içinde. Oyuncu, ekip, planlama yok.",
    "value.cost.title": "Maliyet",
    "value.cost.desc":
      "Canlı çekimin küçük bir kısmı. Yeniden çekim olmadan senaryo ve görünümde deneyin.",
    "value.scale.title": "Ölçek",
    "value.scale.desc":
      "Bir seri, on beş bölüm, her platform ve format için sonsuz kısa kurgu.",
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
    "contact.error": "Bir şeyler ters gitti. Bize hello@jorsby.ai adresinden yazın.",
    "contact.directLabel": "E-postayı mı tercih edersiniz?",
    "contact.directText": "Bize doğrudan ulaşın:",

    // CTA banner
    "cta.title": "Serinizi üretmeye hazır mısınız?",
    "cta.subtitle":
      "Hiçbir şeye bağlanmadan önce size bir konsept sunarız.",
    "cta.button": "Projeye başla",

    // Footer
    "footer.brand": "Dikey yapay zeka dizi stüdyosu.\nMarkalar için diziler, her dilde.",
    "footer.studio": "Stüdyo",
    "footer.connect": "Bağlantı",
    "footer.copyright": "Jorsby. Tüm hakları saklıdır.",

    // About
    "about.title": "Jorsby Hakkında",
    "about.subtitle": "Markalar için dikey yapay zeka dizi stüdyosu.",

    // Meta
    "meta.defaultDescription":
      "Jorsby, dikey yapay zeka dizi stüdyosudur — markalar için bağımlılık yapan kısa form dizi serileri üretiyoruz, her dilde.",
    "meta.siteTitle": "Jorsby — Dikey Yapay Zeka Dizi Stüdyosu",
  },
} as const;
