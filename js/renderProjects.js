import { createTechnologiesContainer } from './components/createTechnologyBadge.js';
import { createLink } from './components/createLink.js';
import { createProjectCard } from './components/createProjectCard.js';

export function renderProjects(projects, container) {
    console.log("Rendering projects:", projects);
    console.log("Container:", container);
    const fragment = document.createDocumentFragment();
    projects.forEach(project => {
        fragment.appendChild(createProjectCard(project));
    });
    container.appendChild(fragment);
}
