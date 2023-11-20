import './style.css';
import imgWelcome from './images/pexels-igor-starkov-914388.jpg';

const content = (() => {
    // Cache DOM
    const content = document.querySelector("#content");

    function init() {
        home.create(content);
    }

    return { init };
})()

const home = ((content) => {
    function create() {
        createWelcome();
        createFood();
        createNewsletter();
    }

    function createWelcome() {
        // img
        const image = document.createElement("img");
        image.src = imgWelcome;
        image.alt = "Restaurant Table and Chairs";

        // Intro 1st div
        const div1 = document.createElement("div");
        div1.textContent = "Welcome to Soul Kitchen";

        // Intro 2nd inner divs
        const div21 = document.createElement("div");
        div21.textContent = "Founded in 2003 by Mr John Von Jobi.";

        const div22 = document.createElement("div");
        const span22 = document.createElement("span");
        div22.textContent = "Its name took inspiration from the quote";
        span22.textContent = ` "food for the soul".`; // Add <i> in CSS later
        div22.append(span22);

        const div23 = document.createElement("div");
        div23.textContent = "We strive to provide healthy and authentic food for you.";
        
        const div24 = document.createElement("div");
        div24.textContent = "Always."; // Add <i> in CSS later

        // Intro 2nd div
        const div2 = document.createElement("div");
        div2.append(div21, div22, div23, div24);

        // Intro
        const intro = document.createElement("div");
        intro.classList.add("intro");
        intro.append(div1, div2);

        // Welcome
        const welcome = document.createElement("div");
        welcome.classList.add("welcome");
        welcome.append(image, intro);

        content.append(welcome);
    }

    function createFood() {

    }

    function createNewsletter() {

    }

    return { create };
})()

const email = document.querySelector("#email");
const btnSignUp = document.querySelector("#sign-up");

email.addEventListener("input", (e) => {
    const target = e.target;

    if (validateEmail(email.value)) {
        target.classList.remove("invalid");
        target.classList.add("valid");
        btnSignUp.disabled = false;
    } else {
        target.classList.remove("valid");
        target.classList.add("invalid");
        btnSignUp.disabled = true;
        btnSignUp.classList.remove("success");
    }
})

btnSignUp.addEventListener("click", (e) => {
    e.preventDefault();
    e.target.classList.add("success");
})

// From https://www.w3resource.com/javascript/form/email-validation.php
function validateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) return true;
    else return false;
}
