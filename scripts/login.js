const loginEl = document.getElementsByClassName("login-form")[0];
const loginSubmitEl = document.querySelector(".login-form .form-button");
const registerEl = document.getElementsByClassName("register-form")[0];
const fNameEl = document.getElementById("fname");
const surnameEl = document.getElementById("surname");
const registerEmailEl = document.getElementById("email-form");
const registerEmailRepeatEl = document.getElementById("email-repeat");
const registerPasswordEl = document.getElementById("password-form");
const registerPasswordRepeatEl = document.getElementById("password-repeat");
const registerSubmitEl = document.querySelector(".register-form .form-button");
const showRegisterEl = document.getElementById("show-register");

const registeredUsers =
  JSON.parse(localStorage.getItem("registeredUsers")) || [];
const currentUser = JSON.parse(localStorage.getItem("currentUser")) || {};

const signIn = (e) => {
  if (loginEl.checkValidity()) {
    e.preventDefault();
    location.href = "./home.html";
  }
};

const register = (e) => {
  registerEmailEl.setCustomValidity("");
  registerEmailRepeatEl.setCustomValidity("");
  registerPasswordRepeatEl.setCustomValidity("");

  if (registerEmailEl.value !== registerEmailRepeatEl.value)
    registerEmailRepeatEl.setCustomValidity("Email addresses do not match");

  if (registerPasswordEl.value !== registerPasswordRepeatEl.value)
    registerPasswordRepeatEl.setCustomValidity("The passwords do not match");

  if (
    registeredUsers.filter((user) => user.email === registerEmailEl.value)
      .length > 0
  )
    registerEmailEl.setCustomValidity(
      "Account registered with this email already exists"
    );

  if (!registerEl.checkValidity()) return;

  e.preventDefault();

  registeredUsers.push({
    name: fNameEl.value,
    surname: surnameEl.value,
    email: registerEmailEl.value,
    password: registerPasswordEl.value,
  });

  localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));
  localStorage.setItem(
    "currentUser",
    JSON.stringify(
      registeredUsers.filter((user) => user.email === registerEmailEl.value)
    )
  );

  location.href = "./home.html";
};

const showRegisterForm = () => {
  registerEl.style.display = "flex";
  showRegisterEl.style.display = "none";
};

loginSubmitEl.addEventListener("click", signIn);
registerSubmitEl.addEventListener("click", register);
showRegisterEl.addEventListener("click", showRegisterForm);
