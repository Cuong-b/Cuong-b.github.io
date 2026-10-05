import { projects } from "../data/projects.js";
import { state } from "../js/state.js";
import { renderProjects } from "../js/renderProjects.js";
import { renderFilters } from "./renderFilters.js";
import { projectFilters, experienceFilters } from "../data/filters.js";
import { renderProjectPage } from "./renderProjectPage.js";
import { createNavbar } from "/js/components/createNavbar.js";
import { createFooter } from "/js/components/createFooter.js";
import { animateCurrentFocus } from "./components/animateCurrentFocus.js";
import { initImageGallery } from "./components/imageGallery.js";

export function renderPage() {
  const currentFocusList = document.querySelector("#current-focus .list");
  if (currentFocusList) {
    animateCurrentFocus(currentFocusList);
  }

  const featuredContainer = document.querySelector("#featured-projects");
  if (featuredContainer) {
    renderProjects(
      projects.filter((p) => p.featured),
      featuredContainer,
    );
  }

  const visibleProjects =
    state.selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.categories.includes(state.selectedCategory));
  const projectsContainer = document.querySelector("#all-projects");
  if (projectsContainer) {
    projectsContainer.replaceChildren(); // Clear existing content
    renderProjects(
      visibleProjects.filter((p) => p.display && !p.experience),
      projectsContainer,
    );
  }

  const visibleExperiences =
    state.selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.categories.includes(state.selectedCategory));
  const experiencesContainer = document.querySelector("#all-experiences");
  if (experiencesContainer) {
    experiencesContainer.replaceChildren(); // Clear existing content
    renderProjects(
      visibleExperiences.filter((p) => p.display && p.experience),
      experiencesContainer,
    );
  }

  const projectfiltersContainer = document.querySelector("#project-filters");
  if (projectfiltersContainer) {
    projectfiltersContainer.replaceChildren(); //Clear existing content
    renderFilters(projectFilters, projectfiltersContainer);
  }

  const experiencefiltersContainer = document.querySelector("#experience-filters");
  if (experiencefiltersContainer) {
    experiencefiltersContainer.replaceChildren(); //Clear existing content
    renderFilters(experienceFilters, experiencefiltersContainer);
  }

  const ProjectPageContainer = document.querySelector(".project-content");
  console.log("ProjectPageContainer:", ProjectPageContainer);
  if (ProjectPageContainer) {
    const projectId = ProjectPageContainer.dataset.projectId;
    const project = projects.find((p) => p.id === projectId);
    if (project) {
      renderProjectPage();
    }
  }

  document.querySelectorAll(".image-gallery-container").forEach((container) => {
    initImageGallery(container);
  });
}
