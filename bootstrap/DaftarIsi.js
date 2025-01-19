        new WOW().init();

       const openModalBtn = document.getElementById('openModalBtn');
       const closeModalBtn = document.getElementById('closeModalImg');
       const modalOverlay = document.getElementById('modalOverlay');
       const toggleMusicImage = document.getElementById('toggleMusicImage');
       const backgroundMusic = document.getElementById('backgroundMusic');

       // Membuka Layar Setting
       openModalBtn.addEventListener('click', function() {
           modalOverlay.style.display = 'flex'; // Tampilkan modal
       });


       // Menutup Layar setting
       modalOverlay.addEventListener('click', function(e) {
           if (e.target === modalOverlay) {
               modalOverlay.style.display = 'none';
           }
       });
   
       // Event listener untuk tombol close modal
       closeModalBtn.addEventListener('click', function () {
           modalOverlay.style.display = 'none';
       });
   
       // Event listener untuk tombol ON/OFF musik menggunakan gambar
       let isMusicOn = true; // Status awal musik
       toggleMusicImage.addEventListener('click', function () {
           isMusicOn = !isMusicOn; // Toggle status
   
           if (isMusicOn) {
               toggleMusicImage.src = "asset/button/on-btn.png"; // Gambar saat musik ON
               backgroundMusic.play(); // Putar musik
           } else {
               toggleMusicImage.src = "asset/button/off-btn.png"; // Gambar saat musik OFF
               backgroundMusic.pause(); // Hentikan musik
           }
       });

       function filterItems() {
           const input = document.getElementById('searchInput').value.toLowerCase(); // Ambil input dari user
           const items = document.querySelectorAll('.grid-item'); // Ambil semua elemen dengan class 'grid-item'
   
           // Loop melalui semua elemen untuk memfilter
           items.forEach(item => {
               const itemId = item.id.toLowerCase(); // Ambil id elemen dan ubah ke lowercase
               if (itemId.includes(input)) {
                   item.style.display = 'block'; // Tampilkan elemen jika cocok
               } else {
                   item.style.display = 'none'; // Sembunyikan elemen jika tidak cocok
               }
           });
       }
   
       function clearSearch() {
           document.getElementById('searchInput').value = ''; // Kosongkan input
           filterItems(); // Tampilkan kembali semua elemen
       }

       document.querySelectorAll('.grid-item').forEach(function(item, index) {
           // Set delay sesuai dengan urutan item
           item.style.animationDelay = (index * 0.1) + 's';
   
           item.addEventListener('click', function(event) {
               // Dapatkan elemen <a> di dalam grid-item yang diklik
               var link = this.querySelector('a');
               var destinationUrl = link ? link.getAttribute('href') : '#';
   
               // Jika URL valid, cegah perpindahan halaman langsung
               if (destinationUrl !== "#") {
                   event.preventDefault();  // Mencegah tindakan default dari anchor
               }
   
               // Mengubah animasi semua grid-item menjadi fadeOutUp
               document.querySelectorAll('.grid-item').forEach(function(element) {
                   element.classList.remove('animate__fadeInUp');
                   element.classList.add('animate__fadeOutUp');
               });
   
               // Redirect setelah animasi selesai (2600 ms)
               setTimeout(function() {
                   if (destinationUrl !== "#") {
                       window.location.href = destinationUrl;  // Arahkan ke halaman yang sesuai
                   }
               }, 1200);  // Sesuaikan dengan durasi animasi
           });
       });