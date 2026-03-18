/* =================================================
   EMRE OUTLET — products-data.js
   Varsayılan ürünler. localStorage boşsa bunlar
   otomatik olarak yüklenir.
   ================================================= */

const EO_PRODUCTS_KEY = 'eo_products';
const EO_ID_KEY = 'eo_id_seq';
const WA_NUM = '905454243276';

const DEFAULT_PRODUCTS = [
  // ERKEK
  { id:1, name:'Slim Fit Koyu İndigo Jean',    marka:'calvin-klein', markaLabel:'Calvin Klein',    cinsiyet:'erkek', kategori:'pantolon',  tip:'yeni',   fiyat:'Fiyat İçin Yazın', imgPath:'images/erkek_koleksiyon.png' },
  { id:2, name:'Slim Fit Polo T-Shirt',        marka:'tommy',        markaLabel:'Tommy Hilfiger',  cinsiyet:'erkek', kategori:'tshirt',    tip:'yeni',   fiyat:'Fiyat İçin Yazın', imgPath:'images/erkek_koleksiyon.png' },
  { id:3, name:'Erkek Slim Jean',              marka:'mavi',         markaLabel:'Mavi',            cinsiyet:'erkek', kategori:'pantolon',  tip:'outlet', fiyat:'Fiyat İçin Yazın', imgPath:'images/erkek_koleksiyon.png' },
  { id:4, name:'Regular Fit Oxford Gömlek',   marka:'uspolo',       markaLabel:'U.S. Polo Assn.', cinsiyet:'erkek', kategori:'gomlek',    tip:'outlet', fiyat:'Fiyat İçin Yazın', imgPath:'images/erkek_koleksiyon.png' },
  { id:5, name:'Premium Sweatshirt',          marka:'lufian',       markaLabel:'Lufian',          cinsiyet:'erkek', kategori:'sweatshirt',tip:'yeni',   fiyat:'Fiyat İçin Yazın', imgPath:'images/erkek_koleksiyon.png' },
  { id:6, name:'Outdoor Mont',                marka:'columbia',     markaLabel:'Columbia',        cinsiyet:'erkek', kategori:'dis',       tip:'outlet', fiyat:'Fiyat İçin Yazın', imgPath:'images/erkek_koleksiyon.png' },
  // KADIN
  { id:7,  name:'Oversize Blazer Ceket',      marka:'mavi',         markaLabel:'Mavi',            cinsiyet:'kadin', kategori:'dis',       tip:'yeni',   fiyat:'Fiyat İçin Yazın', imgPath:'images/kadin_koleksiyon.png' },
  { id:8,  name:'Midi Pamuklu Elbise',        marka:'diesel',       markaLabel:'Diesel',          cinsiyet:'kadin', kategori:'elbise',    tip:'outlet', fiyat:'Fiyat İçin Yazın', imgPath:'images/kadin_koleksiyon.png' },
  { id:9,  name:'Kadın Saten Bluz',           marka:'calvin-klein', markaLabel:'Calvin Klein',    cinsiyet:'kadin', kategori:'tshirt',    tip:'yeni',   fiyat:'Fiyat İçin Yazın', imgPath:'images/kadin_koleksiyon.png' },
  { id:10, name:'Midi A-Line Etek',           marka:'tommy',        markaLabel:'Tommy Hilfiger',  cinsiyet:'kadin', kategori:'elbise',    tip:'outlet', fiyat:'Fiyat İçin Yazın', imgPath:'images/kadin_koleksiyon.png' },
  { id:11, name:'Kadın Skinny Jean',          marka:'mavi',         markaLabel:'Mavi',            cinsiyet:'kadin', kategori:'pantolon',  tip:'outlet', fiyat:'Fiyat İçin Yazın', imgPath:'images/kadin_koleksiyon.png' },
  { id:12, name:'Kadın İnce Hırka',          marka:'uspolo',       markaLabel:'U.S. Polo Assn.', cinsiyet:'kadin', kategori:'sweatshirt',tip:'yeni',   fiyat:'Fiyat İçin Yazın', imgPath:'images/kadin_koleksiyon.png' },
];

/** localStorage'ı başlat: boşsa varsayılanları yükle */
function eoInitProducts() {
  const existing = localStorage.getItem(EO_PRODUCTS_KEY);
  if (!existing) {
    // İlk kurulum: varsayılanları yükle
    const defaults = DEFAULT_PRODUCTS.map(p => ({
      ...p,
      waMsg: `Merhaba, ${p.name} hakkında bilgi almak istiyorum.`,
      createdAt: Date.now()
    }));
    localStorage.setItem(EO_PRODUCTS_KEY, JSON.stringify(defaults));
    localStorage.setItem(EO_ID_KEY, '12');
  }
}

/** Tüm ürünleri getir */
function eoGetProducts() {
  try { return JSON.parse(localStorage.getItem(EO_PRODUCTS_KEY)) || []; }
  catch { return []; }
}

/** Ürünleri kaydet */
function eoSaveProducts(arr) {
  localStorage.setItem(EO_PRODUCTS_KEY, JSON.stringify(arr));
}

/** Sıradaki ID */
function eoNextId() {
  const n = (parseInt(localStorage.getItem(EO_ID_KEY) || '0', 10)) + 1;
  localStorage.setItem(EO_ID_KEY, n);
  return n;
}

/** Koleksiyonlar grid'ini ürünlerle doldur */
function eoRenderGrid(gridId, countId) {
  eoInitProducts();
  const products = eoGetProducts();
  const grid = document.getElementById(gridId);
  if (!grid) return;

  grid.innerHTML = ''; // temizle

  products.forEach(p => {
    const waText     = encodeURIComponent(p.waMsg || `Merhaba, ${p.name} hakkında bilgi almak istiyorum.`);
    const badgeClass = p.tip === 'yeni' ? 'badge-gold' : 'badge-red';
    const badgeLabel = p.tip === 'yeni' ? 'Yeni' : 'Outlet';

    // Görsel: Base64 (admin'den) veya dosya yolu (varsayılan)
    const imgSrc = p.img || p.imgPath || 'images/hero_bg.png';

    const card = document.createElement('div');
    card.className = 'product-card reveal visible';
    card.dataset.cinsiyet = p.cinsiyet;
    card.dataset.marka    = p.marka;
    card.dataset.tip      = p.tip;
    card.dataset.kategori = p.kategori;
    card.innerHTML = `
      <div class="product-card-img">
        <img src="${imgSrc}" alt="${p.name}" loading="lazy"/>
        <div class="product-card-badges"><span class="badge ${badgeClass}">${badgeLabel}</span></div>
        <a href="https://wa.me/${WA_NUM}?text=${waText}" target="_blank" class="product-quick-wa">💬 WhatsApp ile Sor</a>
      </div>
      <div class="product-card-body">
        <div class="product-brand">${p.markaLabel || p.marka}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-price">${p.fiyat || 'Fiyat İçin Yazın'}</div>
      </div>`;
    grid.appendChild(card);
  });

  // Sayacı güncelle
  const countEl = document.getElementById(countId);
  if (countEl) countEl.textContent = products.length;
}
