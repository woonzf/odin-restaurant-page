function createImg(src, alt) {
    const img = document.createElement("img");
    img.src = src;
    img.alt = alt;
    return img;
}

function createText(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div;
}

function createClassDivAndAppend(className, ...elements) {
    const div = document.createElement("div");
    if (className !== null) div.classList.add(className);
    div.append(...elements);
    return div;
}

export { createImg, createText, createClassDivAndAppend };
