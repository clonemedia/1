// content.js
window.SITE_DATA = {
  social: {
    telegram: "https://t.me/Kodflys",
    mail: "mailto:cloneproduction@gmail.com"
  },

  hero: {
    badge: "Telegram bot, tasarım ve video işleri — hepsi tek çatı altında",
    title: "Neon rüyasında çalışan akıllı botlar & yaratıcı tasarımlar.",
    subtitle:
      "Hazır script değil, ihtiyacına özel Telegram botları, sosyal medya için tasarımlar ve video düzenleme hizmetleri. Sade, hızlı ve otomasyon odaklı.",
    ctaPrimary: "Telegram’dan teklif al",
    ctaSecondary: "İşlerimizi incele",
    stats: [
      { icon: "cpu", label: "Aktif bot sayısı", value: "25+" },
      { icon: "instagram", label: "Sosyal medya projeleri", value: "40+" },
      { icon: "clock", label: "Ortalama teslim süresi", value: "1-3 gün" }
    ],
    miniBadges: [
      { icon: "command", text: "Python · Node.js" },
      { icon: "zap", text: "Otomatik paylaşım & yönetim" }
    ]
  },

  services: [
    {
      id: "telegram-bot",
      icon: "message-circle",
      title: "Telegram Bot Geliştirme",
      description:
        "Tamamen sana özel, panel kontrollü, log tutan ve yönetilebilir Telegram botları.",
      badges: ["Otomatik paylaşım", "Özel komutlar", "Admin paneli"]
    },
    {
      id: "design",
      icon: "layout",
      title: "Grafik Tasarım",
      description:
        "Sosyal medya postları, hikaye setleri, thumbnail ve marka kimliği çalışmaları.",
      badges: ["Reels kapağı", "YouTube thumbnail", "Marka renkleri"]
    },
    {
      id: "video",
      icon: "video",
      title: "Video Düzenleme",
      description:
        "Kısa dikey videolar, cut montaj, altyazı, efekt ve ritme uygun geçişler.",
      badges: ["TikTok / Reels", "Kısa dikey format", "Senkron kurgu"]
    },
    {
      id: "social",
      icon: "share-2",
      title: "Sosyal Medya Yönetimi",
      description:
        "İçerik takvimi, otomatik paylaşım botları ve görsel/video paketleri bir arada.",
      badges: ["İçerik takvimi", "Oto paylaşım", "Raporlama"]
    }
  ],

  /* ===========================================================
     BOT / TASARIM / VİDEO PROJELERİ
  =========================================================== */
  projects: [
    {
      id: "project7",
      category: "Telegram Bot",
      title: "Bonus Kod Paylaşım Botu",
	  price: "6.000₺",
      thumbnail:
        "https://imagedelivery.net/_IP0fEMP4F-W0FKGt0DEHg/b159d573-97e2-4598-a3bc-a6002a315f00/public",
      images: [
        "https://i.ibb.co/tpyc5qLC/photo-2025-07-01-02-31-00-2.jpg",
        "https://i.ibb.co/h6wyLpR/photo-2025-07-01-02-31-00.jpg"
      ],
      shortDescription:
        "Bonus kodları otomatik algılayan, filtreleyen ve sizin belirlediğiniz şekilde paylaşan gelişmiş Telegram bot sistemi.",
      previewUrl: "#",
      tags: ["Bonus Kod", "Filtreleme", "Otomasyon"],
      highlight:
        "Tamamen kontrol sizde olan, akıllı filtre sistemleri ve JSON yapılandırması ile yönetilen profesyonel bonus kod paylaşım botu.",
      works: [
        "Otomatik bonus kod tespiti",
        "Spam, sosyal medya ve kısaltılmış link engelleme",
        "link.php ve benzeri korumalı sayfa filtresi",
        "Önceki kodlarla çakışma engelleme",
        "JSON yapılandırma dosyaları ile tam kontrol",
        "Admin komutları ile bot durumu & yönetim"
      ],
      tech: ["Python", "Aiogram", "Regex Filter Engine", "JSON Config"],
      stats: {
        time: "2-4 gün",
        platform: "Telegram",
        status: "Aktif kullanımda"
      }
    },

    {
      id: "project11",
      category: "Telegram Bot",
      title: "Özel Yüksek Oran Botu",
	  price: "5.000₺",
      thumbnail:
        "https://img.piri.net/piri/upload/3/2025/11/18/9b482cf9-dmdb8k6zjjjda5occxex6r.webp",
      shortDescription:
        "Anlık yüksek oran değişimini tespit ederek belirlediğiniz özel formatla otomatik paylaşan profesyonel bahis oran botu.",
      previewUrl: "#",
      tags: ["Bahis", "Oran Takip", "Anlık Uyarı", "Otomasyon"],
      highlight:
        "Maçlardaki oran değişimlerini gerçek zamanlı takip eder; kanal adınıza özel içerik ve formatla yüksek oran fırsatlarını otomatik paylaşır.",
      works: [
        "Gerçek zamanlı futbol & basketbol oran takibi",
        "Anlık yüksek oran değişimi tespit etme",
        "Kanalınıza otomatik özel içerik formatıyla paylaşım",
        "JSON tabanlı kişiselleştirilebilir mesaj şablonları",
        "Maç ID, lig ve dakikaya göre filtreleme"
      ],
      tech: [
        "Python",
        "Aiogram",
        "Async Scraper",
        "Realtime Engine",
        "JSON Templates"
      ],
      stats: {
        time: "4-6 gün",
        platform: "Telegram",
        status: "Özelleştirilebilir / Canlı kullanım"
      }
    },

    {
      id: "project8",
      category: "Telegram Bot",
      title: "Nakit İade (Cashback) Botu",
	  price: "3.000₺",
      thumbnail:
        "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=900&q=80",
      shortDescription:
        "Yatırım yapan kullanıcılara otomatik olarak nakit iade hesaplayan ve günlük rapor sunan akıllı bot.",
      previewUrl: "#",
      tags: ["Cashback", "Finans", "Otomasyon"],
      highlight:
        "Kullanıcı bazlı nakit iadeleri hesaplayan, her gece günlük rapor üreten ve /istatistik komutuyla yöneticilere özel özet sunan otomatik sistem.",
      works: [
        "Yatırım / işlem geçmişi takibi",
        "Otomatik nakit iade hesaplama",
        "Her gece 00:00’da rapor gönderme",
        "/istatistik komutu ile yöneticilere özel özet",
        "Hızlı, güvenilir ve sessiz işlem motoru"
      ],
      tech: ["Python", "Aiogram", "SQLite/JSON"],
      stats: {
        time: "2-3 gün",
        platform: "Telegram",
        status: "Çalışır durumda"
      }
    },

    {
      id: "project9",
      category: "Telegram Bot",
      title: "Otomatik Şikayet Çekme Botu",
	  price: "6.000₺",
      thumbnail:
        "https://www.datocms-assets.com/64859/1654535366-musteri-sikayetleri-nasil-geri-cevrilir.jpg?auto=format",
      shortDescription:
        "Şikayet sitelerinden kategori bazlı içerik çekip, otomatik olarak grubunuzda paylaşan gelişmiş şikayet botu.",
      previewUrl: "#",
      tags: ["Scraper", "Şikayet", "Otomasyon"],
      highlight:
        "Şikayetvar kategorilerinden otomatik içerik toplayan, görselleri & metinleri formatlı şekilde paylaşan tam otomatik analiz botu.",
      works: [
        "Kategori bazlı şikayet tarayıcı",
        "Metin + görsel içeriği otomatik yakalama",
        "Belirlediğin formatta grup paylaşımı",
        "Sponsor veya belirli marka öne çıkarma sistemi",
        "Filtreleme ve görsel + açıklama dönüştürme",
        "Tam otomatik bildirim & paylaşım"
      ],
      tech: ["Python", "BeautifulSoup", "Aiogram", "HTML Parser"],
      stats: {
        time: "4-6 gün",
        platform: "Telegram",
        status: "Müşteriye özel kurulum"
      }
    },

    {
      id: "project10",
      category: "Özel Geliştirme",
      title: "Özel Telegram Bot Çözümleri",
	  price: "5.000₺",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5rGyNF7xBLGKlWsLyNIL7Lzy0aiJaajsAtA&s",
      shortDescription:
        "Projelerinize tam özel, tamamen ihtiyacınıza yönelik bot geliştirme hizmeti.",
      previewUrl: "#",
      tags: ["Custom Bot", "Otomasyon", "Özel Geliştirme"],
      highlight:
        "İster otomasyon, ister panel, ister moderasyon botu… Hedefinize tam uygun komple özel yazılım geliştiriyoruz.",
      works: [
        "İhtiyaca göre bot planlama",
        "Tamamen size özel altyapı kurulumu",
        "Performanslı, güvenli ve ölçeklenebilir mimari",
        "Gerekirse admin panel entegrasyonu",
        "Ücretsiz deneme talebi desteği",
        "Destek & bakım seçeneği"
      ],
      tech: ["Python", "Node.js", "Aiogram", "Telegraf", "Database Systems"],
      stats: {
        time: "Değişken",
        platform: "Telegram",
        status: "Her zaman açık"
      }
    },

    {
      id: "project5",
      category: "Tasarım",
      title: "Marka Kimliği & Logo Paketi",
      thumbnail:
        "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=900&q=80",
      shortDescription:
        "Logo, renk paleti, tipografi ve sosyal medya post şablonlarını içeren mini marka kimliği paketi.",
      previewUrl: "#",
      tags: ["Logo", "Marka Kimliği", "Sosyal Paket"],
      highlight:
        "Yeni markalar için hem logo hem de sosyal medya şablonlarını tek pakette sunan çözüm.",
      works: [
        "Logo çalışması (2–3 farklı yön)",
        "Renk paleti ve tipografi seçimi",
        "Instagram post & story şablonları",
        "Reels kapak tasarımları",
        "Kullanım kılavuzu PDF"
      ],
      tech: ["Figma", "Photoshop", "Illustrator"],
      stats: {
        time: "2-5 gün",
        platform: "Sosyal Medya",
        status: "Talep üzerine"
      }
    },

    {
      id: "project6",
      category: "Video",
      title: "Dikey Reels/TikTok Paketleri",
      thumbnail:
        "https://images.unsplash.com/photo-1516031190212-da133013de50?auto=format&fit=crop&w=900&q=80",
      shortDescription:
        "Bir seferde 10+ kısa video, senkron montaj, altyazı, efekt ve export ayarlarıyla teslim edilen paket çalışma.",
      previewUrl: "#",
      tags: ["Reels", "TikTok", "Shorts"],
      highlight:
        "İçerik üreticileri için düzenli ve tutarlı bir video akışı oluşturmak üzere paket çalışma sistemi.",
      works: [
        "Ham videolardan seçme ve kırpma",
        "Beat’e uygun kesme ve geçişler",
        "Otomatik / manuel altyazı ekleme",
        "Renk düzeni ve hafif efektler",
        "Platforma uygun export (Reels/TikTok/Shorts)"
      ],
      tech: ["Premiere Pro", "After Effects", "CapCut Pro"],
      stats: {
        time: "2-4 gün",
        platform: "Reels / TikTok / Shorts",
        status: "Devamlı çalışma için ideal"
      }
    }
  ],

  /* ===========================================================
     WEBSITE TASARIMLARI (Yeni Kategori)
  =========================================================== */
  projectsWeb: [
    {
      id: "web1",
      category: "Website Tasarımı",
      title: "BASİC PREMİUM MODEL #1",
	  price: "10.000₺",
      thumbnail:
        "https://i.ibb.co/xKL8Rt0S/resim-2025-11-19-073526103.png",
      images: [
        "https://i.ibb.co/xKL8Rt0S/resim-2025-11-19-073526103.png",
		"https://i.ibb.co/JwZMh1C6/resim-2025-11-19-073606686.png",
		"https://i.ibb.co/CpHSbGsY/resim-2025-11-19-073726045.png",
		"https://i.ibb.co/HLh8YVxk/resim-2025-11-19-073839522.png",
		"https://i.ibb.co/zhgTtWvt/resim-2025-11-19-073933661.png",
		"https://i.ibb.co/jkS1bfVF/resim-2025-11-19-074017308.png",
		"https://i.ibb.co/xSHS6Gtp/resim-2025-11-19-074044857.png"
		
      ],
      shortDescription:
        "Neon efektli, animasyonlu, kişiye özel modern portfolio websitesi.",
      previewUrl: "#",
      tags: ["Neon UI", "Responsive", "Animasyon"],
      highlight:
        "Modern neon efektleri, GSAP animasyonları ve tam responsive mimariyle hazırlanan premium web tasarım.",
      works: [
        "Tam responsive modern layout",
        "GSAP scroll animasyonları",
        "Neon hover efektleri",
        "SEO uyumlu kodlama",
        "Çok hızlı yükleme optimizasyonu"
      ],
      tech: ["HTML", "TailwindCSS", "JavaScript", "GSAP"],
      stats: {
        time: "3-6 gün",
        platform: "Web",
        status: "Hazır teslim / Özelleştirilebilir"
      }
    },
	 {
      id: "web2",
      category: "Website Tasarımı",
      title: "BASİC PREMİUM MODEL #2",
	  price: "15.000₺",
      thumbnail:
        "https://i.imghippo.com/files/fWr6827Qlk.png",
      images: [
        "https://i.imghippo.com/files/pTd2201CDI.png",
		"https://i.imghippo.com/files/VBo3732p.png",
		"https://i.imghippo.com/files/vVe3464B.png",
		"https://i.imghippo.com/files/f7160as.png",
		"https://i.imghippo.com/files/igMA6963tI.png",
		"https://i.imghippo.com/files/LGPd1416rU.png",
		"https://i.imghippo.com/files/gq5384wwY.png",
		"https://i.imghippo.com/files/FOIo8502ePs.png",
		"https://i.imghippo.com/files/X4844CM.png",
		"https://i.imghippo.com/files/oj4797GyA.png",
		"https://i.imghippo.com/files/xEQy1253JSY.png",
		"https://i.imghippo.com/files/NNG9232fo.png",
		"https://i.imghippo.com/files/wN6493XJQ.png",
		"https://i.imghippo.com/files/bjrA1125hGo.png",
		"https://i.imghippo.com/files/QwX4987ZIM.png",
		"https://i.imghippo.com/files/mxlR7654pmI.png",
		"https://i.imghippo.com/files/E4827otc.png"
		
      ],
      shortDescription:
        "Neon efektli, animasyonlu, kişiye özel modern portfolio websitesi.",
      previewUrl: "#",
      tags: ["Neon UI", "Responsive", "Animasyon"],
      highlight:
        "Modern neon efektleri, GSAP animasyonları ve tam responsive mimariyle hazırlanan premium web tasarım.",
      works: [
        "Tam responsive modern layout",
        "GSAP scroll animasyonları",
        "Neon hover efektleri",
        "SEO uyumlu kodlama",
        "Çok hızlı yükleme optimizasyonu"
      ],
      tech: ["HTML", "TailwindCSS", "JavaScript", "GSAP"],
      stats: {
        time: "3-6 gün",
        platform: "Web",
        status: "Hazır teslim / Özelleştirilebilir"
      }
    }
  ]
};

