import React from 'react'
import Template from '../component/Template'
import signupImage from "../assets/signup.png"
function Signup({setisLoggedIn}) {
  return (
    <Template
     title="Join the millions learning to code with StudyNotion for free"
     desc1="Build skills for today, tomorrow, and beyond."
     desc12="Education to future-proof your career."
     formtype="signup"
     image={signupImage}
     setisLoggedIn={setisLoggedIn}
    />
  )
}

export default Signup