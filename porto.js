function toggleTheme() {
    const body = document.body;
    const themeToggle = document.querySelector('.theme-toggle');

    body.classList.toggle('dark-mode');

    // Ubah ikon tema sesuai mode
    themeToggle.innerHTML = body.classList.contains('dark-mode') ? '☀️' : '🌙';
}

// Toggle menu navigasi
function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}

// Animasi progress bar saat scroll
document.addEventListener("DOMContentLoaded", function() {
    const skillsSection = document.getElementById("skills");
    const progressBars = document.querySelectorAll(".progress-bar");

    function showProgress() {
        let scrollPos = window.scrollY + window.innerHeight;
        if (scrollPos >= skillsSection.offsetTop) {
            progressBars.forEach(bar => {
                bar.style.width = bar.getAttribute("data-width");
            });
        }
    }

    window.addEventListener("scroll", showProgress);
});

// Fitur drag & drop untuk tombol tema
document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.querySelector('.theme-toggle');

    let isDragging = false, startX, startY, startLeft, startTop;

    themeToggle.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
        startLeft = themeToggle.offsetLeft;
        startTop = themeToggle.offsetTop;

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    });

    function onMouseMove(e) {
        if (!isDragging) return;
        let newLeft = startLeft + (e.clientX - startX);
        let newTop = startTop + (e.clientY - startY);

        // Jangan biarkan tombol keluar dari layar
        newLeft = Math.max(10, Math.min(window.innerWidth - themeToggle.clientWidth - 10, newLeft));
        newTop = Math.max(10, Math.min(window.innerHeight - themeToggle.clientHeight - 10, newTop));

        themeToggle.style.left = newLeft + 'px';
        themeToggle.style.top = newTop + 'px';
    }

    function onMouseUp() {
        isDragging = false;
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    }
});