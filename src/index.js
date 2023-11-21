// CSS
import './style.css';

// Functions
import { headerFooter } from './header-footer';
import { home } from './home';

const page = (() => {
    // Cache DOM
    const body = document.querySelector("body");
    const content = document.querySelector("#content");

    function init() {
        renderHeaderFooter();
        renderHome();
    }

    function renderHeaderFooter() {
        body.prepend(headerFooter.createHeader(), content);
        body.append(headerFooter.createFooter());
    }

    function renderHome() {
        content.append(home.createWelcome(), home.createFood(), home.createNewsletter());
    }

    return { init };
})()

page.init();
