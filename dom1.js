const faqItem = document.getElementById('faq-item')
faqItem.classList.toggle('is-open')


if(faqItem.classList.contains('is-open')){
  faqItem.style.backgroundColor = '#e6f7ff'
}else{
  faqItem.style.backgroundColor = 'transparent'
}

