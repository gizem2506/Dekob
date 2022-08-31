import React from 'react'
import bgImg from "../assets/manzara3.png"
import obje1 from "../assets/obje.jpg"
import obje2 from "../assets/obje2.jpg"
import obje3 from "../assets/obje3.jpg"
import obje4 from "../assets/obje4.jpg"
import {ArrowRightIcon, RefreshIcon } from '@heroicons/react/outline'
import { useNavigate } from "react-router-dom";

function Draw6() {
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `newPath`; 
      navigate("/draw7");
    }
  return (
    <div className='w-full h-screen flex flex-col justify-center'>
        <div className="w-full h-screen absolute z-100">
            <img className="w-full h-screen absolute object-cover" src={bgImg} alt="" />
            <div className='w-full h-screen absolute  bg-purple/70 '></div>
        </div>
        <div className='max-w[1240px] m-auto px-10 md:px-40 text-white z-10'>
            <div className='flex flex-col md:flex-row md:items-center mb-5 mx-5 md:mx-0'>
                <p className='mr-3'>6</p>
                <h1 className='text-lg md:text-2xl font-bold'>Rastgele objeler öner</h1>
            </div>
            <a className='text-[#56E1FF] mx-5 flex' href=""><RefreshIcon className='w-5 mr-2'></RefreshIcon> Rastgele obje öner</a>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-y-5 gap-x-7 m-5'>
                <div className='flex flex-col items-center'>
                    <img className='m-5 w-[100px] h-[100px] md:w-[150px] md:h-[150px]' src={obje1} alt="" />
                    <p className='text-white text-md md:text-lg'>Dondurma külahı</p>
                </div>
                <div className='flex flex-col items-center'>
                    <img className='m-5 w-[100px] h-[100px] md:w-[150px] md:h-[150px]' src={obje2} alt="" />
                    <p className='text-white text-md md:text-lg'>Kaktüs</p>
                </div>
                <div className='flex flex-col items-center'>
                    <img className='m-5 w-[100px] h-[100px] md:w-[150px] md:h-[150px]' src={obje3} alt="" />
                    <p className='text-white text-md md:text-lg'>Rubik küp</p>
 
                </div>
                <div className='flex flex-col items-center'>
                    <img className='m-5 w-[100px] h-[100px] md:w-[150px] md:h-[150px]' src={obje4} alt="" />
                    <p className='text-white text-md md:text-lg'>Masa lambası</p>
                </div>
            </div>
            <button onClick={routeChange} className='text-purple px-[16px] py-[8px] bg-white flex float-right items-center rounded-lg'> <span className='hidden md:block'>Devam edin</span>  <ArrowRightIcon className='w-5 md:ml-2'></ArrowRightIcon></button>
        </div>
    </div>

  )
}

export default Draw6