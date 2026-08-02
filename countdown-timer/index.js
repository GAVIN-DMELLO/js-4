// let hour = 1
// let minute = 1
let second 
let hourValue
let minuteValue
let countDownTimerId


const countDown = document.getElementById('countdown')
const stop = document.getElementById('stop')


const form = document.getElementById('form')
const hour = document.getElementById('hour')
const minute = document.getElementById('minute')

countDown.textContent = `${0}:${0}:${0}`

form.addEventListener('submit',(e)=>{
  e.preventDefault()



  if(countDownTimerId){
    clearInterval(countDownTimerId)
  }
  hourValue = parseInt(hour.value)
  console.log(hourValue)
  minuteValue = parseInt(minute.value)
  console.log(minuteValue)
  second=0
  Timer()
})



stop.addEventListener('click' , ()=>{
  clearInterval(countDownTimerId)
  return
})


function Timer(){
  countDownTimerId = setInterval(()=>{
  if(hourValue==0 && minuteValue==0 && second==0){
    clearInterval(countDownTimerId)
    return
  }


  if(second==0){
    second=60
    minuteValue--
    if(minuteValue==-1){
      minuteValue=59
      hourValue--
    }
  }

  second--

  console.log(hourValue , minuteValue , second)
  countDown.textContent = `${hourValue} : ${minuteValue} : ${second}`
  },1000)
}


