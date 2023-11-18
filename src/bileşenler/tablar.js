import axios from "axios";

const Tablar = (konular) => {
  // GÖREV 3
  // ---------------------
  // Tek argümanı bir dizi ("konular") olan bu fonksiyonu uygulayın.
  // Örnek olarak, konular dizisi şu şekilde deklare edilmişse ['javascript', 'bootstrap', 'teknoloji']
  // fonksiyon aşağıdaki şekilde bir DOM öğesi döndürecek.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">teknoloji</div>
  // </div>
  //
  const divKonu = document.createElement("div");
  divKonu.className = "topics";
  //verilen konu array'indeki elemanları html'e yazacak olan fonksiyon
  konular.forEach((element) => {
    const divtab = document.createElement("div");
    divtab.className = "tab";
    divtab.textContent = element;
    divKonu.append(divtab);
  });

  return divKonu;
};

const tabEkleyici = (secici) => {
  // GÖREV 4
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu işlevi uygulayın.
  // Konuları bu uç noktadan almalıdır: `http://localhost:5001/api/konular` (console.log ile test edin!).
  // Yanıtın içindeki konu dizisini bulun ve Tablar bileşenini kullanarak tabları oluşturun.
  // Tabları, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //

  axios
    .get(`http://localhost:5001/api/konular`)
    .then((res) => {
      return res.data["konular"];
    })
    .then((data) => {
      document.querySelector(secici).append(Tablar(data));
    });
};

export { Tablar, tabEkleyici };
