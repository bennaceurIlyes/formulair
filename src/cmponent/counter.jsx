import React, { useEffect, useState } from 'react'

function Counter() {
    const [count , setcount] = useState(0) ; 
    const [running , setrunning] = useState(false) ;
    useEffect(()=> {
       const intravle = setInterval(()=>{
        if(running){setcount(per => per +1)}
        
       } , 1000)  
       return ()=> clearInterval(intravle)
    } , [running])
  return (
    <div>
        <button onClick={()=>setrunning(true)}>beggain</button>
        <button onClick={()=>setrunning(false)} >paus</button>
        <button onClick={()=> setcount(0)}>reset</button>
        <h1>{count}</h1>
    </div>
  )
}

export default Counter