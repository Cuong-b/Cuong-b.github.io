import {state} from "./state.js"
import {renderPage} from "./render.js"
import { createNavbar } from '/js/components/createNavbar.js';
import { createFooter } from '/js/components/createFooter.js';
// import "./theme.js"

createNavbar();

renderPage();
createFooter();