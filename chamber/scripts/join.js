document.addEventListener("DOMContentLoaded", function() {
    // Create the popup overlay
    const popupOverlay = document.createElement('div');
    popupOverlay.className = 'popup-overlay';
    popupOverlay.innerHTML = `
        <div class="popup-content">
            <button class="popup-close" aria-label="Close">&times;</button>
            <div id="popup-text"></div>
        </div>
    `;
    document.body.appendChild(popupOverlay);

    const popupText = popupOverlay.querySelector('#popup-text');
    const closeBtn = popupOverlay.querySelector('.popup-close');

    // Close the popup when clicking the X or outside the content
    closeBtn.onclick = () => popupOverlay.classList.remove('active');
    popupOverlay.onclick = (e) => {
        if (e.target === popupOverlay) popupOverlay.classList.remove('active');
    };

    // Select all "Learn More" buttons
    document.querySelectorAll('.membership__levels li button').forEach((btn) => {
        btn.addEventListener('click', function() {
            // Look for the .levels__details div inside the same li
            const details = btn.parentElement.querySelector('.levels__details');
            if (details) {
                popupText.innerHTML = details.innerHTML;
            } else {
                // If there is no .levels__details, get the sibling <p>
                const desc = btn.parentElement.querySelector('p');
                popupText.textContent = desc ? desc.textContent : '';
            }
            popupOverlay.classList.add('active');
        });
    });
});