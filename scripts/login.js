const registerEl = document.getElementsByClassName('register-form')[0];
const showRegisterEl = document.getElementById('show-register');

const showRegisterForm = () => {
  registerEl.style.display = 'flex';
  showRegisterEl.style.display = 'none';
}

showRegisterEl.addEventListener('click', showRegisterForm);