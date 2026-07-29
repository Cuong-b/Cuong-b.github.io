import { createTechnologiesContainer } from './components/createTechnologyBadge.js';
import { createButton } from './components/createButton.js';

export function renderProjects(projects, container) {
    console.log("Rendering projects:", projects);
    console.log("Container:", container);
    const fragment = document.createDocumentFragment();
    projects.forEach(project => {
        fragment.appendChild(createProjectCard(project));
    });
    container.appendChild(fragment);
}

function createProjectCard(project) {
    const card = document.createElement('article');
    card.classList.add('project-card');

    card.appendChild(createTitleElement(project));
    card.appendChild(createSubtitleElement(project));
    card.appendChild(createTechnologiesContainer(project));

    if (project.github) {
        card.appendChild(createButton(project.github, 'View on GitHub'));
    }
    if (project.demo) {
        card.appendChild(createButton(project.demo, 'View Demo'));
    }

    return card;
}

function createTitleElement(project) {
    const titleElement = document.createElement('h3');
    titleElement.textContent = project.title;
    return titleElement;
}

function createSubtitleElement(project) {
    const subtitleElement = document.createElement('p');
    subtitleElement.textContent = project.subtitle;
    return subtitleElement;
}

