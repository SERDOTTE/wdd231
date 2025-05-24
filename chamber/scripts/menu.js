const currentYear = new Date().getFullYear();
document.getElementById("copyrightYear").textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = lastModified;


document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav__menu');

    // Cria o botão X dinamicamente
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

    // Mostra o menu ao clicar no hamburguer
    hamburger.addEventListener('click', () => {
        navMenu.classList.add('active');
        if (!navMenu.contains(closeBtn)) {
            navMenu.prepend(closeBtn);
        }
    });

    // Esconde o menu ao clicar no X
    closeBtn.addEventListener('click', () => {
        navMenu.classList.remove('active');
        if (navMenu.contains(closeBtn)) {
            navMenu.removeChild(closeBtn);
        }
    });

    // Garante que o menu e o X sumam ao redimensionar para telas grandes
    window.addEventListener('resize', () => {
        if (window.innerWidth > 700) {
            navMenu.classList.remove('active');
            if (navMenu.contains(closeBtn)) {
                navMenu.removeChild(closeBtn);
            }
        }
    });
});