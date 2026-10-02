const WA="6287802490818";document.querySelector("#menu").onclick=()=>{const n=document.querySelector("#nav");n.style.display=n.style.display==="flex"?"none":"flex"};document.querySelector("#form").onsubmit=e=>{e.preventDefault();const q=id=>document.querySelector(id).value;const m=`Halo Luke Driver, saya ingin memesan layanan.

Nama: ${q("#nama")}
Tanggal: ${q("#tanggal")}
Jam: ${q("#jam")}
Lokasi penjemputan: ${q("#jemput")}
Tujuan: ${q("#tujuan")}
Jumlah penumpang: ${q("#orang")} orang

Mohon informasi ketersediaan driver dan tarif. Terima kasih.`;window.open("https://wa.me/"+WA+"?text="+encodeURIComponent(m),"_blank")}