import React from 'react'

function Son({incress , decress}) {
  return (
    <div>
        <button onClick={incress}>+</button>
        <button onClick={decress}>-</button>
    </div>
  )
}

export default Son