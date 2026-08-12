export function createTechnologiesContainer(project) {
    const container = document.createElement('div');
    container.classList.add('technologies-container');
    const title = document.createElement('h4');
    if (project.technologies.length){
        title.textContent = 'Technologies Used:';
    container.appendChild(title);
    project.technologies.forEach(tech => {
        const badge = createTechnologyBadge(tech);
        container.appendChild(badge);
    });
    };
    return container;
}

function createTechnologyBadge(technology) {
    const badge = document.createElement('span');
    badge.classList.add('technology-badge');
    badge.textContent = technology;
    return badge;
}