import {projects} from '../data/projects.js';
import {renderProjects} from '../js/renderProjects.js';

const featuredContainer = document.querySelector('#featured-projects');
if (featuredContainer) {
    renderProjects(projects.filter(p => p.featured), featuredContainer);
}

const allProjectsContainer = document.querySelector('#all-projects');
if (allProjectsContainer) {
    renderProjects(projects, allProjectsContainer);
}