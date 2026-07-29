export function renderProjects(projects, container) {
    console.log("Rendering projects:", projects);
    console.log("Container:", container);
    projects.forEach(project => {
        const card = createProjectCard(project);
        container.appendChild(card);
    });
}

function createProjectCard(project) {
    const card = document.createElement('article');
    card.classList.add('project-card');

    const title = document.createElement('h3');
    title.textContent = project.name;

    const subtitle = document.createElement('p');
    subtitle.textContent = project.subtitle;

    // const description = document.createElement('p');
    // description.textContent = project.description;
    card.appendChild(title);
    card.appendChild(subtitle);
    // card.appendChild(description);
    return card;
}