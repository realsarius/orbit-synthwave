# Orbit's Synthwave - Proje Checkup Raporu

Tarih: 2026-03-10
Kapsam: `backend/` + `frontend/` (SOLID, REST best practices, Clean Code, DRY, dependency güvenliği, ayağa kaldırma riski)

## Hızlı Özet

- Proje şu an **çalıştırma blokajları** içeriyor (özellikle backend start script, env eksikliği, frontend build/toolchain uyumsuzluğu).
- Frontend ve backend arasında **API contract uyumsuzluğu** var; review endpoint’leri birebir eşleşmiyor.
- Auth tarafında context yapısı dağınık ve bazı komponentlerde lifecycle kullanımı hatalı (memory leak riski).
- Dependency tarafında frontend’de `190` vulnerability (16 critical), backend’de `1` high (axios).

---

## Faz 0 - Ayağa Kaldırma Blokajları (Önce Bunlar)

### 0.1 Backend `npm start` kırık
- Kanıt: `backend/package.json:9` -> `"start": "nodemon index.js"`
- Sorun: `nodemon` dependency’lerde yok, komut çalışmıyor (`sh: nodemon: command not found`).
- Etki: Backend tek komutla açılmıyor.

### 0.2 Backend zorunlu env yoksa çöküyor
- Kanıt: `backend/index.js:21` -> `process.env.RESTREVIEWS_DB_URI`
- Sorun: `.env`/env değişkeni yoksa MongoClient `undefined` URI ile patlıyor.
- Etki: Lokal setup onboarding zorlaşıyor.

### 0.3 Frontend build Node sürümüyle uyumsuz
- Kanıt: `frontend/package.json:20` -> `react-scripts: 4.0.3`
- Sorun: Node 24 ile build `ERR_OSSL_EVP_UNSUPPORTED` veriyor (webpack 4 zinciri).
- Etki: Proje modern Node ortamlarında build alamıyor.

### 0.4 Frontend-Backend base URL/port uyumsuzluğu
- Kanıt:
  - `frontend/src/http-common.js:5` -> `http://localhost:5000/api/v1`
  - `backend/index.js:11` -> default port `8000`
- Sorun: Ortam değişkeniyle hizalanmazsa frontend yanlış porta istek atıyor.
- Etki: API çağrıları fail.

### 0.5 Frontend review endpoint’leri backend ile eşleşmiyor
- Kanıt:
  - Frontend: `frontend/src/services/restaurant.js:17,21,25` -> `/review-new`, `/review-edit`, `/review-delete`
  - Backend route: `backend/api/restaurants.route.js:11-14` -> `/review` (POST/PUT/DELETE)
- Sorun: Contract mismatch.
- Etki: Review CRUD çalışmaz.

---

## Faz 1 - Kritik REST, Güvenlik ve API Doğruluğu

### 1.1 REST kaynak tasarımı zayıf
- Kanıt:
  - `backend/api/restaurants.route.js:8` -> `/id/:id`
  - `backend/api/restaurants.route.js:11` -> `/review`
- Sorun: Kaynak odaklı değil; endpoint isimleri karma.
- Öneri: 
  - `GET /api/v1/restaurants/:id`
  - `GET /api/v1/restaurants`
  - `GET /api/v1/restaurants/cuisines`
  - `POST /api/v1/restaurants/:id/reviews`
  - `PUT /api/v1/reviews/:reviewId`
  - `DELETE /api/v1/reviews/:reviewId`

### 1.2 Authz yok, kullanıcı kimliği body’den alınıyor
- Kanıt:
  - `backend/api/reviews.controller.js:9-10,34,59`
- Sorun: `user_id` client body/query’den geliyor; server-side doğrulama yok.
- Etki: Sahte user_id ile review update/delete denenebilir.

### 1.3 Input validation yok
- Kanıt: Controller’larda schema doğrulama yok (`backend/api/*.js`).
- Sorun: Bozuk tipler (ör. invalid ObjectId), boş text, negatif page vb. kontrolsüz.
- Etki: 500 artışı + veri kalitesi düşüşü.

### 1.4 Hata yönetimi ve HTTP status tutarsız
- Kanıt:
  - `backend/api/reviews.controller.js:39-42` sonrası `return` yok.
  - `backend/api/reviews.controller.js:65` delete her durumda `success` dönebiliyor.
- Sorun: Bazı akışlar yanlış success verebilir veya çift response riski doğurur.
- Etki: Client tarafında false positive.

### 1.5 `DELETE`te body kullanımı ve semantik
- Kanıt: `backend/api/reviews.controller.js:58-59`
- Sorun: ID query’de, user body’de; semantic dağınık.
- Öneri: `DELETE /reviews/:id` + auth token’dan user çözümü.

