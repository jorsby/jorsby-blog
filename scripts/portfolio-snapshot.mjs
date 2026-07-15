// ───────────────────────────────────────────────────────────────────────────
// EPISODE SNAPSHOT — committed fallback so the pipeline runs without DB access.
//
// Pulled from Supabase `njfezrlytrqxngmaucfx` on 2026-07-01:
//   episodes JOIN generated_assets ON merged_video_asset_id
//   WHERE render_status='done' AND ga.status='READY', ordered by order_index.
//
// `sync-portfolio.mjs` prefers a live Supabase query when SUPABASE_SERVICE_ROLE_KEY
// is set; otherwise it reads this. Alpha is NOT here — its curated 15 live in
// portfolio.config.mjs (ALPHA_EPISODES). Rows are [title, durationSec, sourceUrl].
// `title` may be a string or an { en, tr } object for a curated localized label.
// Numbers are assigned sequentially in listed (order_index) order.
// ───────────────────────────────────────────────────────────────────────────

const S3 = (id) =>
  `https://s3.us-east-1.amazonaws.com/remotionlambda-useast1-hja8y0cbwi/renders/${id}/out.mp4`;
const R2A = (proj, asset) =>
  `https://pub-dacd753922ff4c0d94ea4ccecd7dd4a5.r2.dev/generated-assets/${proj}/videos/${asset}.mp4`;

const AHLAK = "2fcbe6c3-7031-4454-84ea-70604f1c7538";

