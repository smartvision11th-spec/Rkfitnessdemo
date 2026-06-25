/* =====================================================
   RK FITNESS GYM
   PREMIUM WEBSITE SCRIPT
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       LOADER
    ========================================== */

    window.addEventListener("load", () => {

        setTimeout(() => {

            document.body.classList.add("loaded");

            const loader = document.getElementById("loader");

            if (loader) {
                loader.style.opacity = "0";
                loader.style.visibility = "hidden";
            }

        }, 3000);

    });

    /* ==========================================
       MOBILE MENU
    ========================================== */

    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (menuBtn && navLinks) {

        menuBtn.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });

        document.querySelectorAll(".nav-links a").forEach(link => {

            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
            });

        });
    }

    /* ==========================================
       STICKY NAVBAR
    ========================================== */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (!navbar) return;

        if (window.scrollY > 80) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

    });

    /* ==========================================
       SCROLL REVEAL
    ========================================== */

    const revealElements = document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                }

            });

        },
        {
            threshold: 0.15
        }
    );

    revealElements.forEach(el => revealObserver.observe(el));

    /* ==========================================
       COUNTERS
    ========================================== */

    const counters = document.querySelectorAll(".counter");

    const counterObserver = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;

                const counter = entry.target;
                const target = +counter.dataset.target;

                let current = 0;

                const increment = target / 100;

                const updateCounter = () => {

                    current += increment;

                    if (current < target) {

                        counter.innerText = Math.floor(current);

                        requestAnimationFrame(updateCounter);

                    } else {

                        counter.innerText = target + "+";
                    }
                };

                updateCounter();

                counterObserver.unobserve(counter);

            });

        },
        {
            threshold: 0.5
        }
    );

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });

    /* ==========================================
       TESTIMONIAL SLIDER
    ========================================== */

    const testimonials = document.querySelectorAll(".testimonial-card");

    let testimonialIndex = 0;

    function showTestimonial(index) {

        testimonials.forEach(card => {
            card.classList.remove("active");
        });

        if (testimonials[index]) {
            testimonials[index].classList.add("active");
        }
    }

    if (testimonials.length > 0) {

        showTestimonial(0);

        setInterval(() => {

            testimonialIndex++;

            if (testimonialIndex >= testimonials.length) {
                testimonialIndex = 0;
            }

            showTestimonial(testimonialIndex);

        }, 4000);
    }

    /* ==========================================
       BMI CALCULATOR
    ========================================== */

    const bmiBtn = document.getElementById("calculateBMI");

    if (bmiBtn) {

        bmiBtn.addEventListener("click", () => {

            const height =
                parseFloat(document.getElementById("height").value);

            const weight =
                parseFloat(document.getElementById("weight").value);

            const result =
                document.getElementById("bmiResult");

            if (!height || !weight) {

                result.innerHTML =
                    "Please enter height and weight.";

                return;
            }

            const bmi =
                weight / ((height / 100) * (height / 100));

            let category = "";

            if (bmi < 18.5) {
                category = "Underweight";
            } else if (bmi < 25) {
                category = "Normal";
            } else if (bmi < 30) {
                category = "Overweight";
            } else {
                category = "Obese";
            }

            result.innerHTML =
                `BMI: <strong>${bmi.toFixed(1)}</strong> (${category})`;

        });

    }

    /* ==========================================
       PRICING AUTO FILL
    ========================================== */

    const pricingButtons =
        document.querySelectorAll(".pricing-btn");

    pricingButtons.forEach(button => {

        button.addEventListener("click", () => {

            const plan =
                button.getAttribute("data-plan");

            const planField =
                document.getElementById("plan");

            if (planField) {

                planField.value = plan;

                const bookingSection =
                    document.getElementById("booking");

                if (bookingSection) {

                    bookingSection.scrollIntoView({
                        behavior: "smooth"
                    });

                }
            }

        });

    });

    /* ==========================================
       GALLERY LIGHTBOX
    ========================================== */

    const galleryImages =
        document.querySelectorAll(".gallery-item img");

    const lightbox =
        document.getElementById("lightbox");

    const lightboxImg =
        document.getElementById("lightboxImg");

    const closeLightbox =
        document.getElementById("closeLightbox");

    galleryImages.forEach(image => {

        image.addEventListener("click", () => {

            if (!lightbox || !lightboxImg) return;

            lightbox.classList.add("active");

            lightboxImg.src = image.src;

        });

    });

    if (closeLightbox) {

        closeLightbox.addEventListener("click", () => {

            lightbox.classList.remove("active");

        });

    }

    if (lightbox) {

        lightbox.addEventListener("click", e => {

            if (e.target === lightbox) {

                lightbox.classList.remove("active");
            }

        });

    }

    /* ==========================================
       WHATSAPP FORM
    ========================================== */

    const bookingForm =
        document.getElementById("gymBookingForm");

    if (bookingForm) {

        bookingForm.addEventListener("submit", e => {

            e.preventDefault();

            const name =
                document.getElementById("name").value;

            const mobile =
                document.getElementById("mobile").value;

            const gender =
                document.getElementById("gender").value;

            const age =
                document.getElementById("age").value;

            const goal =
                document.getElementById("goal").value;

            const service =
                document.getElementById("service").value;

            const plan =
                document.getElementById("plan").value;

            const joiningDate =
                document.getElementById("joiningDate").value;

            const address =
                document.getElementById("address").value;

            const message =
                document.getElementById("message").value;

            const whatsappMessage =
`🏋️ RK FITNESS GYM ENQUIRY

👤 Name: ${name}
📞 Mobile: ${mobile}
🚻 Gender: ${gender}
🎂 Age: ${age}
🎯 Goal: ${goal}
💪 Service: ${service}
💳 Plan: ${plan}
📅 Joining Date: ${joiningDate}
🏠 Address: ${address}

📝 Message:
${message}`;

            const encoded =
                encodeURIComponent(whatsappMessage);

            const whatsappURL =
                `https://wa.me/919889781023?text=${encoded}`;

            window.open(
                whatsappURL,
                "_blank"
            );

        });

    }

    /* ==========================================
       BACK TO TOP
    ========================================== */

    const backToTop =
        document.getElementById("backToTop");

    window.addEventListener("scroll", () => {

        if (!backToTop) return;

        if (window.scrollY > 500) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");
        }

    });

    if (backToTop) {

        backToTop.addEventListener("click", () => {

            window.scrollTo({

                top: 0,
                behavior: "smooth"

            });

        });

    }

    /* ==========================================
       ACTIVE NAVIGATION
    ========================================== */

    const sections =
        document.querySelectorAll("section[id]");

    const navItems =
        document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 150;

            const sectionHeight =
                section.offsetHeight;

            if (
                pageYOffset >= sectionTop &&
                pageYOffset <
                sectionTop + sectionHeight
            ) {
                current = section.getAttribute("id");
            }

        });

        navItems.forEach(link => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                `#${current}`
            ) {
                link.classList.add("active");
            }

        });

    });

    /* ==========================================
       PARTICLES
    ========================================== */

    const particleContainer =
        document.getElementById(
            "particles-container"
        );

    if (particleContainer) {

        for (let i = 0; i < 60; i++) {

            const particle =
                document.createElement("span");

            particle.classList.add("particle");

            particle.style.left =
                Math.random() * 100 + "%";

            particle.style.width =
                Math.random() * 4 + 2 + "px";

            particle.style.height =
                particle.style.width;

            particle.style.animationDuration =
                Math.random() * 15 + 10 + "s";

            particle.style.animationDelay =
                Math.random() * 10 + "s";

            particleContainer.appendChild(particle);
        }
    }

    /* ==========================================
       PARALLAX HERO
    ========================================== */

    const heroImage =
        document.querySelector(".hero-bg img");

    window.addEventListener("scroll", () => {

        if (!heroImage) return;

        const scrollY = window.scrollY;

        heroImage.style.transform =
            `translateY(${scrollY * 0.2}px) scale(1.1)`;

    });

});
