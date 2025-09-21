document.getElementById('form-checkout').onsubmit = function(e) {
  e.preventDefault();
  const metode = document.querySelector('select[name="metode"]').value;
  if (!metode) {
    document.getElementById('bayar-result').innerHTML = "<span style='color:red'>Pilih metode pembayaran!</span>";
    return;
  }
  document.getElementById('bayar-result').innerHTML = "Pembayaran berhasil!";
  setTimeout(() => {
    window.location.href = "histori.html";
  }, 1200);
};

// Simulasi ambil harga premi dari localStorage (atau bisa dari session sebelumnya)
const hargaPremi = localStorage.getItem("hargaPremi") || "Rp0";
document.getElementById("harga-premi").value = hargaPremi;