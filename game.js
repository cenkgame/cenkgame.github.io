//Oyun içinde telif hakları bizde olmayan video, görsel, seslendirme ve müzik dosyaları bunulmaktadır. Oyun içi görsel, video ve oyun dosyalarının paylaşılması yasaktır.Ayriyeten oyunun dağıtılıp parayla satılması yasaktır. Bozüyük Borsa Anadolu Lisesi Tarih dersi için dersi aktifleştirmek ve daha eğlenceli hale getirmek için hazırlanmıştır.
var textWrapper = document.querySelector('.ml2');
let takimsecimi = 0;
var vid = document.getElementById("intro");
var mutabik = false;
var sorulansoru = {};
var verilencevap = "";
vid.playbackRate = 1.9;
let sorusayisi = 1;
var timeleft = 45;
let surecalisiyormu = false;
var saldiriturindex = 0;
let bitti = false;
var saldirituru = false;
let dogrumu = false;
var textpos = 0;
let soz = 0;
let savasilanbolge = null;
let suankitakim;
let fullekran = false;
var nasiloynanirmis = "Cenk, sorulan sorulara doğru cevap vererek haritadaki bölgeleri ele geçirmeye bağlı bir oyundur.Başlangıçta tüm harita boştur.Haritanın tüm kısımları dolana kadar boş bölgeler için takımlara sıra sıra sorular yöneltilir.Doğru bilen bölgeyi ele geçirir, bilemeyen ise sırasını karşı takıma vermiş olur.Tüm bölgeler ele geçirilip savaş turuna geçildiğinde ise öncelik için zar atılır.Zarda büyük sayıyı tutturan takım ilk önce başlar ve bu sefer sıra sıra saldırı-savunma tarzında rastgele bölgeler üzerine ilerler oyun."
var elem = document.documentElement;
var arkaplanmuzigi = document.getElementById("arkaplanmuzigi")
var sesefekti = document.getElementById("sesefekti")
var devmode = false; 




getRandomNumber = () => {
  return Math.floor(Math.random() * 6) + 1
}
$(".tekraroyna").click(() => {
  window.location.href = "index.html"
})
$(".dicebtn").click(() => {

  saldiriturindex += 1;

  var s1 = getRandomNumber()
  var s2 = getRandomNumber()
  $(".dice1").attr("src", `./resimler/${s1}.png`)
  $(".dice2").attr("src", `./resimler/${s2}.png`)
  play_("./ses/zar.mp3")

  if(s1 == s2){
     s1 = getRandomNumber()
   s2 = getRandomNumber()
   $(".dice1").attr("src", `./resimler/${s1}.png`)
    $(".dice2").attr("src", `./resimler/${s2}.png`)
  }
  if(s1 > s2){
    sira = 0
    
    setTimeout(() => {

      if(saldirituru == false){
        arkaplanmuzigi.childNodes[1].src = "./ses/arkaplan3.mp3"
        arkaplanmuzigi.load()
        arkaplanmuzigi.volume = 0.3
        arkaplanmuzigi.play()

        play_("./ses/cenkbaslasin.mp3")
      
      }

      if(saldirituru == false && saldiriturindex == 2){
        if(suankitakim == takim1){
      
          suankitakim.durum = "saldiriyor"
          takim1.durum = "saldiriyor"
          takim2.durum = "savunuyor"
        }
        if(suankitakim == takim2){
          
          suankitakim.durum = "saldiriyor"
          takim2.durum = "saldiriyor"
          takim1.durum = "savunuyor"
          
        }
        setTimeout(() => {
          arkaplanmuzigi.childNodes[1].src = "./ses/arkaplan4.mp3"
        arkaplanmuzigi.load()
        arkaplanmuzigi.play()
        suankitakim.durum = suankitakim.durum == "saldiriyor" ? "savunuyor" : "saldiriyor"
          play_("./ses/savasturubaslasin.mp3")

        }, 1000);
        saldirituru = true;
      
       
        
      
      }
      
    alert(takim1.ad + " önce başlıyor sıkı tutunun!")
    openclose("close",".dice")
    openclose("open",".oyun")
    
    openclose("close",".takimekrani")
    // openclose("open",".oyun")
    
   
  
    openclose("close",".logobuyuk")
    //openclose("open",".padisahsozu")
    openclose("open",".birincitakim")
    openclose("open",".ikincitakim")
    $(".takimisim")[0].innerHTML = takim1.ad;
    $(".takimisim")[1].innerHTML = takim2.ad;
    $(".takimresim")[0].src = takim1.logo;
    $(".takimresim")[1].src = takim2.logo;
    sorulansoru = sorular[Math.floor(Math.random() * sorular.length)];
    $(".soruyazi").html(sorulansoru.soru);
    sorulansoru.yanliscevaplar.push(sorulansoru.cevap);
    shuffle(sorulansoru.yanliscevaplar);
    $(".cevaplar")[0].innerHTML = sorulansoru.yanliscevaplar[0];
    $(".cevaplar")[1].innerHTML = sorulansoru.yanliscevaplar[1];
    $(".cevaplar")[2].innerHTML = sorulansoru.yanliscevaplar[2];
    $(".cevaplar")[3].innerHTML = sorulansoru.yanliscevaplar[3];
    
    savasilanbolge = bolgeler[Math.floor(Math.random() * bolgeler.length)];
    suankitakim = sira == 0 ? takim1 : takim2
    var sira_ = sira == 0 ? 1 : 0;
    $(".sirabizde")[sira].style.color = suankitakim.renk;
  $(".sirabizde")[sira].classList.remove("disactive")
  $(".sirabizde")[sira_].classList.add("disactive")
    
    surecalisiyormu = true; 

    }, 1500);
  }
  if(s2 > s1){
    sira = 1
    setTimeout(() => {
      if(saldirituru == false){
        arkaplanmuzigi.childNodes[1].src = "./ses/arkaplan3.mp3"
        arkaplanmuzigi.load()
        arkaplanmuzigi.volume = 0.3
        arkaplanmuzigi.play()
        
        play_("./ses/cenkbaslasin.mp3")
      
      }
      

      if(saldirituru == false && saldiriturindex == 2){
        if(suankitakim == takim1){
      
          suankitakim.durum = "saldiriyor"
          takim1.durum = "saldiriyor"
          takim2.durum = "savunuyor"
        }
        if(suankitakim == takim2){
          
          suankitakim.durum = "saldiriyor"
          takim2.durum == "saldiriyor"
          takim1.durum = "savunuyor"
          
        }
       
        
        setTimeout(() => {
          arkaplanmuzigi.childNodes[1].src = "./ses/arkaplan4.mp3"
        arkaplanmuzigi.load()
        arkaplanmuzigi.play()
        suankitakim.durum = suankitakim.durum == "saldiriyor" ? "savunuyor" : "saldiriyor"
          play_("./ses/savasturubaslasin.mp3")

        }, 1000);

        saldirituru = true;
      
      }
      alert(takim2.ad + " önce başlıyor sıkı tutunun!")
      openclose("close",".dice")
      openclose("open",".oyun")
      openclose("close",".takimekrani")
      // openclose("open",".oyun")
      
      openclose("close",".logobuyuk")
      //openclose("open",".padisahsozu")
      openclose("open",".birincitakim")
      openclose("open",".ikincitakim")
      $(".takimisim")[0].innerHTML = takim1.ad;
      $(".takimisim")[1].innerHTML = takim2.ad;
      $(".takimresim")[0].src = takim1.logo;
      $(".takimresim")[1].src = takim2.logo;
      sorulansoru = sorular[Math.floor(Math.random() * sorular.length)];
      $(".soruyazi").html(sorulansoru.soru);
      sorulansoru.yanliscevaplar.push(sorulansoru.cevap);
      shuffle(sorulansoru.yanliscevaplar);
      $(".cevaplar")[0].innerHTML = sorulansoru.yanliscevaplar[0];
      $(".cevaplar")[1].innerHTML = sorulansoru.yanliscevaplar[1];
      $(".cevaplar")[2].innerHTML = sorulansoru.yanliscevaplar[2];
      $(".cevaplar")[3].innerHTML = sorulansoru.yanliscevaplar[3];
      openclose("close",".takimdurum")
      savasilanbolge = bolgeler[Math.floor(Math.random() * bolgeler.length)];
      suankitakim = sira == 0 ? takim1 : takim2
      var sira_ = sira == 0 ? 1 : 0;

    $(".sirabizde")[sira].style.color = suankitakim.renk;
      $(".sirabizde")[sira].classList.remove("disactive")
      $(".sirabizde")[sira_].classList.add("disactive")
      surecalisiyormu = true; 
      
      }, 1500);
  }
})
var yeniSoru = () => {
  // if(bolgeler.filter(bolge => bolge.sahip == null).length == 0){
  //   saldiriturindex += 1;
  // }
  
  if(saldiriturindex == 2){
    var takim1bolgeler = bolgeler.filter(bolge => bolge.sahip == takim1.ad)
  var takim2bolgeler = bolgeler.filter(bolge => bolge.sahip == takim2.ad)
  if((takim1bolgeler.length == 8) || (takim2bolgeler.length == 8)){
    openclose("open",".galip")
    setTimeout(() => {

      openclose("close",".galip")
      openclose("open","#eren")
      $("#eren").play()
    }, 500);
    if(takim1bolgeler.length == 8){

      $(".galiptakim").html(takim1.ad)
      if(takim1.ad == "Akıncılar"){
        play_("./ses/akincilar/akinci_galip.mp3")
      }
      if(takim1.ad == "Lağımcılar"){
        play_("./ses/lagimcilar/lagimcigalip.mp3")
      }
      if(takim1.ad == "Yeni Çeriler"){
        play_("./ses/yeniceriler/yenicerigalip.mp3")
      }
      if(takim1.ad == "Mezarcılar"){
        play_("./ses/mezarcilar/mezarcigalip.mp3")
      }
    }
    if(takim2bolgeler.length == 8){

      $(".galiptakim").html(takim2.ad)
      if(takim2.ad == "Akıncılar"){
        play_("./ses/akincilar/akinci_galip.mp3")
      }
      if(takim2.ad == "Lağımcılar"){
        play_("./ses/lagimcilar/lagimcigalip.mp3")
      }
      if(takim2.ad == "Yeni Çeriler"){
        play_("./ses/yeniceriler/yenicerigalip.mp3")
      }
      if(takim2.ad == "Mezarcılar"){
        play_("./ses/mezarcilar/mezarcigalip.mp3")
      }
    }
    openclose("open",".tekraroyna")
    openclose("close",".oyun")
  }
    savasilanbolge = sira == 0 ? takim1bolgeler[Math.floor(Math.random() * takim1bolgeler.length)] : takim2bolgeler[Math.floor(Math.random() * takim2bolgeler.length)]
    sira = sira == 0 ? 1 : 0;
  suankitakim = sira == 0 ? takim1 : takim2
  sorusayisi += 1;
  sorulansoru = sorular[Math.floor(Math.random() * sorular.length)];
  $(".soruyazi").html(sorulansoru.soru);
  if(sorulansoru.yanliscevaplar.length == 3){
    sorulansoru.yanliscevaplar.push(sorulansoru.cevap);
    shuffle(sorulansoru.yanliscevaplar);
  }
 
  $(".cevaplar")[0].innerHTML = sorulansoru.yanliscevaplar[0];
  $(".cevaplar")[1].innerHTML = sorulansoru.yanliscevaplar[1];
  $(".cevaplar")[2].innerHTML = sorulansoru.yanliscevaplar[2];
  $(".cevaplar")[3].innerHTML = sorulansoru.yanliscevaplar[3];
  timeleft = 45;
  $(".sorusayi").html("Tur " + (sorusayisi) + " | Bölge : " + savasilanbolge.isim);
  document.getElementById("sayac").innerHTML = timeleft;
  surecalisiyormu = true;
  var sira_ = sira == 0 ? 1 : 0;
    $(".sirabizde")[sira].style.color = suankitakim.renk;
  $(".sirabizde")[sira].classList.remove("disactive")
  $(".sirabizde")[sira_].classList.add("disactive")

 
  
  return;

  }
  
  if((bolgeler.every(bolge => bolge.sahip != null) == true) && saldiriturindex == 1){

    console.log("tüm bolgeler dolu");
    $(".dice1").html("-")
  $(".dice2").html("-")
    openclose("open",".dice")
    $(".takim1serit").css("background-color",takim1.renk)
    $(".takim2serit").css("background-color",takim2.renk)
    openclose("open",".dicebtn")
    openclose("close",".oyun")
    return
   
  }else{
    console.log("bolgelerden en az biri bos")
    
  }
  
  sira = sira == 0 ? 1 : 0;
  suankitakim = sira == 0 ? takim1 : takim2
  sorusayisi += 1;
  sorulansoru = sorular[Math.floor(Math.random() * sorular.length)];
  $(".soruyazi").html(sorulansoru.soru);
  if(sorulansoru.yanliscevaplar.length == 3){
    sorulansoru.yanliscevaplar.push(sorulansoru.cevap);
    shuffle(sorulansoru.yanliscevaplar);
  }
 
  $(".cevaplar")[0].innerHTML = sorulansoru.yanliscevaplar[0];
  $(".cevaplar")[1].innerHTML = sorulansoru.yanliscevaplar[1];
  $(".cevaplar")[2].innerHTML = sorulansoru.yanliscevaplar[2];
  $(".cevaplar")[3].innerHTML = sorulansoru.yanliscevaplar[3];
  var savasilacak_bolge = bolgeler.filter(bolge => bolge.sahip == null)
  savasilanbolge = savasilacak_bolge[Math.floor(Math.random() * savasilacak_bolge.length)];
  timeleft = 45;
  $(".sorusayi").html("Tur " + (sorusayisi) + " | Bölge : " + savasilanbolge.isim);
  document.getElementById("sayac").innerHTML = timeleft;
  surecalisiyormu = true;
  var sira_ = sira == 0 ? 1 : 0;
  $(".sirabizde")[sira].style.color = suankitakim.renk;
  $(".sirabizde")[sira].classList.remove("disactive")
  $(".sirabizde")[sira_].classList.add("disactive")

  if(saldirituru == true){
    suankitakim.durum = suankitakim.durum == "saldiriyor" ? "savunuyor" : "saldiriyor"
    takim1.durum = (suankitakim == takim1) && takim1.durum == "saldiriyor" ? "savunuyor" : "saldiriyor"  
    takim2.durum = (suankitakim == takim2) && takim2.durum == "saldiriyor" ? "savunuyor" : "saldiriyor"  
  }
  
}  



