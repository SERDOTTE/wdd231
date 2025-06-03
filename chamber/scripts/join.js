document.addEventListener("DOMContentLoaded", function() {
    // Cria o overlay do popup
    const popupOverlay = document.createElement('div');
    popupOverlay.className = 'popup-overlay';
    popupOverlay.innerHTML = `
        <div class="popup-content">
            <button class="popup-close" aria-label="Close">&times;</button>
            <p id="popup-text"></p>
        </div>
    `;
    document.body.appendChild(popupOverlay);

    const popupText = popupOverlay.querySelector('#popup-text');
    const closeBtn = popupOverlay.querySelector('.popup-close');

    // Fecha o popup ao clicar no X ou fora do conteúdo
    closeBtn.onclick = () => popupOverlay.classList.remove('active');
    popupOverlay.onclick = (e) => {
        if (e.target === popupOverlay) popupOverlay.classList.remove('active');
    };

    // Seleciona todos os botões "Learn More"
    document.querySelectorAll('.membership__levels li button').forEach((btn, idx) => {
        btn.addEventListener('click', function() {
            // Pega o texto do <p> irmão
            const desc = btn.parentElement.querySelector('p').textContent;
            popupText.textContent = desc;
            popupOverlay.classList.add('active');
        });
    });
});