export const SNAPSHOT = {
  "jorsby-bilim": [
    ["İngilizce neden 'turkey' diyorlar? 🦃", 59, S3("8cqz8winj4")],
    ["Tonlarca altın bu gemiyle battı ve 500 yıldır bulunamadı 💰", 39, S3("8ugj7z72zr")],
    ["Naziler bu Alp gölünün dibine ne sakladı? 🤫", 61, S3("30e9irb2lq")],
    ["Bu gemi battı, New York'un bankaları sarsıldı 💰🚢", 63, S3("rcbnnnu1xc")],
    ["Uçaktan 3 km düştü, ormanda 11 gün yürüdü 🌿", 69, S3("yp9cx9h14z")],
    ["Osmanlı kahveyi neden yasakladı? ☕", 75, S3("er69w0su6h")],
    ["Kleopatra, Ay'a piramitlerden daha yakın yaşadı 🌙", 68, S3("pqakptykjx")],
    ["Yüksekte neden 'atlasam mı' diye düşünürüz? 🧠", 65, S3("pnow4v5zj3")],
    ["Bu firma eroini öksürük şurubu diye sattı 💊", 64, S3("vr6ywtia4z")],
    ["Sahte üniformayla koca bir kasabayı ele geçirdi 🎖️", 88, S3("219uoqqg4b")],
    ["Bir göktaşı koca ormanı yere serdi ama krater yok 💥", 92, S3("zpbh6bat8u")],
    ["100 yıl kayıp sanılan elmas bir banka kasasındaymış 💎", 84, S3("zt9jht880n")],
    ["Gökdelen fırtınada neden yıkılmıyor? Tepesindeki dev top 🏙️", 83, S3("9osdcdsso5")],
    ["100 milyon dolarlık elması sıfır alarmla çaldılar 💎", 79, S3("5n9i5biuxp")],
    ["1957'de koca bir ülke spagetti ağaçta yetişir sandı 🍝", 80, S3("yptarxnveq")],
    ["Anestezi seni nasıl uyutuyor? Doktorlar tam bilmiyor 💉", 79, S3("if390z0g67")],
  ],
  "buyuk-zihinler": [
    ["Nikola Tesla", 699, S3("os0lrz6p2f")],
    ["İbn-i Sina", 781, S3("u3isxidj6u")],
    ["Marie Curie", 755, S3("1yog1vcg3x")],
    ["Leonardo da Vinci — Gülümseme", 116, S3("1zds50wba7")],
    ["Galileo Galilei — Eppur si muove", 151, S3("tgq3er6ks9")],
    ["Albert Einstein — İmza", 171, S3("fyuqsfuxph")],
  ],
  "kara-sayfa": [
    [
      {
        en: "Paper Throne — Episode 1",
        tr: "Padişahı Deviren İsyanın Lideri, Üç Kapıda Nasıl Yalnız Kaldı? 🕯️",
      },
      138.96,
      S3("7n7pec79g7"),
    ],
    ["Bir Gecede On Dokuz Kardeş", 389, S3("bttla0jfsx")],
    ["Kafesin İçindeki Valide", 367, S3("cmd68t30k7")],
    ["Tahtın Kırıldığı Gece", 446, S3("o9musvyrnk")],
    ["Kanuni, kendi oğlunu bir çadırda boğdurdu", 150, S3("ibiiu3acny")],
  ],
  "para-hikayeleri": [
    ["Getir: On İki Milyar Dolardan Hiçliğe", 348, S3("vpw23tit2d")],
    ["Çiftlik Bank: Sanal İneklerle Kurulan Milyarlık Yalan", 232, S3("riv0bedl79")],
  ],
  "ahlak-masallari": [
    ["Eczanedeki Yabancı", 115, R2A(AHLAK, "be56cc13-9f0a-405e-8d23-fdb9b74531c2")],
    ["Annenin Sofrası", 131, R2A(AHLAK, "2680a00a-32ff-4262-94fd-910228bbc81f")],
    ["Emanet", 172, R2A(AHLAK, "61bd4a07-fa2b-454a-94d5-8ab9116325ca")],
    ["Tevazu", 135, R2A(AHLAK, "745507ee-9f11-4a82-95b1-c62e57b34936")],
    ["Komşu Hakkı", 121, R2A(AHLAK, "9f5a063f-938b-420e-9d50-9133b50d6fab")],
    ["Koca Dolmuş Sustu: O Çocuk Ayağa Kalkınca 🚐", 66, R2A(AHLAK, "018dd006-0b61-4819-a789-d80ec12bfa79")],
    ["Dükkânı Çökerken Onu Düşündü 🪵", 135, S3("1ub58thce1")],
    ["Düştüğünde Kimse Görmedi — Çünkü Biri Önüne Geçmişti 🤍", 148, S3("uyldelxtdy")],
    ["Babasının Öfkesini Bir Çocuk Nasıl Susturdu? 🚲", 146, S3("h7p8lssm5c")],
    ["Aç Bir Çocuk Tek Ekmeğini İkiye Böldü 🍞", 122, S3("7vjhwuftfn")],
    ["Zengin Adam Yağmurda Ağladı: Asıl Zengin Kimdi? 🌧️", 69, S3("qozqp7dwh8")],
    ["Donmuş Yavruyu Görmezden Geldi — Sonra Geri Döndü 🐾", 145, S3("vhhdqkm0mo")],
    ["Her Şeyi Vardı Ama Mutsuzdu — O Yoksul Çocuk Neden Gülüyordu? 🌅", 112, S3("22jf2a25wp")],
    ["Kırılan Onu O Kırmadı 🪵", 126, S3("3fli36zdl5")],
    ["Kapı Çalındığında Ellerinde Son Lokmaları Vardı 🌧️", 131, S3("ad4qbu2h4y")],
    ["Kalabalıkta Kimse Onu Görmedi — Ta ki O Adam Durana Kadar 🤲", 60, S3("59euanydao")],
    ["Bağıran Adam, Susan Usta 🤝", 61, S3("zz3us5d7je")],
    ["Pazarda Yaşlı Kadını Kandırdılar — Kalabalık Sustu, Ama Bir Genç Sessiz Kalmadı ⚖️", 144, S3("2udkrezvv9")],
  ],
};
