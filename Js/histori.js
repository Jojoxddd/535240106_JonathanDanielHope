

const tbody = document.getElementById("histori-body");
histori.forEach(item => {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${item.produk}</td>
    <td>${item.jenis}</td>
    <td>${item.tanggal}</td>
    <td>${item.harga}</td>
    <td class="${item.status === 'Lunas' ? 'status-lunas' : 'status-belum'}">${item.status}</td>
  `;
  tbody.appendChild(tr);
});