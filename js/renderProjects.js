const container =
document.querySelector(".projects-container");

projects.forEach(project=>{

const card =
document.createElement("article");

card.classList.add("project-card");

card.innerHTML=`

<h3>${project.name}</h3>

<p>${project.subtitle}</p>

`;

container.appendChild(card);

});