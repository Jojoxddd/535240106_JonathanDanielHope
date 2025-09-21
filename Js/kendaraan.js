document.getElementById('hitung-premi').onclick = function() {
      const tahun = parseInt(document.querySelector('input[name="tahun"]').value);
      const harga = parseInt(document.querySelector('input[name="harga"]').value);
      const tahunSekarang = new Date().getFullYear();
      const umur = tahunSekarang - tahun;
      let premi = 0;

      if (umur <= 3) {
        premi = 0.025 * harga;
      } else if (umur > 3 && umur <= 5) {
        if (harga < 200000000) {
          premi = 0.04 * harga;
        } else {
          premi = 0.03 * harga;
        }
      } else if (umur > 5) {
        premi = 0.05 * harga;
      }

      document.getElementById('premi-result').innerHTML =
        "<strong>Harga Premi: Rp " + premi.toLocaleString('id-ID') + " / tahun</strong>";
    };

    document.getElementById('form-mobil').onsubmit = function(e) {
      e.preventDefault();
      window.location.href = "checkout.html";
    };