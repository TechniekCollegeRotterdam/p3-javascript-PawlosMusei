//variabelen input
let fullName = document.querySelector("#fullName");
let phoneNumber = document.querySelector("#phoneNumber");
let email = document.querySelector("#email");
let password = document.querySelector("#phoneNumber");

//variabelen containers
let signInContainer = document.querySelector(".sign-in-container");
let signUpContainer = document.querySelector(".sign-up-container");
let panelInput = document.querySelector(".overlay-panel");

const name = document.querySelector("#fullName");
const number = document.querySelector("#phoneNumber");
const mail = document.querySelector("#email");
const pass = document.querySelector("#password");

//variabelen buttons
let signUpButton = document.querySelector("#signUp");
signUpButton.addEventListener("click", function () {
  signInContainer.style.display = "flex";
  signUpContainer.style.display = "none";
});

//Dit zijn functies die er voor zorgen dat je gegevens op de rechter panel komen
const out1 = document.querySelector(".overlay-right");

function fun1() {
  outputName = document.createElement("h1");
  outputName.innerHTML = fullName.value;
  out1.appendChild(outputName);
  console.log();
}

function fun2() {
  outputPhoneNumber = document.createElement("p");
  outputPhoneNumber.innerHTML = phoneNumber.value;
  out1.appendChild(outputPhoneNumber);
  console.log();
}
function fun3() {
  outputEmail = document.createElement("p");
  outputEmail.innerHTML = email.value;
  out1.appendChild(outputEmail);
  console.log();
}

signUp.addEventListener("click", function (e) {
  e.preventDefault();
  fun1();
  fun2();
  fun3();
});