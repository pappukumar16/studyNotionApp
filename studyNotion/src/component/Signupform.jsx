import React, { useState } from 'react'
import { AiOutlineEye,AiOutlineEyeInvisible } from "react-icons/ai";
import {toast} from "react-hot-toast";
import { useNavigate } from 'react-router-dom';

function Signupform({setisLoggedIn}) {

  const [showPass,setshowPass] = useState(false);
  const [showsPass,setshowsPass] = useState(false);
  const navigate = useNavigate();


  const [formData,setformData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password: "",
    conformPassword:""
  })




  function changeHandler(event){
    setformData( (prev)=>(
    {
        ...prev,
        [event.target.name] : event.target.value
    }
))

  }


  function submitHandler(event){
    event.preventDefault();

    if(formData.password != formData.conformPassword){
      toast.error("Password do not match")
      return;
    }
    setisLoggedIn(true)
    toast.success("Account create successful");
    navigate("/dashboard")
    const  alldata = {...formData};
    console.log(alldata)

  }


  
  return (
    <div>
          <div>
            <button>Student</button>
            <button>Instructor</button>
          </div>

          <form onSubmit={submitHandler}>
         {/* first name and last name both are placed horizontal */}
         <div>
                <label>
                  <p>Enter First Name <sup>*</sup></p>
                  <input 
                  required
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={changeHandler}
                  placeholder='Enter First Name'/>
                </label>

                <label>
                  <p>Enter Last Name <sup>*</sup></p>
                  <input type="text" required
                  name="lastName"
                  value={formData.lastName}
                  onChange={changeHandler}
                  placeholder='Enter last Name'/>
                </label>
         </div>
         {/* email */}
         <label>
        <p>Enter Email<sup>*</sup> </p>
        <input type='email'
          required
          onChange={changeHandler}
          value={formData.email}
          name="email" placeholder='Enter email id'
        />
       </label>

       {/* Create password and  conform password */}
       <div>

       <label>
        <p>Enter Password<sup>*</sup> </p>
        <input type={showPass ? ("text"): ("password")}
          required
          onChange={changeHandler}
          value={formData.password}
          name="password" placeholder='Enter Password'
        />

        <span onClick={ ()=> setshowPass( (prev)=> !prev)}>
            {
                showPass ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)
            }
        </span>

       </label>

       {/* conform pass*/}

       <label>
        <p>Conform Password<sup>*</sup> </p>
        <input type={showPass ? ("text"): ("password")}
          required
          onChange={changeHandler}
          value={formData.conformPassword}
          name="conformPassword" placeholder='conform password'
        />

        <span onClick={ ()=> setshowsPass( (prev)=> !prev)}>
            {
                showsPass ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)
            }
        </span>
       </label>
        
       </div>

       <button>Create Account</button>
          </form>
    </div>
  )
}

export default Signupform