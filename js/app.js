/* ==========================================================
   KAIDO FF STORE
   app.js - Part 1A
   Cursor + Navbar Effects
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       CURSOR GLOW
    ========================== */

    const cursor = document.querySelector(".cursor");

    if (cursor) {

        document.addEventListener("mousemove", (e) => {

            cursor.style.left = e.clientX + "px";
            cursor.style.top = e.clientY + "px";

        });

    }

    /* ==========================
       NAVBAR SCROLL EFFECT
    ========================== */

    const navbar = document.querySelector(".navbar");

    function handleNavbar() {

        if (!navbar) return;

        if (window.scrollY > 80) {

            navbar.style.background = "rgba(5,8,22,.90)";
            navbar.style.backdropFilter = "blur(22px)";
            navbar.style.boxShadow = "0 15px 45px rgba(0,0,0,.35)";
            navbar.style.borderColor = "rgba(139,92,246,.25)";

        } else {

            navbar.style.background = "rgba(255,255,255,.06)";
            navbar.style.backdropFilter = "blur(18px)";
            navbar.style.boxShadow = "0 15px 40px rgba(0,0,0,.35)";
            navbar.style.borderColor = "rgba(255,255,255,.08)";

        }

    }

    window.addEventListener("scroll", handleNavbar);

    handleNavbar();

});

/* ==========================================================
   KAIDO FF STORE
   app.js - Part 1B
   GSAP Hero Animations
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       CHECK GSAP
    ========================== */

    if (typeof gsap === "undefined") {
        console.warn("GSAP not loaded.");
        return;
    }

    /* ==========================
       HERO TIMELINE
    ========================== */

    const heroTL = gsap.timeline({
        defaults: {
            duration: 0.8,
            ease: "power3.out"
        }
    });

    heroTL
        .from(".hero-badge", {
            y: -30,
            opacity: 0
        })

        .from(".hero h1", {
            y: 40,
            opacity: 0
        }, "-=0.3")

        .from(".hero p", {
            y: 30,
            opacity: 0
        }, "-=0.4")

        .from(".hero-buttons", {
            y: 30,
            opacity: 0
        }, "-=0.3")

        .from(".stats div", {
            y: 40,
            opacity: 0,
            stagger: 0.15
        }, "-=0.2")

        .from(".hero-right img", {
            x: 80,
            opacity: 0,
            scale: 0.9
        }, "-=0.6")

        .from(".floating-card", {
            y: 25,
            opacity: 0,
            stagger: 0.15
        }, "-=0.4");

    /* ==========================
       FLOATING EFFECT
    ========================== */

    gsap.to(".floating-card", {
        y: -12,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.2
    });

    /* ==========================
       HERO IMAGE FLOAT
    ========================== */

    gsap.to(".hero-right img", {
        y: -15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

});

/* ==========================================================
   KAIDO FF STORE
   app.js - Part 2
   Counter + Scroll Reveal
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       ANIMATED COUNTERS
    ========================== */

    const counters = document.querySelectorAll(".stats h2");

    const animateCounter = (counter) => {

        const text = counter.textContent.trim();

        // Skip non-numeric values like "24/7"
        if (!/^\d+\+?$/.test(text)) return;

        const target = parseInt(text.replace("+", ""), 10);

        let current = 0;

        const duration = 1800;
        const stepTime = 16;
        const increment = Math.max(1, Math.ceil(target / (duration / stepTime)));

        const timer = setInterval(() => {

            current += increment;

            if (current >= target) {

                current = target;

                clearInterval(timer);

            }

            counter.textContent = current + "+";

        }, stepTime);

    };

    const observer = new IntersectionObserver((entries, obs) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            animateCounter(entry.target);

            obs.unobserve(entry.target);

        });

    }, {
        threshold: 0.5
    });

    counters.forEach(counter => observer.observe(counter));

    /* ==========================
       SCROLL REVEAL
    ========================== */

    const sections = document.querySelectorAll(
        ".product-card, .category-card, .feature-card, .testimonial-card, .faq details"
    );

    const reveal = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            entry.target.classList.add("show");

            reveal.unobserve(entry.target);

        });

    }, {
        threshold: 0.15
    });

    sections.forEach(section => {

        section.classList.add("fade-up");

        reveal.observe(section);

    });

});

/* ==========================================================
   KAIDO FF STORE
   app.js - Part 3
   Final Interactions
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       BUTTON RIPPLE EFFECT
    ========================== */

    const buttons = document.querySelectorAll(
        ".primary-btn, .secondary-btn, .buy-btn, .shop-btn"
    );

    buttons.forEach(button => {

        button.addEventListener("mouseenter", () => {

            button.style.transition = "0.35s";

        });

    });

    /* ==========================
       PRODUCT CARD TILT
    ========================== */

    const cards = document.querySelectorAll(".product-card");

    cards.forEach(card => {

        card.addEventListener("mousemove", (e) => {

            const rect = card.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const rotateY = ((x / rect.width) - 0.5) * 10;
            const rotateX = ((y / rect.height) - 0.5) * -10;

            card.style.transform =
                `perspective(1000px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-10px)`;

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "";

        });

    });

    /* ==========================
       PAGE LOADED
    ========================== */

    console.log("🚀 KAIDO FF STORE Loaded Successfully!");

});
