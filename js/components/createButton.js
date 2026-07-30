export function createButton(text, onClick) {
    const button = document.createElement('button');
    // console.log(text, typeof(text));
    button.textContent = text;
    button.addEventListener('click', onClick);
    button.classList.add("button")
    return button;
}