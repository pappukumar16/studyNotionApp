import React from 'react'
import loginImage from "../assets/login.png";
import Template from '../component/Template';


function Login({setisLoggedIn}) {
  return (
    <Template
    className='bg-slate-200 flex justify-between items-center'
    title="Welcome Back"
    desc1="Build skills for today, tomorrow, and beyond."
    desc2="Education to future-proof your career."
    image={loginImage}
    formtype = "login"
    setisLoggedIn={setisLoggedIn}
    />
  )
}

export default Login