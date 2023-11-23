// CSS
import './css/style.css';
import './css/header-footer.css';
import './css/home.css';
import './css/menu.css';
import './css/contact.css';

// Functions
import { headerFooter } from './js/header-footer';
import { home } from './js/home';
import { menu } from './js/menu';
import { contact } from './js/contact';

const page = (() => {
    const content = document.querySelector("#content");

    function init() {
        const body = document.querySelector("body");
        body.prepend(headerFooter.createHeader(), content);
        body.append(headerFooter.createFooter());

        const liHome = document.querySelector("#home");
        const liMenu = document.querySelector("#menu");
        const liContact = document.querySelector("#contact");

        liHome.onclick = renderHome;
        liMenu.onclick = renderMenu;
        liContact.onclick = renderContact;

        renderHome();
    }

    function renderHome() {
        clearContent();
        render(home.createContent());
        scrollToTop();
    }

    function renderMenu() {
        clearContent();
        render(menu.createContent());
        scrollToTop();
    }

    function renderContact() {
        clearContent();
        render(contact.createContent());
        scrollToTop();
    }

    function clearContent() {
        while (content.children.length > 0) content.removeChild(content.lastChild);
    }

    function render(list) {
        for (const item of list) content.append(item);
    }

    function scrollToTop() {
        window.scrollTo(0, 0);
    }

    return { init };
})()

page.init();
