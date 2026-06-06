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
    "hero.eyebrow": "AI Story Studio",
    "hero.title1": "Vertical dramas",
    "hero.title2": "your audience can't scroll past.",
    "hero.subtitle":
      "Jorsby makes binge-worthy story series that businesses run on their own channels — vertical or long-form, written and voiced with AI, in any language.",
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
    "services.title": "What we make for your channels",
    "services.subtitle":
      "Not ads that interrupt — story series your audience chooses to watch. Pick a lane; we produce the rest.",
    "services.educational.title": "Educational storytelling",
    "services.educational.desc":
      "Turn complex topics — law, finance, health — into story-driven episodes people watch to the end instead of scrolling past.",
    "services.series.title": "Vertical drama series",
    "services.series.desc":
      "Ongoing 9:16 shows for your Instagram and TikTok — recurring characters, cliffhangers, a reason to come back for the next drop.",
    "services.history.title": "History & documentary",
    "services.history.desc":
      "Long-form visualized history and explainers for YouTube — a consistent cast and world across a whole channel.",
    "services.character.title": "Consistent characters",
    "services.character.desc":
      "Recurring characters and worlds your brand owns — the same faces, voices and style across every episode and language.",

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
    "work.watchSeries": "Watch the full series on",

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
    "cta.title": "Ready to produce your series?",
    "cta.subtitle":
      "We'll pitch you a concept before you commit to anything.",
    "cta.button": "Start a project",

    // Footer
    "footer.brand": "AI story studio.\nSeries businesses run on their own channels, in any language.",
    "footer.studio": "Studio",
    "footer.connect": "Connect",
    "footer.copyright": "Jorsby. All rights reserved.",

    // About
    "about.title": "About Jorsby",
    "about.subtitle": "An AI story studio — series your audience chooses to watch.",

    // Meta
    "meta.defaultDescription":
      "Jorsby is an AI story studio — we produce binge-worthy vertical dramas and long-form series that businesses run on their own channels, in any language.",
    "meta.siteTitle": "Jorsby — AI Story Studio",
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
    "hero.eyebrow": "Yapay Zeka Hikâye Stüdyosu",
    "hero.title1": "İzleyicinin geçemeyeceği",
    "hero.title2": "dikey diziler.",
    "hero.subtitle":
      "Jorsby, işletmelerin kendi kanallarında yayınladığı bağımlılık yapan hikâye serileri üretir — dikey ya da uzun form, yapay zeka ile yazılır ve seslendirilir, her dilde.",
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
    "services.title": "Kanallarınız için ne üretiyoruz",
    "services.subtitle":
      "Bölmeyen reklamlar değil — izleyicinin izlemeyi seçtiği hikâye serileri. Bir alan seçin, gerisini biz üretelim.",
    "services.educational.title": "Eğitici hikâye anlatımı",
    "services.educational.desc":
      "Karmaşık konuları — hukuk, finans, sağlık — izleyicinin geçip gitmek yerine sonuna kadar izlediği hikâye odaklı bölümlere dönüştürün.",
    "services.series.title": "Dikey dizi serileri",
    "services.series.desc":
      "Instagram ve TikTok için sürekli 9:16 diziler — tekrar eden karakterler, merak uyandıran finaller, bir sonraki bölüm için geri dönme nedeni.",
    "services.history.title": "Tarih ve belgesel",
    "services.history.desc":
      "YouTube için uzun form görselleştirilmiş tarih ve anlatımlar — tüm bir kanal boyunca tutarlı bir oyuncu kadrosu ve dünya.",
    "services.character.title": "Tutarlı karakterler",
    "services.character.desc":
      "Markanızın sahip olduğu tekrar eden karakterler ve dünyalar — her bölümde ve her dilde aynı yüzler, sesler ve stil.",

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
    "work.watchSeries": "Diziyi şuradan izleyin",

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
    "cta.title": "Serinizi üretmeye hazır mısınız?",
    "cta.subtitle":
      "Hiçbir şeye bağlanmadan önce size bir konsept sunarız.",
    "cta.button": "Projeye başla",

    // Footer
    "footer.brand": "Yapay zeka hikâye stüdyosu.\nİşletmelerin kendi kanallarında yayınladığı seriler, her dilde.",
    "footer.studio": "Stüdyo",
    "footer.connect": "Bağlantı",
    "footer.copyright": "Jorsby. Tüm hakları saklıdır.",

    // About
    "about.title": "Jorsby Hakkında",
    "about.subtitle": "Bir yapay zeka hikâye stüdyosu — izleyicinin izlemeyi seçtiği seriler.",

    // Meta
    "meta.defaultDescription":
      "Jorsby bir yapay zeka hikâye stüdyosudur — işletmelerin kendi kanallarında yayınladığı bağımlılık yapan dikey dramalar ve uzun form seriler üretiyoruz, her dilde.",
    "meta.siteTitle": "Jorsby — Yapay Zeka Hikâye Stüdyosu",
  },
} as const;
