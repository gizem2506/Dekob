import React from 'react'
import bgImg from "../assets/manzara3.png"
import {ArrowRightIcon, RefreshIcon } from '@heroicons/react/outline'
import { useNavigate } from "react-router-dom";
import MoodCard from '../components/MoodCard';

function Write5() {
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `newPath`; 
      navigate("/write6");
    }
  return (
    <div className='w-full h-screen flex flex-col justify-center'>
        <div className="w-full h-screen absolute z-100">
            <img className="w-full h-screen absolute object-cover" src={bgImg} alt="" />
            <div className='w-full h-screen absolute  bg-purple/70 '></div>
        </div>
        <div className='max-w[1240px] m-auto px-10 md:px-40 text-white z-10'>
            <div className='flex flex-col md:flex-row md:items-center mb-5 mx-5 md:mx-0'>
                <p className='mr-3'>5</p>
                <h1 className='text-lg md:text-2xl font-bold'>Özgür olun, daha da özgür... En özgür hissedeceğiniz hale bürünmeye çalışın</h1>
            </div>
            <p className='text-white mx-5 mb-2'> Burada sizin için seçilen ortamlarımızdan yararlanabilirsiniz </p>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-y-5 gap-x-7 m-5'>
                <MoodCard title='Deniz Kenarı' content="Kendinizi deniz kenarında hissetmeye hazır mısınız?" bgImg={bgImg}></MoodCard>
                <MoodCard></MoodCard>
                <MoodCard></MoodCard>
                <MoodCard></MoodCard>
            </div>
            <button onClick={routeChange} className='text-purple px-[16px] py-[8px] bg-white flex float-right items-center rounded-lg'> <span className='hidden md:block'>Devam edin</span>  <ArrowRightIcon className='w-5 md:ml-2'></ArrowRightIcon></button>
        </div>
    </div>

  )
}

export default Write5