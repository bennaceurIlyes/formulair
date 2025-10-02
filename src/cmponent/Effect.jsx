import React, { useEffect, useState } from 'react'

function Effect() {
    const [user , setuser] = useState([])
    useEffect( ()=>{
        fetch("https://jsonplaceholder.typicode.com/users") 
        .then((res) => res.json())
        .then((data) => setuser(data));
    } , [])
    
  return (
    <>
    <ul>
       {user.map((u)=> {
        return <li key={u.id}>{u.name}</li>
       })}
    </ul>
    </>
  )
}

export default Effect