const Header = (baslik, tarih, yazi) => {
  // GÖREV 1
  // ---------------------
  // Bu fonksiyon argüman olarak `baslik`, `tarih` ve `temp` alarak aşağıdaki yapıyı döndürecek.
  // Kullanılan html etiketleri, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  //  <div class="header">
  //    <span class="date">{ tarih }</span>
  //    <h1>{ baslik }</h1>
  //    <span class="temp">{ yazi }</span>
  //  </div>
  //
  ///header div class
  const headerDiv = document.createElement("div");
  headerDiv.className = "header";

  //date span class
  const date = document.createElement("span");
  date.className = "date";
  date.textContent = tarih;
  headerDiv.append(date);

  //h1
  const headerBaslik = document.createElement("h1");
  headerBaslik.textContent = baslik;
  headerDiv.append(headerBaslik);

  //temp span class
  const temp = document.createElement("span");
  temp.className = "temp";
  temp.textContent = yazi;
  headerDiv.append(temp);
  return headerDiv;
};

//secici içerisine ekleme
const headerEkleyici = (secici) => {
  document
    .querySelector(secici)
    .append(Header("Başlık", "01.01.2023", "Lorem ipsum..."));

  // GÖREV 2
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Görev 1'de tanımladığınız Header bileşenini kullanarak bir header oluşturun (baslik,tarih,yazi parametrelerini kendi isteğinize göre belirleyin)
  // Oluşturulan header'i, verilen seçiciyle eşleşen DOM'daki öğeye eklemelidir.
  //
  // İPUCU: querySelector bir string alabilir (bknz: querySelector("#wrapper"))
  // fakat aynı zamanda bir değişken de alabilir (bknz: querySelector(secici))
};

export { Header, headerEkleyici };
