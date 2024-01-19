// selezionare elementi HTML
const teamContainer = document.getElementById("team-container");

// dati di team members
const teamMembers = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        picture: "wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        picture: "angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        picture: "walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        picture: "angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        picture: "scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        picture: "barbara-ramos-graphic-designer.jpg"
    }
];

// creo le card
let teamMembersCards = "";

for (member of teamMembers) {
    const {name, role, picture} = member;
    teamMembersCards += `
    <div class="team-card">
        <div class="card-img">
            <img src="assets/imgs/${picture}" alt="${name}">
        </div>
        <div class="card-text">
                <h3>${name}</h3>
                <p>${role}</p>
        </div>
    </div>`;
    console.log(teamMembersCards);
}

// inserisco le card in pagina
teamContainer.innerHTML = teamMembersCards;