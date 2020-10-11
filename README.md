# AssignmentForNova
 Bu projede Nova DSA tarafından verilen görev projesi tamamlanmıştır.
 ## Proje Özellikleri
 - Proje anasayfa, dashboard sayfası ve project sayfası olmak üzere 3 sayfadan oluşmaktadır.
 - Kullanıcı anasayfadan kayıt olur ve dashboard sayfasına yönlendirilir.Kullanıcı Login için username ve şifre kullanır. Ardından dashboard sayfasına yönlendirilir.
 - Dashboard sayfasından projeler kısmına gidebilmek için aynı sayfadan projects'e tıklanır.
 - Project sayfasında lokalinizden excel dosyası yükleyebileceğiniz bir input alanı bulunur. Yükleme yapıldıktan sonra excel dosyasını tablo içinde görebileceğiniz bir alan mevcuttur.
 ## Projede Kullanılan Teknolojiler ve Araçlar
 - Projenin backend kısmı için Nodejs kullanıldı  . Expressjs FE framework'ü, veritabanı için MongoDB kullanıldı.
 - Kullanılan bazı bağımlılklar;
   * ejs: ejs dosya ismin, ejs uzantısız yazmak için
   * mongoose: Veritabanını projeye bağlamak için
   * xlsx-to-json: Excel dosyalarını json'a dönüştürmek için
   * passport, local-passport: Signup, login işlemleri için
   * nodemon,livereload: Sayfayı otomatik olarak yüklemek ve yenilemek için kullanıldı
## Proje Kurulumu
- Nodejs ve MongoDB'yi indirin
- -mongod komutu ile mongo servisini çalıştırın
- Bağımlıklıkları npm install komutu ile indirin
- Proje localhost:3000 de çalışmaktadır.Bu linke tarayıcınızdan gidin.
