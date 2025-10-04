import React, { useState } from 'react'

function Visible() {
    const [visible, setvisible] = useState(false); 
  return (
    <div>
     <button onClick={() => setvisible(!visible)}
     style={{
          padding: "10px 20px",
          borderRadius: "8px",
          background: "#007bff",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
     >
     {visible ? "hide message" : "show message" }
     </button>
     { visible && (<h2 style={{ marginTop: "20px", color: "green" }}> he ilyes i show to you the message </h2>)}
    </div>
  )
}

export default Visible