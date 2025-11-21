document.addEventListener("DOMContentLoaded", function () {

    // Pastikan tombol .btnDetail aktif
    document.querySelectorAll('.btnDetail').forEach(btn => {

        btn.addEventListener('click', (e) => {

            // Ambil card terdekat
            let card = e.target.closest('.card');
            if (!card) return;

            // Ambil data dari card
            let judul = card.querySelector('.card-text')?.innerHTML || "Tidak ada judul";
            let harga = card.querySelector('.harga')?.innerHTML || "Tidak ada harga";
            let deskripsi = card.querySelector('.deskripsi')?.innerHTML || "Tidak ada deskripsi";

            // Buka Modal
            const modalBtn = document.querySelector('.btnModal');
            if (modalBtn) modalBtn.click();

            // Isi modal dengan data
            document.querySelector('.modalTitle').innerHTML = judul;
            document.querySelector('.modalDeskripsi').innerHTML = deskripsi;
            document.querySelector('.modalHarga').innerHTML = harga;

            // Kosongkan area gambar modal (memang tidak dipakai)
            const imgArea = document.querySelector('.modalImage');
            if (imgArea) imgArea.innerHTML = "";

            // Center text modal
            document.querySelector('.modalTitle').classList.add('text-center');
            document.querySelector('.modalDeskripsi').classList.add('text-center');
            document.querySelector('.modalHarga').classList.add('text-center');

            // ==================== WHATSAPP ====================
            const nohp = "62895711810908";
            let pesan = `Hai kak, saya mau pesan produk *${judul}* dengan harga ${harga}.`;

            const btnBeli = document.querySelector('.btnBeli');
            if (btnBeli) {
                btnBeli.href =
                    `https://api.whatsapp.com/send?phone=${nohp}&text=${encodeURIComponent(pesan)}`;
            }

        });
    });

});
