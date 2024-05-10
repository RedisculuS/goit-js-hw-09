'use strict';

let formData = { email: '', message: '' };

const form = document.querySelector('.feedback-form');
const formDataKey = 'feedback-form-state';
let savedFormData = JSON.parse(localStorage.getItem(formDataKey));

form.addEventListener('input', updateFormData);

if (savedFormData) {
  formData = savedFormData;
}

function saveFormData() {
  localStorage.setItem(formDataKey, JSON.stringify(formData));
}

function updateFormData(event) {
  const { name, value } = event.target;
  formData[name] = value.trim();
  saveFormData();
}

// if (savedFormData) {
//   form.email.value = savedFormData.email;
//   form.message.value = savedFormData.message;
// }

form.email.value = formData.email;
form.message.value = formData.message;

form.addEventListener('submit', function (event) {
  event.preventDefault();

  if (!formData.email.trim() || !formData.message.trim()) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);
  localStorage.removeItem(formDataKey);
  form.reset();
  Object.assign(formData, { email: '', message: '' });
});
