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

    // 2. Optimized Scroll Intersection Observer
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

    // 3. Staggered Bubble Shake Animation Handle for Contact Hooks
    const contactNavLink = document.getElementById('contactNavLink');
    const heroCtaButton = document.getElementById('heroCtaButton');
    const floatingDock = document.getElementById('floatingDock');

    function triggerDockBubbleEffect() {
        if (floatingDock) {
            // Remove first to reset animation cycle safely if double clicked
            floatingDock.classList.remove('bubble-shaking');
            
            // Force browser reflow to instantly register style state resetting
            void floatingDock.offsetWidth;
            
            // Apply class configuration to activate keyframe sequences inside elements
            floatingDock.classList.add('bubble-shaking');

            // Automatically clean up class handle once animation sequence finishes (1000ms safe window)
            setTimeout(() => {
                floatingDock.classList.remove('bubble-shaking');
            }, 1000);
        }
    }

    // Attach listeners to both nav bar contact button and primary motivation box call to action button
    if (contactNavLink) {
        contactNavLink.addEventListener('click', triggerDockBubbleEffect);
    }
    if (heroCtaButton) {
        heroCtaButton.addEventListener('click', triggerDockBubbleEffect);
    }
});
