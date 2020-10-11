# AssignmentForNova
 Bu projede Nova DSA tarafından verilen task oluşturulmuş olup backend için Nodejs, veritabanı olarak MongoDB kullanılmıştır.
 ## Proje Özellikleri
 - Proje anasayfa, dashboard sayfası ve project sayfası olmak üzere 3 sayfadan oluşmaktadır.
 - Kullanıcı anasayfada signin yaparak kayıt olur ve dashboard sayfasına yönlendirilir. Login için username ve şifre ile giriş yapıabilinir. Ardından dashboard sayfasına yönledirilir.
 - Dashboard sayfasında projeler kısmına gidebilmek için link bulunmaktadır.
 - Project sayfasında lokalinizden excel dosyası yükleyebileceğiniz bir input alanı bulunur. Yükleme yapıldıktan sonra excel dosyasını tablo içinde görebileceğiniz bir alan mevcuttur.
 ## Projede Kullanılar Teknolojiler ve Tool'lar
 - Projenin backend kısmını yazmak için Nodejs expressjs framework'ü, veritabanı için MongoDB kullanılmıştır.
 - Kullanılan bazı frameworkler;
   *ejs: ejs dosya ismin, ejs uzantısız yazmak için
   *mongoose: Database'i projeye bağlamak için
   *xlsx-to-json: Excel dosyalarını json'a dönüştürmek için
   *passport, local-passport: Signup, login işlemleri için
   *nodemon,livereload: Sayfayı otomatik olarak yüklemek ve yenilemek için kullanılmıştır
## Proje Kurulumu
- Nodejs ve MongoDB'yi indirin
- mongod komutu ile mongo servisini çalıştırın
- dependency'leri npm install komutu ile indirin
- proje localhost:3000 de çalışmaktadır.
