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
    const messageDiv = document.getElementById('last-visit-message');
    if (!messageDiv) return;

    const lastVisit = localStorage.getItem('lastVisit');
    const now = Date.now();
    let message = '';

    if (lastVisit) {
        const lastTime = Number(lastVisit);
        const diffTime = now - lastTime;
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        if (diffTime < 1000 * 60 * 60 * 24) {
            message = 'Back so soon! Awesome!';
        } else if (diffDays === 1) {
            message = 'You last visited 1 day ago.';
        } else {
            message = `You last visited ${diffDays} days ago.`;
        }
    } else {
        message = 'Welcome! Let us know if you have any questions.';
    }

    messageDiv.textContent = message;
    localStorage.setItem('lastVisit', now);
}

document.addEventListener('DOMContentLoaded', showLastVisitMessage);