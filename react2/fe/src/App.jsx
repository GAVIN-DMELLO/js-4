import { useState , useEffect } from "react"

export default function App(){
  let[arr , setArr] = useState([])
  let[count , setCount] = useState(0)

  useEffect(()=>{
    async function callData(){
    
    try{
      const response = await fetch(`https://api.github.com/users?per_page=${count}`)
      const data = await response.json()
      // console.log(data)
      setArr(data)
    }catch(error){
      console.log(error)
    }
  }
  callData()
  },[count])

  

  return (
    <>
      <h1>Github User</h1>
      <input type="text" onChange={(e)=>setCount(e.target.value)}/>
      {arr.map((item)=>(
        <img key={item.id} src={item.avatar_url} alt={"user"}/>
      ))}
    </>
  )
}

