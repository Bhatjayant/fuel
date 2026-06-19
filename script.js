document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile Menu View Mechanics
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            navLinks.classList.toggle('show');
        });

        // Close mobile menu layout whenever a navigation target anchor gets clicked
        document.querySelectorAll('#navLinks a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('show');
            });
        });

        // Dismiss open menu automatically if click coordinates fall outside the bounding boxes
        document.addEventListener('click', (e) => {
            if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
                navLinks.classList.remove('show');
            }
        });
    }

    // 2. Performance-Optimized Scroll Intersection Observer
    const scrollElements = document.querySelectorAll('.scroll-animate');

    if ('IntersectionObserver' in window) {
        const scrollObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target); // Kill observation lifecycle immediately upon completion
                }
            });
        }, {
            threshold: 0.12,
            rootMargin: '0px 0px -40px 0px'
        });

        scrollElements.forEach(el => scrollObserver.observe(el));
    } else {
        // Safe fallback execution trace for Legacy browsers missing API features
        scrollElements.forEach(el => el.classList.add('active'));
    }
});
