const btn = document.getElementById('btn')
const you = document.getElementById('you')
const crush = document.getElementById('crush')
const love = document.getElementById('love')

btn.addEventListener('click' , ()=>{
  displayLovePercentage()
})

function displayLovePercentage(){
  love.textContent = `The Love Percentage Between ${you.value} and ${crush.value} is - ${calculateLovePercentage()}`
}

function calculateLovePercentage(){
  const yourNameLength = you.value.length
  const crushNameLength = crush.value.length

  const percent = ((yourNameLength*7)+(crushNameLength*13)+33)%101
  return percent
}