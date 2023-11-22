// CSS
import './style.css';

// Functions
import { headerFooter } from './header-footer';
import { home } from './home';

const page = (() => {
    const content = document.querySelector("#content");

    function init() {
        renderHeaderFooter();
        renderHome();

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
        content.append(home.createWelcome(), home.createFood(), home.createNewsletter());
    }

    function renderMenu() {
        clearContent();
        console.log("MENU")
    }

    function renderContact() {
        clearContent();
        console.log("CONTACT")
    }

    function clearContent() {
        while (content.children.length > 0) content.removeChild(content.lastChild);
    }

    return { init };
})()

page.init();
