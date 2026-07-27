const projects = [

{
id: "solaropt",
name:"SolarOpt",
subtitle: "Residential Solar Optimization Tool",
category:"Energy"
},

{
id: "artdutrait",
name:"Art du Trait",
subtitle: "Computational Geometry Toolkit",
category:"Geometry"
},

{
id: "visualization",
name:"Scientific Visualization",
subtitle: "Science Visualizations I've Created!",
category:"Scientific Computing"
},

{
id: 'woodworking',
name: 'Woodworking',
subtitle: 'Woodworking Projects and Designs!',
category: 'Craft'
}

];

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