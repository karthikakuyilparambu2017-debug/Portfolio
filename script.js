/* =========================================================
   KARTHIKA PORTFOLIO JAVASCRIPT
========================================================= */


/* =========================================================
   DARK / LIGHT MODE
========================================================= */

const toggleBtn = document.getElementById("toggle");

// Load saved theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
}


// Theme toggle
if (toggleBtn) {

    toggleBtn.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {

            localStorage.setItem("theme", "dark");

        } else {

            localStorage.setItem("theme", "light");

        }

    });

}


/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", function () {

        navMenu.classList.toggle("active");

        if (navMenu.classList.contains("active")) {

            menuBtn.innerHTML = "✕";
            menuBtn.setAttribute(
                "aria-label",
                "Close navigation"
            );

        } else {

            menuBtn.innerHTML = "☰";
            menuBtn.setAttribute(
                "aria-label",
                "Open navigation"
            );

        }

    });


    // Close menu after clicking a link

    const navLinks = navMenu.querySelectorAll("a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navMenu.classList.remove("active");

            menuBtn.innerHTML = "☰";

        });

    });

}


/* =========================================================
   CONTACT FORM
========================================================= */

const form = document.getElementById("form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const name =
            document
                .getElementById("name")
                .value
                .trim();

        const email =
            document
                .getElementById("email")
                .value
                .trim();

        const message =
            document
                .getElementById("message")
                .value
                .trim();

        const output =
            document.getElementById("s");


        /* =========================
           VALIDATION
        ========================= */

        if (!name && !email && !message) {

            output.innerHTML =
                "Please enter your name, email and message.";

            output.style.color = "red";

            return;
        }


        if (!name) {

            output.innerHTML =
                "Please enter your name.";

            output.style.color = "red";

            return;
        }


        if (!email) {

            output.innerHTML =
                "Please enter your email.";

            output.style.color = "red";

            return;
        }


        if (!message) {

            output.innerHTML =
                "Please enter your message.";

            output.style.color = "red";

            return;
        }


        /* =========================
           EMAIL VALIDATION
        ========================= */

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            output.innerHTML =
                "Please enter a valid email.";

            output.style.color = "red";

            return;
        }


        /* =========================
           SUCCESS
        ========================= */

        output.innerHTML =
            "Message sent successfully ✔";

        output.style.color =
            "#00c853";

        form.reset();

    });

}