'use strict';

const formData = { email: '', message: '' };

const form = document.querySelector('.feedback-form');
const formDataKey = 'feedback-form-state';
let savedFormData = JSON.parse(localStorage.getItem(formDataKey));

form.addEventListener('input', updateFormData);

function saveFormData() {
  localStorage.setItem(formDataKey, JSON.stringify(formData));
}

function updateFormData(event) {
  const { name, value } = event.target;
  formData[name] = value;
  saveFormData();
}

if (savedFormData) {
  form.email.value = savedFormData.email;
  form.message.value = savedFormData.message;
}

form.addEventListener('submit', function (event) {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);
  localStorage.removeItem(formDataKey);
  form.reset();
  Object.assign(formData, { email: '', message: '' });
});
