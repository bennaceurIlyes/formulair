import React, { useEffect, useState } from 'react'
import '../index.css'
import './effect.css'
function Effect() {
  const [task , setTask] = useState("") ; 
    const [tasks  ,settasks] = useState([]);
    
  function add(){
    if(task.trim() == "") return
    settasks([...tasks , {name : task , time : 0 , running: false}]) ;
    setTask("")
  }
   function starttimer(index){
      settasks(per => per.map((t, i) => i === index ? {...t  ,running : true } : t  ))
   }
   useEffect(()=>{
     const intervale= setInterval( ()=>{
      settasks(per => per.map(t => t.running === true ? {...t , time : t.time+1} : t))
     }, 1000)
     return ()=> clearInterval(intervale)
   } , [])
  
  return (
    <div className='todo-container'> 
    <input 
    type='text'
    placeholder='what you want to do today '
    value={task}
    className='todo-input'
    onChange={(e)=> setTask(e.target.value) }
    ></input>
    <button   className='todo-button' onClick={add} >add it </button>
     <ul>
      {tasks.map( (t , i)=>{
        return <li key={i} style={{ 
  color: "blue", 
  fontSize: "18px", 
  margin: "8px 0", 
  padding: "6px 10px", 
  background: "#f0f0f0", 
  borderRadius: "6px" 
}}>
  {t.name}
  
 
  <button onClick={()=> starttimer(i)}>timer</button>
  <h1>{t.time}</h1>
</li>

      })}
     </ul>
    </div>
  )
}

export default Effect