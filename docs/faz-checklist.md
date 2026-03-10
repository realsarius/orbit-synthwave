# Faz Checklist

## Faz 0 - Blokaj Kapatma
- [ ] Backend `start` komutunu `node index.js` yap
- [ ] `dev` scriptine `nodemon index.js` ekle
- [ ] `backend/.env.example` oluştur
- [ ] Frontend API base URL'i env’den al
- [ ] Frontend review endpoint’lerini backend ile eşleştir
- [ ] Frontend build için toolchain uyumluluğunu çöz (Node/CRA)

## Faz 1 - REST ve Güvenlik
- [ ] Endpoint’leri resource bazlı düzenle
- [ ] Request validation katmanı ekle
- [ ] Merkezi error middleware ekle
- [ ] Auth token verify et, `user_id` body’den alma
- [ ] HTTP status code standardını uygula

## Faz 2 - SOLID / Clean / DRY
- [ ] `App.js` içindeki route-layout-auth sorumluluklarını ayır
- [ ] Tek bir AuthContext bırak
- [ ] `onAuthStateChanged` kullanımını `useEffect` + cleanup yap
- [ ] State mutation noktalarını immutable hale getir
- [ ] Ölü kod ve debug log temizliği yap

## Faz 3 - Dependency Modernizasyonu
- [ ] `axios` paketlerini 1.x’e yükselt
- [ ] `react-scripts` 5 veya Vite migration kararını ver
- [ ] Font Awesome sürümlerini güncelle
- [ ] `npm audit` tekrar çalıştır ve kalan riskleri raporla
