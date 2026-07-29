import {projects} from '../data/projects.js';
import {renderProjects} from '../js/renderProjects.js';

const container = document.querySelector('#featured-projects');

renderProjects(projects.filter(p => p.featured), container);