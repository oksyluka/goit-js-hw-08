const form = document.querySelector('.feedback-form');
const throttle = require('lodash.throttle');

form.addEventListener('input', throttle(dataInput, 500));
function dataInput(e) {
  e.preventDefault();
  let userData = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(userData));
}

const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));

window.addEventListener('load', checkStorage);
function checkStorage() {
  if (savedData.email !== '' || savedData.message !== '') {
    form.elements.email.value = savedData.email;
    form.elements.message.value = savedData.message;
  }
}

form.addEventListener('submit', handleSubmit);
function handleSubmit(e) {
  e.preventDefault();
  console.log(savedData);
  form.reset();
  localStorage.removeItem('feedback-form-state');
}
