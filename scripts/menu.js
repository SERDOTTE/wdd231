document.addEventListener("DOMContentLoaded", () => {
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const navMenu = document.querySelector(".nav__menu");

    hamburgerMenu.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
});