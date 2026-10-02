// Nomor WhatsApp Luke Driver: 087802490818
const WHATSAPP = "6287802490818";

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("#navMenu");
menuBtn.addEventListener("click", () => {
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
});

function waLink(message) {
  return "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(message);
}

document.querySelector("#contactWa").href = waLink("Halo Luke Driver, saya ingin menanyakan layanan driver.");

document.querySelector("#bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const nama = document.querySelector("#nama").value;
  const tanggal = document.querySelector("#tanggal").value;
  const jam = document.querySelector("#jam").value;
  const jemput = document.querySelector("#jemput").value;
  const tujuan = document.querySelector("#tujuan").value;
  const penumpang = document.querySelector("#penumpang").value;

  const message = `Halo Luke Driver, saya ingin memesan layanan driver.

Nama: ${nama}
Tanggal: ${tanggal}
Jam: ${jam}
Lokasi penjemputan: ${jemput}
Tujuan: ${tujuan}
Jumlah penumpang: ${penumpang} orang

Mohon informasi ketersediaan driver dan tarif perjalanan. Terima kasih.`;

  window.open(waLink(message), "_blank");
});
