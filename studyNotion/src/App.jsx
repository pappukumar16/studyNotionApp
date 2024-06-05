import React, { useState } from 'react'
import { Route,Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from './pages/Dashboard';
import Navbar from './component/Navbar'

// import './App.css'

function App() {
 
  const [isLoggedIn,setisLoggedIn] = useState(false);

  return (
   <div>
    <Navbar isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn}/>


    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login setisLoggedIn={setisLoggedIn}/>}/>
      <Route path="/signup" element={<Signup setisLoggedIn={setisLoggedIn}/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
   </div>
  )
}

export default App
