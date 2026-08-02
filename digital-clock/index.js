const hour = document.getElementById('hour')
const minute = document.getElementById('minute')
const second = document.getElementById('second')

function updateClock(){
  const date = new Date()
  const time = 
  {
    hour:date.getHours().toString().padStart(2,'0') ,
    minutes:date.getMinutes().toString().padStart(2,'0') , 
    seconds : date.getSeconds().toString().padStart(2,'0')
  }

  return time
}

function renderTime(){
  const timeObject = updateClock()
  hour.textContent = timeObject.hour
  minute.textContent = timeObject.minutes
  second.textContent = timeObject.seconds
}

renderTime()

setInterval(renderTime,1000)





