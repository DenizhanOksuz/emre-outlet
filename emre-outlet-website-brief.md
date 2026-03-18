# Emre Outlet — Web Sitesi Tasarım Brief

## 1. Proje Özeti

**Marka Adı:** Emre Outlet  
**Konum:** Osmaniye, Türkiye (2 Şube)  
**Sektör:** Çok Markalı Giyim Mağazası (Kadın & Erkek)  
**Slogan:** *"En Ünlü Markalar Outlet Fiyatına"*  
**Hedef:** Marka güvenilirliği yüksek, görsel olarak çarpıcı, mobil uyumlu bir tanıtım sitesi

---

## 2. Marka Kimliği

### Logo & Renk Paleti
- **Logo:** Siyah/lacivert zemin üzerinde altın varaklı "E" monogramı, zarif filografi (kıvrım) detayları
- **Ana Renkler:**
  - `#0A0A0F` — Derin Siyah (arka plan)
  - `#C9A84C` — Altın (vurgu, başlıklar, butonlar)
  - `#F5F0E8` — Kırık Beyaz (body metin)
  - `#1A1A2E` — Koyu Lacivert (kart arka planı, secondary bg)
  - `#8B6914` — Koyu Altın (hover states, secondary gold)
- **Gradient:** `linear-gradient(135deg, #0A0A0F 0%, #1A1A2E 50%, #0A0A0F 100%)`

### Tipografi
- **Başlık Fontu:** `Cormorant Garamond` (Google Fonts) — Lüks, editorial his
- **Alt Başlık:** `Montserrat` — Temiz, modern, okunabilir
- **Body:** `Lato` veya `Open Sans` — Türkçe karakter desteği güçlü
- **Özel Detay:** Slogan ve hero alanında `letter-spacing: 0.15em` ile hava oluştur

### Genel Estetik
Calvin Klein'ın **minimalist güç dili** + Tommy Hilfiger'ın **klasik-modern dengesi** + Mavi'nin **sıcak Türk dokunuşu** + Beymen'in **premium vitrin yaklaşımı**. Sonuç: *Lüks hissettiren ama ulaşılabilir görünen bir outlet.*

---

## 3. Site Yapısı & Sayfalar

### 3.1 Navbar (Tüm sayfalarda sabit)
```
Logo (sol) | Anasayfa  Koleksiyonlar  Hakkımızda  İletişim  [WhatsApp İkonu]
```
- Scroll'da: şeffaf → `#0A0A0F` arkaplan + ince altın border-bottom
- Mobilde: hamburger menü (animasyonlu, altın rengi)
- Sağ üstte: 📞 WhatsApp hızlı iletişim butonu (altın, yuvarlak)

---

### 3.2 ANASAYFA

#### A. Hero Section
- **Full-screen (100vh)** — koyu arka plan + ince altın parıltı animasyonu (CSS particles veya subtle grain texture)
- **Ortada:** Logo büyük + slogan
  > *"En Ünlü Markalar Outlet Fiyatına"*
- **Alt kısım:** İki CTA butonu
  - `[Koleksiyonu Keşfet]` — altın dolu buton
  - `[Bize Ulaşın]` — şeffaf/outline buton
- **Arka plan efekti:** Yavaş geçişli dark radial gradient + çok hafif altın shimmer

#### B. Marquee (Kayan Marka Bandı)
- Tüm markaların logoları / metin isimleri soldan sağa sürekli kayar
- Arka plan: `#111120`, yazı: altın rengi
- Markalar: Calvin Klein · Mavi · U.S. Polo Assn. · Beymen · DeFacto · Lufian · Tommy Hilfiger · Wrangler · Diesel · Loft · Columbia

#### C. Kampanya / İndirim Bannerı
- **2 grid kart** yan yana (masaüstü) / alt alta (mobil)
- Sol: **"KADIN KOLEKSİYONU"** — model görseli + "Yeni Sezon" badge
- Sağ: **"ERKEK KOLEKSİYONU"** — model görseli + "Outlet Fiyatı" badge
- Her kartta: hover'da altın overlay + "İncele →" linki
- Görsel yoksa: unsplash fashion placeholder (koyu tonlu, editorial stili)

