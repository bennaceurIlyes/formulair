
import { useState } from 'react'
import './App.css'

import Counterrrr from './cmponent/exercice 1/counterrrr.jsx'
import Display from './cmponent/exercice 1/Display.jsx'
function App() {

const [count , setcount] =useState(0) ; 
function incress (){
  setcount(per => per + 1) ; 
}
function  decress(){
   setcount(per => per -1) ; 
}
  return (
    <>
     <Counterrrr incress={incress} decress={decress}></Counterrrr>
      <Display count={count}></Display>
    </>
  )
}

export default App
