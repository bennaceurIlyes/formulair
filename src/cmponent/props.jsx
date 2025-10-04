import React, { useState } from 'react'

function Props( {name , city , onlike}) {
    const [likes  , setlike] = useState(0) ;
   function addlike(){
    setlike(likes +1);
    onlike() ;
   }
  return (
    
        <div
      style={{
        background: "#80f88",
        padding: "15px",
        margin: "10px",
        borderRadius: "10px",
        width: "200px",
      }}
    >
      <h2>{name}</h2>
      <p>🏙️ {city}</p>
      <p>❤️ Likes: {likes}</p>  
      <button onClick={()=>addlike()}
        style={{
          background: "#4f9cff",
          color: "white",
          border: "none",
          padding: "6px 10px",
          borderRadius: "6px",
          cursor: "pointer",
        }}
        >like</button>
    </div>
  )
}

export default Props