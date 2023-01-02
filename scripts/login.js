const loginEl = document.getElementsByClassName('login-form')[0];
const loginSubmitEl = document.querySelector('.login-form .form-button');
const registerEl = document.getElementsByClassName('register-form')[0];
const showRegisterEl = document.getElementById('show-register');

const signIn = (e) => {
  if(loginEl.checkValidity()){
    e.preventDefault();
    location.href="./home.html";
  } 
}

const showRegisterForm = () => {
  registerEl.style.display = 'flex';
  showRegisterEl.style.display = 'none';
}

loginSubmitEl.addEventListener('click', signIn);
showRegisterEl.addEventListener('click', showRegisterForm);