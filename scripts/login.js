const loginEl = document.getElementsByClassName('login-form')[0];
const loginSubmitEl = document.querySelector('.login-form .form-button');
const registerEl = document.getElementsByClassName('register-form')[0];
const registerEmailEl = document.getElementById('email-form');
const registerEmailRepeatEl = document.getElementById('email-repeat');
const registerPasswordEl = document.getElementById('password-form');
const registerPasswordRepeatEl = document.getElementById('password-repeat');
const registerSubmitEl = document.querySelector('.register-form .form-button');
const showRegisterEl = document.getElementById('show-register');

const signIn = (e) => {
  if(loginEl.checkValidity()){
    e.preventDefault();
    location.href="./home.html";
  } 
}

const register = (e) => {
  registerEmailRepeatEl.setCustomValidity('');
  registerPasswordRepeatEl.setCustomValidity('');

  if(registerEmailEl.value !== registerEmailRepeatEl.value)
    registerEmailRepeatEl.setCustomValidity('Email addresses do not match');

  if(registerPasswordEl.value !== registerPasswordRepeatEl.value)
    registerPasswordRepeatEl.setCustomValidity('The passwords do not match');

  if(registerEl.checkValidity()) {
    e.preventDefault();
    location.href="./home.html";
  }
}

const showRegisterForm = () => {
  registerEl.style.display = 'flex';
  showRegisterEl.style.display = 'none';
}

loginSubmitEl.addEventListener('click', signIn);
registerSubmitEl.addEventListener('click', register);
showRegisterEl.addEventListener('click', showRegisterForm);