import { useState } from "react"


export default function App(){

  let [text , showText] = useState("")


  function show(e){
    showText(e.target.value)
  }

  function clear(){
    showText("")
  }


  

  return (
    <>
      <input type="text" onChange={show}></input>
      <button onClick={clear}>Clear</button>
      <p>{text}</p>
    </>
  )
}