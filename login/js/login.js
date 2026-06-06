document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;
    const alertBox = document.getElementById('alertBox');

    // Mengambil data user yang tersimpan di LocalStorage berdasarkan username
    const storedUser = localStorage.getItem(usernameInput);

    if (storedUser) {
        const userData = JSON.parse(storedUser);
        
        // Validasi password
        if (userData.password === passwordInput) {
            alert("Login Berhasil!");
            
            // Simpan status session login aktif
            localStorage.setItem('sessionUser', userData.nama);
            
            // Pindah ke halaman utama Toko Floral
            window.location.href = "../index.html"; 
            return;
        }
    }

    // Jika salah, tampilkan kotak alert error
    alertBox.style.display = "block";
    alertBox.textContent = "Username atau Password salah!";
});
