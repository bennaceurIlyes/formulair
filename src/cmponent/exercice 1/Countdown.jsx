import React, { useEffect, useState } from 'react'

function Countdown() {
    const [count , setcount] =useState(10) ; 
    const [run , setrun] = useState(false);
    useEffect(()=>{
        let intervale
        if(count >0 && run){
             intervale = setInterval(()=>{setcount(per => per - 1) } , 9000)
        }
        if(run === 0){
            setrun(false); 
        }
        return ()=> clearInterval(intervale)
    } , [run , count])
  return (
    <div>
      <button onClick={()=> setrun(true)}>lancer timer for 10 second</button>
      <h1>{count > 0 ? `hello ${count}` :"" }</h1>
    </div>
  )
}

export default Countdown