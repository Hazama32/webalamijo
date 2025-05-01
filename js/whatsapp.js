function sendToWhatsApp({ nama, alamat, hp, pesan, phoneNumber = "6288293399794" }) {
    // Validasi: Pastikan semua kolom diisi
    if (!nama || !alamat || !hp || !pesan) {
        alert("Harap isi semua kolom terlebih dahulu.");
        return;
    }

    // Format pesan
    var whatsappMessage = `Halo! Saya ${nama}, Alamat: ${alamat}, Nomor Handphone: ${hp}. Pesanan: ${pesan}`;
    var encodedMessage = encodeURIComponent(whatsappMessage);

    var url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Buka WhatsApp
    window.open(url, '_blank');
}

// Optional helper function to get data from DOM and call sendToWhatsApp
function sendToWhatsAppFromDOM(phoneNumber) {
    var nama = document.querySelector('input[placeholder="Nama"]').value.trim();
    var alamat = document.querySelector('input[placeholder="Alamat"]').value.trim();
    var hp = document.querySelector('input[placeholder="No. Handphone"]').value.trim();
    var pesan = document.querySelector('textarea[placeholder="Pesanan"]').value.trim();

    sendToWhatsApp({ nama, alamat, hp, pesan, phoneNumber });
}
