import React from 'react'
import bgImg from "../assets/manzara3.png"
import {ArrowRightIcon, RefreshIcon } from '@heroicons/react/outline'
import { useNavigate } from "react-router-dom";

function Write2() {
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `newPath`; 
      navigate("/write3");
    }
  return (
    <div className='w-full h-screen flex flex-col justify-center'>
        <div className="w-full h-screen absolute z-100">
            <img className="w-full h-screen absolute object-cover" src={bgImg} alt="" />
            <div className='w-full h-screen absolute  bg-purple/70 '></div>
        </div>
        <div className='max-w[1240px] m-auto px-40 text-white z-10'>
            <div className='flex items-center mb-5'>
                <p className='mr-3'>2</p>
                <h1 className='text-2xl font-bold'>İşte ilhamınızı açacak konu önerileri:</h1>
            </div>
            <a className='text-[#56E1FF] mx-5 flex' href=""><RefreshIcon className='w-5 mr-2'></RefreshIcon> Rastgele konu üret</a>
            <div className='grid grid-cols-2 gap-y-5 gap-x-7 m-5'>
                <div>
                    <h1 className='text-2xl'>Konu 1</h1>
                    <p className='text-content'>Konu 1 hakkında uzunca bir açıklama. Toplamda maksimum 2 satır olacak şekilde</p>
                </div>
                <div>
                    <h1 className='text-2xl'>Konu 2</h1>
                    <p className='text-content'>Konu 2 hakkında uzunca bir açıklama. Toplamda maksimum 2 satır olacak şekilde</p>
                </div>
                <div>
                    <h1 className='text-2xl'>Konu 3</h1>
                    <p className='text-content'>Konu 3 hakkında uzunca bir açıklama. Toplamda maksimum 2 satır olacak şekilde</p>
                </div>
                <div>
                    <h1 className='text-2xl'>Konu 4</h1>
                    <p className='text-content'>Konu 4 hakkında uzunca bir açıklama. Toplamda maksimum 2 satır olacak şekilde</p>
                </div>
            </div>
            <button onClick={routeChange} className='text-purple px-[16px] py-[8px] bg-white flex float-right items-center rounded-lg'>Devam edin <ArrowRightIcon className='w-5 ml-2'></ArrowRightIcon></button>
        </div>
    </div>

  )
}

export default Write2