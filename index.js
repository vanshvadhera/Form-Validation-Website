console.log("Welcome to the Validation Website");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const phoneNo = document.getElementById("phoneNo");

console.log(userName, userEmail, phoneNo);

userName.addEventListener("blur", () => {
    console.log("blur event fired")

    let regular = /([0-9a-zA-Z]){3,10}$/
    let string = userName.value;
    if (regular.test(string)) {
        console.log("valid");
        userName.classList.add("is-valid");
        userName.classList.remove("is-invalid");
    }
    else {
        userName.classList.add("is-invalid");
        userName.classList.remove("is-valid");
    }
});
userEmail.addEventListener("blur", () => {
    console.log("blur event fired")
    let regular = /@gmail.com$/
    let string = userEmail.value;
    if (regular.test(string)) {
        console.log("valid");
        userEmail.classList.add("is-valid");
        userEmail.classList.remove("is-invalid");
    }
    else {
        userEmail.classList.add("is-invalid");
        userEmail.classList.remove("is-valid");
    }
});
phoneNo.addEventListener("blur", () => {
    console.log("blur event fired")
    let regular = /([0-9]){10}$/
    let string = phoneNo.value;
    if (regular.test(string)) {
        console.log("valid");
        phoneNo.classList.add("is-valid");
        phoneNo.classList.remove("is-invalid");
    }
    else {
        phoneNo.classList.add("is-invalid");
        phoneNo.classList.remove("is-valid");
    }
});
let flag = document.getElementById("messageShow");
let button = document.getElementById("submit");

button.addEventListener("click", (e) => {
    e.preventDefault();
    if (userName.classList.contains("is-valid") && userEmail.classList.contains("is-valid") && phoneNo.classList.contains("is-valid")) {
        flag.style.removeProperty("display");
        flag.style.setProperty("display", "block");
    }
    else {
        let add = document.getElementById("add");
        let html = 
        add.appendChild(html);
        console.log(container);

    }
})