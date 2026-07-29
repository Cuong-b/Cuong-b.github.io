export function createButton(url, text) {
    const button = document.createElement('a');
    button.href = url;
    button.textContent = text;
    button.classList.add('button');
    button.target = '_blank';
    return button;
}