$(".yenisoru").click(() => {
  yeniSoru()
  openclose("close",".dogru")
  openclose("close",".yanlis")
  openclose("close",".surebitti")
})

let bolgeler = [
  {
    id:"1",
    isim:"Marmara",
    sahip:null
  },
  {
    id:"2",
    isim:"Ege",
    sahip:null
  },
  {
    id:"3",
    isim:"Ic Anadolu",
    sahip:null
  },
  {
    id:"4",
    isim:"Karadeniz",
    sahip:null
  },
  {
    id:"5",
    isim:"KKTC",
    sahip:null
  },
  {
    id:"6",
    isim:"Akdeniz",
    sahip:null
  },
  {
    id:"7",
    isim:"Doğu Anadolu",
    sahip:null
  },
  {
    id:"8",
    isim:"Güney D. Anadolu",
    sahip:null
  }
]
function play_(ses){
  sesefekti.childNodes[1].src = ses;
sesefekti.load();
sesefekti.volume = 1;
sesefekti.play();
}
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});




$("body").click(() => {
  openclose("close",".baslat")
 
  if(fullekran == false){
    openclose("close","#intro")

document.documentElement.requestFullscreen();
/*arkaplanmuzigi.volume = 0.1
arkaplanmuzigi.play();*/

document.getElementById("loading").play()
setTimeout(() => {
  openclose("close",".#loading")
  openclose("close",".baslat");
openclose("open","#intro");

openclose("open",".logobuyuk");
vid.play()
  
}, 108000);

setTimeout(() => {
  
  $("#loading").click(() => {
    
openclose("open","#intro")
    $("#loading").remove()
vid.play()
arkaplanmuzigi.volume = 0.1
arkaplanmuzigi.play();

setTimeout(() => {
  openclose("close","#intro");
  openclose("open",".hosgeldiniz")
  openclose("open",".logobuyuk");
}, 18000);


  })
  
}, 41000);










fullekran = true;
  }
})
document.fullscreenEnabled = false
let sozler = [


  "Cesaret insanı zafere, kararsızlık tehlikeye, korkaklık ise ölüme götürür. -Yavuz Sultan Selim",
  "Benim kudretimin ulaştığı yere onların hayalleri bile ulaşamaz! -Yavuz Sultan Selim",
  "Baykuştan pervamız yok, biz şahinler sürüsüyüz. -Fatih Sultan Mehmet",
  "Bir yeri elde tutmak, o yeri fethetmekten daha zordur. -Osman Gazi",
  "Yenileceğinden korkan daima yenilir. -Yıldırım Beyazıd",
  "Egemenlik verilmez, alınır. - M. Kemal Atatürk",
  "Bir ulus sanattan ve sanatçıdan yoksunsa, tam bir hayata sahip olamaz. - M. Kemal Atatürk"


]
setInterval(() => {
  if(soz == 9){
    soz = 0;
  }
  $(".soz").text(sozler[soz])
  soz += 1;
},10000)
let sorular = [
      //1.
  {
      soru:"TBMM Hükümeti'nin başka bir devletle imzaladığı ve varlığını kabul ettirdiği ilk anlaşma hangisidir?",
      cevap:"Gümrü Anlaşması",
      yanliscevaplar:[
  
        "Ankara Antlaşması",
        "Moskova Antlaşmaı",
        "Lozan Antlaşması"
  
      ]
  },
  //2.
  {
      soru:"Dil devriminin yapıldığı yıllarda cumhurbaşkanına hangi isim verilirdi?",
      cevap:"Kamubay",
      yanliscevaplar:[
  
          "Albay",
          "Miralay",
          "Komutan"
  
      ]
  },
  //3.
  {
      soru:"İstiklal Marşı şairimiz Mehmet Akif Ersoy hangi yıl vefat etmiştir?",
      cevap:"1936",
      yanliscevaplar:[
  
          "1937",
          "1935",
          "1940"
  
      ]
  },
  //4.
  {
      soru:"Bugün kullanılan albay rütbesinin cumhuriyet öncesindeki karşılığı ne idi?",
      cevap:"Miralay",
      yanliscevaplar:[
          
          "Amiral",
          "Levanten",
          "Teğmen"
  
      ]
  },
  //5.
  {
      soru:"Milli mücadele sonrası toplanan İktisat Kongresi hangi şehirde yapılmıştır?",
      cevap:"İzmir",
      yanliscevaplar:[
          
          "İstanbul",
          "Ankara",
          "Erzurum"
          
      ]
  },
  //6.
  {
      soru:"Mudanya Mütarekesi'ni Türkiye adına kim imzalamıştır?",
      cevap:"İsmet Paşa",
      yanliscevaplar:[
          
          "Rauf Orbay",
          "Refet Bele",
          "Ali Fuat Cebesoy"
          
      ]
  },
  //7.
  {
      soru:"Birinci Dünya Savaşı'ndan sonra, vatana saldıran düşmanı yurttan çıkarmak için direnişe geçen milli gücün adı nedir?",
      cevap:"Kuvay-i Milliye",
      yanliscevaplar:[
          
          "Kuvay-i İnzibatiye",
          "Anzavur ",
          "Yeşil Ordu"
          
      ]
  },
  //8.
  {
      soru:"Milletin seçtiği siyasal iktidarı, darbe ile görevden uzaklaştırıp yönetime el koyan siyasi irade aynı zamanda görevden el çektirdiği başbakanı da idam sehpasında asmıştır. Bu ilk demokrasi kurbanı başbakanımız kimdir?",
      cevap:"Adnan Menderes",
      yanliscevaplar:[
          
          "Fahri Korutürk",
          "Hasan Polatkan",
          "Recep Pecer"
          
      ]
  },
  //9.
  {
      soru:"Cumhuriyet Türkiye'sinde hangi yıl milletin seçtiği vekillere karşı ilk darbe girişimi vaki olmuştur?",
      cevap:"27 Mayıs 1960",
      yanliscevaplar:[
          
          "1980",
          "1950",
          "1965"
          
      ]
  },
  //10.
  {
      soru:"Laiklik ilkesi hangi yılda anayasaya kondu?",
      cevap:"1937",
      yanliscevaplar:[
          
          "1920",
          "1923",
          "1938"
          
      ]
  },
  //11.
  {
      soru:"Türk Medeni Yasası hangi yıl kabul edildi?",
      cevap:"1926",
      yanliscevaplar:[
          
          "1928",
          "1918",
          "1936"
          
      ]
  },
  //12.
  {
      soru:"Ulusal Kurtuluş Savaşı yılları sırasında, işgal güçlerine karşı savaşan çetelere ne isim verilirdi?",
      cevap:"Kuvay-i Milliye",
      yanliscevaplar:[
          
          "Kuvay-i inzibatiye",
          "Halifelik ordusu",
          "Yeşil ordu"
          
      ]
  },
  //13.
  {
      soru:"Kırım Hangi Anlaşma İle Osmanlının Elinden Çıkmıştır?",
      cevap:"Küçük Kaynarca",
      yanliscevaplar:[
          
          "Karlofça Antlaşması",
          "Yaş antlaşması ",
          "Tersane konferansi"
          
      ]
  },
  //14.
  {
      soru:"Lozan Barış Antlaşması Hangi Savaştan Sonra İmzalanmıştır?",
      cevap:"Kurtuluş Savaşı",
      yanliscevaplar:[
          
          "I.Dunya Savaşı",
          "II. Dünya Savaşı",
          "Soğuk Savaş"
          
      ]
  },
  //15.
  {
      soru:"Cumhurbaşkanlığı Forsundaki 16 Yıldız Neyi Sembolize Eder?",
      cevap:"16 Türk Devletini",
      yanliscevaplar:[
          
          "Türkiye Cumhuriyeti ",
          "Osmanlı Devletini ",
          "Türk savaş aletleri "
          
      ]
  },
  //16.
  {
      soru:"Soyadı Kanunu hangi yılda Kabul Edildi?",
      cevap:"1934",
      yanliscevaplar:[
          
          "1936",
          "1938",
          "1933"
          
      ]
  },
  //17.
  {
      soru:"Cumhuriyet sonrası kılık kıyafet alanında birçok değişiklik yapılmıştır. Bu değişiklikler hangi alandaki yeniliklere örneklik teşkil eder?",
      cevap:"Toplumsal Alan",
      yanliscevaplar:[
          
          "Siyasi Alan",
          "Ekonomik Alan",
          "Kültürel Alan"
          
      ]
  },
  //18.
  {
      soru:"Türkiye'nin ilk Cumhurbaşkanı kimdir?",
      cevap:"M. Kemal Atatürk",
      yanliscevaplar:[
          
          "İsmet İnonu",
          "Celal Bayar",
          "Cemal Gursel"
          
      ]
  },
  //19.
  {
      soru:"İlk anayasamız hangi tarihte oluşturulmuştur?",
      cevap:"1921",
      yanliscevaplar:[
          
          "1876",
          "1923",
          "1924"
          
      ]
  },
  //20.
  {
      soru:"Osmanlı Devletini Fiilen Son Erdiren Olay Nedir?",
      cevap:"Mondros Ateşkes Antlaşması",
      yanliscevaplar:[
          
          "Lozan Barış Antlaşması ",
          "Mudanya Ateşkes Antlasmasi",
          "Cumhuriyet’in İlani"
          
      ]
  },
  //21.
  {
      soru:"Osmanlı Devleti'nden Ayrılan Son Balkan Devleti Hangisidir, Hangi Olayla Ayrılmıştır?",
      cevap:"Arnavutluk",
      yanliscevaplar:[ 
          
          "Yunanistan",
          "Bulgaristan",
          "Romanya"
          
      ]
  },
  //22.
  {
      soru:"Osmanlı Devleti'nden Ayrılan Son Balkan Devleti Hangi Olayla Ayrılmıştır?",
      cevap:"I. Balkan Savaşı",
      yanliscevaplar:[
          
          "II.Balkan Savasi",
          "Sırp İsyani",
          "Yunan Ayaklanması"
          
      ]
  },
  //23.
  {
      soru:"İzmir'in işgaline nerede karar verilmiştir?",
      cevap:"Paris Barış Konferansı",
      yanliscevaplar:[
          
          "Wilson İlkeleri",
          "Mondros Ateşkes Antlasmasi",
          "Versay Antlasmasi"
          
      ]
  },
  //24.
  {
      soru:"Kurtuluş Savaşı sırasında Fransızlara karşı Antep'in savunulmasında önemli rol oynayan kişi kimdir?",
      cevap:"Şahin Bey",
      yanliscevaplar:[
          
          "Sütçü İmam",
          "Said Bey",
          "Ahmet Anzavur"
          
      ]
  },
  //25.
  {
      soru:"İstiklal Marşı hangi tarihte kabul edilmiştir?",
      cevap:"12 Mart 1921",
      yanliscevaplar:[
          
          "23 Nisan 1920",
          "18 Mart 1915",
          "29 Ekim 1923"
          
      ]
  },
  //26.
  {
      soru:"Misak-ı Milli'yi ve yeni Türk devletini tanıyan ilk itilaf devleti kimdir?",
      cevap:"Fransa",
      yanliscevaplar:[
          
          "İngiltere",
          "ABD",
          "Rusya"
          
      ]
  },
  //27.
  {
      soru:"Vatanın bütünlüğü milletin bağımsızlığı tehlikededir maddesi nerede belirtilmiştir?",
      cevap:"Amasya Genelgesi",
      yanliscevaplar:[
          
          "Sivas Kongresi",
          "Erzurum Kongresi",
          "İzmir’in İsgali"
          
      ]
  },
  //28.
  {
      soru:"Birinci Dünya Savaşı'na girmemize sebep olan Almanlardan satın aldığımızı söylediğimiz savaş gemilerinin adları nelerdir?",
      cevap:"Goben ve Breslaw",
      yanliscevaplar:[
          
          "Vatan ve Hurriyet",
          "Atak ve Gokturk",
          "Fatih ve Selim"
          
      ]
  },
  //29.
  {
      soru:"Samsun merkez olmak üzere İnebolu'dan Batum'a kadar olan bölgede Rum devleti kurmak isteyen cemiyetin adı nedir?",
      cevap:"Pontus Cemiyeti",
      yanliscevaplar:[
          
          "Mavri mira Cemiyeti",
          "Trakya Pasaeli cemiyeti",
          "Kilikyalilar Cemiyeti"
          
      ]
  },
  //30.
  {
      soru:"Mondros Ateşkes Antlaşması sonrasında ülkemiz toprakları işgal edilmeye başlanmıştı. Fakat Türk halkı işgallere karşı tepkisini silahlı direnişlerle göstermiştir. İşgallere karşı ilk direniş nerde başlamıştır?",
      cevap:"Hatay Dörtyol",
      yanliscevaplar:[
          
          "İzmir ",
          "İstanbul",
          "Ayvalik"
          
      ]
  },
  //31.
  {
      soru:"Sevr Antlaşması'na göre Muğla, Antalya ve Konya çevresini hangi devlet işgal edecekti?",
      cevap:"İtalya",
      yanliscevaplar:[
          
          "Yunanistan",
          "Ermeniler",
          "Fransa"
          
      ]
  },
  //32.
  {
      soru:"I. Dünya Savaşı sırasında Doğu cephesinde Türk ordusunu arkadan vuran, cephe gerisinde sivil halka zülüm eden ve karışıklık çıkaran Ermenileri, başka bir Türk toprağı olan Suriye ve Hatay'a göç ettirmiştir. Bu göçün gerçekleşmesi için hangi kanun çıkarılmıştır?",
      cevap:"Tehcir Kanunu",
      yanliscevaplar:[
          
          "İskan Kanunu",
          "imar kanunu",
          "Yapılandırma Kanunu"
          
      ]
  },
  //33.
  {
      soru:"Kurtuluş Savaşı'nda batı Cephesi'nde düzenli ordularımızın kazandığı ilk askeri başarının adı nedir?",
      cevap:"I. İnönü Muharebesi",
      yanliscevaplar:[
          
          "Sakarya Meydan Muharebesi",
          "Büyük Taarruz",
          "Eskisehir- Kütahya Muharebesi"
          
      ]
  },
  //34.
  {
      soru:"Mustafa Kemal'in yakın arkadaşları Kazım Karabekir Paşa, Ali Fuat Paşa ve Rauf Bey tarafından kurulan siyasi parti aynı zamanda ilk muhalefet partisidir. Bu partinin adı nedir?",
      cevap:"Terakkiperver Cumhuriyet Fırkası",
      yanliscevaplar:[
          
          "Vatan ve Hürriyet Cemiyeti",
          "Tenasut Cemiyeti",
          "İstiklal Cemiyeti"
          
      ]
  },
  //35.
  {
      soru:"30 Ekim 1918 tarihinde imzalanan Mondros Ateşkes Antlaşması'na dayanarak ülkemizin güneyini işgal eden Fransızlar, Düzenli ordularımızın hangi başarısından sonra işgal ettikleri topraklardan geri çekilmişlerdir?",
      cevap:"Sakarya Meydan Muharebesi",
      yanliscevaplar:[
          
          "Büyük taarruz",
          "I.inonu savasi",
          "Eskisehir- Kütahya Muharebesi"
          
      ]
  },
  //36.
  {
      soru:"Son Osmanlı Mebusan Meclisi'nin almış olduğu hangi karar, İstanbul'un 16 Mart 1920'de itilaf devletleri tarafından resmen işgal edilmesine sebep olmuştur?",
      cevap:"Misak-ı Milli",
      yanliscevaplar:[
          
          "Misak-i İktisadi",
          "Tesvik-i sanayi kanunu",
          "Maarif kongresi"
          
      ]
  },
  //37.
  {
      soru:"Anadolu'da faaliyet gösteren cemiyetlerin Anadolu ve Rumeli Müdafa-i Hukuk Cemiyeti adı altında birleştirildiği, manda ve himaye fikrinin kesin ve son olarak reddedildiği kongrenin adı nedir?",
      cevap:"Sivas Kongresi",
      yanliscevaplar:[
          
          "Erzurum Kongresi",
          "Amasya Gorusmeleri",
          "Amasya Genelgesi"
          
      ]
  },
  //38.
  {
      soru:"Fransızların Adana ve çevresini işgalleri sırasında, bu işgali engellemek için silahlı mücadele içerisinde olan, merkezi İstanbul'da bulunan cemiyetin adı nedir?",
      cevap:"Kilikyalılar Cemiyeti",
      yanliscevaplar:[
          
          "Mavri mira Cemiyeti",
          "Milli Komgre Cemiyeti",
          "Hincak Cemiyeti"
          
      ]
  },
  //39.
  {
      soru:"İtilaf Devletleri, Birinci Dünya Savaşı sonucunda yenilen devletlerin durumlarını görüşmek için toplantı yapmışlardır. Bu toplantının adı nedir?",
      cevap:"Paris Barış Konferansı",
      yanliscevaplar:[
          
          "Wilson İlkeleri",
          "Mondros ateşkes antlaşması",
          "San Remo Konferansi"
          
      ]
  },
  //40.
  {
      soru:"I. Dünya Savaşı sonrasında Bulgaristan ile itilaf devletleri arasında imzalanan anlaşmanın adı nedir?",
      cevap:"Nöyyi Antlaşması",
      yanliscevaplar:[
          
          "Sevr Antlaşması",
          "Versay Antlasmasi",
          "Lozan Antlaşması "
          
      ]
  },
  //41.
  {
      soru:"Osmanlı İmparatorluğu Avrupa devletlerinden aldığı borçları ödeyemez duruma gelmiştir. Avrupa devletlerinin Osmanlı devletinden alacaklarını tahsil etmek için kurmuş oldukları komisyonun adı nedir?",
      cevap:"Düyun-u Umumiyye İdaresi",
      yanliscevaplar:[
          
          "Uluslararası Para Fonu",
          "Beytul Mal",
          "Maliye Heyeti"
          
      ]
  },
  //42.
  {
      soru:"I.Dünya Savaşı'nın sebeplerinden bir tanesi de milliyetçilik akımıdır. Milliyetçilik fikri ilk olarak ne zaman ortaya çıkmıştır?",
      cevap:"Fransız İhtilali",
      yanliscevaplar:[
          
          "1848 İhtilali",
          "Sanayi İnkilabi",
          "Wilson İlkeleri"
          
      ]
  },
  //43.
  {
      soru:"Ülke genelinde bölgesel kurtuluş çaresi arayan cemiyetler nerede Anadolu ve Rumeli Müdafa-i Hukuk Cemiyeti adı altında birleştirilmiştir?",
      cevap:"Sivas Kongresi",
      yanliscevaplar:[
  
          "Erzurum Kongresi",
          "Amasya Gorusmeleri",
          "Balıkesir Kongresi"
  
      ]
  },
  //44.
  {
      soru:"Milli sınırlar içinde ”Vatan bir bütündür; parçalanamaz.” kararı Kurtuluş Savaşı’nın hazırlık sürecinde nerede alınmıştır?",
      cevap:"Erzurum Kongresi",
      yanliscevaplar:[
  
          "Amasya Gorusmeleri",
          "Sivas Kongresi",
          "Samsuna’a Çıkış "
          
      ]
  },
  //45.
  {
      soru:"Bizans Devleti’ni yeniden canlandırmak ve Ege Bölgesi’nde çeteler kurarak İzmir ve çevresini Yunanistan’a katmak amacıyla kurulan zararlı cemiyetin adı nedir?",
      cevap:"Mavri Mira",
      yanliscevaplar:[
  
          "Şark vilayetleri Cemiyeti",
          "Anadolu Müdafaa-i Hukuk Cemiyeti",
          "Kilikyalilar Cemiyeti"
  
      ]
  },
  //46.
  {
      soru:"Mustafa Kemal Binbaşılık rütbesine hangi savaşta yükseltilmiştir?",
      cevap:"Trablusgarp",
      yanliscevaplar:[
  
          "Sakarya Meydan Muharebesi",
          "Büyük taarruz",
          "Eskisehir- Kütahya Muharebesi"
  
      ]
  },
  //47.
  {
      soru:"3 Mart 1924’te Erkan-ı Harbiye Vekâleti kaldırılarak yerine hangi kurum kurulmuştur?",
      cevap:"Genelkurmay Başkanlığı",
      yanliscevaplar:[
  
          "Harbiye Nezareti",
          "Şeriye Vekâleti",
          "Diyanet isleri"
  
      ]
  },
  //48.
  {
      soru:"İngiltere’nin sömürgeleriyle olan bağlantısını kesmek ve Mısır’ı yeniden topraklarına katmak amacı ile Osmanlı birlikleri tarafından açılan cephe hangisidir?",
      cevap:"Kanal Cephesi",
      yanliscevaplar:[
  
          "Çanakkale Savasi",
          "Karakas Cephesi",
          "Makedonya Cephesi"
  
      ]
  },
  //49.
  {
      soru:"Panslavizm politikası ile Avusturya-Macaristan imparatorluğu içerisinde yaşayan Slav asıllı milletleri kendi yanına çekmek isteyen devlet hangisidir?",
      cevap:"Rusya",
      yanliscevaplar:[
  
          "Fransa",
          "İran",
          "İtalya"
  
      ]
  },
  //50.
  {
      soru:"Mondros Ateşkes Antlaşmasından sonra Mustafa Kemal’in Fethi Bey (Okyar) ile birlikte, işgale karşı seslerini duyurmak amacı ile çıkardıkları gazetenin ismi nedir?",
      cevap:"Minber",
      yanliscevaplar:[
  
          "Yenigun",
          "Alemdar",
          "Tasnif"
  
      ]
  },
  //51.
  {
      soru:"Ateş tarih öncesi devirlerden hangisindebulunmuştur?",
      cevap:"Yontma Taş",
      yanliscevaplar:[
  
          "Cilalı Taş",
          "Kaba Taş",
          "Demir Devri"
  
      ]
  },
  //52.
  {
      soru:"Tarihte ilk kütüphaneyi kimler kurmuştur?",
      cevap:"Asurlar",
      yanliscevaplar:[
  
          "Hititler",
          "Sümerler",
          "Urartular"
  
      ]
  },
  //53.
  {
      soru:"Orta Asya’da kurulan İlk Türk-İslam devleti hangisidir?",
      cevap:"Karahanlılar",
      yanliscevaplar:[
  
          "Gazneliler",
          "Ihşidiler",
          "Samanoğulları"
  
      ]
  },
  //54.
  {
      soru:"Osmanlı Devleti Haçlı ordusu ile ilk kez aşağıdaki savaşlardan hangisinde karşılaşmışlardır?",
      cevap:"Sırpsındığ",
      yanliscevaplar:[
  
          "Niğbolu",
          "Varna",
          "I. Kosova"
  
      ]
  },
  //55.
  {
      soru:"Osmanlılarda ilk kapitülasyonlar aşağıdakilerden hangisine verilmiştir?",
      cevap:"Venedik",
      yanliscevaplar:[
  
          "Hollanda",
          "Fransa",
          "İngiltere"
  
      ]
  },
  //56.
  {
      soru:"Divan-ı Hümayun aşağıdaki padişahların hangisi döneminde kurulmuştur?",
      cevap:"Orhan Gazi",
      yanliscevaplar:[
  
          "II. Murat",
          "Yıldırım",
          "Çelebi Mehmet"
  
      ]
  },
  //57.
  {
      soru:"Avrupa’da bilim, sanat ve edebiyat gibi alanlarda yeniden doğuş anlamına gelen gelişme aşağıdakilerden hangisidir?",
      cevap:"Rönesans",
      yanliscevaplar:[
  
          "Fransız İhtilali",
          "Reform",
          "Absolitizm"
  
      ]
  },
  //58.
  {
      soru:"Osmanlı Devleti aşağıdaki olaylardan hangisi ilegerileme dönemine girmiştir?",
      cevap:"Karlofça Anlaşması",
      yanliscevaplar:[
  
          "Haçova",
          "1821 Yunan İsyanı",
          "Küçük Kaynarca"
  
      ]
  },
  //59.
  {
      soru:"Osmanlı Devletinde 19.yüzyıldaki ayaklanmalardan hangisi milliyetçilikle ilgili değildir?",
      cevap:"Mısır İsyanı",
      yanliscevaplar:[
  
          "Sırp İsyanı",
          "Yunan İsyanı",
          "Bulgar İsyanı"
  
      ]
  },
  //60.
  {
      soru:"I. Dünya Savaşı’nda, İngiltere’nin Araplarla iş birliği yapmak için imzaladığı gizli antlaşma aşağıdakilerden hangisidir?",
      cevap:"Mac Mahon",
      yanliscevaplar:[
  
          "İstanbul",
          "Sykes-Picot",
          "Sevr"
  
      ]
  },
  //61.
  {
      soru:"Osmanlı Devleti’nin I. Dünya Savaşı’nda toprakları dışında müttefiklerine yardım etmek amacıyla savaştığı cepheler aşağıdakilerden hangisidir?",
      cevap:"Galiçya - Makedonya",
      yanliscevaplar:[
  
          "Suriye - Filistin",
          "Çanakkale - Kanal",
          "Yemen - Kafkas"
  
      ]
  },
  //62.
  {
      soru:"Aşağıdaki devletlerden hangisi Paris Barış Konferansı’na katılmamıştır?",
      cevap:"Rusya",
      yanliscevaplar:[
  
          "ABD",
          "İngiltere",
          "Japonya"
  
      ]
  },
  //63.
  {
      soru:"Aşağıdaki antlaşmalardan hangilerinin esasları Paris Barış Konferansı’nda belirlenmemiştir?",
      cevap:"Sevr Antlaşması",
      yanliscevaplar:[
  
          "Versailles Antlaşması",
          "Neuilly Antlaşması",
          "Saint Germain Antlaşması"
  
      ]
  },
  //64.
  {
      soru:"Mondros Ateşkes Antlaşması’nı Osmanlı Devleti adına imzalayan ve Balkan Savaşlarındaki başarılarından dolayı “Hamidiye Kahramanı” olarak tanınan kişi aşağıdakilerden hangisidir?",
      cevap:"Rauf Orbay",
      yanliscevaplar:[
  
          "İsmet İnönü",
          "Refet Bele",
          "Cemal Paşa"
  
      ]
  },
  //65.
  {
      soru:"I. Dünya Savaşı’ndan sonra Osmanlı topraklarının paylaşılması ve Sevr Antlaşması’nın şartlarının hazırlanması amacı ile yapılan görüşme aşağıdakilerden hangisidir?",
      cevap:"San Remo Konferansı",
      yanliscevaplar:[
  
          "Mondros Görüşmeleri",
          "Paris Konferansı",
          "Londra Konferansı"
  
      ]
  },
  //66.
  {
      soru:"Millî Mücadele Dönemi’nde Doğu Cephesi komutanı aşağıdakilerden hangisidir?",
      cevap:"Kazım Karabekir",
      yanliscevaplar:[
  
          "İsmet İnönü",
          "Enver Paşa",
          "Fethi Okyar"
  
      ]
  },
  //67.
  {
      soru:"Aşağıdakilerden hangisi Millî Mücadele Dönemi’nin olumsuz gelişmelerindendir?",
      cevap:"Kuvay-ı İnzibatiye",
      yanliscevaplar:[
  
          "Harbord Raporu",
          "Bristol Raporu",
          "Misak-ı Milli"
  
      ]
  },
  //68.
  {
      soru:"Ermeni Hükûmetinin Sevr Antlaşması’nın geçersizliğini kabul ettiği antlaşma aşağıdakilerden hangisidir?",
      cevap:"Gümrü Antlaşması",
      yanliscevaplar:[
  
          "Moskova Antlaşması",
          "Lozan Antlaşması",
          "Kars Antlaşması"
  
      ]
  },
  //69.
  {
      soru:"Meclis’in Kayseri’ye taşınması tartışmaları hangi gelişmeden sonra yaşanmıştır?",
      cevap:"Kütahya-Eskişehir Muharebeleri",
      yanliscevaplar:[
  
          "I. İnönü Muharebesi",
          "II. İnönü Muharebesi",
          "Büyük Taarruz"
  
      ]
  },
  //70.
  {
      soru:"Doğu ve Güney Cephelerinin kapanmasını sağlayan antlaşmalar hangi seçenekte doğru verilmiştir? ",
      cevap:"Gümrü - Ankara",
      yanliscevaplar:[
  
          "Lozan - Mudanya",
          "Gümrü - Mudanya",
          "Gümrü - Lozan"
  
      ]
  },
  //71.
  {
      soru:"Aşağıdakilerden hangisi I.TBMM Dönemi’ne ait bir faaliyet değildir?",
      cevap:"Lozan Antlaşması’nın onaylanması",
      yanliscevaplar:[
  
          "Saltanatın kaldırılması",
          "İstiklal Marşı’nın kabulü",
          "Düzenli ordunun kurulması"
  
      ]
  },
  //72.
  {
      soru:"Atatürk’ün “Hayatta en hakiki mürşit ilimdir, fendir” sözü aşağıdaki ilkelerden hangisiyle doğrudan ilişkilidir?",
      cevap:"Laiklik",
      yanliscevaplar:[
  
          "Devletçilik",
          "Milliyetçilik",
          "Halkçılık"
  
      ]
  },
  //73.
  {
      soru:"Türk kara sularında yük ve yolcu taşıma hakkının yalnızca Türk gemilerine verilmesi aşağıdaki hangi gelişme sonucunda olmuştur?",
      cevap:"Kabotaj Kanunu",
      yanliscevaplar:[
  
          "Medeni Kanun",
          "Misak-ı İktisadi ilkesi",
          "Takrir-i Sükûn Kanunu"
  
      ]
  },
  //74.
  {
      soru:"Türkiye Cumhuriyeti’nde çağın gelişen şartlarına göre değişimi ve modernleşmeyi sağlamak amacıyla yapılan bütün çalışmalar, aşağıdaki ilkelerden hangisi kapsamında değerlendirilebilir?",
      cevap:"İnkılapçılık",
      yanliscevaplar:[
  
          "Milliyetçilik",
          "Devletçilik",
          "Cumhuriyetçilik"
  
      ]
  },
  //75.
  {
      soru:"Bozkurt - Lotus Davası olarak bilinen hukuki sorun, Türkiye ile hangi ülke arasında yaşanmıştır?",
      cevap:"Fransa",
      yanliscevaplar:[
  
          "İngiltere",
          "İtalya",
          "Yunanistan"
  
      ]
  },
  //76.
  {
      soru:"Aşağıdakilerden hangisi Atatürk'ün belirlediği millî dış politikada uyulması gereken esaslardan biri değildir? ",
      cevap:"Yayılmacılık",
      yanliscevaplar:[
  
          "Bağımsızlık",
          "Gerçeklik",
          "Akıcılık"
  
      ]
  },
  //77.
  {
      soru:"Yeni Türk devleti, Lozan Antlaşması'nda karara bağlanan Osmanlı borçları ile ilgili olarak aşağıdaki hangi devletle anlaşmazlığa düşmüştür? ",
      cevap:"Fransa",
      yanliscevaplar:[
  
          "İngiltere",
          "Yunanistan",
          "Rusya"
  
      ]
  },
  //78.
  {
      soru:"Aşağıdaki devletlerden hangisi ile Atatürk Dönemi'nde siyasi ilişki kurulmamıştır?",
      cevap:"Suriye",
      yanliscevaplar:[
  
          "Romanya",
          "Sovyet Rusya",
          "İran"
  
      ]
  },
  //79.
  {
      soru:"Türkiye'nin Boğazlar ile ilgili sorunlarının büyük oranda çözüme kavuştuğu antlaşma aşağıdakilerden hangisidir?",
      cevap:"Montreux Boğazlar Sözleşmesi",
      yanliscevaplar:[
  
          "Locarno Antlaşması",
          "Sadabat Paktı",
          "Balkan Antantı"
  
      ]
  },
  //80.
  {
      soru:"Lozan Antlaşması'nın imzalanmasından sonraki süreçte Türkiye'nin aleyhine çözülen tek sorun aşağıdakilerden hangisidir?",
      cevap:"Musul Sorunu",
      yanliscevaplar:[
  
          "Hatay Sorunu",
          "Boğazlar Sorunu",
          "Kapitülasyonlar"
  
      ]
  },
  //81.
  {
      soru:"Aşağıdakilerden hangisi Atatürk dönemi Türk dış politikasının temel ilkelerinden biri değildir?",
      cevap:"Karşılıkçılık",
      yanliscevaplar:[
  
          "Bağımsızlık",
          "Barışçılık",
          "Gerçekçilik"
  
      ]
  },
  //82.
  {
      soru:"Atatürk döneminde nüfus mübadelesi (değişimi) Türkiye ile aşağıdaki hangi ülke arasında yapılmıştır?",
      cevap:"Yunanistan",
      yanliscevaplar:[
  
          "Bulgaristan",
          "Suriye",
          "İngiltere"
  
      ]
  },
  //83.
  {
      soru:"Mustafa Kemal Atatürk'ün vefat tarihi ile Ankara'da inşa edilen Anıtkabir'e naaşının nakledildiği tarih aşağıdakilerden hangisinde birlikte verilmiştir?",
      cevap:"1938 - 1953",
      yanliscevaplar:[
  
          "1938 - 1963",
          "1939 - 1943",
          "1938 - 1973"
  
      ]
  },
  //84.
  {
      soru:"Misak-ı Millî'ye dâhil olup Atatürk'ün vefatından hemen sonra anavatana katılan son toprak parçası aşağıdakilerden hangisidir?",
      cevap:"Hatay",
      yanliscevaplar:[
  
          "Musul",
          "Kerkük",
          "Batum"
  
      ]
  },
  //85.
  {
      soru:"Atatürk'ün ölümüne sebep olan hastalığı aşağıdakilerden hangisidir?",
      cevap:"Siroz",
      yanliscevaplar:[
  
          "Karaciğer Kanseri",
          "Akciğer Kanseri",
          "Verem"
  
      ]
  },
  //86.
  {
      soru:"Musul, aşağıdaki antlaşmalardan hangisi ile İngiliz yönetimindeki Irak'a bırakılmıştır?",
      cevap:"Ankara",
      yanliscevaplar:[
  
          "Berlin",
          "Londra",
          "Paris"
  
      ]
  },
  //87.
  {
      soru:"Mustafa Kemal Atatürk döneminde aşağıdaki gelişmelerden hangisi ile Türkiye doğu sınırlarını güvence altına almıştır?",
      cevap:"Sadabat Paktı",
      yanliscevaplar:[
  
          "Balkan Antantı",
          "Möntro Boğazlar Sözleşmesi",
          "Briand - Kellog Paktı"
  
      ]
  },
  //88.
  {
      soru:"Atatürk'ün hastalığının ağırlaştığı döneme denk gelmesine rağmen çözümü için büyük gayret sarf ettiği dış sorun aşağıdakilerden hangisidir?",
      cevap:"Hatay Sorunu",
      yanliscevaplar:[
  
          "Boğazlar Sorunu",
          "Musul Sorunu",
          "Batum Sorunu"
  
      ]
  },
  //89.
  {
      soru:"Aşağıdakilerden hangisi 1923'ten sonra Türk dış politikasında ele alınıp çözümlenmeye çalışılmış konulardan biri değildir?",
      cevap:"",
      yanliscevaplar:[
  
          "Boğazlar Sorunu",
          "Dış Borçlar",
          "Irak Sınırı"
  
      ]
  },
  //90.
  {
      soru:"Savunmaya dayanmayan savaş kanun dışı sayılıp, devletler arası ilişkilerin barışçı yollarla çözülmesi fikri çerçevesinde yapılmış olan barış antlaşması aşağıdakilerden hangisidir?",
      cevap:"Briand - Kellog Paktı",
      yanliscevaplar:[
  
          "Locarno Antlaşması",
          "Milletler Cemiyeti",
          "Monreo Doktrini"
  
      ]
  },
  //91.
  {
      soru:"1929 Dünya Ekonomik Krizi özellikle hangi kıtalarda etkili olmuştur?",
      cevap:"Amerika - Avrupa",
      yanliscevaplar:[
  
          "Asya - Avrupa",
          "Asya - Afrika",
          "Amerika - Asya"
  
      ]
  },
  //92.
  {
      soru:"Aşağıdakilerden hangisi I. Dünya Savaşı ve sonrası totaliter (baskıcı) rejimlerin görüldüğü ülkelerden biri değildir?",
      cevap:"Amerika",
      yanliscevaplar:[
  
          "İtalya",
          "Almanya",
          "İspanya"
  
      ]
  },
  //93.
  {
      soru:"I. Dünya Savaşı Almanya’nın aşağıdaki hangi ülkeyi işgaliyle başlamıştır?",
      cevap:"Polonya",
      yanliscevaplar:[
  
          "Fransa",
          "Finlandiya",
          "Habeşistan"
  
      ]
  },
  //94.
  {
      soru:"II. Dünya Savaşı sonucunda uluslararası alanda dışlanma süreci sona eren devlet aşağıdakilerden hangisidir?",
      cevap:"SSCB",
      yanliscevaplar:[
  
          "Fransa",
          "Japonya",
          "Almanya"
  
      ]
  },
  //95.
  {
      soru:"Aşağıdaki devletlerden hangisinin veto hakkı yoktur?",
      cevap:"Japonya",
      yanliscevaplar:[
  
          "Çin",
          "ABD",
          "SSCB"
  
      ]
  },
  //96.
  {
      soru:"II. Dünya Savaşı sonrası aşağıdaki devletlerden hangileri 'Süper Güç' haline gelmiştir?",
      cevap:"SSCB - ABD",
      yanliscevaplar:[
  
          "Çin - ABD",
          "Fransa - İngiltere",
          "İngiltere - SSCB"
  
      ]
  },
  //97.
  {
      soru:"Türkiye'de yirmi yedi yıl kesintisiz devam eden CHP iktidarından sonra 1950'de iktidara gelen siyasi parti aşağıdakilerden hangisidir?",
      cevap:"Demokrat Parti",
      yanliscevaplar:[
  
          "Millet Partisi",
          "AK Parti",
          "Mİlli Selamet Partisi"
  
      ]
  },
  //98.
  {
      soru:"Soğuk savaş döneminde, aşağıdaki devletlerden hangisinin hükümeti SSCB'nin nüfuzu altına girmemiştir?",
      cevap:"Yunanistan",
      yanliscevaplar:[
  
          "Romanya",
          "Polonya",
          "Macaristan"
  
      ]
  },
  //99.
  {
      soru:"Aşağıdaki devletlerin hangisinde komünist rejim uygulanmıştır?",
      cevap:"Çekoslovakya",
      yanliscevaplar:[
  
          "Yunanistan",
          "İsveç",
          "Norveç"
  
      ]
  },
  //100.
  {
      soru:"Soğuk savaş dönemine, aşağıdaki devletlerden hangisinin hükümeti SSCB'nin nüfuzu altına girmemiştir?",
      cevap:"Yunanistan",
      yanliscevaplar:[
  
          "Romanya",
          "Polonya",
          "Macaristan"
  
      ]
  },
  //101
  {
      soru:"1980-1988 yılları arasındaki İran-Irak savaşlarının çıkış sebebi olarak görülen bölge aşağıdakilerden hangisidir?",
      cevap:"Şattül Arap",
      yanliscevaplar:[
  
          "Kuveyt",
          "Keşmir",
          "Tibet"
  
      ]
  },
  //102
  {
      soru:"Aşağıdaki destanlardan hangileri Kırgızlara aittir?",
      cevap:"Manas Destanı",
      yanliscevaplar:[
  
          "Türeyiş Destanı",
          "Göç Destanı",
          "Ergenekon Destanı"
  
      ]
  },
  //103
  {
      soru:"Aşağıdakilerden hangisi İslamiyet öncesi Türk topluluklarında atasözlerine verilen isimdir?",
      cevap:"Sav",
      yanliscevaplar:[
  
          "Koşuk",
          "Sagu",
          "Destan"
  
      ]
  },
  //104
  {
      soru:"Osmanlı ordusu Kutü’l Amera’da İngilizlere karşı büyük bir başarı kazanmıştır. Bu mücadelenin yaşandığı cephe aşağıdakilerden hangisidir?",
      cevap:"Irak",
      yanliscevaplar:[
  
          "Galiçya",
          "Kanal",
          "Çanakkale"
  
      ]
  },
  //105
  {
      soru:"Kuva-i Milliye’nin güney bölgesinde ilk direnişi aşağıdakilerden hangisinde başlamıştır?",
      cevap:"Hatay",
      yanliscevaplar:[
  
          "Urfa",
          "Antep",
          "Maraş"
  
      ]
  },
  //106
  {
      soru:"Tarih öncesi dönemin isimlendirilmesinde aşağıdakilerden hangisi dikkate alınmıştır?",
      cevap:"Kullanılan araç ve gereçler",
      yanliscevaplar:[
  
          "Göçler",
          "Evrensel Olaylar",
          "İnanç Sistemleri"
  
      ]
  },
  //107
  {
      soru:"Tarih öncesi döneme ait aşağıdaki bulgulardan hangisi, tarımsal üretim yapıldığının ya da tarım ürünlerinin tanındığının göstergesi olamaz?",
      cevap:"Hayvan Koşumları",
      yanliscevaplar:[
  
          "Sulama Kanalları",
          "Demir Saban",
          "Tahıl Öğütme Taşları"
  
      ]
  },
  //108
  {
      soru:"Tarihsel olaylar ile ilgili araştırma yapmak isteyen bir tarihçi öncelikle hangi yardımcı bilim dalından yararlanmalıdır?",
      cevap:"Kronoloji",
      yanliscevaplar:[
  
          "Arkeoloji",
          "Filoloji",
          "Etnografya"
  
      ]
  },
  //109
  {
      soru:"Tarihin, tarih öncesi dönemler ve tarihi dönemler diye ikiye ayrılmasında aşağıdakilerden hangisi ölçüt olarak alınmıştır?",
      cevap:"Yazının Bulunması",
      yanliscevaplar:[
  
          "Ateşin Bulunması",
          "İstanbulun Fetih",
          "Hz. İsa'nın doğumu"
  
      ]
  },
  //110
  {
      soru:"Tarih öncesi dönemlere ait bir yerleşim merkezinde yapılan arkeolohik kazılarla ele geçirilen buluntulardan bu yer hakkında aşağıdakilerden hangisi öğrenilemez?",
      cevap:"Siyasi Etkinlik",
      yanliscevaplar:[
  
          "Sanat Anlayışı",
          "Savaş Araçları",
          "Ekonomik Uğraşları"
  
      ]
  },
  //111
  {
      soru:"Osmanlı Devleti'ne ait bir eser,yapıldığı günün yalnız kültürel gelişmelerinden söz etmektedir. Bu eser,aşağıdaki tarih türlerinden hangisinin kapsamındadır?",
      cevap:"Uygarlık Tarihi",
      yanliscevaplar:[
  
          "Sanat Tarihi",
          "Genel Tarih",
          "Siyasi Tarih"
  
      ]
  },
  //112
  {
      soru:"Tarih öncesi dönemlerin sırasıyla yaşandığı bir yerleşim yerinde toprağın en üst katmanında aşağıdakilerden hangisi bulunur?",
      cevap:"Demir Saplı Sabanlar",
      yanliscevaplar:[
  
          "Duvar Resimleri",
          "Altın Bilezikler",
          "Bronz Heykeller"
  
      ]
  },
  //113
  {
      soru:"Fenikelilerin Doğu akdeniz kıyısında olmaları onların hangi alanda daha çok etkilemiştir?",
      cevap:"Ekonomik Yapı",
      yanliscevaplar:[
  
          "Sanat",
          "Bilim",
          "İnanç"
  
      ]
  },
  //114
  {
      soru:"Mumyalama, aşağıdaki alanlardan hangisinin gelişimine katkı sağlamamıştır?",
      cevap:"Astroloji",
      yanliscevaplar:[
  
          "Tıp",
          "Eczacılık",
          "Anatomi"
  
      ]
  },
  //115
  {
      soru:"İlkçağ'da  Urartular; hayvancılık,İyonlar,deniz ticareti ve Hititler tarım alanında ilerlemiştir. Bu farklılığın temel sebebi nedir?",
      cevap:"Coğrafi Koşullar",
      yanliscevaplar:[
  
          "Kültür Farkı",
          "İnanç Sistemleri",
          "Ekonomik Gelişmişlik"
  
      ]
  },
  //116
  {
      soru:"Aşağıdakilerden hangisi Cin'in dünya kültür ve uygarlık tarihine katkılarından biri değildir?",
      cevap:"Hiyeroglif",
      yanliscevaplar:[
  
          "Mürekkep",
          "Matbaa",
          "Pusula"
  
      ]
  },
  //117
  {
      soru:"Aşağıdakilerden hangisi Hunların hem tarım hem hayvancılık yaptığının kanıtı olabilir?",
      cevap:"Saban Demirleri",
      yanliscevaplar:[
  
          "Sulama Kanalları",
          "Hayvan Koşumları",
          "Tahıl Saklama Çukurları"
  
      ]
  },
  //118
  {
      soru:"İslam öncesi türk devletlerinde yönetimde farklı soyların görülmemesi aşağıdaki uygulamalardan hangisiyle açıklanabilir?",
      cevap:"Kut Anlayışı",
      yanliscevaplar:[
  
          "Ordu Millet",
          "İkili Teşkilat",
          "Boylar Federasyonu"
  
      ]
  },
  //119
  {
      soru:"Yarı göçebe yaşayan islam öncesi Türk toplulukları, saldırıya açık bir coğrafyadaydı.Bu durumun aşağıdakilerden hangisinin güçlenmesini sağladığı söylenemez?",
      cevap:"Veraset Anlayışı",
      yanliscevaplar:[
  
          "Silah Sanatı",
          "Teşkilatçılık",
          "Ordu Millet Anlayışı"
  
      ]
  },
  //120
  {
      soru:"İlk Türk devletlerinde hanedan üyeleri arasında taht kavgası yaşanmamıştır. Bu durumun temel sebebi aşağıdakilerden hangisidir?",
      cevap:"Kut Anlayışı",
      yanliscevaplar:[
  
          "Onlu Sistem",
          "Boylar Federasyonu",
          "İkili Teşkilat"
  
      ]
  },
  //121
  {
      soru:"Hz.Ömer döneminde sahipsiz olan topraklar işletilmek ve vergisi ödenmek şartıyla özel kişilere verilmiştir. Bu uygulamanın amacı nedir?",
      cevap:"Tarımsal üretimi artırma",
      yanliscevaplar:[
  
          "Vakıf arazileri kurma",
          "Miri Araziyi uygulamak",
          "Adaleti Çabuklaştırma"
  
      ]
  },
  //122
  {
      soru:"Hz.Ömer döneminde yavaşlayan islam fetihleri Hz.Ali döneminde durmuştur. Bu durumun sebebi aşağıdakilerden hangisidir?",
      cevap:"İç Karışıklıklar",
      yanliscevaplar:[
  
          "İkta sisteminin uygulanması",
          "Vergi gelirlerinin azalması",
          "Ordugahların Kurulması"
  
      ]
  },
  //123
  {
      soru:"Dört halife döneminde görülen aşağıdaki gelişmelerden hangisi demokratik yönetim özellikleriyle bağdaşır niteliktedir?",
      cevap:"Halifelerin seçimle seçilmesi",
      yanliscevaplar:[
  
          "Fetihler Yapılması",
          "Ordugah Kurulması",
          "Danışılarak karar verilmesi"
  
      ]
  },
  //124
  {
      soru:"Arap yarımadasındaki islam devletinin teşekkülüne kadar merkezi bir devlet kurulamamıştır. Bunun temel sebebi nedir?",
      cevap:"Kabileciliğin yaygın olması",
      yanliscevaplar:[
  
          "Köleciliğin görülmesi",
          "Putperestliğin yaygın olması",
          "Kabe'nin kutsal sayılması"
  
      ]
  },
  //125
  {
      soru:"Hz.Ömer döneminde ikta sisteminin uygulamaya konulmasının aşağıdakilerden hangisine ortam hazırladığı savunulamaz?",
      cevap:"Takas usülünün sona ermesi",
      yanliscevaplar:[
  
          "Tarımsal üretimin artırılması",
          "Ordu sisteminin güçlenmesi",
          "Asayişin sağlanması"
  
      ]
  },
  
  ]
  
  
  

