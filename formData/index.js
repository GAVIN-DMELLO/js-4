const form = document.getElementById('form')
const result = document.getElementById('result')

form.addEventListener('submit' , (e)=>{
  e.preventDefault()
  const name = document.getElementById('name')
  const email = document.getElementById('email')

  result.textContent = ` Email Id of ${name.value} is ${email.value}`
  form.reset()
})