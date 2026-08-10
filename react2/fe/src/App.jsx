import { useState } from "react"

export default function App(){
  let[arr , setArr] = useState([])

  async function callData(){
    
    try{
      const response = await fetch('https://api.github.com/users')
      const data = await response.json()
      // console.log(data)
      setArr(data)
    }catch(error){
      console.log(error)
    }
  }
  callData()
  

  return (
    <>
      <h1>Github User</h1>
      {arr.map((item)=>(
        <img key={item.id} src={item.avatar_url} alt={"user"}/>
      ))}
    </>
  )
}

