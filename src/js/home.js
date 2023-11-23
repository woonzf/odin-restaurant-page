// Functions
import { createImg, createDiv, createClassDivAndAppend } from './function';

// Images
import imgWelcome from '../images/pexels-igor-starkov-914388.jpg';
import imgFood1 from '../images/pexels-j-a-n-n-g-u-y-e-n-🍁-2664216.jpg';
import imgFood2 from '../images/pexels-mister-mister-3490368.jpg';
import imgFood3 from '../images/pexels-pixabay-461198.jpg';
import imgNewsletter from '../images/pexels-andrea-piacquadio-842548.jpg';

const home = (() => {
    function createContent() {
        return [createWelcome(), createFood(), createNewsletter()];
    }

    function createWelcome() {
        const image = createImg(imgWelcome, "Restaurant Table and Chairs");
        const div1 = createDiv("Welcome to Soul Kitchen");
        const div21 = createDiv("Founded in 2003 by Mr John Von Jobi.");
        
        const div22 = createDiv("Its name took inspiration from the quote");
        const span22 = createSpan(` "food for the soul".`);
        div22.append(span22);

        const div23 = createDiv("We strive to provide healthy and authentic food for you.");
        const div24 = createDiv("Always.");

        const div2 = createClassDivAndAppend(null, div21, div22, div23, div24);
        const intro = createClassDivAndAppend("intro", div1, div2);
        return createClassDivAndAppend("welcome", image, intro);
    }

    function createFood() {
        const image1 = createImg(imgFood1, "Noodles With Meat And Mint On Top");
        const image2 = createImg(imgFood2, "Cooked Dish on Plate");
        const image3 = createImg(imgFood3, "Close-up Photo of a Burrito");

        const div1 = createClassDivAndAppend(null, image1, image2, image3);
        const div2 = createDiv("... and more!");
        const div3 = createDiv("We update our menu monthly!");
        return createClassDivAndAppend("food", div1, div2, div3);
    }

    function createNewsletter() {
        const image = createImg(imgNewsletter, "Man Holding Mug in Front of Laptop");
        const div1 = createDiv("Interested?");
        const div2 = createDiv("Sign up for our newsletter today!");

        // Email input
        const email = document.createElement("input");
        email.type = "email";
        email.id = "email";
        email.name = "email";
        email.placeholder = "username@email.com";
        email.autocomplete = "off";

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

        const spanEmail = createSpan(null);

        // Sign up button
        const btnSignUp = document.createElement("button");
        btnSignUp.type = "button";
        btnSignUp.id = "sign-up";
        btnSignUp.disabled = true;
        btnSignUp.textContent = "Sign Up";

        btnSignUp.addEventListener("click", (e) => {
            e.preventDefault();
            e.target.classList.add("success");
        })
        
        const spanBtn = createSpan(null);

        const divBtn = document.createElement("div");
        divBtn.id = "sign-up-wrapper";
        divBtn.append(btnSignUp, spanBtn);

        // Form
        const form = document.createElement("form");
        form.action = "#";
        form.method = "post";
        form.append(email, spanEmail, divBtn);

        const div = createClassDivAndAppend(null, div1, div2, form);
        return createClassDivAndAppend("newsletter", image, div);
    }

    function createSpan(text) {
        const span = document.createElement("span");
        if (text !== null) span.textContent = text;
        return span;
    }

    // From https://www.w3resource.com/javascript/form/email-validation.php
    function validateEmail(mail) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) return true;
        else return false;
    }

    return { createContent };
})()

export { home };
