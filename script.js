// RapidCharge Hub
// Fuel By Willpower

document.addEventListener("DOMContentLoaded", () => {
    console.log("RapidCharge Hub Loaded with Animations");

    // Dynamic Scroll-Driven Reveal Observer (Hardware-Accelerated)
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Introduce an incremental cascading fade effect for clean list presentation
                setTimeout(() => {
                    entry.target.classList.add("reveal-active");
                }, index * 40); 
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.08,
        rootMargin: "0px 0px -40px 0px"
    });

    // Track targets across core components
    document.querySelectorAll(".scroll-animate").forEach(element => {
        revealObserver.observe(element);
    });

    // Mobile Hamburger Menu Toggle Functionality
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });

        document.querySelectorAll("nav ul li a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
            });
        });
    }
});

// Smooth Navigation Scroll Tracking
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target){
            target.scrollIntoView({
                behavior:'smooth'
            });
        }
    });
});

// Dynamic Sticky Navbar Scroll States
window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    if(window.scrollY > 60){
        nav.style.background = "rgba(0,0,0,0.98)";
        nav.style.height = "95px";
    }else{
        nav.style.background = "rgba(0,0,0,0.95)";
        nav.style.height = "110px";
    }
});
