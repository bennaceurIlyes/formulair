import React, { useEffect, useState } from 'react'

function Showm() {
    const [show , setshow] = useState(false) ; 
   useEffect(()=>{
    let timer
     if(show){
        timer = setTimeout(()=> setshow(false) , 3000) ; 
     }
     return ()=> clearTimeout(timer)
   } ,[show] )
  return (
    <div>
       <button onClick={()=>setshow(true)}>show message </button>
       {show && (<h1> 🎉 Hello Ilyes, this message will disappear in 3 seconds!
</h1>)}
    </div>
  )
}

export default Showm