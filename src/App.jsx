
import './App.css'
import Home from './cmponent/Home'
import Profile from './cmponent/Profile'
import Todo from './cmponent/parent/todo'
import { Link, Routes, Route } from "react-router-dom";
function App() {


  return (
    <>
     <nav style={{display : 'flex' , gap : '10px'}}>
       <Link to="/"> Home</Link>
       <Link to="/Profile"> profile</Link>
       <Link to="/todo"> Tasks</Link>
     </nav>
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/Profile' element={<Profile></Profile>}></Route>
      <Route path='/todo' element={<Todo></Todo>}> </Route>

     </Routes>
    </>
  )
}

export default App
