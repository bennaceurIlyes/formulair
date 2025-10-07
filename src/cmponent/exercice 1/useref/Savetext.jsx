import React, {   useRef, useState } from 'react'

function Savetext() {
    const [texte , setexte] = useState("")
    const text = useRef(""); 
      const saved  = ()=>{
        text.current= texte
      }
  return (
    <div>
        <h1>{text.current}</h1>
        <input type="text"  
        value={texte}
        onChange={(e)=>setexte(e.target.value)}
        />
        <button onClick={saved}>save </button>
    </div>
  )
}

export default Savetext