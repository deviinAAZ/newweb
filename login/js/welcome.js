document.addEventListener("DOMContentLoaded", function () {
    // 1. Ambil data nama user yang disimpan saat berhasil login
    const sessionUser = localStorage.getItem('sessionUser');
    
    // 2. Ambil elemen HTML yang ingin diubah teks dan tombolnya
    const userInfo = document.getElementById('userInfo');
    const authArea = document.getElementById('authArea');

    // 3. Cek apakah pengguna sudah login atau belum
    if (sessionUser) {
        // Jika sudah login, ubah teks "Belum Login" menjadi "Halo, NamaUser"
        userInfo.textContent = "Halo, " + sessionUser;
        
        // Ubah tombol "Login" menjadi tombol "Logout"
        authArea.innerHTML = '<button onclick="logoutUser()" style="background: #ff4d4d; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; margin-top: 5px;">Logout</button>';
    }
});

// 4. Fungsi untuk menghapus sesi login saat tombol Logout diklik
function logoutUser() {
    // Hapus sesi aktif dari LocalStorage
    localStorage.removeItem('sessionUser');
    alert("Anda telah logout.");
    
    // Refresh halaman agar tampilan kembali ke status "Belum Login"
    window.location.reload();
}
