const projects = [

{
name:"SolarOpt",
category:"Energy"
},

{
name:"Art du Trait",
category:"Geometry"
},

{
name:"Visualization",
category:"Scientific Computing"
}

];

const section =
document.querySelector("#projects");

projects.forEach(project=>{

const card =
document.createElement("article");

card.classList.add("project-card");

card.innerHTML=`

<h3>${project.name}</h3>

<p>${project.category}</p>

`;

section.appendChild(card);

});