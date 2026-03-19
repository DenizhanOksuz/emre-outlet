# Emre Outlet — Web Sitesi

> **"En Ünlü Markalar Outlet Fiyatına"**

🌐 **[Canlı Demo → emre-outlet.netlify.app](https://emreoutlet.netlify.app)**

Osmaniye'de 2 şubesiyle faaliyet gösteren Emre Outlet için geliştirilmiş profesyonel kurumsal web sitesi. Calvin Klein, Tommy Hilfiger, Mavi, Diesel ve daha fazlasını outlet fiyatıyla sunan çok markalı giyim mağazasının dijital platformu.

---

## 🖥️ Sayfalar

| Sayfa | Açıklama |
|-------|----------|
| `index.html` | Anasayfa — Hero, markalar, koleksiyon vitrin, öne çıkan ürünler |
| `koleksiyonlar.html` | Tüm ürünler — Cinsiyet/Marka/Kategori filtreleme |
| `hakkimizda.html` | Marka hikayesi, istatistikler, marka duvarı |
| `iletisim.html` | Şube bilgileri, WhatsApp formu, harita linkleri |
| `admin.html` | Ürün yönetim paneli (giriş korumalı) |

---

## ✨ Özellikler

- 🎨 **Lüks Tasarım** — Derin siyah & altın renk paleti, Cormorant Garamond tipografi
- 📱 **Tam Responsive** — Mobil, tablet ve masaüstü uyumlu
- 💬 **WhatsApp Entegrasyonu** — Her üründen direkt WhatsApp sorgusu
- 🔍 **Akıllı Filtreleme** — Cinsiyet, marka, kategori, yeni/outlet filtreleri
- ✨ **Animasyonlar** — Scroll reveal, hover efektleri, parçacık animasyonları
- 🔐 **Admin Paneli** — Ürün ekleme/düzenleme/silme, görsel yükleme (WebP dönüşümü)
- 📦 **localStorage Tabanlı** — Backend gerekmez, statik hosting ile çalışır

---

## 🛠️ Teknolojiler

- **HTML5** — Semantik yapı, SEO meta etiketleri
- **CSS3** — CSS Variables, Grid, Flexbox, animasyonlar
- **Vanilla JavaScript** — IntersectionObserver, Canvas API (WebP), localStorage
- **Google Fonts** — Cormorant Garamond, Montserrat, Lato

---

## 🚀 Kurulum

```bash
# Yerel sunucu başlat
python3 -m http.server 3000

# Tarayıcıda aç
open http://localhost:3000
```

---

## 🔐 Admin Paneli

Admin paneline erişim: `http://localhost:3000/admin.html`

Varsayılan giriş bilgileri `admin.html` içindeki `CREDENTIALS` nesnesinden değiştirilebilir:

```javascript
const CREDENTIALS = {
  username: 'admin',
  password: 'emre2025'
};
```

**Özellikler:**
- Ürün ekleme / düzenleme / silme
- Görsel yükleme (JPG/PNG → otomatik WebP dönüşümü)
- Drag & drop görsel yükleme
- JSON ile veri dışa/içe aktarma
- Şifre değiştirme

---

## 📁 Proje Yapısı

```
emre-outlet/
├── index.html
├── koleksiyonlar.html
├── hakkimizda.html
├── iletisim.html
├── admin.html
├── css/
│   ├── style.css        # Global design system
│   ├── home.css         # Anasayfa stilleri
│   ├── pages.css        # Alt sayfa stilleri
│   └── admin.css        # Admin panel stilleri
├── js/
│   ├── main.js          # Global JS (navbar, animasyon, vb.)
│   └── products-data.js # Ürün veri modülü (localStorage)
└── images/
    ├── hero_bg.png
    ├── erkek_koleksiyon.png
    └── kadin_koleksiyon.png
```

---

## 📍 İletişim

- **Şube 1:** Fakıuşağı Mah., Osmaniye Merkez
- **Şube 2:** Dr. Sadık Ahmet Cd. altı, 80010 Osmaniye
- **WhatsApp:** [0545 424 32 76](https://wa.me/905454243276)
- **Instagram:** [@emreoutlet.osmaniye](https://www.instagram.com/emreoutlet.osmaniye)

---

*Geliştirici: [DenizhanOksuz](https://github.com/DenizhanOksuz)*
