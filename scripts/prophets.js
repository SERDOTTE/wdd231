const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets); // temporary testing of data response
    displayProphets(data.prophets); // note that you reference the prophets array of the JSON data object, not just the object
  }
  
  getProphetData();

  const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        // Create section element for the card
        const card = document.createElement('section');
        // Create h2 element for the full name
        const fullName = document.createElement('h2');
        // Create img element for the portrait
        const portrait = document.createElement('img');

        // Create p elements for birth date and place
        const dateOfBirth = document.createElement('p');
        const placeOfBirth = document.createElement('p');

        // Populate the heading with the prophet's full name
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        // Populate the birth date and place
        dateOfBirth.textContent = `Date of Birth: ${prophet.birthdate}`;
        placeOfBirth.textContent = `Place of Birth: ${prophet.birthplace}`;

        // Build the image element with required attributes
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname} - ${prophet.order} Latter-day Prophet`);        
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        // Append the heading, birth date, birth place, and image to the card
        card.appendChild(fullName);
        card.appendChild(dateOfBirth);
        card.appendChild(placeOfBirth);
        card.appendChild(portrait);

        // Add the card to the cards div
        cards.appendChild(card);
    });
}