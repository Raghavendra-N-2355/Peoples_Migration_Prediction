/************************
 * Script for Login and Signup Screens
 ************************/

// Elements
const choiceScreen = document.getElementById("choiceScreen");
const loginScreen = document.getElementById("loginScreen");
const signupScreen = document.getElementById("signupScreen");

const chooseLogin = document.getElementById("chooseLogin");
const chooseSignup = document.getElementById("chooseSignup");
const openSignup = document.getElementById("openSignup");
const closeSignup = document.getElementById("closeSignup");

// Functions to switch screens
function showChoice() {
  document.body.className = "choice-body";
  choiceScreen.classList.add("active");
  loginScreen.classList.remove("active");
  signupScreen.classList.remove("active");
}

function showLogin() {
  document.body.className = "login-body";
  loginScreen.classList.add("active");
  choiceScreen.classList.remove("active");
  signupScreen.classList.remove("active");
}

function showSignup() {
  document.body.className = "signup-body";
  signupScreen.classList.add("active");
  loginScreen.classList.remove("active");
  choiceScreen.classList.remove("active");
}

// Event Listeners
chooseLogin.addEventListener("click", showLogin);
chooseSignup.addEventListener("click", showSignup);
openSignup.addEventListener("click", (e) => {
  e.preventDefault();
  showSignup();
});
closeSignup.addEventListener("click", (e) => {
  e.preventDefault();
  showLogin();
});
