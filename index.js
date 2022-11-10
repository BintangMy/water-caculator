let obj = {}
document.getElementById('page1').onclick = function () {

  let umur = document.getElementById('demoRange').innerText;
  let berat = document.getElementById('demoInput').value;
  let tinggi = document.getElementById('InputHeight').value;

  obj.umur = Number(umur)
  obj.berat = Number(berat)
  obj.tinggi = Number(tinggi)
  plusSlides(1)
}

document.getElementById('result').onclick = function () {
  let besar = document.getElementById('InputLarge').value;
  let sedang = document.getElementById('InputMedium').value;
  let kecil = document.getElementById('InputSmall').value;


  // calculate

  obj.besar = Number(besar) * 1500
  obj.sedang = (Number(sedang) * 1000) - (Number(sedang) * 250)
  obj.kecil = (Number(kecil) * 1000) - (Number(kecil) * 500)
  let calculateWater = (obj.besar + obj.sedang + obj.kecil) / 1000
  let kebutuhanHarian = obj.berat / 30
  let selisihCairan = calculateWater - kebutuhanHarian
  //  kebutuhanCairan


  // box kanan
  if (selisihCairan >= 0) {
    document.getElementById('yourStatus').innerHTML = 'AMAN'
    document.getElementById('yourStatus').style.color = '#59CE8F'
    document.getElementById('selisihStatus').innerHTML = 'kebutuhan cairan harian kamu sudah terpenuhi' 
  } else if(selisihCairan < 0 && selisihCairan > -0.5){
    document.getElementById('yourStatus').innerHTML = 'AYO MINUM LAGI'
    document.getElementById('yourStatus').style.color = '#FF7F3F'
    document.getElementById('selisihStatus').innerHTML = `kamu masih membutuhkan cairan sebanyak <div class='bold'>${Math.abs(selisihCairan).toFixed(1)} L</div> `
  }else {
    document.getElementById('yourStatus').innerHTML = 'JANGAN LUPA MINUM'
    document.getElementById('yourStatus').style.color = '#CF0A0A'
    document.getElementById('selisihStatus').innerHTML = `kamu masih membutuhkan cairan sebanyak <div class='bold'>${Math.abs(selisihCairan).toFixed(1)} L</div> `
  }


  document.getElementById('kebutuhanCairan').innerHTML = `${calculateWater} <kecil>L</kecil>`
  document.getElementById('sisaCairan').innerHTML = `${kebutuhanHarian.toFixed(1)} <kecil>L</kecil>`
  
  // box kiri


  let word = ['Minum air putih yang cukup setiap hari dapat mejaga kelembaban kulitmu', 'minum air putih cukup setiap harinya dapat membuatmu lebih berkonsentrasi dalam mengerjakan pekerjaan sehari-hari', 'Mencukupi kebutuhan cairan tiap hari dapat membantu melancarkan sirkulasi dan perncernaan kamu lho!','Air 100% bebas kalori, sehingga dapat membantu Anda dalam membakar lebih banyak kalori. Air juga dapat membuat Anda merasa kenyang, sebab air mengalir dengan cepat sampai ke perut, membuat perut lebih renggang.','Fakta medis menunjukkan tubuh manusia 60 persen terdiri dari cairan.  Fungsi-fungsi cairan ini adalah untuk proses pencernaan, penyerapan, sirkulasi, produksi air ludah, transportasi nutrisi, dan mempertahankan suhu tubuh.','Minum air saat berolahraga juga sangat penting. American College of Sports Medicine merekomendasikan bahwa dua jam sebelum berolahraga sebaiknya seseorang meminum 17 ons cairan.','Dehidrasi kondisi ketika tubuh kekurangan air. Ini dapat mengganggu fungsi tubuh dan menyebabkan komplikasi serius, seperti gagal ginjal, kejang, dan pembengkakan otak.','Air liur mengandung sejumlah kecil elektrolit, lendir, dan enzim. Ini penting untuk memecah makanan padat dan menjaga kesehatan mulut. Tubuh menghasilkan air liur yang cukup dengan asupan cairan yang teratur.','Tubuh kehilangan air melalui keringat selama aktivitas fisik dan di lingkungan yang panas. Keringat membuat tubuh tetap dingin, tetapi suhu tubuh akan naik jika tidak mengisi kembali air yang hilang.','Minum air putih sebelum, selama, dan setelah makan akan membantu tubuh memecah makanan dengan lebih mudah. Ini akan membantu mencerna makanan lebih efektif dan mendapatkan hasil maksimal dari makanan.','Selain membantu pemecahan makanan, minum air juga membantu melarutkan vitamin, mineral, dan nutrisi lain dari makanan. Selain itu, air juga dapat membantu mengirimkan komponen vitamin ini ke seluruh tubuh untuk digunakan.','Air dapat membawa nutrisi dan oksigen yang bermanfaat ke seluruh tubuh. Minum air putih yang cukup setiap hari akan meningkatkan sirkulasi dan memiliki dampak positif pada kesehatan secara keseluruhan.','Hidrasi yang tepat adalah kunci untuk tetap dalam kondisi kognitif yang prima. Tidak cukup minum air dapat berdampak negatif pada fokus, kewaspadaan, dan memori jangka pendek.']

  
  let gacha = Math.floor(Math.random() * word.length)
  document.getElementById('quot').innerHTML = word[gacha]

  plusSlides(1)
}

document.getElementById('back2').onclick = function () {
  obj.besar = 0
  obj.sedang = 0
  obj.kecil = 0
  plusSlides(-1)
}

document.getElementById('back1').onclick = function () {


  obj.umur = 0
  obj.berat = 0
  obj.tinggi = 0
  plusSlides(-1)
}

// SLIDERRRRRRRR
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  // console.log('ini fungsi uda jalan', umur , berat , tinggi)
  showSlides(slideIndex += n);
  console.log(obj)
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i] = dots[i].replace("active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1] += " active";
}

// SLIDERRRRRRRR ENDDDDDDDDDDDDDDDDDDDDDDD
//INCREMENTTTTT
function increment() {
  document.getElementById('demoInput').stepUp();
}

function decrement() {
  document.getElementById('demoInput').stepDown();
}


function incrementHeight() {
  document.getElementById('InputHeight').stepUp();
}

function decrementHeight() {
  document.getElementById('InputHeight').stepDown();
}

function incrementLarge() {
  document.getElementById('InputLarge').stepUp();
  document.getElementById('InputLargeImg').style.display = "none";
}

function decrementLarge() {
  document.getElementById('InputLarge').stepDown();
}


function incrementMedium() {
  document.getElementById('InputMedium').stepUp();
  document.getElementById('InputMediumImg').style.display = "none";
}

function decrementMedium() {
  document.getElementById('InputMedium').stepDown();
}

function incrementSmall() {
  document.getElementById('InputSmall').stepUp();
  document.getElementById('InputSmallImg').style.display = "none";
}

function decrementSmall() {
  document.getElementById('InputSmall').stepDown();
}





// RANGEEEEEEEEEEEE

// console.log(">>>>>>")
var slider = document.getElementById("myRange");
var output = document.getElementById("demoRange");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
}