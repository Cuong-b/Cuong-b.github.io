import { createButton } from "./createButton"
import { state } from "../state"
import { render } from "../render";

export function createFilterButton(filter){
    const onClick = () => {
        if(filter.active){
            state.selectedCategory = "All"
            filter.active = false;
            render();
        }
        else {
        state.selectedCategory = filter.label;
        filter.active = true;
        render();
        }
    };
    const button = createButton(filter.label, onClick)
    return button;
}