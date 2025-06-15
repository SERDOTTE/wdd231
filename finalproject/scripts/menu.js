const currentYear = new Date().getFullYear();
document.getElementById("copyrightYear").textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = lastModified;


document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav__menu');

    // Creates the X button dynamically
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '&times;';
    closeBtn.setAttribute('aria-label', 'Close menu');
    closeBtn.classList.add('close-menu');
    closeBtn.style.fontSize = '2rem';
    closeBtn.style.background = 'none';
    closeBtn.style.border = 'none';
    closeBtn.style.color = '#fff';
    closeBtn.style.cursor = 'pointer';
    closeBtn.style.alignSelf = 'flex-end';
    closeBtn.style.marginBottom = '10px';

    // Show the menu when clicking the hamburger
    hamburger.addEventListener('click', () => {
        navMenu.classList.add('active');
        if (!navMenu.contains(closeBtn)) {
            navMenu.prepend(closeBtn);
        }
    });

    // Hide the menu when clicking the X
    closeBtn.addEventListener('click', () => {
        navMenu.classList.remove('active');
        if (navMenu.contains(closeBtn)) {
            navMenu.removeChild(closeBtn);
        }
    });

    // Ensure the menu and X disappear when resizing to larger screens
    window.addEventListener('resize', () => {
        if (window.innerWidth > 700) {
            navMenu.classList.remove('active');
            if (navMenu.contains(closeBtn)) {
                navMenu.removeChild(closeBtn);
            }
        }
    });
});