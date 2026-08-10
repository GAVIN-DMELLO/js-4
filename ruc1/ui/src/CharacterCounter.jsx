import { useState } from "react"

export default function CharacterCounter() {
  let [char, setChar] = useState("");

  function render(e) {
    setChar(e.target.value);
  }

  const simplifiedText = char.replace(/\p{RGI_Emoji}/gv, "X");
  
  
  const visualLength = simplifiedText.length;

  return (
    <>
      <input type="text" onChange={render} value={char}></input>
      <p>{visualLength}</p>
      {visualLength > 15 && <span style={{ color: 'red' }}>Limit exceeded !</span>}
    </>
  )
}