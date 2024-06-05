import React from 'react';
import logoImage from "../assets/logo.png";
import {Link} from "react-router-dom";
import {toast} from "react-hot-toast";
import "./Navbar.css"

function Navbar(props) {

    let isLoggedIn = props.isLoggedIn;
    let setisLoggedIn = props.setisLoggedIn;

  return (
    <div className=' fixed top-0 w-full
    mx-w[1280px] flex items-center justify-evenly bg-[#6c90b4]'>

          <Link to='/'>
          <img className='img' src={logoImage} alt='logo image'/>
          </Link>
            
          


        <nav >
            <ul className='flex items-center gap-2 text-white font-semibold space-x-1 text-lg'>
                <li> <Link to='/'>Home</Link> </li>
                <li> <Link to='#'>Contact</Link> </li>
                <li> <Link to='#'>About</Link> </li>
            </ul>
        </nav>



        <div className='flex items-center gap-3 '>
            { ! isLoggedIn &&
                <Link to='/login'>
                <button className='border-2 px-4 py-1 border-slate-600 rounded-lg text-white'>
                    <span className='text-xl space-x-2'>L</span>og In</button>
                </Link>
            }

            {  ! isLoggedIn &&
                <Link to='/signup'>
                <button className='border-2 px-4 py-1 border-slate-600 rounded-lg text-white'>
                <span className='text-xl space-x-2'>S</span>ign Up</button>
                </Link>
            }
            { isLoggedIn &&
                <Link to='/'>
                <button className='border-2 px-4 py-1 border-slate-600 rounded-lg text-white'
                 onClick={ ()=>{
                    setisLoggedIn(false)
                    toast.success("log out")
                 }}
                >Log Out</button>
                </Link>
            }
            {  isLoggedIn && 
                <Link to='/dashboard'>
                <button className='border-2 px-4 py-1 border-slate-600 rounded-lg text-white'>Dashboard</button>
                </Link>
            }
        </div>


        
    </div>
  )
}

export default Navbar