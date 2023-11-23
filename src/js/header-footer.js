// Functions
import { createImg, createText, createClassDivAndAppend } from "./function";

// Images
import imageGitHub from '../images/github-mark-white.png';

const headerFooter = (() => {
    function createHeader() {
        const div1 = document.createElement("div");
        div1.id = "brand";
        div1.textContent = "Soul Kitchen";

        const li1 = createLi("HOME");
        li1.id = "home";

        const li2 = createLi("MENU");
        li2.id = "menu";

        const li3 = createLi("CONTACT");
        li3.id = "contact";

        const ul = document.createElement("ul");
        ul.append(li1, li2, li3);

        const div2 = document.createElement("div");
        div2.append(ul);

        return createClassDivAndAppend("header", div1, div2);
    }

    function createFooter() {
        const div1 = createText("Inspired by ");
        const a1 = createAnchor("https://jbjsoulkitchen.org/", "JBJ Soul Kitchen");
        div1.append(a1);

        const a2 = createAnchor("https://github.com/woonzf", null);
        const image = createImg(imageGitHub, "GitHub Invertocat Logo");
        a2.append(image, "ZF");

        const div2 = createClassDivAndAppend(null, a2);
        div2.id = "github";
        return createClassDivAndAppend("footer", div1, div2);
    }

    function createLi(text) {
        const li = document.createElement("li");
        li.textContent = text;
        return li;
    }

    function createAnchor(href, text) {
        const a = document.createElement("a");
        a.href = href;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        if (text !== null) a.textContent = text;
        return a;
    }

    return { createHeader, createFooter };
})()

export { headerFooter };
