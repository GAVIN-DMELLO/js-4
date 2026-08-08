import { useState } from "react"


export default function App(){

  let [count , setCount] = useState(0)


  function increment(){
    setCount(prev=>prev+1)
  }

  function decrement(){
    if(count===0){
      return
    }
    setCount(prev=>prev-1)
  }

  return (
    <>
      <span>{count}</span>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  )
}