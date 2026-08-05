export function createFooter() {
    const footer = document.querySelector('footer');
    footer.classList.add('footer');
    
    const footerText = document.createElement('p');
    footerText.textContent = '© 2026 Cuong Bui. All rights reserved.';
    footer.appendChild(footerText);
}