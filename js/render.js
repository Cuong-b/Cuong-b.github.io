import {projects} from '../data/projects.js';
import {state} from '../js/state.js';
import {renderProjects} from '../js/renderProjects.js';

export function render() {
    const visibleProjects = state.selectedCategory === 'All' ? projects : projects.filter(p => p.categories.includes(state.selectedCategory));
    const projectsContainer = document.querySelector('#all-projects');
    if (projectsContainer) {
        projectsContainer.replaceChildren(); // Clear existing content
        renderProjects(visibleProjects, projectsContainer);
    }
}