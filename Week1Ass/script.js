// script.js

const lengthInput = document.getElementById('length');
const uppercaseCheckbox = document.getElementById('uppercase');
const lowercaseCheckbox = document.getElementById('lowercase');
const numbersCheckbox = document.getElementById('numbers');
const symbolsCheckbox = document.getElementById('symbols');
const generateButton = document.getElementById('generate');
const passwordInput = document.getElementById('password');
const copyButton = document.getElementById('copy');

const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const numberChars = '0123456789';
const symbolChars = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';

function generatePassword() {


  const length = parseInt(lengthInput.value);
  let charset = '';
 

  if (uppercaseCheckbox.checked) {
    charset += uppercaseChars;
  }
  if (lowercaseCheckbox.checked) {
    charset += lowercaseChars;
  }
  if (numbersCheckbox.checked) {
    charset += numberChars;
  }
  if (symbolsCheckbox.checked) {
    charset += symbolChars;
  }

  let password = '';
  for (let i = 0; i < length; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  
  return password;
}

generateButton.addEventListener('click', () => {

  const password = generatePassword();
  passwordInput.value = password;
  const form_group= document.querySelector(".form-group");
  const form_group1= document.querySelector(".form-group1");
  const password_container= document.querySelector(".password-container");
  form_group.style.display = 'none';
  form_group1.style.display = 'none';
  generateButton.style.display = 'none';
    /************************** */
//   setTimeout(
//     () => {
//       password_container.style.display = '';

//     },
//     3000 
//   )
   //   *******************************************/
  
 

  
  password_container.style.display = 'block';
});

copyButton.addEventListener('click', () => {
  passwordInput.select();
  document.execCommand('copy');
  alert('Password copied to clipboard!');
});