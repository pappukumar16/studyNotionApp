import React, { useState } from 'react'
import { AiOutlineEye,AiOutlineEyeInvisible } from "react-icons/ai";
import {Link, useNavigate} from "react-router-dom"
import {toast} from "react-hot-toast"



function Loginform({setisLoggedIn}) {
    const [formData,setformData] = useState( {email:"",password:""})
    const [showPass,setshowPass] = useState(false);
    const navigate = useNavigate();

    function changeHandler(event){
        setformData( (prev)=>(
        {
            ...prev,
            [event.target.name] : event.target.value
        }
    ))}


function submitHandler(e){
    e.preventDefault();
    setisLoggedIn(true)
    toast.success("login success");
    navigate("/dashboard");
}

  return (
   <form onSubmit={submitHandler}
   className='bg-slate-300'>
       
       <label className=''>
        <p>Enter Email<sup>*</sup> </p>
        <input type='email'
          required
          onChange={changeHandler}
          value={formData.email}
          name="email" placeholder='Enter email id'
        />
       </label>

       <label>
        <p> Enter Password<sup>*</sup> </p>
        <input type= {showPass ? ("text") : ("password")}
        required
        onChange={changeHandler}
        value={formData.password}
        name="password" placeholder='Enter password'
        />
        <span onClick={ ()=> setshowPass( (prev)=> !prev)}>
            {
                showPass ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)
            }
        </span>
        <Link to='/'>
        <p>forgot  password</p>
        </Link>
       </label>

       <button>Sign In</button>
   </form>
  )
}

export default Loginform