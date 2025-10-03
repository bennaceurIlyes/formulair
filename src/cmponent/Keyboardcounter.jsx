import React, { useEffect, useState } from 'react'

function Keyboardcounter() {
    const [count , setcount] = useState(0) ; 
    useEffect(()=>{
            function keyboard(e){
                if(e.key === "ArrowUp"){ setcount(per => per +1)}
                if(e.key === "ArrowDown"){setcount(per => per -1)}
                if(e.key === "r"){setcount(0)}
            }

        window.addEventListener("keydown" , keyboard) ;
        return ()=> window.removeEventListener("keydown" , keyboard)
    } , [])
  return (
    <div>
        <h1>{count}</h1>
        <p>up for more down for less and r for reset </p>
    </div>
  )
}

export default Keyboardcounter