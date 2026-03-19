/* =================================================
   EMRE OUTLET — firebase-config.js
   Firebase Firestore bağlantısı ve ürün CRUD işlemleri
   ================================================= */

// ─────────────────────────────────────────────
// 🔥 BURAYA KENDİ FIREBASE BİLGİLERİNİ YAPISTIR
// Firebase Console → Project Settings → Your Apps → firebaseConfig
// ─────────────────────────────────────────────
const firebaseConfig = {
  apiKey: "AIzaSyBufW2olhMkhh4CF4Rk4K8ejRtdNZXNdI",
  authDomain: "emre-outlet.firebaseapp.com",
  projectId: "emre-outlet",
  storageBucket: "emre-outlet.firebasestorage.app",
  messagingSenderId: "1038804949791",
  appId: "1:1038804949791:web:b869aabadab08279abee2a",
  measurementId: "G-27EPHR0F5"
};

// Firebase SDK'yı başlat
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const COLLECTION = 'products';

/* ─────────────────────────────────────────────
   Colection boşsa varsayılan ürünleri yükle
───────────────────────────────────────────── */
async function eoInitProducts() {
  try {
    const snap = await db.collection(COLLECTION).limit(1).get();
    if (snap.empty) {
      console.log('Firestore boş — varsayılan ürünler yükleniyor...');
      const batch = db.batch();
      DEFAULT_PRODUCTS.forEach(p => {
        const ref = db.collection(COLLECTION).doc(String(p.id));
        batch.set(ref, {
          ...p,
          waMsg: `Merhaba, ${p.name} hakkında bilgi almak istiyorum.`,
          createdAt: Date.now()
        });
      });
      await batch.commit();
      console.log('Varsayılan ürünler Firestore\'a yüklendi.');
    }
  } catch (e) {
    console.error('eoInitProducts hatası:', e);
  }
}

/* ─────────────────────────────────────────────
   Tüm ürünleri getir (createdAt'e göre sıralı)
───────────────────────────────────────────── */
async function eoGetProducts() {
  try {
    const snap = await db.collection(COLLECTION).orderBy('createdAt', 'asc').get();
    return snap.docs.map(doc => ({ firestoreId: doc.id, ...doc.data() }));
  } catch (e) {
    console.error('eoGetProducts hatası:', e);
    return [];
  }
}

/* ─────────────────────────────────────────────
   Ürün ekle veya güncelle
   id varsa güncelle, yoksa ekle
───────────────────────────────────────────── */
async function eoSaveProduct(product) {
  try {
    if (product.firestoreId) {
      // Güncelle
      const { firestoreId, ...data } = product;
      await db.collection(COLLECTION).doc(firestoreId).set(data, { merge: true });
      return firestoreId;
    } else {
      // Yeni ekle
      const docRef = await db.collection(COLLECTION).add({
        ...product,
        createdAt: Date.now()
      });
      return docRef.id;
    }
  } catch (e) {
    console.error('eoSaveProduct hatası:', e);
    throw e;
  }
}

/* ─────────────────────────────────────────────
   Ürün sil
───────────────────────────────────────────── */
async function eoDeleteProduct(firestoreId) {
  try {
    await db.collection(COLLECTION).doc(firestoreId).delete();
  } catch (e) {
    console.error('eoDeleteProduct hatası:', e);
    throw e;
  }
}

/* ─────────────────────────────────────────────
   Koleksiyonlar grid'ini ürünlerle doldur (async)
───────────────────────────────────────────── */
async function eoRenderGrid(gridId, countId) {
  const grid     = document.getElementById(gridId);
  const countEl  = document.getElementById(countId);
  if (!grid) return;

  // Yükleme göstergesi
  grid.innerHTML = `
    <div style="grid-column:1/-1;text-align:center;padding:60px 0;color:var(--gold);font-size:14px;letter-spacing:.1em;">
      ⏳ Ürünler yükleniyor...
    </div>`;

  await eoInitProducts();
  const products = await eoGetProducts();

  grid.innerHTML = '';
  if (products.length === 0) {
    grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:60px 0;color:var(--text-muted);">Henüz ürün eklenmemiş.</div>';
    if (countEl) countEl.textContent = '0';
    return;
  }

  products.forEach(p => {
    const waText     = encodeURIComponent(p.waMsg || `Merhaba, ${p.name} hakkında bilgi almak istiyorum.`);
    const badgeClass = p.tip === 'yeni' ? 'badge-gold' : 'badge-red';
    const badgeLabel = p.tip === 'yeni' ? 'Yeni' : 'Outlet';
    const imgSrc     = p.img || p.imgPath || 'images/hero_bg.png';

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

  if (countEl) countEl.textContent = products.length;
}

/* ─────────────────────────────────────────────
   Ana sayfa Öne Çıkanlar (Spotlight) için son 4 ürünü render et
───────────────────────────────────────────── */
async function eoRenderSpotlight(gridId) {
  const grid = document.getElementById(gridId);
  if (!grid) return;

  grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:40px 0;color:var(--gold);">⏳ Öne çıkanlar yükleniyor...</div>';

  await eoInitProducts();
  try {
    const snap = await db.collection(COLLECTION).orderBy('createdAt', 'desc').limit(4).get();
    const products = snap.docs.map(doc => doc.data());

    grid.innerHTML = '';
    if (products.length === 0) {
      grid.innerHTML = ''; // Hiç ürün yoksa boş bırak
      return;
    }

    products.forEach((p, index) => {
      const waText     = encodeURIComponent(p.waMsg || `Merhaba, ${p.name} hakkında bilgi almak istiyorum.`);
      const badgeClass = p.tip === 'yeni' ? 'badge-gold' : 'badge-red';
      const badgeLabel = p.tip === 'yeni' ? 'Yeni' : 'Outlet';
      const imgSrc     = p.img || p.imgPath || 'images/hero_bg.png';

      const card = document.createElement('div');
      card.className = `product-card reveal visible reveal-delay-${index + 1}`;
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
  } catch (e) {
    console.error('eoRenderSpotlight hatası:', e);
    grid.innerHTML = '';
  }
}
