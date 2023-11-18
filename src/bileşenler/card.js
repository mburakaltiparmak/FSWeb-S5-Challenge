import axios from "axios";

const Card = (makale) => {
  // GÖREV 5
  // ---------------------
  // Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
  // Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  // Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
  //
  // <div class="card">
  //   <div class="headline">{ anabaslik }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ yazarFoto }>
  //     </div>
  //     <span>{ yazarAdı } tarafından</span>
  //   </div>
  // </div>
  //

  //card div class'ı oluşturuldu.
  const divCard = document.createElement("div");
  divCard.className = "card";

  //anabaslik içeren headline div class'ı
  const divHeadline = document.createElement("div");
  divHeadline.className = "headline";
  divHeadline.textContent = makale.anabaslik; //makale.anabaslik
  divCard.append(divHeadline);

  //author div class'ı
  const divAuthor = document.createElement("div");
  divAuthor.className = "author";
  divCard.append(divAuthor);

  //img-container div class'ı
  const divImg = document.createElement("div");
  divImg.className = "img-container";
  divAuthor.append(divImg);

  //img
  const image = document.createElement("img");
  image.src = makale.yazarFoto; //makale.yazarFoto
  divImg.append(image);

  //span
  const span = document.createElement("span");
  span.textContent = makale.yazarAdi; //makale.yazarAdi
  divAuthor.append(span);

  //fonksiyon sonu, return
  return divCard;
};

const cardEkleyici = (secici) => {
  // GÖREV 6
  // ---------------------
  // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
  // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
  // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
  // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //

  const cardOlustur = document.querySelector(secici);

  axios.get(`http://localhost:5001/api/makaleler`).then((res) => {
    for (let konu in res.data.makaleler) {
      res.data.makaleler[konu].forEach((makale) => {
        cardOlustur.append(Card(makale));
      });
    }
    console.log(res.data.makaleler);
  });
};

export { Card, cardEkleyici };
