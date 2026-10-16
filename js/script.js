/* =========================
   NOVA RESTAURANT
   MAIN JAVASCRIPT
========================= */


/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");
        document.body.classList.toggle("menu-open");

    });


    // Close menu when clicking a link
    const navItems = navLinks.querySelectorAll("a");

    navItems.forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");
            document.body.classList.remove("menu-open");

        });

    });

}


/* =========================
   NAVBAR SCROLL
========================= */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* =========================
   MENU FILTERS
========================= */

const filters = document.querySelectorAll(".filter");
const menuCards = document.querySelectorAll(".menu-card");

filters.forEach(filter => {

    filter.addEventListener("click", () => {

        // Remove active from all buttons
        filters.forEach(btn => {
            btn.classList.remove("active");
        });

        // Activate clicked button
        filter.classList.add("active");

        const selectedCategory = filter.dataset.filter;

        menuCards.forEach(card => {

            const cardCategory = card.dataset.category;

            if (
                selectedCategory === "all" ||
                cardCategory === selectedCategory
            ) {

                card.style.display = "block";

                setTimeout(() => {
                    card.classList.add("show");
                }, 10);

            } else {

                card.classList.remove("show");

                setTimeout(() => {
                    card.style.display = "none";
                }, 200);

            }

        });

    });

});


/* =========================
   RESERVATION FORM
========================= */

/* =========================
   RESERVATION FORM
========================= */

const reservationForm =
    document.getElementById("reservationForm");

const reservationMessage =
    document.getElementById("reservationMessage");

if (reservationForm) {

    reservationForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const date =
            document.getElementById("date").value;

        const time =
            document.getElementById("time").value;

        const people =
            document.getElementById("people").value;


        if (!date) {

            reservationMessage.textContent =
                "Veuillez sélectionner une date.";

            reservationMessage.classList.add("error");

            return;
        }


        reservationMessage.classList.remove("error");

        reservationMessage.textContent =
            `✓ Votre demande est bien enregistrée — ` +
            `${date} à ${time} pour ${people}. ` +
            `Nous vous contacterons pour confirmer votre table.`;

        reservationMessage.classList.add("success");

    });

}


/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(
    ".menu-card, .feature, .gallery-item, .about-content, .intro-content"
);

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("revealed");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


/* =========================
   SMOOTH SCROLL
========================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") return;

        const target =
            document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* =========================
   CURRENT YEAR
========================= */

const currentYear = new Date().getFullYear();

const footerYear = document.querySelector(".footer-bottom");

if (footerYear) {

    footerYear.innerHTML =
        `© ${currentYear} NOVA Restaurant — Tous droits réservés.`;

}
/* =========================
   BACK TO TOP
========================= */

const backToTop = document.getElementById("backToTop");

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