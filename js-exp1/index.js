const root = document.getElementById('root')

let count = 0
function increment(){
  count++
  console.log(count)
  render()
}

const btn = document.createElement('button')
const spn = document.createElement('span')
btn.onclick = increment
btn.textContent = 'btn'

function render(){
  spn.textContent = count
}

root.append(spn , btn)


