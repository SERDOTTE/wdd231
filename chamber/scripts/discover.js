import { places } from '../data/places.mjs';

const showHere = document.getElementById('allplaces');

function displayPlaces(places) {
  places.filter(place => place && place.name).forEach(place => {
    const card = document.createElement('div');
    card.className = 'place-card';

    const titleDiv = document.createElement('div');
    titleDiv.className = 'place-card-title';
    const h2 = document.createElement('h2');
    h2.textContent = place.name;
    titleDiv.appendChild(h2);

    const contentDiv = document.createElement('div');
    contentDiv.className = 'place-card-content';

    const img = document.createElement('img');
    img.src = `images/${place.photo_link}`;
    img.alt = place.name;

    const descDiv = document.createElement('div');
    descDiv.className = 'place-card-description';
    const p = document.createElement('p');
    p.textContent = place.description;
    const address = document.createElement('address');
    address.textContent = place.address;
    descDiv.appendChild(p);
    descDiv.appendChild(address);

    contentDiv.appendChild(img);
    contentDiv.appendChild(descDiv);

    const btn = document.createElement('button');
    btn.className = 'learn-more-btn';
    btn.textContent = 'Learn More';

    card.appendChild(titleDiv);
    card.appendChild(contentDiv);
    card.appendChild(btn);

    showHere.appendChild(card);
  });
}

if (showHere) {
  displayPlaces(places);
}

function showLastVisitMessage() {
    const messageDiv = document.createElement('div');
    messageDiv.id = 'last-visit-message';
    messageDiv.style.margin = '16px 0';
    messageDiv.style.padding = '12px';
    messageDiv.style.background = '#e6e2f0';
    messageDiv.style.borderRadius = '8px';
    messageDiv.style.textAlign = 'center';

    const lastVisit = localStorage.getItem('lastVisit');
    const now = new Date();
    let message = '';

    if (lastVisit) {
        const lastDate = new Date(lastVisit);
        const diffTime = Math.abs(now - lastDate);
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        if (diffDays === 0) {
            message = 'Welcome back! You last visited today.';
        } else if (diffDays === 1) {
            message = 'Welcome back! It\'s been 1 day since your last visit.';
        } else {
            message = `Welcome back! It's been ${diffDays} days since your last visit.`;
        }
    } else {
        message = 'Welcome! This is your first visit.';
    }

    messageDiv.textContent = message;
    // Exibe a mensagem no topo do main
    const main = document.querySelector('main');
    if (main) main.prepend(messageDiv);

    // Atualiza o localStorage com a data atual
    localStorage.setItem('lastVisit', now.toISOString());
}

document.addEventListener('DOMContentLoaded', showLastVisitMessage);