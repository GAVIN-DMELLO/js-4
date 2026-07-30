const feed = document.getElementById('feed')
const div = document.createElement('div')
div.classList.add('post')
div.textContent = "Just woke up and learning DOM manipulation!"
// feed.insertAdjacentElement('afterbegin',div)
feed.prepend(div)