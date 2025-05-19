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

const url = 'data/members.json'; // Caminho local para o arquivo JSON

async function getMembersData() {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data);
}

getMembersData();

const displayMembers = (members) => {
    members.forEach((member) => {
        // Cria o card
        const section = document.createElement('section');

        // Imagem/logo
        const img = document.createElement('img');
        img.setAttribute('src', `images/${member.image}`);
        img.setAttribute('alt', `Logo of ${member.name}`);
        img.setAttribute('loading', 'lazy');
        img.setAttribute('width', '120');
        section.appendChild(img);

        // Nome da empresa
        const name = document.createElement('h2');
        name.textContent = member.name;
        section.appendChild(name);

        // Endereço
        const address = document.createElement('p');
        address.textContent = member.address;
        section.appendChild(address);

        // Telefone
        const phone = document.createElement('p');
        phone.textContent = `Phone: ${member.phone}`;
        section.appendChild(phone);

        // Website
        const website = document.createElement('a');
        website.href = member.website;
        website.textContent = member.website;
        website.target = "_blank";
        section.appendChild(website);

        // Adiciona o card ao container
        cards.appendChild(section);
    });
};