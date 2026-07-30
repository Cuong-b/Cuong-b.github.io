import { createFilterButton } from "./components/createFilterButton.js";
import { state } from "./state.js"

export function renderFilters(filters, container){
    const fragment = document.createDocumentFragment();
    filters.forEach(category => {
        const button = createFilterButton(category);
        const isActive = state.selectedCategory === category ? button.classList.add("activeButton"): button.classList.remove("activeButton");
        fragment.append(button)
    });
    container.append(fragment);
}