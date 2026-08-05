import { links } from '/data/pageLinks.js';

export function createNavbar() {
    const header = document.querySelector('header');
    if (header) {
        const navbar = document.createElement('nav');
        navbar.classList.add('navbar', 'container');
        header.appendChild(navbar);
        const pageId = header.dataset.siteId;
        generateNavbarContent(navbar, pageId);
    }
    else {
        console.error('Header element not found');
    }
}

function generateNavbarContent(navbar, pageId) {
    navbar.appendChild(generateDrawingTitle(pageId));
    navbar.appendChild(generateNavLinks());
    navbar.appendChild(generateThemeToggleButton());
}

function generateDrawingTitle(pageId) {
    const drawingTitle = document.createElement('div');
    drawingTitle.classList.add('drawing-title');

    const drawingName = document.createElement('span');
    drawingName.classList.add('drawing-name');
    drawingName.textContent = 'Cuong Bui';

    const drawingNumber = document.createElement('span');
    drawingNumber.classList.add('drawing-number');
    drawingNumber.textContent = pageId;

    drawingTitle.appendChild(drawingName);
    drawingTitle.appendChild(drawingNumber);
    return drawingTitle;
}

function generateNavLinks() {
    const navLinks = document.createElement('div');
    navLinks.classList.add('nav-links');

    links.forEach(linkInfo => {
        const link = document.createElement('a');
        link.href = linkInfo.href;
        link.textContent = linkInfo.text;
        navLinks.appendChild(link);
    });
    return navLinks;
}

function generateThemeToggleButton() {
    const themeToggleButton = document.createElement('button');
    themeToggleButton.id = 'theme-toggle';
    themeToggleButton.classList.add('theme-button');
    themeToggleButton.textContent = '☾';
    return themeToggleButton;
}