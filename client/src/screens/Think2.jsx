import React from 'react'
import bgImg from "../assets/manzara9.jpg"
import {ArrowRightIcon } from '@heroicons/react/outline'
import { useNavigate } from "react-router-dom";

function Think2() {
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `newPath`; 
      navigate("/draw2");
    }
  
  return (
    <div className='w-full h-screen flex flex-col justify-center'>
        <div className="w-full h-screen absolute z-100">
            <img className="w-full h-screen absolute object-cover" src={bgImg} alt="" />
            <div className='w-full h-screen absolute  bg-purple/70 '></div>
        </div>
        <div className='max-w[1240px] m-auto px-40 text-white z-10'>
            <div className='flex flex-col md:flex-row md:items-center'>
                <p className='mr-3'>2</p>
                <h1 className='text-2xl font-bold'>Kendinizin veya çevrenizdekilerim yaşadığı sorunları düşünün</h1>
            </div>
            <p className='text-white my-3'>Unutmayın her problem için ürün çıkmış olsa da ne kadarının sorunu çözdüğünü bilemeyiz.</p>
            <button onClick={routeChange} className='text-purple px-[16px] py-[8px] bg-white flex float-right items-center rounded-lg'> <span className='hidden md:block'>Devam edin</span>  <ArrowRightIcon className='w-5 md:ml-2'></ArrowRightIcon></button>
        </div>
    </div>

  )
}

export default Think2