let sira = 0;
let takim1 = {
    ad:"",
    logo:"",
    renk:"",
    bolgeler :[],
    durum:""
};
let takim2 = {
    ad:"",
    logo:"",
    renk:"",
    bolgeler :[],
    durum:""
};


let openclose = (choose,dom) => {
  if(choose == "open"){

    $(dom).addClass("active");
    $(dom).css("display","flex").hide().fadeIn("slow");
    $(dom).removeClass("disactive");
    return;
  }
  if(choose == "close"){

    $(dom).addClass("disactive");
    $(dom).css("display","flex").hide().fadeOut("slow");
    $(dom).removeClass("active");
  }
}



$(".dropdowns").click((e) => {
  openclose("close",".section-dropdown")
  $(".for-dropdown").before().text(this.innerHTML)
})

$(".for-dropdown").click(() => {
  openclose("open",".section-dropdown")
})
$(".dicebtn").click(() => {
  openclose("close",".dicebtn")
  setTimeout(() => {
    openclose("close",".dice")
  }, 2000);
})

$(".cevaplar").click(function(event) {
  verilencevap = this.innerHTML;
})
$(".takimadisec").click(() => {

  if(takimsecimi == 0){
    takim1.ad = $("#takimlar").val()
    takim1.renk = $("#renk").val()
    $("#takimlar").children("." + takim1.ad).remove()
    takim1.logo = $(".swiper-slide-active")[0].src
    alert("1.Takım seçildi : " + takim1.ad + ". 2.Takımı seçiniz.")
    document.documentElement.requestFullscreen();

    
    takimsecimi += 1;
    $(".isimgiris").val("")
    $(".isimgiris").attr("placeholder", "2.Takımı seçiniz.");
    return;
  }
  //filter: opacity(0.5) drop-shadow(0 0 0 green);
  if(takimsecimi == 1){

    openclose("open",".dice")

    openclose("close",".takimekrani")

    takim2.ad = $("#takimlar").val()
    takim2.renk = $("#renk").val()
    takim2.logo = $(".swiper-slide-active")[0].src

    $(".takim1serit").css("background-color",takim1.renk)
    $(".takim2serit").css("background-color",takim2.renk)
    
    document.documentElement.requestFullscreen();
    
    
   
    var downloadTimer = setInterval(function(){
      if(surecalisiyormu == false){
        return;
      }
    
      if(timeleft <= 0){

        
        
        //Her yer doluysa
        if(bolgeler.every(bolge => bolge.sahip != null) == true){
          console.log("tüm bolgeler dolu");
        }else{
          console.log("bolgelerden en az biri bos")
          
        }
        $('.modal').modal('toggle')
        openclose("open",".surebitti")
      
        
        surecalisiyormu = false;
        
        
      } else {
        document.getElementById("sayac").innerHTML = timeleft;
      }
      timeleft -= 1;
    

    }, 1000);
  }
})
$(".evet").click(() => {
  mutabik = true;
  if(mutabik){
    if(verilencevap == sorulansoru.cevap){
     var silinecek_soru = sorular.find(e => {
        return e.cevap == sorulansoru.cevap
      })

      sorular = sorular.filter(soru => soru.cevap != silinecek_soru.cevap)

      arkaplanmuzigi.volume = 0.3
      if(suankitakim.ad == "Akıncılar"){

        if(savasilanbolge.isim == "Marmara"){

          play_("./ses/akincilar/akincilar_marmara.mp3")

        }
      if(savasilanbolge.isim == "Ege"){

            play_("./ses/akincilar/akincilar_ege.mp3")
            
      }
      if(savasilanbolge.isim == "Akdeniz"){

        play_("./ses/akincilar/akincilar_akdeniz.mp3")
        
  }
        if(savasilanbolge.isim == "Karadeniz"){

          play_("./ses/akincilar/akincilar_karadeniz.mp3")
          
      }
      if(savasilanbolge.isim == "KKTC"){

        play_("./ses/akincilar/akincilar_kibris.mp3")
        
      }
      if(savasilanbolge.isim == "Doğu Anadolu"){

        play_("./ses/akincilar/akincilar_dogu.mp3")
        
      }
      if(savasilanbolge.isim == "Güney D. Anadolu"){

        play_("./ses/akincilar/akincilar_gdanadolu.mp3")
        
      }
      if(savasilanbolge.isim == "Ic Anadolu"){

        play_("./ses/akincilar/akincilar_icanadolu.mp3")
        
      }
      
    }
    if(suankitakim.ad == "Lağımcılar"){

      if(savasilanbolge.isim == "Marmara"){

        play_("./ses/lagimcilar/lagimcilar_marmara.mp3")

      }
    if(savasilanbolge.isim == "Ege"){

          play_("./ses/lagimcilar/lagimcilar_ege.mp3")
          
    }
    if(savasilanbolge.isim == "Akdeniz"){

      play_("./ses/lagimcilar/lagimcilar_akdeniz.mp3")
      
}
      if(savasilanbolge.isim == "Karadeniz"){

        play_("./ses/lagimcilar/lagimcilar_karadeniz.mp3")
        
    }
    if(savasilanbolge.isim == "KKTC"){

      play_("./ses/lagimcilar/lagimcilar_kibris.mp3")
      
    }
    if(savasilanbolge.isim == "Doğu Anadolu"){

      play_("./ses/lagimcilar/lagimcilar_dogu.mp3")
      
    }
    if(savasilanbolge.isim == "Güney D. Anadolu"){

      play_("./ses/lagimcilar/lagimcilar_gdanadolu.mp3")
      
    }
    if(savasilanbolge.isim == "Ic Anadolu"){

      play_("./ses/lagimcilar/lagimcilar_icanadolu.mp3")
      
    }
    
  }
  if(suankitakim.ad == "Yeni Çeriler"){

    if(savasilanbolge.isim == "Marmara"){

      play_("./ses/yeniceriler/yeniceriler_marmara.mp3")

    }
  if(savasilanbolge.isim == "Ege"){

        play_("./ses/yeniceriler/yeniceriler_ege.mp3")
        
  }
  if(savasilanbolge.isim == "Akdeniz"){

    play_("./ses/yeniceriler/yeniceriler_akdeniz.mp3")
    
}
    if(savasilanbolge.isim == "Karadeniz"){

      play_("./ses/yeniceriler/yeniceriler_karadeniz.mp3")
      
  }
  if(savasilanbolge.isim == "KKTC"){

    play_("./ses/yeniceriler/yeniceriler_kibris.mp3")
    
  }
  if(savasilanbolge.isim == "Doğu Anadolu"){

    play_("./ses/yeniceriler/yeniceriler_dogu.mp3")
    
  }
  if(savasilanbolge.isim == "Güney D. Anadolu"){

    play_("./ses/yeniceriler/yeniceriler_gdanadolu.mp3")
    
  }
  if(savasilanbolge.isim == "Ic Anadolu"){

    play_("./ses/yeniceriler/yeniceriler_icanadolu.mp3")
    
  }
  
}
if(suankitakim.ad == "Mezarcılar"){

  if(savasilanbolge.isim == "Marmara"){

    play_("./ses/mezarcilar/mezarcilar_marmara.mp3")

  }
if(savasilanbolge.isim == "Ege"){

      play_("./ses/mezarcilar/mezarcilar_ege.mp3")
      
}
if(savasilanbolge.isim == "Akdeniz"){

  play_("./ses/mezarcilar/mezarcilar_akdeniz.mp3")
  
}
  if(savasilanbolge.isim == "Karadeniz"){

    play_("./ses/mezarcilar/mezarcilar_karadeniz.mp3")
    
}
if(savasilanbolge.isim == "KKTC"){

  play_("./ses/mezarcilar/mezarcilar_kibris.mp3")
  
}
if(savasilanbolge.isim == "Doğu Anadolu"){

  play_("./ses/mezarcilar/mezarcilar_dogu.mp3")
  
}
if(savasilanbolge.isim == "Güney D. Anadolu"){

  play_("./ses/mezarcilar/mezarcilar_gdanadolu.mp3")
  
}
if(savasilanbolge.isim == "Ic Anadolu"){

  play_("./ses/mezarcilar/mezarcilar_icanadolu.mp3")
  
}

}
      //Bolgelerin hepsi doluysa
      if(bolgeler.every(bolge => bolge.sahip != null) == true){
        suankitakim = sira == 0 ? takim1 : takim2
        savasilanbolge.sahip == suankitakim.ad;
        
      }
      //Bolgelerin hepsi bossa
      if(bolgeler.every(bolge => bolge.sahip == null) == true){
        suankitakim = sira == 0 ? takim1 : takim2
        savasilanbolge.sahip == suankitakim.ad;
        
      
      }
      $(`.bolge${savasilanbolge.id}`).css("filter",`opacity(0.4) drop-shadow(0 0 0 ${suankitakim.renk})`)
      savasilanbolge.sahip = suankitakim.ad;
      bolgeler[savasilanbolge.id - 1].sahip = suankitakim.ad;
      
      surecalisiyormu = false;
      timeleft = 45;
      dogrumu = true;
     /* if(bolgeler.every(bolge => bolge.sahip == takim1.ad) || bolgeler.every(bolge => bolge.sahip == takim2.ad)){
        alert("kazandınız tebrikler!")
      } */

      // setTimeout(() => {
        
      // play_("./ses/dogru.mp3")
      // }, 3000);
      
      setTimeout(() => {

        openclose("open",".dogru")

      $(".dogru").fadeIn(400)
        
       
      }, 1500);

      
    }
    if(verilencevap != sorulansoru.cevap){
        // var takim = sira == 0 ? takim2 : takim1
        // switch(takim.ad){
        //   case("Akıncılar"):
        //     play_("./ses/akıncılar/Akıncılar Başarıyla Savundu.mp3")
        //     break;
  
        // }
        switch(suankitakim.ad){
          case("Akıncılar"):
            play_("./ses/akincilar/akincilar_basarisiz.mp3")
            break;
          case("Lağımcılar"):
            play_("./ses/lagimcilar/lagimcilar_basarisiz.mp3")
            break;
          case("Yeni Çeriler"):
            play_("./ses/yeniceriler/yeniceriler_basarisiz.mp3")
            break;
          case("Mezarcılar"):
            play_("./ses/mezarcilar/mezarcilar_basarisiz.mp3")
            break;

        }
      
        
     
        openclose("open",".yanlis")
      $(".yanlis").fadeIn("slow")
      
    }
    // sorusayisi += 1;
    // sira = sira == 0 ? 1 : 0;
    // timeleft = 15;
  }
})



 

  $(".btnn")[0].addEventListener("click",() => {
    openclose("close",".hosgeldiniz")
    openclose("open",".takimekrani");
    openclose("close",".logobuyuk")
  })
  $(".geri").click(() => {
    sesefekti.pause()
  })
  $(".btnn")[1].addEventListener("click",() => {

    
    
    openclose("close",".hosgeldiniz")
    openclose("open",".nasiloynanir")

    play_("./ses/daktilo.mp3")
    typewriter = () => {
      if(bitti == false){

      
      
      $(".anlatimyazi").html(nasiloynanirmis.substring(0,textpos) + "<span>\u25ae</span>")
      if(textpos++ != nasiloynanirmis.length){
        setTimeout(typewriter,50)
        return;
      }
      sesefekti.pause();
      sesefekti.currentTime = 0;
      bitti = true;
    }

    }
    typewriter()
    openclose("close",".logobuyuk")
  })
  $(".btnn")[2].addEventListener("click",() => {
    openclose("close",".hosgeldiniz")
    openclose("open",".hakkimizda");
    openclose("close",".logobuyuk")
  })
     
  

  $(".rastgele").click(() => {
      
    // openclose("close",".secimekrani");
    openclose("open",".tablolar");
    ogrenciler.forEach(element => {
        
    $(".ogrenci_tablosu").append(`

    <div class='ogrenci'>${element}</div>
    
    `)
})

    

  })


  
 
  let sectors = [
    {color:"#454B1B", label:"Semih"},
    {color:"#8d9c2a", label:"Eren"},
    {color:"#323619", label:"Tahir"}
    
  ];
  
  
  const rand = (m, M) => Math.random() * (M - m) + m;
  const tot = sectors.length;
  const EL_spin = document.querySelector("#spin");
  const ctx = document.querySelector("#wheel").getContext('2d');
  const dia = ctx.canvas.width;
  const rad = dia / 2;
  const PI = Math.PI;
  const TAU = 2 * PI;
  const arc = TAU / sectors.length;
  
  const friction = 0.98; // 0.995=soft, 0.99=mid, 0.98=hard
  let angVel = 0; // Angular velocity
  let ang = 0; // Angle in radians
  
  const getIndex = () => Math.floor(tot - ang / TAU * tot) % tot;
  
  function drawSector(sector, i) {
    const ang = arc * i;
    ctx.save();
    // COLOR
    ctx.beginPath();
    ctx.fillStyle = sector.color;
    ctx.moveTo(rad, rad);
    ctx.arc(rad, rad, rad, ang, ang + arc);
    ctx.lineTo(rad, rad);
    ctx.fill();
    // TEXT
    ctx.translate(rad, rad);
    ctx.rotate(ang + arc / 2);
    ctx.textAlign = "right";
    ctx.fillStyle = "#fff";
    ctx.font = "bold 15px sans-serif";
    ctx.fillText(sector.label, rad - 10, 10);
    //
    ctx.restore();
  };
  
  function rotate() {
    const sector = sectors[getIndex()];
    ctx.canvas.style.transform = `rotate(${ang - PI / 2}rad)`;
    EL_spin.textContent = !angVel ? "ÇEVİR" : sector.label;
    EL_spin.style.background = sector.color;
  }

  function frame() {

    if (!angVel) return;

    
    
    angVel *= friction; // Decrement velocity by friction
    if (angVel < 0.002) 
    {
      const sector = sectors[getIndex()];
      
      if(kackerecevrildi == 0){

        oyuncu1.ad = sector.label;
        $(".ml2").html("1.oyuncu : " +  oyuncu1.ad + " | 2.oyuncuyu seçiniz.") 

      // sector = sector.filter(e => e.label != oyuncu1.ad)

      }
      if(kackerecevrildi == 1){

        oyuncu2.ad = sector.label;
        $(".ml2").html("1.oyuncu : " +  oyuncu1.ad + " | 2.oyuncu: " + oyuncu2.ad + " Oyun başlıyor!" ) 
        setTimeout(() => {
          $(".oyun").addClass("active");
    $(".oyun").removeClass("disactive");
    $("#wheelOfFortune").addClass("disactive");
    $("#wheelOfFortune").removeClass("active");
    openclose("close",".ml2");
    openclose("close",".tablolar");
   
        }, 2000);
        
      }
      kackerecevrildi+=1;
      
      angVel = 0
    }; // Bring to stop
    ang += angVel; // Update angle
    ang %= TAU; // Normalize angle
    rotate();
  }
  
  function engine() {
    frame();
    requestAnimationFrame(engine)
  }
  
  // INIT
  sectors.forEach(drawSector);
  rotate(); // Initial rotation
  engine(); // Start engine
  EL_spin.addEventListener("click", () => {
    if (!angVel) angVel = rand(0.25, 0.35);
  });


  //KONFETİ

  'use strict';

