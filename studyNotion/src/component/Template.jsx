import React from 'react'
import { FcGoogle } from "react-icons/fc";
import frameImage from "../assets/frame.png"
import Signupform from './Signupform';
import Loginform from './Loginform';

function Template({title,disc1,disc2,image,setisLoggedIn ,formtype}) {
  return (
    <div>

    <div>


      {/* titile will be there */}
        <h2>{title}</h2>

{/* two line discription */}
        <span>
        <p>{disc1}</p>
        <p>{disc2}</p>
        </span>

        {/* here two form login and signup form check at a time only one show in screen */}

        {
            formtype === 'signup' ? 
            (<Signupform setisLoggedIn={setisLoggedIn}/>):
            (<Loginform setisLoggedIn={setisLoggedIn}/>)
        }


{/* horizontal Line  */}
        <div>
        <div></div>
        <span>OR</span>
        <div></div>
        </div>


{/* signin with google button */}
        <button>
        <FcGoogle />
            <p>signin with Google</p>
        </button>
    </div>



 {/* right side two image overlap  */}
    <div>
        <img src={frameImage} height={508} width={558} alt='fame image' loading='lazy' />
        <img src={image} height={508} width={558} alt=' Student image' loading='loazy' />
    </div>
        

    </div>
  )
}

export default Template