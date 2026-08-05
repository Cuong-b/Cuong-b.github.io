import {projects} from '../data/projects.js';

export function renderProjectPage() {
    const ProjectPageContainer = document.querySelector('.project-content');
    if (ProjectPageContainer){
        const projectId = ProjectPageContainer.dataset.projectId;
        const project = projects.find(p => p.id === projectId);
        if (project) {
            const projectHeader = ProjectPageContainer.querySelector('.project-header'); /*Generate Header Section*/
            if (projectHeader) {
                projectHeader.replaceChildren(); // Clear existing content
                createProjectHeader(project, projectHeader);
            }
            const projectDetails = ProjectPageContainer.querySelector('.project-details'); /*Generate Details Section*/
            if (projectDetails) {
                projectDetails.replaceChildren(); // Clear existing content
                createProjectDetails(project, projectDetails);
            }
            const projectLinks = ProjectPageContainer.querySelector('.project-links'); /*Generate Links Section*/
            if (projectLinks) {
                projectLinks.replaceChildren(); // Clear existing content
                createProjectLinks(project, projectLinks);
            }
        }
    }
}

function createProjectHeader(project, container) {
    const title = document.createElement('h2');
    title.textContent = project.title;
    const description = document.createElement('p');
    description.textContent = project.description;
    container.appendChild(title);
    container.appendChild(description);
}

function createProjectDetails(project, container) {
    const title = document.createElement('h3');
    title.textContent = 'Technologies Used:';
    container.appendChild(title);
    const details = document.createElement('ul');
    project.technologies.forEach(tech => {
        const listItem = document.createElement('li');
        listItem.textContent = tech;
        details.appendChild(listItem);
    });
    container.appendChild(details);
}

function createProjectLinks(project, container) {
    if (project.github) {
        const githubLink = document.createElement('a');
        githubLink.classList.add('btn');
        githubLink.href = project.github;
        githubLink.textContent = 'GitHub Repository';
        container.appendChild(githubLink);
    }
    if (project.demo) {
        const demoLink = document.createElement('a');
        demoLink.classList.add('btn');
        demoLink.href = project.demo;
        demoLink.textContent = 'Live Demo';
        container.appendChild(demoLink);
    }
}