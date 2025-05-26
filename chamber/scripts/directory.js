const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const cards = document.querySelector("#cards");

gridbutton.addEventListener("click", () => {
  cards.classList.add("grid");
  cards.classList.remove("list");
});

listbutton.addEventListener("click", () => {
  cards.classList.add("list");
  cards.classList.remove("grid");
});

const url = 'data/members.json'; // Local path to JSON file
async function getMembersData() {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data);
}

getMembersData();

const displayMembers = (members) => {
    members.forEach((member) => {
        // Create the card
        const section = document.createElement('section');

        // Image/logo
        const img = document.createElement('img');
        img.setAttribute('src', `images/${member.image}`);
        img.setAttribute('alt', `Logo of ${member.name}`);
        img.setAttribute('loading', 'lazy');
        img.setAttribute('width', '120');
        section.appendChild(img);

        // Company name
        const name = document.createElement('h2');
        name.textContent = member.name;
        section.appendChild(name);

        // Address
        const address = document.createElement('p');
        address.textContent = member.address;
        section.appendChild(address);

        // Phone
        const phone = document.createElement('p');
        phone.textContent = `Phone: ${member.phone}`;
        section.appendChild(phone);

        // Website
        const website = document.createElement('a');
        website.href = member.website;
        website.textContent = member.website;
        website.target = "_blank";
        section.appendChild(website);

        // Add the card to the container
        cards.appendChild(section);
    });
};