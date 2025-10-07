import React, { useEffect, useState } from 'react'
import Son from './Son'
function Parent() {
    const [count , setcount]  =useState(0) ; 
   const [color , setcolor] = useState("green") ; 
    useEffect(()=>{
        if(count <0){
            setcolor("red") ;
        }else{
            setcolor("green") ;
        }
    }, [count])
  return (
    <div>
        <h1 style={{background : color}}>the counter {count}</h1>
        <Son  incress={()=> setcount(count+1)} decress={()=>setcount(count -1)}></Son>
    </div>
  )
}

export default Parent