// If set to true, the user must press
// UP UP DOWN ODWN LEFT RIGHT LEFT RIGHT A B
// to trigger the confetti with a random color theme.
// Otherwise the confetti constantly falls.
var onlyOnKonami = false;

$(function() {
  // Globals
  var $window = $(window)
    , random = Math.random
    , cos = Math.cos
    , sin = Math.sin
    , PI = Math.PI
    , PI2 = PI * 2
    , timer = undefined
    , frame = undefined
    , confetti = [];
  
  var runFor = 2000
  var isRunning = true
  
  setTimeout(() => {
			isRunning = false
	}, runFor);

  // Settings
  var konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
    , pointer = 0;

  var particles = 150
    , spread = 20
    , sizeMin = 5
    , sizeMax = 12 - sizeMin
    , eccentricity = 10
    , deviation = 100
    , dxThetaMin = -.1
    , dxThetaMax = -dxThetaMin - dxThetaMin
    , dyMin = .13
    , dyMax = .18
    , dThetaMin = .4
    , dThetaMax = .7 - dThetaMin;

  var colorThemes = [
    function() {
      return color(200 * random()|0, 200 * random()|0, 200 * random()|0);
    }, function() {
      var black = 200 * random()|0; return color(200, black, black);
    }, function() {
      var black = 200 * random()|0; return color(black, 200, black);
    }, function() {
      var black = 200 * random()|0; return color(black, black, 200);
    }, function() {
      return color(200, 100, 200 * random()|0);
    }, function() {
      return color(200 * random()|0, 200, 200);
    }, function() {
      var black = 256 * random()|0; return color(black, black, black);
    }, function() {
      return colorThemes[random() < .5 ? 1 : 2]();
    }, function() {
      return colorThemes[random() < .5 ? 3 : 5]();
    }, function() {
      return colorThemes[random() < .5 ? 2 : 4]();
    }
  ];
  function color(r, g, b) {
    return 'rgb(' + r + ',' + g + ',' + b + ')';
  }

  // Cosine interpolation
  function interpolation(a, b, t) {
    return (1-cos(PI*t))/2 * (b-a) + a;
  }

  // Create a 1D Maximal Poisson Disc over [0, 1]
  var radius = 1/eccentricity, radius2 = radius+radius;
  function createPoisson() {
    // domain is the set of points which are still available to pick from
    // D = union{ [d_i, d_i+1] | i is even }
    var domain = [radius, 1-radius], measure = 1-radius2, spline = [0, 1];
    while (measure) {
      var dart = measure * random(), i, l, interval, a, b, c, d;

      // Find where dart lies
      for (i = 0, l = domain.length, measure = 0; i < l; i += 2) {
        a = domain[i], b = domain[i+1], interval = b-a;
        if (dart < measure+interval) {
          spline.push(dart += a-measure);
          break;
        }
        measure += interval;
      }
      c = dart-radius, d = dart+radius;

      // Update the domain
      for (i = domain.length-1; i > 0; i -= 2) {
        l = i-1, a = domain[l], b = domain[i];
        // c---d          c---d  Do nothing
        //   c-----d  c-----d    Move interior
        //   c--------------d    Delete interval
        //         c--d          Split interval
        //       a------b
        if (a >= c && a < d)
          if (b > d) domain[l] = d; // Move interior (Left case)
          else domain.splice(l, 2); // Delete interval
        else if (a < c && b > c)
          if (b <= d) domain[i] = c; // Move interior (Right case)
          else domain.splice(i, 0, c, d); // Split interval
      }

      // Re-measure the domain
      for (i = 0, l = domain.length, measure = 0; i < l; i += 2)
        measure += domain[i+1]-domain[i];
    }

    return spline.sort();
  }

  // Create the overarching container
  var container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.top      = '0';
  container.style.left     = '0';
  container.style.width    = '100%';
  container.style.height   = '0';
  container.style.overflow = 'visible';
  container.style.zIndex   = '9999';

  // Confetto constructor
  function Confetto(theme) {
    this.frame = 0;
    this.outer = document.createElement('div');
    this.inner = document.createElement('div');
    this.outer.appendChild(this.inner);

    var outerStyle = this.outer.style, innerStyle = this.inner.style;
    outerStyle.position = 'absolute';
    outerStyle.width  = (sizeMin + sizeMax * random()) + 'px';
    outerStyle.height = (sizeMin + sizeMax * random()) + 'px';
    innerStyle.width  = '100%';
    innerStyle.height = '100%';
    innerStyle.backgroundColor = theme();

    outerStyle.perspective = '50px';
    outerStyle.transform = 'rotate(' + (360 * random()) + 'deg)';
    this.axis = 'rotate3D(' +
      cos(360 * random()) + ',' +
      cos(360 * random()) + ',0,';
    this.theta = 360 * random();
    this.dTheta = dThetaMin + dThetaMax * random();
    innerStyle.transform = this.axis + this.theta + 'deg)';

    this.x = $window.width() * random();
    this.y = -deviation;
    this.dx = sin(dxThetaMin + dxThetaMax * random());
    this.dy = dyMin + dyMax * random();
    outerStyle.left = this.x + 'px';
    outerStyle.top  = this.y + 'px';

    // Create the periodic spline
    this.splineX = createPoisson();
    this.splineY = [];
    for (var i = 1, l = this.splineX.length-1; i < l; ++i)
      this.splineY[i] = deviation * random();
    this.splineY[0] = this.splineY[l] = deviation * random();

    this.update = function(height, delta) {
      this.frame += delta;
      this.x += this.dx * delta;
      this.y += this.dy * delta;
      this.theta += this.dTheta * delta;

      // Compute spline and convert to polar
      var phi = this.frame % 7777 / 7777, i = 0, j = 1;
      while (phi >= this.splineX[j]) i = j++;
      var rho = interpolation(
        this.splineY[i],
        this.splineY[j],
        (phi-this.splineX[i]) / (this.splineX[j]-this.splineX[i])
      );
      phi *= PI2;

      outerStyle.left = this.x + rho * cos(phi) + 'px';
      outerStyle.top  = this.y + rho * sin(phi) + 'px';
      innerStyle.transform = this.axis + this.theta + 'deg)';
      return this.y > height+deviation;
    };
  }
     
    
  function poof() {
    if (!frame) {
      // Append the container
      document.body.appendChild(container);

      // Add confetti
      
      var theme = colorThemes[onlyOnKonami ? colorThemes.length * random()|0 : 0]
        , count = 0;
        
      (function addConfetto() {
  
        if (onlyOnKonami && ++count > particles)
          return timer = undefined;
        
        if (isRunning) {
          var confetto = new Confetto(theme);
          confetti.push(confetto);

          container.appendChild(confetto.outer);
          timer = setTimeout(addConfetto, spread * random());
         }
      })(0);
        

      // Start the loop
      var prev = undefined;
      requestAnimationFrame(function loop(timestamp) {
        var delta = prev ? timestamp - prev : 0;
        prev = timestamp;
        var height = $window.height();

        for (var i = confetti.length-1; i >= 0; --i) {
          if (confetti[i].update(height, delta)) {
            container.removeChild(confetti[i].outer);
            confetti.splice(i, 1);
          }
        }

        if (timer || confetti.length)
          return frame = requestAnimationFrame(loop);

        // Cleanup
        document.body.removeChild(container);
        frame = undefined;
      });
    }
  }
    
  $window.keydown(function(event) {
    pointer = konami[pointer] === event.which
      ? pointer+1
      : +(event.which === konami[0]);
    if (pointer === konami.length) {
      pointer = 0;
      poof();
    }
  });
  
  // if (!onlyOnKonami) poof();
});
console.log("%cCenk Anti-Cheat System (:", "color:orange;background:#000;padding:20px; font-family:'Trebuchet MS';font-size:30px;text-align:center");
console.log("%cHile yapmaya çalışmayın.Muhtemelen yapamayacaksınız.", "padding:30px;text-align:center; font-family:'Trebuchet MS';font-size:20px");
console.log("%cEğer açık bulur da bizimle paylaşmak isterseniz müteşekkir kalırız efenim. kallawistudio0@gmail.com", "padding:20px;text-align:left;font-family:'Trebuchet MS';font-size:15px");
console.log(`%c@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@`,"text-align:center;")
console.log(`%c@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@`,"text-align:center;")
console.log(`%c@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@`,"text-align:center;")
console.log(`%c@@@@@@@@@@@@@@ @@@@@@@@@@@  @@@@@@@@@@@@`,"text-align:center;")
console.log(`%c@@@@@@@@@@@    @@@      @@* * @@@@@@@@@@`,"text-align:center;")
console.log(`%c@@@@@@@@@@@    @@@(  @@@@@   @ @@@@@@@@@`,"text-align:center;")
console.log(`%c@@@@@@@@@@@@       (  @      @@@@@@@@@@@`,"text-align:center;")
console.log(`%c@@@@@@@@@@@@@@     &(       @@@@@@@@@@@@`,"text-align:center;")
console.log(`%c@@@@@@@@@@@@@@@@@@@(@ @@@@@@@@@@@@@@@@@@`,"text-align:center;")
console.log(`%c@@@@@@@@@@@@@@@@@@     @@@@@@@@@@@@@@@@@`,"text-align:center;")
console.log(`%c@@@@@@@@@@@@@@@@@@    /@@@@@@@@@@@@@@@@@`,"text-align:center;")
console.log(`%c@@@@@@@@@@@@@@@@@@@   @@@@@@@@@@@@@@@@@@`,"text-align:center;")
console.log(`%c@@@@@@@@@@@@@@@@@@@@ @@@@@@@@@@@@@@@@@@@`,"text-align:center;")
console.log(`%c@@@@@@@@@@@@@@@@@@@@ @@@@@@@@@@@@@@@@@@@`,"text-align:center;")
console.log(`%c@@@@@@@@@@@@@@@@@@@@ @@@@@@@@@@@@@@@@@@@`,"text-align:center;")
console.log(`%c@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@`,"text-align:center;")
console.log(`%c@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@`,"text-align:center;")
console.log("%cOyun içinde telif hakları bizde olmayan video, görsel, seslendirme ve müzik dosyaları bunulmaktadır. Oyun içi görsel, video ve oyun dosyalarının paylaşılması yasaktır.Ayriyeten oyunun dağıtılıp parayla satılması yasaktır. Bozüyük Borsa Anadolu Lisesi Tarih dersi için dersi aktifleştirmek ve daha eğlenceli hale getirmek için hazırlanmıştır.","padding:20px")