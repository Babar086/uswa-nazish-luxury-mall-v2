/*=========================================
 Babar TEC Framework V2 Premium
 Uswa Nazish Luxury Shopping Mall
=========================================*/

//========== Loader ==========//

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 1200);
});

//========== Mobile Menu ==========//

const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-menu");

if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
}

//========== Sticky Navbar ==========//

window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");

    if (window.scrollY > 60) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});

//========== Search Products ==========//

const searchInput = document.querySelector(".search-box input");
const products = document.querySelectorAll(".product-card");

if (searchInput) {

    searchInput.addEventListener("keyup", () => {

        const value = searchInput.value.toLowerCase();

        products.forEach(product => {

            const text = product.innerText.toLowerCase();

            product.style.display =
                text.includes(value) ? "block" : "none";

        });

    });

}

//========== Shopping Cart ==========//

let cart = 0;

const cartNumber = document.querySelector(".cart span");
const cartButtons = document.querySelectorAll(".product-card button");

cartButtons.forEach(button => {

    button.addEventListener("click", () => {

        cart++;

        if (cartNumber) {
            cartNumber.innerHTML = cart;
        }

        button.innerHTML = "Added ✓";

        setTimeout(() => {
            button.innerHTML = "Add To Cart";
        }, 1200);

    });

});

//========== Contact Form ==========//

const contactForm = document.querySelector(".contact form");

if (contactForm) {

    contactForm.addEventListener("submit", e => {

        e.preventDefault();

        alert("Thank you! Your message has been sent successfully.");

        contactForm.reset();

    });

}

//========== Newsletter ==========//

const subscribeBtn = document.querySelector(".newsletter button");

if (subscribeBtn) {

    subscribeBtn.addEventListener("click", () => {

        const email =
            document.querySelector(".newsletter input");

        if (email.value.trim() === "") {

            alert("Please enter your email.");

        } else {

            alert("Subscription Successful!");

            email.value = "";

        }

    });

}

//========== Back To Top ==========//

const topBtn = document.querySelector(".top-btn");

window.addEventListener("scroll", () => {

    if (topBtn) {

        topBtn.style.display =
            window.scrollY > 300 ? "flex" : "none";

    }

});

if (topBtn) {

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

//========== WhatsApp Button ==========//

const whatsapp = document.querySelector(".whatsapp");

if (whatsapp) {

    whatsapp.href = "https://wa.me/923157540218";

}

//========== Scroll Animation ==========//

const cards = document.querySelectorAll(
".category-card,.product-card,.review"
);

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

});

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = ".6s ease";

    observer.observe(card);

});

//========== Console Message ==========//

console.log("Uswa Nazish Luxury Shopping Mall Loaded Successfully.");
