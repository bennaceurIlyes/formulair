import React, { useState } from 'react'

function Count() {
    const [name , setname] = useState("") ; 
    const [display , setdisplay] = useState("")
      return (
    <>
    <h1>please enter your name</h1>
    <input type="text" 
    value={name}
    onChange={(e)=>setname(e.target.value)}
    />
   <button onClick={()=> setdisplay(name)}>display</button>
   <button onClick={()=> setdisplay("")}>empty</button>
   <h1>my name is {display}</h1>

    
    
    </>
  )
}

export default Count