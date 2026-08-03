const form = document.getElementById('form')
const display = document.getElementById('res')
const remove = document.getElementById('remove')




let tasks = []


remove.addEventListener('click',()=>{
  tasks.length = 0
  taskDisplay()
  console.log(tasks)
  console.log(display)
})






form.addEventListener('submit',(e)=>{
  e.preventDefault()
  const input = document.getElementById('task').value
  const div = createHandler(input)
  // div.textContent = input
  taskListUpdate(div)
  taskDisplay()
})

function createHandler(input){
  const el = document.createElement('input')
  el.type = 'checkbox'
  el.classList.add('el')
  const label = document.createElement('label')
  label.append(el , input)
  return label
}


function taskListUpdate(div){
  tasks.push(div)
  console.log(tasks)
}

function taskDisplay(){
  display.innerHTML=''
  for(let task of tasks){
    display.append(task)
  }
}

// function displayUi(){
//   display.innerHTML = ''
// }

