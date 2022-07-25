const form = document.querySelector('.feedback-form');
const userEmail = form.elements.email;
const userMessage = form.elements.message;

const throttle = require('lodash.throttle');

form.addEventListener('input', throttle(dataInput, 500));
function dataInput(e) {
  e.preventDefault();
  const inputData = {
    email: userEmail.value,
    message: userMessage.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(inputData));
}

try {
  const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
  userEmail.value = savedData.email;
  userMessage.value = savedData.message;
} catch (error) {}

form.addEventListener('submit', handleSubmit);
function handleSubmit(e) {
  e.preventDefault();
  console.log({
    email: userEmail.value,
    message: userMessage.value,
  });
  form.reset();
  localStorage.removeItem('feedback-form-state');
}