#### D. Öne Çıkan Ürünler
- 4'lü grid kart — `Yeni Sezon` başlığı altında
- Her kart:
  - Ürün görseli (veya placeholder)
  - Marka adı (altın rengi, küçük caps)
  - Ürün adı
  - Fiyat (varsa) veya `"Fiyat İçin WhatsApp"` linki
- Hover: kart hafif yukarı kalkar + altın border

#### E. Neden Emre Outlet? (USP Section)
4 ikon + metin bloğu, yatay dizilim:
| İkon | Başlık | Açıklama |
|------|--------|----------|
| 🏷️ | Outlet Fiyatı | Ünlü markalar uygun fiyata |
| ✅ | %100 Orijinal | Tüm ürünler garanti belgeli |
| 📍 | 2 Şube | Osmaniye Merkez'de hizmetinizdeyiz |
| 💬 | Hızlı İletişim | WhatsApp ile anında sipariş |

#### F. Instagram Feed
- 6 kare kutucuk grid (2x3 veya 3x2)
- Başlık: `@emreoutlet.osmaniye`
- Her görselde hover: yarı şeffaf altın overlay + Instagram ikonu
- Alt: `[Instagram'da Takip Et]` butonu

#### G. Footer
```
[Logo]
Fakıuşağı Şubesi: Fırat Yılmaz Çakıroğlu Sok., Fakıuşağı Mah., Osmaniye Merkez
Merkez Şube: Dr. Sadık Ahmet Cd. altı, 80010 Osmaniye Merkez
📞 0545 424 32 76
[Instagram] [Facebook] [WhatsApp]
© 2025 Emre Outlet. Tüm hakları saklıdır.
```

---

### 3.3 KOLEKSİYONLAR SAYFASI

#### Filtre Barı (Sayfanın üstü)
```
[Tümü]  [Erkek]  [Kadın]  ──── Marka: [Dropdown ▾]  Kategori: [Dropdown ▾]
```
- Aktif filtre: altın rengi, underline animasyonu

#### Erkek Kategorileri
- T-shirt & Polo
- Gömlek
- Pantolon & Jean
- Sweatshirt & Hoodie
- Mont & Kaban
- Spor Giyim

#### Kadın Kategorileri
- Bluz & T-shirt
- Elbise & Etek
- Jean & Pantolon
- Ceket & Hırka
- Dış Giyim
- Spor Giyim

#### Ürün Kartı Tasarımı
- Görsel alanı (4:5 oran — fashion standart)
- `[YENİ]` veya `[OUTLET]` badge (altın/kırmızı)
- Marka: küçük, altın, caps
- Ürün adı: beyaz
- Fiyat alanı (opsiyonel)
- `[WhatsApp ile Sor]` hızlı aksiyonu

---

### 3.4 HAKKIMIZDA SAYFASI

#### İçerik Yapısı
**Hikaye Bölümü:**
> Emre Outlet, Osmaniye'nin kalbinde kurulmuş, ünlü Türk ve dünya markalarını outlet fiyatlarıyla sunan güvenilir bir giyim mağazasıdır. Calvin Klein'dan Mavi'ye, Tommy Hilfiger'dan Diesel'e kadar geniş marka yelpazesiyle hem gençlere hem yetişkinlere hitap ediyoruz. İki şubemizle Osmaniye halkına hizmet vermenin gururunu yaşıyoruz.

**Rakamlar (animasyonlu sayaç):**
- `11` — Satılan Marka
- `2` — Şube
- `⭐ Güven` — %100 Orijinal Ürün

**Markalar Duvarı:**
- Tüm markaların adları altın grid içinde — Calvin Klein, Mavi, U.S. Polo Assn., Beymen, DeFacto, Lufian, Tommy Hilfiger, Wrangler, Diesel, Loft, Columbia

---

### 3.5 İLETİŞİM & KONUM SAYFASI

#### İki Şube Kartı (yan yana)

**Fakıuşağı Şubesi**
- 📍 Fırat Yılmaz Çakıroğlu Sok., Fakıuşağı Mah., Osmaniye Merkez
- *(Limit Dershanesi / Çınarlı Kahve üstü)*
- 📞 0545 424 32 76
- `[Google Maps'te Aç]` butonu → https://maps.app.goo.gl/QrZ4NMXzi71jWu7E8

**Merkez Şube**
- 📍 Dr. Sadık Ahmet Cd. altı, 80010 Osmaniye Merkez
- 📞 0545 424 32 76
- `[Google Maps'te Aç]` butonu

