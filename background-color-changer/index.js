const body = document.getElementById('body')

body.addEventListener('click' , (e)=>{
  const child = e.target
  body.style.backgroundColor = child.id
})