const profileName = document.getElementById('profile-name');
const profileSurname = document.getElementById('profile-surname');
const profileEmail = document.getElementById('profile-email');
const resetEmailEl = document.getElementById('reset-email-button')

const fName = 'John';
const surname = 'Newman';
const email = 'john.newman@mail.com';

profileName.textContent = fName;
profileSurname.textContent = surname;
profileEmail.textContent = email;

const resetEmail = () => {
  const inputMail = prompt('Enter the new email:');
  const emailRegexExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;
  if (!emailRegexExp.test(inputMail)) {
    alert('Invalid email format');
    return;
  }
  profileEmail.textContent = inputMail;
};

resetEmailEl.addEventListener('click', resetEmail);