document.getElementById('hitung-premi').onclick = function() {
  const lahir = document.querySelector('input[name="lahir"]').value;
  const pertanggungan = parseInt(document.querySelector('select[name="pertanggungan"]').value || "0");

  if (!lahir || !pertanggungan) {
    document.getElementById('premi-result').innerHTML = "<span style='color:red'>Semua data harus diisi!</span>";
    return;
  }

  // Hitung umur
  const tahunLahir = new Date(lahir).getFullYear();
  const tahunSekarang = new Date().getFullYear();
  const umur = tahunSekarang - tahunLahir;

  // Tarif premi
  let tarif = 0.002; // 0.2%
  if (umur > 30 && umur <= 50) tarif = 0.004; // 0.4%
  else if (umur > 50) tarif = 0.01; // 1%

  // Premi per bulan
  const premi = tarif * pertanggungan;

  document.getElementById('premi-result').innerHTML =
    "<strong>Harga Premi: Rp " + premi.toLocaleString('id-ID') + " / bulan</strong>";
};

document.getElementById('form-jiwa').onsubmit = function(e) {
  e.preventDefault();
  window.location.href = "checkout.html";
};