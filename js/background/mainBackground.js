import { BackgroundEngine } from "./BackgroundEngine.js";

const canvas =
    document.querySelector("#background-canvas");

if (canvas) {

    new BackgroundEngine(canvas);

}