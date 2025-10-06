import React, { useEffect, useRef, useState } from 'react'

function Prev() {
    const [count , setcount] = useState(0) ; 
    const prevvalue = useRef();
    useEffect(()=>{
     prevvalue.current = count ;   
    } ,[count])
  return (
    <div>
      <h1>{count}</h1>
      <h2>the previues {prevvalue.current}</h2>
      <button onClick={()=> setcount(count + 1)}>add one</button>
    </div>
  )
}

export default Prev