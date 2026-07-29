export function createLink(url, text) {
    const link = document.createElement('a');
    link.href = url;
    link.textContent = text;
    link.classList.add('button');
    link.target = '_blank';
    return link;
}
