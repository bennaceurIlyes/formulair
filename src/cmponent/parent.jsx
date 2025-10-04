import React, { useState } from 'react'
import Props from './props'
function Parent() {
    const [totale , settotale] = useState(0) ; 
    
    function addlike(){
        settotale(totale+1)
    }
  return (
    <div>
        <h1>totale likes is {totale}</h1>
     <Props name="ilyes"  city="bechar" onlike={addlike}></Props>
   <Props name="karim"  city="bechar" onlike={addlike}></Props>
   <Props name="nazih"  city="ble abess" onlike={addlike}></Props>
    </div>
  )
}

export default Parent