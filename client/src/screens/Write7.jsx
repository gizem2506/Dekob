import React from 'react'
import bgImg from "../assets/manzara5.jpeg"
import {HomeIcon } from '@heroicons/react/outline'
import { useNavigate } from "react-router-dom";
import {ArrowRightIcon, RefreshIcon } from '@heroicons/react/outline'

function Write7() {
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `newPath`; 
      navigate("/");
    }
  //ekleyelim bu sayfayı sonra
  return (
    <div className='w-full h-screen flex flex-col justify-center'>
        <div className="w-full h-screen absolute z-100">
            <img className="w-full h-screen absolute object-cover" src={bgImg} alt="" />
            <div className='w-full h-screen absolute  bg-purple/70 '></div>
        </div>
        <div className='max-w[1240px] m-auto px-40 text-white z-10'>
            <div className='flex items-center'>
                <p className='mr-3'>6</p>
                <h1 className='text-2xl font-bold'>İşte rahatlatıcı ve seni mooda sokacak müzik önerilerimiz: </h1>
            </div>
            <a className='text-[#56E1FF] mx-5 flex' href=""><RefreshIcon className='w-5 mr-2'></RefreshIcon> Müzik öner</a>
            <button onClick={routeChange} className='text-purple px-[16px] py-[8px] bg-white flex float-right items-center rounded-lg'>Devam edin <ArrowRightIcon className='w-5 ml-2'></ArrowRightIcon> </button>
        </div>
    </div>

  )
}

export default Write7