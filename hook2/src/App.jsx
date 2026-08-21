import { useEffect } from "react"
import { useState } from "react"


function App() {
  let[time , setTime] = useState(0)
  let[isRunning , setIsRunning] = useState(false)

  useEffect(()=>{
    const timerid = setInterval(()=>{
      setTime(time+1)
    },1000)
  },[isRunning])

  
  

  return (
    <>
      <span>StopWatch : {time}</span>
      <button onClick={setIsRunning(true)}>Start</button>
      <button >Stop</button>
      <button>Reset</button>
    </>
  )
}

export default App
