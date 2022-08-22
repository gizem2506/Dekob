import React from 'react'
import bgImg from "../assets/manzara2.png"
import {ArrowRightIcon } from '@heroicons/react/outline'
import { useNavigate } from "react-router-dom";

function Write() {
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `newPath`; 
      navigate("/write2");
    }
  
  return (
    <div className='w-full h-screen flex flex-col justify-center'>
        <div className="w-full h-screen absolute z-100">
            <img className="w-full h-screen absolute object-cover" src={bgImg} alt="" />
            <div className='w-full h-screen absolute  bg-purple/70 '></div>
        </div>
        <div className='max-w[1240px] m-auto px-40 text-white z-10'>
            <div className='flex items-center'>
                <p className='mr-3'>1</p>
                <h1 className='text-2xl font-bold'>"Şu an" yazmaya başlamak için en iyi andır!</h1>
            </div>
            <p className='text-white my-3'>Daha iyisini beklemeyin.</p>
            <button onClick={routeChange} className='text-purple px-[16px] py-[8px] bg-white flex float-right items-center rounded-lg'>Devam edin <ArrowRightIcon className='w-5 ml-2'></ArrowRightIcon></button>
        </div>
    </div>

  )
}

export default Write