import React, { useRef, useState } from 'react'

function Smartwhatch() {
    const [count , setcount] = useState(0) ; 
    const intervale = useRef(null);
    const start = ()=>{
        if(intervale.current !== null) return;
        intervale.current  = setInterval(()=>{
            setcount(per => per +1)
        } , 1000) ;

    }
    const stop = ()=>{
         clearInterval(intervale.current);
         intervale.current = null
    }
    const reset = ()=>{
        stop() ; 
        setcount(0)
    }

  return (
    <div>
        <h1>stopwhatch</h1>
        <h2>{count}</h2>
        <button onClick={start}>start</button>
        <button onClick={stop}>stop </button>
        <button onClick={reset}>reset</button>
    </div>
  )
}

export default Smartwhatch