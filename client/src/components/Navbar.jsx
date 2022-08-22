import React from 'react'
import logo from '../assets/logo.svg'
import { useNavigate } from "react-router-dom";
function Navbar() {
    let navigate = useNavigate(); 
    const routeHome = () =>{ 
      let path = `newPath`; 
      navigate("/");
    }
  return (
    <button onClick={routeHome} className='flex absolute bg-none z-10 mt-5 ml-5 items-center'>
        <img className='w-[25px] mr-2' src={logo} alt="" />
        <h1 className='text-xl text-white '>Ambianche</h1>
    </button>
  )
}

export default Navbar