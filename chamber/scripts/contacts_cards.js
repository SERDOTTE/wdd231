const url = 'data/contacts.json'; // Caminho local para o arquivo JSON

async function getContactsData() {
    const response = await fetch(url);
    const data = await response.json();
    displayContacts(data);
}

getContactsData();

const cards = document.getElementById('contacts__card');

const displayContacts = (contacts) => {
    contacts.forEach((contact) => {
        // Cria o card principal
        const card = document.createElement('section');
        card.classList.add('contact-card');

        // Nome acima
        const name = document.createElement('h2');
        name.textContent = contact.name;
        card.appendChild(name);

        // Tag line abaixo do nome
        const tagline = document.createElement('p');
        tagline.classList.add('tagline');
        tagline.textContent = contact.tag_line;
        card.appendChild(tagline);

        // Container para as duas colunas
        const columns = document.createElement('div');
        columns.classList.add('contact-columns');

        // Coluna da esquerda: imagem
        const leftCol = document.createElement('div');
        leftCol.classList.add('contact-left');
        const img = document.createElement('img');
        img.src = `images/${contact.image}`;
        img.alt = `Logo of ${contact.name}`;
        img.loading = 'lazy';
        img.width = 100;
        leftCol.appendChild(img);

        // Coluna da direita: email, phone, website
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

        // Junta as colunas
        columns.appendChild(leftCol);
        columns.appendChild(rightCol);

        // Adiciona as colunas ao card
        card.appendChild(columns);

        // Adiciona o card ao container principal
        cards.appendChild(card);
    });
};