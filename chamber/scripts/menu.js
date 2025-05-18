const hamburger = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav__menu');
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});