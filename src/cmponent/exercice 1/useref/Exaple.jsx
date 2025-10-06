import React, { useRef } from 'react'

function Exaple() {
    const inputref = useRef(); 
    function inpfoucs() {
        inputref.current.focus();
    }
  return (

    <div>
        <input type="text" ref={inputref}/>
        <button onClick={()=> inpfoucs()}>focus</button>
    </div>
  )
}

export default Exaple