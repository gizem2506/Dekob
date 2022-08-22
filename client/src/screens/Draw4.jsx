import React from 'react'
import bgImg from "../assets/manzara4.jpeg"
import {ArrowRightIcon, RefreshIcon } from '@heroicons/react/outline'
import { useNavigate } from "react-router-dom";
import Iframe from 'react-iframe'

function Draw4() {
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `newPath`; 
      navigate("/draw5");
    }
  return (
    <div className='w-full h-screen flex flex-col justify-center'>
        <div className="w-full h-screen absolute z-100">
            <img className="w-full h-screen absolute object-cover" src={bgImg} alt="" />
            <div className='w-full h-screen absolute  bg-purple/70 '></div>
        </div>
        <div className='max-w[1240px] m-auto px-10 md:px-40 text-white z-10'>
            <div className='flex flex-col md:flex-row md:items-center mb-5 mx-5 md:mx-0'>
                <p className='mr-3'>4</p>
                <h1 className='text-lg md:text-2xl font-bold'>Senin için seçtiğimiz müzikler belki ilham gelmesi için yardımcı olur.</h1>
            </div>
            <a className='text-[#56E1FF] mx-5 flex' href=""><RefreshIcon className='w-5 mr-2'></RefreshIcon> Rastgele müzik öner</a>
            <div className='grid grid-cols md:grid-cols-2 gap-y-5 gap-x-7 m-5'>
                <div className='flex flex-col items-center'>
                <Iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6xGruZOHLs39ZbVccQTuPZ?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></Iframe>
                </div>
                <div className='flex flex-col items-center'>
                <Iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0yc6Gst2xkRu0eMLeRMGCX?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></Iframe>
                </div>
                <div className='flex flex-col items-center'>
                <Iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6HTOlqfBQdEGeO0ydhOAs7?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></Iframe>
                </div>
                <div className='flex flex-col items-center'>
                <Iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5YzaostcCu9Sgp5T7bFuX3?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></Iframe>
                </div>

            </div>
            <button onClick={routeChange} className='text-purple px-[16px] py-[8px] bg-white flex float-right items-center rounded-lg'> <span className='hidden md:block'>Devam edin</span>  <ArrowRightIcon className='w-5 md:ml-2'></ArrowRightIcon></button>
        </div>
    </div>

  )
}

export default Draw4