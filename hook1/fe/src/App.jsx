import { useState } from "react"


function App() {

  let [count , setCount] = useState(0)
  return (
    <>
      <span>Counter : {count}</span>
      <button onClick={()=>setCount(count+1)}>increment</button>
    </>
  )
}

export default App
