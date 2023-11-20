import './style.css';

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
