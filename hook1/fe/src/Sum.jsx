import { useState } from "react"

export default function Sum(){

  let[num , setNum] = useState(0)
  let[input , setInput] = useState("")



  function sum(){
    const trgt = Number(input)
    let summ=0
    for(let i=0 ; i<=trgt ; i++){
      summ+=i
      console.log(summ , i)
    }
    setNum(summ)
    console.log(summ)
  }

  return (
    <>
      <input type="number" onChange={(e)=>setInput(e.target.value)}/>
      <button onClick={sum}>Calculate</button>
      <span>{num}</span>
    </>
  )
}