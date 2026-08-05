import { createTechnologiesContainer} from "./createTechnologyBadge.js";
import { createLink } from "./createLink.js";

export function createProjectCard(project) {
    const card = document.createElement('article');
    card.classList.add('project-card');

    card.appendChild(createTitleElement(project));
    card.appendChild(createSubtitleElement(project));
    card.appendChild(createTechnologiesContainer(project));
    
    if (project.page) {
        const pageLink = createLink(project.page, 'View Project');
        pageLink.target = '_self'; // Open in the same tab
        card.appendChild(pageLink);
    }

    // if (project.github) {
    //     card.appendChild(createLink(project.github, 'View on GitHub'));
    // }
    // if (project.demo) {
    //     card.appendChild(createLink(project.demo, 'View Demo'));
    // }

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
