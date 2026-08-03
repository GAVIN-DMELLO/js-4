const body = document.getElementById('body')

body.addEventListener('click',(e)=>{

  const span = document.createElement('span')
  span.textContent = 'Hi'
  span.style.backgroundColor = colors[Math.floor(Math.random()*(colors.length))]
  


  span.classList.add('pop-effect');

  let x = e.clientX
  let y = e.clientY

  span.style.position = 'absolute'
  span.style.left = x + 'px'
  span.style.top = y + 'px'

  body.appendChild(span)

  console.log(span)

  setTimeout(()=>{
    span.remove()
  },5000)
})


const colors = [
  '#a855f7',
  '#ec4899',
  '#3b82f6',
  '#10b981',
  '#f59e0b',
  '#ef4444',
  '#06b6d4',
  '#8b5cf6',
  '#f97316',
  '#14b8a6',
  '#f43f5e',
  '#84cc16',
  '#6366f1',
  '#d946ef',
  '#0284c7',
  '#eab308',
  '#10b981',
  '#fb923c',
  '#a855f7',
  '#22c55e'
];


