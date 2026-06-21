document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Dark/Light Active Engine
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

    // 2. Fully Restored Mobile Drawer Controls
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            navLinks.classList.toggle('show');
        });

        // Close when a nav item link is clicked
        document.querySelectorAll('#navLinks a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('show');
            });
        });

        // Close on blank clicks outside of container area
        document.addEventListener('click', (e) => {
            if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
                navLinks.classList.remove('show');
            }
        });
    }

    // 3. Hardware Accelerated 3D Coordinate Track Matrix Engine
    const dynamicTiltBlocks = document.querySelectorAll('[data-tilt-block]');

    if (window.innerWidth > 1024) {
        dynamicTiltBlocks.forEach(block => {
            block.addEventListener('mousemove', (e) => {
                const dimensions = block.getBoundingClientRect();
                const absoluteX = e.clientX - dimensions.left;
                const absoluteY = e.clientY - dimensions.top;
                
                const relativeToCenterX = absoluteX - (dimensions.width / 2);
                const relativeToCenterY = absoluteY - (dimensions.height / 2);
                
                const pitchRotationX = (relativeToCenterY / (dimensions.height / 2)) * -5;
                const rollRotationY = (relativeToCenterX / (dimensions.width / 2)) * 5;
                
                block.style.transform = `rotateX(${pitchRotationX.toFixed(2)}deg) rotateY(${rollRotationY.toFixed(2)}deg) scale3d(1.01, 1.01, 1.01)`;
            });

            block.addEventListener('mouseleave', () => {
                block.style.transform = `rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
            });
        });
    }
});