#### İletişim Formu
- Ad Soyad
- Telefon
- Mesaj
- `[WhatsApp'tan Gönder]` — form submit → WhatsApp deep link açar

#### Google Maps Embed
- İkili harita veya tek harita (her iki pin)
- Koyu harita teması (dark mode map)

---

## 4. UX / Teknik Gereksinimler

### Responsive Breakpoints
| Cihaz | Genişlik |
|-------|---------|
| Mobile | < 768px |
| Tablet | 768–1024px |
| Desktop | > 1024px |

### Animasyonlar & Etkileşimler
- **Hero:** Fade-in + hafif yukarı kayma (0.8s ease-out)
- **Marka bandı:** Sonsuz marquee (CSS animation)
- **Koleksiyon kartları:** Hover → translateY(-8px) + box-shadow altın
- **CTA Butonlar:** Hover → altın glow effect (`box-shadow: 0 0 20px rgba(201,168,76,0.4)`)
- **Scroll reveal:** Bölümler scroll ile fade-in (Intersection Observer)
- **WhatsApp butonu:** Sağ alt köşede sabit, pulsating glow animasyonu

### WhatsApp Entegrasyonu
```
https://wa.me/905454243276?text=Merhaba%2C%20Emre%20Outlet%20hakkında%20bilgi%20almak%20istiyorum.
```

### Instagram
- Hesap: `@emreoutlet.osmaniye`
- Feed: Manuel embed (6 son gönderi) veya embed widget

### Sosyal Medya Linkleri
- Instagram: `https://www.instagram.com/emreoutlet.osmaniye`
- Facebook: *(URL eklenecek)*

### SEO Temeli
- `<title>`: Emre Outlet | Osmaniye Outlet Giyim Mağazası
- `<meta description>`: Calvin Klein, Mavi, Tommy Hilfiger ve daha fazlası — En ünlü markalar outlet fiyatına. Osmaniye'nin güvenilir giyim mağazası Emre Outlet.
- `<h1>`: Anasayfada tek, slogan ile uyumlu
- Open Graph etiketleri (sosyal medya önizleme)

---

## 5. Sayfa Bölümleri Özet Haritası

```
ANASAYFA
├── Navbar (sticky)
├── Hero (full-screen, logo + slogan + CTA)
├── Marka Marquee (kayan bant)
├── Koleksiyon Spotlight (Kadın / Erkek)
├── Öne Çıkan Ürünler (4'lü grid)
├── Neden Emre Outlet? (4 USP)
├── Instagram Feed (6 kare)
└── Footer

KOLEKSİYONLAR
├── Filtre Barı
├── Ürün Grid (responsive)
└── Footer

HAKKIMIZDA
├── Hikaye & Metin
├── Rakamlar (counter animation)
├── Markalar Duvarı
└── Footer

İLETİŞİM
├── 2 Şube Kartı
├── İletişim Formu (WhatsApp yönlendirmeli)
├── Harita Embed
└── Footer
```

---

## 6. Tasarım İlham Kaynakları

| Referans | Alınan Özellik |
|----------|---------------|
| **calvinklein.com** | Monumental minimalizm, geniş boşluklar, siyah-beyaz güç |
| **tommy.com** | Grid yapısı, temiz navbar, koleksiyon sunumu |
| **mavi.com** | Türk kullanıcı alışkanlıklarına uygun UX, kategori filtreleme |
| **beymen.com** | Premium ürün kartı, lüks his veren tipografi |
| **diesel.com** | Koyu tema, editorial görsel kullanımı |
| **lufian.com** | Sade Türkçe arayüz, orta segment güveni |

---

## 7. İçerik Notları

- Ürün görselleri mevcut olduğunda sisteme yüklenecek; başlangıçta editorial tarzı placeholder (koyu zemin üzeri giyim fotoğrafı stili) kullanılabilir.
- "Hakkımızda" metni taslak halinde verilmiştir, son onay mağaza sahibine aittir.
- Facebook URL'si alınır alınmaz footer ve sosyal linklere eklenecektir.
- E-ticaret altyapısı ilerleyen aşamada eklenebilecek şekilde kod yapısı modüler tutulmalıdır.

---

*Bu brief Emre Outlet web sitesi için hazırlanmıştır. Tüm içerik ve tasarım kararları mağaza sahibi onayına tabidir.*
