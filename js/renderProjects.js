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
    title.textContent = project.title;

    const subtitle = document.createElement('p');
    subtitle.textContent = project.subtitle;

    // const description = document.createElement('p');
    // description.textContent = project.description;
    card.appendChild(title);
    card.appendChild(subtitle);
    // card.appendChild(description);
    return card;
}

function createTechnologyBadge(technology) {
    const badge = document.createElement('span');
    badge.classList.add('technology-badge');
    badge.textContent = technology;
    return badge;
}

function createGithubLink(githubUrl) {
    const link = document.createElement('a');
    link.href = githubUrl;
    link.textContent = 'View on GitHub';
    link.target = '_blank';
    return link;
}

function createDemoButton(demoUrl) {
    const button = document.createElement('a');
    button.href = demoUrl;
    button.textContent = 'View Demo';
    button.classList.add('demo-button');
    button.target = '_blank';
    return button;
}
