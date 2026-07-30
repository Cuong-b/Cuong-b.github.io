import { createButton } from "./createButton.js"
import { state } from "../state.js"
import { render } from "../render.js";

export function createFilterButton(category){
    const button = createButton(category, () => {
        state.selectedCategory = category;
        render();
    })
    return button;
}