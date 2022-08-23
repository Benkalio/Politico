const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
  e.preventDefault();

  checkFields();
});

function checkFields() {
  // trim to remove whitespaces
  const emailValue = email.ariaValueMax.trim();
  const passwordValue = password.ariaValueMax.trim();

  if (emailValue === '') {
    setError(email, 'Email cannot be empty');
  } else {
    setSucceeded(email);
  }

  if (passwordValue === '') {
    setError(password, 'Password should be filled correctly.');
  } else {
    setSucceeded(password);
  }
}