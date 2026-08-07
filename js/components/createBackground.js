export function createBackground() {

    const background = document.createElement("div");
    background.id = "background-system";

    background.innerHTML = `
        <div class="paper-layer"></div>
        <div class="texture-layer"></div>
        <div class="grid-layer"></div>
        <canvas id="geometry-canvas"></canvas>
    `;

    document.body.prepend(background);
}