# FORMLARLA ÇALIŞMAK: Bölüm Sonu Egzersizi

**Genel Plan:**
- Form seçimi
- Input Bilgisini UL içerisine ekle
- Form içindeki bilgiyi sıfırla
- Eğer forma bilgi girilmez ise kullanıcıyı uyar
***
**Adımlar**

> **#1** Öncelikle 1. ekran alıntısında(#1) bulunan HTML dosyasından, form seçimi yapabilmek için gerekli id'yi alıyoruz. Burada form elementinin id'si userForm. 2. ekran alıntısında(#2) görüldüğü üzere userForm id'si querySelector fonksiyonu ile alınmıştır. Daha sonrasında addEventListener fonksiyonu ile "submit" olayı gerçekleştiğinde bu html elementinde ne olması gerektiği ifade edilmiştir. Submit olduğunda formHandler fonksiyonu çağırılıyor.
![#1](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/javascript/javascript-temel/formlarla-calismak-bolum-sonu-egzersizi/figures/1-htmlfile.JPG)

> **#2** 2.ekran alıntısında(#2) görülen formHandler fonksiyonu event parametresini alıyor. Daha sonrasında event.preventDefault() fonksiyonu ile submit anında sayfanın yenilenmesini engellemiş oluyoruz. Hemen sonraki satırlarda html dosyasından username ve score id'lerini querySelector ile çağırıp bunların değerlerini listeye eklemek için 4. ekran alıntısında(#4) görülen addItem adlı fonksiyona yolluyoruz.
![#2](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/javascript/javascript-temel/formlarla-calismak-bolum-sonu-egzersizi/figures/2-formhandler.png)

> **#3** İlk aşamada tarayıcımızda gözükecek olan dizayn 3. ekran alıntısında(#3) gözükmektedir.
![#3](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/javascript/javascript-temel/formlarla-calismak-bolum-sonu-egzersizi/figures/3-formhandler.JPG)

> **#4** addItem fonksiyonu 2 tane parametre alıyor. Buraya gelen değerleri listenin en altına ekliyor.
![#4](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/javascript/javascript-temel/formlarla-calismak-bolum-sonu-egzersizi/figures/4-userlistdomprint.JPG)

> **#5** 5.ekran alıntısı(#5) dizayna liste elementi eklendikten sonraki halini göstermektedir.
![#5](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/javascript/javascript-temel/formlarla-calismak-bolum-sonu-egzersizi/figures/5-alertbasic.png)

> **#6** Hatalı bir durumla karşılaştığımızda(bizimkinde bir şey yazmadan submit'lemek) hata mesajı göstermemiz gerekiyor. 6.ekran alıntısında(#6) Bootstrap'ten aldığımız ALERT varsayılan mesajı göstermekteyiz. 7.ekran alıntısında(#7) nasıl bir sonuç verdiğini görebiliriz.
![#6](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/javascript/javascript-temel/formlarla-calismak-bolum-sonu-egzersizi/figures/5-alertbasicprint.JPG)

> **#7**
![#7](https://patika-prod.s3-eu-central-1.amazonaws.com/content/modules/javascript/lessons/formlarla-calismak-bolum-sonu-egzersizi/jJA7SWHMj8MzqEj2b)

> **#8** 8.ekran alıntısında(#8) ALERT sabitini bir fonksiyona dönüştürerek ve template literals kullanarak istediğimiz mesajı formHandler fonksiyonundan göndererek bastırıyoruz. Burada "success" yazan yere "danger" yazarsak yukarıda görülen mesaj kırmızı olur. Ya da aynı yere "alert" yazarsak bu sefer de sarı gözükür.
![#8](https://patika-prod.s3-eu-central-1.amazonaws.com/content/modules/javascript/lessons/formlarla-calismak-bolum-sonu-egzersizi/qLvK56YihsPF2hxRq)

> **#9**
![#9](https://patika-prod.s3-eu-central-1.amazonaws.com/content/modules/javascript/lessons/formlarla-calismak-bolum-sonu-egzersizi/DH4cctvWJzRAi64Lz)

> Alıntı [Patika.dev](https://app.patika.dev/courses/javascript/formlarla-calismak-bolum-sonu-egzersizi)