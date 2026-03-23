# Toz Yapı Teknolojileri - Web Sitesi

## TOZ YAPI TEKNOLOJİLERİ — KURUMSAL WEB SİTESİ

Next.js 14 · TypeScript · TailwindCSS · Vercel Deployment

---

### Teknoloji Yığını
- **Framework:** Next.js 14 (App Router, Static Export)
- **Language:** TypeScript
- **Styling:** TailwindCSS
- **Deployment:** Vercel (Static Export)
- **Fonts:** Cormorant Garamond (Display) + Outfit (Body)

---

### Kurulum

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusu
npm run dev

# Production build (Vercel için static export)
npm run build
```

### Proje Yapısı

```
src/
├── app/                    # Next.js App Router sayfaları
│   ├── page.tsx            # Ana Sayfa
│   ├── hakkimizda/         # Hakkımızda
│   ├── urunler/            # Ürün Grupları (dinamik)
│   │   └── [slug]/         # Her ürün kategorisi
│   ├── blog/               # Blog listesi + detay
│   ├── referanslar/        # Referanslar
│   ├── katalog/            # Ürün Katalogları
│   ├── bim-kutuphanesi/    # BIM Dosyaları
│   ├── hesaplama-araclari/ # Hesaplama Araçları
│   ├── is-ortaklari/       # İş Ortakları
│   ├── sss/                # S.S.S
│   └── iletisim/           # İletişim
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Mega Menü Navbar
│   │   └── Footer.tsx      # Footer
│   └── ui/
│       ├── LunaBot.tsx     # AI Chatbot (Luna)
│       └── WhatsAppButton.tsx
└── lib/
    └── data.ts             # Tüm site verisi (ürünler, blog, iletişim)
```

### Özellikler

- ✅ 16 Ürün Kategorisi (Dinamik sayfalar)
- ✅ Mega Menü (Tüm ürün grupları)
- ✅ Luna AI Chatbot
- ✅ WhatsApp Entegrasyonu
- ✅ Schema.org (Organization, Product, FAQ, Article)
- ✅ Otomatik Sitemap
- ✅ robots.txt (AI crawler izinli)
- ✅ llms.txt (ChatGPT, Gemini, Claude optimizasyonu)
- ✅ İletişim Formu
- ✅ Hesaplama Araçları (4 adet)
- ✅ BIM Kütüphanesi
- ✅ S.S.S (FAQ Schema)
- ✅ Blog Sistemi
- ✅ İş Ortakları Carousel
- ✅ Lighthouse 95+ hedefli
- ✅ Mobile First Responsive

### İletişim Bilgileri (Güncellenebilir: src/lib/data.ts)

- **Adres:** Timko İş Merkezi, Yenimahalle/Ankara
- **Tel:** +90 536 773 14 04
- **Email:** merhaba@tozyapi.com.tr

### Vercel Deploy

1. GitHub'a push edin
2. Vercel'de "Import Project" ile bağlayın
3. Framework: Next.js (otomatik algılanır)
4. Deploy!
