import React from 'react'
import bgImg from '../assets/manzara.png'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useNavigate } from "react-router-dom";
import {GlobeIcon, ArrowRightIcon } from '@heroicons/react/outline'
import {DocumentTextIcon, PencilIcon,SparklesIcon, ChatAltIcon} from '@heroicons/react/solid'
function HomePage() {
  const options = [
    'mutlu','kırgın','yaralı','depresyon','harika','huzursuz','huzurlu'
  ];
  let navigate = useNavigate(); 
  const routeWrite = () =>{ 
    let path = `newPath`; 
    navigate("/write1");
  }
  const routeDraw = () =>{ 
    let path = `newPath`; 
    navigate("/draw");
  }
  const routeMood = () =>{ 
    let path = `newPath`; 
    navigate("/moods");
  }
  const routeThink = () =>{ 
    let path = `newPath`; 
    navigate("/think");
  }
  const routeCompose = () =>{ 
    let path = `newPath`; 
    navigate("/compose");
  }
  return (
    <div className='h-screen flex flex-col justify-center items-center text-white text-center'>
        <div className="w-full h-screen bg-purple/50 absolute z-1">
            <img className="w-full h-screen object-cover mix-blend-overlay" src={bgImg} alt="" />
        </div>
        <div className='z-0 transform scale-75 md:scale-100 mt-9'>
          <h1 className='font-bold text-4xl mb-2'>Ambianche hoş geldiniz!</h1>
          <p className='break-words'>İlhamınızın gelmesi için gerekli ortamlar sağlandı. Hemen aşağıdan ilhama ihtiyacınız olan alanı seçin ve gerisini bize bırakın!</p>
          <div className='flex justify-center items-center'>
          <div className="bg-white rounded-xl shadow-2xl w-[300px] md:w-auto mt-6">
            <div className="p-5 flex flex-col md:flex-row gap-y-2 justify-center items-center">
                <button disabled className='bg-purple flex items-center rounded-lg px-4 py-2 text-white mx-3 border-2 border-purple '><GlobeIcon className='w-5 mr-1'></GlobeIcon>İlham Al</button>
                <button onClick={routeWrite} className='text-purple flex items-center rounded-lg  px-4 py-2 bg-white mx-3 border-2 border-purple'><DocumentTextIcon className='w-5 mr-1'></DocumentTextIcon>Yazıyorum</button>
                <button onClick={routeDraw} className='text-purple flex items-center rounded-lg px-4 py-2 bg-white mx-3 border-2 border-purple'><PencilIcon className='w-5 mr-1'></PencilIcon>Çiziyorum</button>
                <button onClick={routeThink} className='text-purple flex items-center rounded-lg px-4 py-2 bg-white mx-3 border-2 border-purple'><SparklesIcon className='w-5 mr-1'></SparklesIcon>Düşünüyorum</button>
                <button onClick={routeCompose} className='text-purple flex items-center rounded-lg px-4 py-2 bg-white mx-3 border-2 border-purple'> <ChatAltIcon className='w-5 mr-1'></ChatAltIcon>Mesajlaşalım!</button>
            </div>              
        </div></div>
        <p className='my-5'>veya</p>
        <div className="bg-white rounded-xl shadow-2xl my-6 mx-[100px]">
            <div className="p-5 flex justify-center items-center">
            <Dropdown className='w-full rounded-l-lg text-left' options={options}  placeholder="Bugün nasıl hissediyorsun?" />
            <button onClick={routeMood} className='rounded-r-lg bg-purple flex flex-row items-center px-[16px] py-[8px] w-[130px]' placeholder=''>Ortamı bul</button>
            </div>
                        
        </div>
        <a className='flex shadow-2xl items-center justify-center' href="">Tüm ortamları gör<ArrowRightIcon className='w-5 ml-2'></ArrowRightIcon></a>
      </div>
    </div>
  )
}

export default HomePage