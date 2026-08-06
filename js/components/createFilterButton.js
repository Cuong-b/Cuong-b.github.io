import { createButton } from "./createButton.js"
import { state } from "../state.js"
import { renderPage } from "../render.js";

export function createFilterButton(category){
    const button = createButton(category, () => {
        state.selectedCategory = category;
        renderPage();
    })
    return button;
}