import {projects} from '../data/projects.js';
import {renderProjects} from '../js/renderProjects.js';

const container = document.querySelector('.projects-container');

renderProjects(projects, container);