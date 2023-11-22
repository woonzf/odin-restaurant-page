// CSS
import './css/style.css';
import './css/header-footer.css';
import './css/home.css';
import './css/menu.css';

// Functions
import { headerFooter } from './js/header-footer';
import { home } from './js/home';
import { menu } from './js/menu';

const page = (() => {
    const content = document.querySelector("#content");

    function init() {
        renderHeaderFooter();
        renderMenu();

        const liHome = document.querySelector("#home");
        const liMenu = document.querySelector("#menu");
        const liContact = document.querySelector("#contact");

        liHome.onclick = renderHome;
        liMenu.onclick = renderMenu;
        liContact.onclick = renderContact;
    }

    function renderHeaderFooter() {
        const body = document.querySelector("body");
        body.prepend(headerFooter.createHeader(), content);
        body.append(headerFooter.createFooter());
    }

    function renderHome() {
        clearContent();
        render(home.createContent());
    }

    function renderMenu() {
        clearContent();
        render(menu.createContent());
    }

    function renderContact() {
        clearContent();
        console.log("CONTACT")
    }

    function clearContent() {
        while (content.children.length > 0) content.removeChild(content.lastChild);
    }

    function render(list) {
        for (const item of list) content.append(item);
    }

    return { init };
})()

page.init();
