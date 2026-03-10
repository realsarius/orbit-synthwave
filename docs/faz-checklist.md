# Faz Checklist

## Faz 0 - Blokaj Kapatma
- [x] Backend `start` komutunu `node index.js` yap
- [x] `dev` scriptine `nodemon index.js` ekle
- [x] `backend/.env.example` oluştur
- [x] Frontend API base URL'i env’den al
- [x] Frontend review endpoint’lerini backend ile eşleştir
- [x] Frontend build için toolchain uyumluluğunu çöz (Node/CRA)

## Faz 1 - REST ve Güvenlik
- [x] Endpoint’leri resource bazlı düzenle
- [x] Request validation katmanı ekle
- [x] Merkezi error middleware ekle
- [x] `user_id` bilgisini body yerine header’dan al
- [ ] Auth token verify et (JWT/Firebase)
- [x] HTTP status code standardını uygula

## Faz 2 - SOLID / Clean / DRY
- [x] `App.js` içindeki route-layout-auth sorumluluklarını ayır
- [x] Tek bir AuthContext bırak
- [x] `onAuthStateChanged` kullanımını `useEffect` + cleanup yap
- [x] State mutation noktalarını immutable hale getir
- [x] Ölü kod ve debug log temizliği yap

## Faz 3 - Dependency Modernizasyonu
- [x] `axios` paketlerini 1.x’e yükselt
- [x] `react-scripts` 5 veya Vite migration kararını ver
- [x] Font Awesome sürümlerini güncelle
- [x] `npm audit` tekrar çalıştır ve kalan riskleri raporla
