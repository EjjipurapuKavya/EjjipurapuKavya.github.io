// ===============================
// Typing Animation
// ===============================

const typingText = [
    "AI & ML Enthusiast",
    "Python Developer",
    "Web Developer",
    "IT Student"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.getElementById("typing");

function typeEffect() {

    const currentText = typingText[textIndex];

    if (!isDeleting) {

        typingElement.textContent =
            currentText.substring(0, charIndex++);

        if (charIndex > currentText.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1200);

            return;
        }

    }

    else {

        typingElement.textContent =
            currentText.substring(0, charIndex--);

        if (charIndex < 0) {

            isDeleting = false;

            textIndex++;

            if (textIndex >= typingText.length) {

                textIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);

}

typeEffect();


// ===============================
// Scroll Reveal Animation
// ===============================

const revealElements = document.querySelectorAll(
    "section,.project-card,.education-card,.skill"
);

function revealOnScroll() {

    revealElements.forEach((element) => {

        const windowHeight = window.innerHeight;

        const revealTop =
            element.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {

            element.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// ===============================
// Active Navigation Link
// ===============================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ===============================
// Contact Form Validation
// ===============================

const form = document.getElementById("contactForm");

const nameInput = document.getElementById("name");

const emailInput = document.getElementById("email");

const subjectInput = document.getElementById("subject");

const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");

const emailError = document.getElementById("emailError");

const subjectError = document.getElementById("subjectError");

const messageError = document.getElementById("messageError");

function validateEmail(email) {

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

}

form.addEventListener("submit", function (event) {

    event.preventDefault();

    nameError.textContent = "";

    emailError.textContent = "";

    subjectError.textContent = "";

    messageError.textContent = "";

    let valid = true;

    if (nameInput.value.trim() === "") {

        nameError.textContent = "Name cannot be empty.";

        valid = false;

    }

    if (emailInput.value.trim() === "") {

        emailError.textContent = "Email cannot be empty.";

        valid = false;

    }

    else if (!validateEmail(emailInput.value.trim())) {

        emailError.textContent =
            "Please enter a valid email.";

        valid = false;

    }

    if (subjectInput.value.trim().length < 5) {

        subjectError.textContent =
            "Subject should contain at least 5 characters.";

        valid = false;

    }

    if (messageInput.value.trim().length < 20) {

        messageError.textContent =
            "Message should contain at least 20 characters.";

        valid = false;

    }

    if (valid) {

        alert("Message Sent Successfully!");

        form.reset();

    }

});


// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({

                behavior: "smooth"

            });

    });

});