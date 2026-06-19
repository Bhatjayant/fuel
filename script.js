// RapidCharge Hub™
// Fuel By Willpower

document.addEventListener("DOMContentLoaded", () => {

    console.log("RapidCharge Hub Loaded");

    // Fade In Animation

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: 0.15

    });

    document.querySelectorAll(".card").forEach(card => {

        observer.observe(card);

    });

    document.querySelectorAll(".cities div").forEach(city => {

        observer.observe(city);

    });

});

// Smooth Scroll

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

// Navbar Background Change

window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    if(window.scrollY > 100){

        nav.style.background = "rgba(0,0,0,0.98)";

    }else{

        nav.style.background = "rgba(0,0,0,0.90)";

    }

});
