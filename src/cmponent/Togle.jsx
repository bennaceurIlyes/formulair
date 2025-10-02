import React, { useEffect, useState } from 'react'

function Togle() {
   const [task , setTask]  =  useState("");
   const [tasks , setTasks] = useState([]);
const [complet , setcomplet] = useState("not complet ") ; 
   const addtask =()=>{
    if (task.trim() =="") return;
     setTasks([...tasks , task])
     setTask("")
   }
   const delettask = (index)=>{
    setTasks(tasks.filter((_ , i ) => i !== index))
   }
   useEffect(()=>{
    console.log("value chnaged")
   } , tasks)
  return (
     <>
      <input type="text" 
      value={task}
      onChange={e=> setTask(e.target.value)}
      />
      <button onClick={addtask}>add task</button>
      <ul>{
        tasks.map((t , index) =>
        <li key={index}>{t}
       <button onClick={() =>delettask(index)}>delet task</button>
       <button onClick={()=> setcomplet("completed")}>complet ?</button>
       <h1>{complet}</h1>
        </li>
        )
        }

      </ul>
     </>
  )
}

export default Togle