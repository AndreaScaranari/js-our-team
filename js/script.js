// # Milestone 0
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

// # Milestone 1
for (let member of teamMembers) {
    for (let key in member) {
        console.log(member[key]);
    }
}

// # Milestone 2
const list = document.getElementById("team-list");

// let membersAttributes = "";

// for (let member of teamMembers) {
//     const {name, role, picture} = member;
//     membersAttributes += `<li>${name}, ${role}, ${picture} </li>`
// }

// list.innerHTML = membersAttributes;

// ? oppure

// let forInMembers = "";

// for (let member of teamMembers) {
//     forInMembers += `<li><ul>`
    
//     for (let key in member) {
//         forInMembers += `<li>${member[key]}</li>`
//     }
    
//     forInMembers += `</li></ul>`
//     }

// list.innerHTML = forInMembers;

// # Bonus 1
let membersAttributes = "";

for (let member of teamMembers) {
    const {name, role, picture} = member;
    membersAttributes += 
    `<li>${name}</li>
    <li>${role}</li> 
    <li><img src="assets/imgs/${picture}" alt="${name}"></li>`
}

list.innerHTML = membersAttributes;

