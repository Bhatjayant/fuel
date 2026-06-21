document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Light/Dark Theme Switch Engine Controller
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const rootHtml = document.documentElement;

    const currentSavedTheme = localStorage.getItem('theme') || 'dark';
    rootHtml.setAttribute('data-theme', currentSavedTheme);

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const activeTheme = rootHtml.getAttribute('data-theme');
            const targetTheme = activeTheme === 'dark' ? 'light' : 'dark';
            
            rootHtml.setAttribute('data-theme', targetTheme);
            localStorage.setItem('theme', targetTheme);
        });
    }

    // 2. Mobile Menu View Mechanics
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            navLinks.classList.toggle('show');
        });

        document.querySelectorAll('#navLinks a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('show');
            });
        });

        document.addEventListener('click', (e) => {
            if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
                navLinks.classList.remove('show');
            }
        });
    }

    // 3. Optimized Scroll Intersection Observer
    const scrollElements = document.querySelectorAll('.scroll-animate');

    if ('IntersectionObserver' in window) {
        const scrollObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.12,
            rootMargin: '0px 0px -40px 0px'
        });

        scrollElements.forEach(el => scrollObserver.observe(el));
    } else {
        scrollElements.forEach(el => el.classList.add('active'));
    }

    // 4. Staggered Eager Reaction Animation Logic for Contact Hooks
    const contactNavLink = document.getElementById('contactNavLink');
    const heroCtaButton = document.getElementById('heroCtaButton');
    const floatingDock = document.getElementById('floatingDock');

    function triggerDockBubbleEffect() {
        if (floatingDock) {
            floatingDock.classList.remove('bubble-shaking');
            
            // Force browser layout reflow computation
            void floatingDock.offsetWidth;
            
            floatingDock.classList.add('bubble-shaking');

            setTimeout(() => {
                floatingDock.classList.remove('bubble-shaking');
            }, 1500);
        }
    }

    if (contactNavLink) {
        contactNavLink.addEventListener('click', triggerDockBubbleEffect);
    }
    if (heroCtaButton) {
        heroCtaButton.addEventListener('click', triggerDockBubbleEffect);
    }

    // 5. Hardware Accelerated 3D Cursor Tracking Matrix Engine
    const dynamicTiltBlocks = document.querySelectorAll('[data-tilt-block]');

    if (window.innerWidth > 768) {
        dynamicTiltBlocks.forEach(block => {
            block.addEventListener('mousemove', (e) => {
                const layoutDimensions = block.getBoundingClientRect();
                
                const absoluteX = e.clientX - layoutDimensions.left;
                const absoluteY = e.clientY - layoutDimensions.top;
                
                const relativeToCenterX = absoluteX - (layoutDimensions.width / 2);
                const relativeToCenterY = absoluteY - (layoutDimensions.height / 2);
                
                const pitchRotationX = (relativeToCenterY / (layoutDimensions.height / 2)) * -8;
                const rollRotationY = (relativeToCenterX / (layoutDimensions.width / 2)) * 8;
                
                block.style.transform = `rotateX(${pitchRotationX.toFixed(2)}deg) rotateY(${rollRotationY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;
            });

            block.addEventListener('mouseleave', () => {
                block.style.transform = `rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
            });
        });
    }
});
