import React from 'react'
import bgImg from "../assets/manzara17.jpg"
import {ArrowRightIcon, RefreshIcon } from '@heroicons/react/outline'
import { useNavigate } from "react-router-dom";
import axios from "axios";
const baseUrl = "localhost:5001/api/v1/moods/uploadphoto";

function Think3() {
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `newPath`; 
      navigate("/think4");
    }
    const [formData, setFormData] = React.useState([
      {
        title: "",
        category: "",
        content:"",
        img: null,
      },
    ]);
    var item = formData[Math.floor(Math.random() * formData.length)];
    React.useEffect(() => {
      getData();
    }, []);
    const getData = async () => {
      await axios
        .get("http://localhost:5001/api/v1/moods/uploadphoto")
        .then((response) => {
          setFormData(response.data.data.moods);
          //console.log(response.data.data.moods);
        })
        .catch((error) => {
          console.log(error.message);
        });
    };
  return (
    <div className='w-full h-screen flex flex-col justify-center'>
        <div className="w-full h-screen absolute z-100">
            <img className="w-full h-screen absolute object-cover" src={bgImg} alt="" />
            <div className='w-full h-screen absolute  bg-purple/70 '></div>
        </div>
        <div className='max-w[1240px] m-auto px-10 md:px-40 text-white z-10'>
            <div className='flex flex-col md:flex-row md:items-center mx-5'>
                <p className='mr-3'>3</p>
                <h1 className='text-2xl font-bold'>Yaratıcılığınızı öldüren kişilerden uzak durmanın kesinlikle faydası olacaktır. </h1>
            </div>
            <p className='mx-5 text-white my-3'>Önyargılarınızdan tamamiyle kurtulmalı ve ufkunuzu olabildiğince geniş tutmalısınız</p>
            <a className='text-[#56E1FF] mx-5 flex' href=""><RefreshIcon className='w-5 mr-2'></RefreshIcon>Seni düşünmeye yöneltecek sorular</a>
            <div className='grid md:grid-cols-2 gap-y-5 gap-x-7 m-5'>
                
                    <h1 className='text-xl'>{item.title}</h1>
                    <h1 className='text-xl'>{item.title}</h1>
                    <h1 className='text-xl'>{item.title}</h1>
                    <h1 className='text-xl'>{item.title}</h1>
            </div>
            <button onClick={routeChange} className='text-purple px-[16px] py-[8px] bg-white flex float-right items-center rounded-lg'> <span className='hidden md:block'>Devam edin</span>  <ArrowRightIcon className='w-5 md:ml-2'></ArrowRightIcon></button>
        </div>
    </div>

  )
}

export default Think3