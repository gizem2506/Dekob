import React from 'react'
import bgImg from "../assets/manzara4.jpeg"
import {ArrowRightIcon, RefreshIcon } from '@heroicons/react/outline'
import { useNavigate } from "react-router-dom";

function Write3() {
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `newPath`; 
      navigate("/write4");
    }
  return (
    <div className='w-full h-screen flex flex-col justify-center'>
        <div className="w-full h-screen absolute z-100">
            <img className="w-full h-screen absolute object-cover" src={bgImg} alt="" />
            <div className='w-full h-screen absolute  bg-purple/70 '></div>
        </div>
        <div className='max-w[1240px] m-auto px-10 md:px-40 text-white z-10'>
            <div className='flex flex-col md:flex-row md:items-center mb-5 mx-5 md:mx-0'>
                <p className='mr-3'>3</p>
                <h1 className='text-lg md:text-2xl font-bold '>Hata yapmaktan korkma, en saçma fikirler sana ilham olabilir ve harikalar yaratabilirsin. Hemingway’in de dediği gibi, sarhoşken yazın, ayıkken düzeltin.</h1>
            </div>
            <p className='text-white mx-5 mb-2'>İlham gelmesi için rastgele kelimeler üretelim dedik! </p>
            <a className='text-[#56E1FF] mx-5 flex' href=""><RefreshIcon className='w-5 mr-2'></RefreshIcon> Rastgele kelime üret</a>
            <div className='grid grid-cols-4 gap-y-5 gap-x-7 m-5'>
                <p>lorem</p>
                <p>lorem</p>
                <p>lorem</p>
                <p>lorem</p>
                <p>lorem</p>
                <p>lorem</p>
                <p>lorem</p>
                <p>lorem</p>
                <p>lorem</p>
                <p>lorem</p>
                <p>lorem</p>
                <p>lorem</p>
                <p>lorem</p>
                <p>lorem</p>
                <p>lorem</p>
                <p>lorem</p>
            </div>
            <button onClick={routeChange} className='text-purple px-[16px] py-[8px] bg-white flex float-right items-center rounded-lg'> <span className='hidden md:block'>Devam edin</span>  <ArrowRightIcon className='w-5 md:ml-2'></ArrowRightIcon></button>
        </div>
    </div>

  )
}

export default Write3