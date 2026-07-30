const email = document.getElementById('email-input')
const span = document.createElement('span')
span.classList.add('error-message')
span.textContent = "Please enter a valid email"
email.before(span)
// email.insertAdjacentElement('afterend',span)