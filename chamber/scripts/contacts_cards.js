const url = 'data/contacts.json'; // Local path to the JSON file

async function getContactsData() {
    const response = await fetch(url);
    const data = await response.json();
    displayContacts(data);
}

getContactsData();

const cards = document.getElementById('contacts__card');

const displayContacts = (contacts) => {
    contacts.forEach((contact) => {
        // Create the main card
        const card = document.createElement('section');
        card.classList.add('contact-card');

        // Name above
        const name = document.createElement('h2');
        name.textContent = contact.name;
        card.appendChild(name);

        // Tag line below the name
        const tagline = document.createElement('p');
        tagline.classList.add('tagline');
        tagline.textContent = contact.tag_line;
        card.appendChild(tagline);

        // Container for the two columns
        const columns = document.createElement('div');
        columns.classList.add('contact-columns');

        // Left column: image
        const leftCol = document.createElement('div');
        leftCol.classList.add('contact-left');
        const img = document.createElement('img');
        img.src = `images/${contact.image}`;
        img.alt = `Logo of ${contact.name}`;
        img.loading = 'lazy';
        img.width = 100;
        leftCol.appendChild(img);

        // Right column: email, phone, website
        const rightCol = document.createElement('div');
        rightCol.classList.add('contact-right');

        const email = document.createElement('p');
        email.innerHTML = `<span class="label">Email:</span> ${contact.email}`;
        rightCol.appendChild(email);

        const phone = document.createElement('p');
        phone.innerHTML = `<span class="label">Phone:</span> ${contact.phone}`;
        rightCol.appendChild(phone);

        const website = document.createElement('p');
        website.innerHTML = `<span class="label">URL:</span> <a href="${contact.website}" target="_blank">${contact.website}</a>`;
        rightCol.appendChild(website);

        // Join the columns
        columns.appendChild(leftCol);
        columns.appendChild(rightCol);

        // Add the columns to the card
        card.appendChild(columns);

        // Add the card to the main container
        cards.appendChild(card);
    });
};