import {projects} from '../data/projects.js';
import {state} from '../js/state.js';
import {renderProjects} from '../js/renderProjects.js';
import { renderFilters } from './renderFilters.js';
import { projectFilters } from '../data/projectFilters.js';

export function render() {
    const featuredContainer = document.querySelector('#featured-projects');
    if (featuredContainer) {
        renderProjects(projects.filter(p => p.featured), featuredContainer);
    }

    const visibleProjects = state.selectedCategory === 'All' ? projects : projects.filter(p => p.categories.includes(state.selectedCategory));
    const projectsContainer = document.querySelector('#all-projects');
    if (projectsContainer) {
        projectsContainer.replaceChildren(); // Clear existing content
        renderProjects(visibleProjects, projectsContainer);
    }

    const filtersContainer = document.querySelector('.filters-container');
    if (filtersContainer){
        filtersContainer.replaceChildren(); //Clear existing content
        renderFilters(projectFilters, filtersContainer);
    }

}