---

## Faz 2 - SOLID, Clean Code, DRY Bulguları

### 2.1 App bileşeni fazla sorumluluk alıyor (SRP ihlali)
- Kanıt: `frontend/src/App.js` (navbar + public sayfalar + restaurants flow + auth layout aynı dosyada).
- Sorun: Routing, layout ve auth UI tek yerde toplanmış.
- Etki: Bakım maliyeti ve regressions artar.

### 2.2 İki farklı AuthProvider/Context var (mimari dağınıklık)
- Kanıt:
  - `frontend/src/context/AuthProvider.js`
  - `frontend/src/contexts/AuthContext.js`
- Sorun: Aynı alan için iki context; kullanım karışıyor.
- Etki: Yanlış provider ile sarma, beklenmeyen null state.

### 2.3 `onAuthStateChanged` render içinde çağrılıyor (memory leak riski)
- Kanıt:
  - `frontend/src/components/Login.js:23`
  - `frontend/src/components/Signup.js:26`
  - `frontend/src/components/ForgotPassword.js:23`
  - `frontend/src/components/UpdateProfile.js:23`
- Sorun: Her render’da yeni listener.
- Öneri: `useEffect` + cleanup (`unsubscribe`).

### 2.4 State mutation var
- Kanıt: `frontend/src/components/restaurants.js:34` -> `prevState.reviews.splice(...)`
- Sorun: React state immutability ihlali.
- Etki: Zor izlenen UI bugları.

### 2.5 Temiz kod sorunları
- Kanıtlar:
  - `var` kullanımı: `frontend/src/components/add-review.js:23`, `backend/api/reviews.controller.js:39`
  - Çok sayıda `console.log` production kodu
  - Yorum satırı/ölü kod yoğunluğu (`App.js`, auth componentleri)
- Etki: Okunabilirlik ve maintainability düşüyor.

### 2.6 UI data bug adayı
- Kanıt: `frontend/src/components/restaurants-list.js:127` -> `streetView`
- Sorun: Muhtemelen `street` bekleniyor (detay sayfasında `street` kullanılmış: `restaurants.js:52`).
- Etki: Adres alanı yanlış/boş görünebilir.

---

## Faz 3 - Dependency, Güvenlik ve Modernizasyon

## 3.1 Frontend audit özeti
- Sonuç: `190` vulnerability (`10 low`, `113 moderate`, `51 high`, `16 critical`)
- Ana kaynaklar:
  - `react-scripts@4` ekosistemi (webpack-dev-server/workbox vs)
  - `axios@0.24.0`
  - eski Font Awesome ve eski toolchain zinciri

### 3.2 Backend audit özeti
- Sonuç: `1 high` vulnerability
- Paket: `axios` (major update ile kapanıyor)

### 3.3 Önerilen upgrade sırası
1. `axios` -> `^1.13.x` (frontend + backend)
2. `react-scripts` -> `5.0.1` (veya Vite’e migration)
3. Font Awesome paketlerini 6+/7+ aileye taşımak
4. Node engine pinlemek (`.nvmrc` + `engines`) ve CI’da enforce etmek

---

## Fazlara Bölünmüş Uygulama Planı

### Faz A (1-2 gün) - Projeyi çalıştırır hale getir
- Backend start script düzelt (`start: node index.js`, `dev: nodemon index.js`)
- `.env.example` ekle (`RESTREVIEWS_DB_URI`, `RESTREVIEWS_NS`, `PORT`)
- Frontend `REACT_APP_API_BASE_URL` ile backend portunu hizala
- Frontend service endpoint’lerini backend route’larına eşleştir

### Faz B (2-4 gün) - API doğruluğu + güvenlik
- Request validation (Joi/Zod)
- Merkezi error middleware
- Auth doğrulama (JWT/Firebase token verify) ve user_id’yi token’dan üret
- Status code standardizasyonu (`201`, `204`, `400`, `404`, `409`, `500`)

### Faz C (2-3 gün) - Clean/SOLID/DRY refactor
- `App.js` route/layout ayrımı
- Tek AuthContext altında birleşim
- Auth listener’ları `useEffect`e taşıma
- Reusable form hook/utility ile auth sayfalarında DRY

### Faz D (1-2 gün) - Dependency modernizasyonu
- `axios` major upgrade
- `react-scripts` upgrade veya Vite migration
- Audit tekrar + regression test

---

## Not
Bu rapor kod incelemesi + lokal komut çıktılarıyla hazırlanmıştır. İsterseniz bir sonraki adımda Faz A’yı doğrudan kodlayıp projeyi birlikte ayağa kaldırabiliriz.
