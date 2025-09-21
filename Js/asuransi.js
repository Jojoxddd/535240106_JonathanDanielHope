document.getElementById('hitung-premi').onclick = function() {
      const lahir = document.querySelector('input[name="lahir"]').value;
      const merokok = parseInt(document.querySelector('select[name="merokok"]').value || "0");
      const hipertensi = parseInt(document.querySelector('select[name="hipertensi"]').value || "0");
      const diabetes = parseInt(document.querySelector('select[name="diabetes"]').value || "0");
      const premiDasar = 2000000;

      if (!lahir) {
        document.getElementById('premi-result').innerHTML = "<span style='color:red'>Tanggal lahir harus diisi!</span>";
        return;
      }

      // Hitung umur
      const tahunLahir = new Date(lahir).getFullYear();
      const tahunSekarang = new Date().getFullYear();
      const umur = tahunSekarang - tahunLahir;

      // Faktor pengali umur
      let faktor = 0.1;
      if (umur > 20 && umur <= 35) faktor = 0.2;
      else if (umur > 35 && umur <= 50) faktor = 0.25;
      else if (umur > 50) faktor = 0.4;

      // Perhitungan premi
      const premi = premiDasar
        + (faktor * premiDasar)
        + (merokok * 0.5 * premiDasar)
        + (hipertensi * 0.4 * premiDasar)
        + (diabetes * 0.5 * premiDasar);

      document.getElementById('premi-result').innerHTML =
        "<strong>Harga Premi: Rp " + premi.toLocaleString('id-ID') + " / tahun</strong>";
    };

    document.getElementById('form-kesehatan').onsubmit = function(e) {
      e.preventDefault();
      window.location.href = "checkout.html";
    };