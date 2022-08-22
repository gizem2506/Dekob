import React from 'react'
import bgImg from "../assets/manzara9.jpg"
import {HomeIcon } from '@heroicons/react/outline'
import { useNavigate } from "react-router-dom";

function Think2() {
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `newPath`; 
      navigate("/");
    }
  
  return (
    <div className='w-full h-screen flex flex-col justify-center'>
        <div className="w-full h-screen absolute z-100">
            <img className="w-full h-screen absolute object-cover" src={bgImg} alt="" />
            <div className='w-full h-screen absolute  bg-purple/70 '></div>
        </div>
        <div className='max-w[1240px] m-auto px-10 md:px-40 text-white z-10'>
            <div className='flex flex-col md:flex-row md:items-center'>
                <p className='mr-3'></p>
                <h1 className='text-[70px] font-bold'>Coming Soon.. </h1>
            </div>
           
            <button onClick={routeChange} className='text-purple px-[16px] py-[8px] bg-white flex float-right items-center rounded-lg'><span className='hidden md:block'>Ana Sayfa</span><HomeIcon className='w-5 md:ml-2'></HomeIcon></button>
        </div>
    </div>

  )
}

export default Think2