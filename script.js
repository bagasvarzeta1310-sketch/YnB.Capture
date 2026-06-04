document.addEventListener('DOMContentLoaded', () => {
    
    // --- Logika Filter Portfolio ---
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Ubah class active pada tombol
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            // Tampilkan/Sembunyikan item berdasarkan kategori
            galleryItems.forEach(item => {
                if (filterValue === 'all' || item.classList.contains(filterValue)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // --- Logika Backsound ---
    const bgMusic = document.getElementById('bg-music');
    const musicToggleBtn = document.getElementById('music-toggle');
    const icon = musicToggleBtn.querySelector('i');
    let isPlaying = false;

    // Setel volume (0.5 = 50%)
    bgMusic.volume = 0.5;

    musicToggleBtn.addEventListener('click', () => {
        if (isPlaying) {
            bgMusic.pause();
            icon.classList.remove('fa-pause');
            icon.classList.add('fa-play');
        } else {
            bgMusic.play();
            icon.classList.remove('fa-play');
            icon.classList.add('fa-pause');
        }
        isPlaying = !isPlaying;
    });
});
