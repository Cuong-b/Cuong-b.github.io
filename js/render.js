import {projects} from '../data/projects.js';
import {state} from '../js/state.js';
import {renderProjects} from '../js/renderProjects.js';
import { renderFilters } from './renderFilters.js';
import { projectFilters } from '../data/projectFilters.js';
import { renderProjectPage } from './renderProjectPage.js';
import { createNavbar } from '/js/components/createNavbar.js';
import { createFooter } from '/js/components/createFooter.js';

export function render() {
    const headerContainer = document.querySelector('header');
    const footerContainer = document.querySelector('footer');
    if(headerContainer.children.length === 0) {
        createNavbar();
    }
    if(footerContainer.children.length === 0) {
        createFooter();
    }

    const featuredContainer = document.querySelector('#featured-projects');
    if (featuredContainer) {
        renderProjects(projects.filter(p => p.featured), featuredContainer);
    }

    const visibleProjects = state.selectedCategory === 'All' ? projects : projects.filter(p => p.categories.includes(state.selectedCategory));
    const projectsContainer = document.querySelector('#all-projects');
    if (projectsContainer) {
        projectsContainer.replaceChildren(); // Clear existing content
        renderProjects(visibleProjects.filter(p => p.display), projectsContainer);
    }

    const filtersContainer = document.querySelector('.filters-container');
    if (filtersContainer){
        filtersContainer.replaceChildren(); //Clear existing content
        renderFilters(projectFilters, filtersContainer);
    }

    const ProjectPageContainer = document.querySelector('.project-content');
    console.log("ProjectPageContainer:", ProjectPageContainer);
    if (ProjectPageContainer){
        const projectId = ProjectPageContainer.dataset.projectId;
        const project = projects.find(p => p.id === projectId);
        if (project) {
            renderProjectPage();
        }
    }

}