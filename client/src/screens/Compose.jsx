import React from 'react'
import bgImg from "../assets/manzara9.jpg"
import {ArrowRightIcon } from '@heroicons/react/outline'
import { io } from "socket.io-client";
import { useState } from "react";
let socket;
function Chatting() {
  const [message, setMessage] = useState('');
  const [messageList, setMessageList] = useState(JSON.parse(localStorage?.getItem('messageList')) || []);
  const [userName, setUserName] = useState(undefined);
  const [isUserNameCreated, setUserNameCreated] = useState(false);
  const onFormSubmit = e => {
    e.preventDefault();
    // send state to server with e.g. `window.fetch`
  }
  React.useEffect(() => {
    console.log(messageList);
    if(!socket){
    socket = io("ws://192.168.1.46:5002",{
      'reconnection': true,
      'reconnectionDelay': 500,
      'reconnectionAttempts': 10
    });
    console.log("new connection");
    socket.on("connect", () => {
        console.log(socket.id); 
      });

      socket.on("event", (data) => {
        console.log("new event", data);
        messageList.push(data);
        setMessageList([...messageList])
        localStorage.setItem("messageList", JSON.stringify(messageList));
      });
      
      socket.on("disconnect", () => {
        console.log("onDisconnect"); 
      });
    }
  }, []);
  
 
  console.log(JSON.parse(localStorage.getItem('messageList')))

  const handleMessage = (e) => {
    setMessage(e.target.value);
    
  }

  return (
    <div>
      { !isUserNameCreated ?
        (<div className='w-full h-screen flex flex-col justify-center'>
        <div className="w-full h-screen absolute z-100">
            <img className="w-full h-screen absolute object-cover" src={bgImg} alt="" />
            <div className='w-full h-screen absolute  bg-purple/70 '></div>
        </div>
        <div className='max-w[1240px] m-auto px-10 md:px-40 text-white z-10'>
          <form onSubmit={onFormSubmit}>
            <div className='flex flex-col md:flex-row md:items-center'>
                <p className='mr-3'></p>
                <h1 className='text-xl font-bold'>Kullanıcı Adı: </h1>
            </div>
            <div className='flex flex-col'>
              <input autoFocus={true} className='w-[500px] mb-7 h-[40px] text-black' type="text" onChange={(e)=>{
                setUserName(e.target.value)
              }} />
            </div>
            <button type='submit' onClick={()=>setUserNameCreated(true)} className='text-purple px-[16px] py-[8px] bg-white flex float-right items-center rounded-lg'><span className='hidden md:block'>Devam et</span><ArrowRightIcon className='w-5 md:ml-2'></ArrowRightIcon></button>
            </form>
        </div>
    </div>):

     
    (<div className='w-full h-screen flex flex-col justify-center'>
        <div className="w-full h-screen absolute z-100">
            <img className="w-full h-screen absolute object-cover" src={bgImg} alt="" />
            <div className='w-full h-screen absolute  bg-purple/70 '></div>
        </div>
        <div className='max-w[1240px] h-[70%] m-auto px-10 md:px-40 text-white z-10 '>
          <form onSubmit={onFormSubmit} >
            <div className='flex flex-col md:flex-row md:items-center'>
                <p className='mr-3'></p>
                <h1 className='text-xl font-bold'>Chat! </h1>
            </div>
            <div className='overflow-scroll h-[300px]'>
            {messageList?.slice(messageList.length-12 < 0 ? 0 : messageList.length-12 ,messageList.length).map((message)=>{
                return (<div className='flex justify-between'><p>{message.userName}:{message.message}</p><p>{message.time}</p></div>)
              })}
            </div>
            <div className='flex flex-col'>
              <input id='myInput' autoFocus={true} className='w-[500px] mb-7 h-[40px] text-black' type="text" onChange={(e)=>handleMessage(e)} /> 
              
              {/* setMessage(e.target.value) */}
            </div>
            <button type="submit" onClick={()=> {
              socket.emit("event",{message: message, userName:userName})
              document.getElementById('myInput').value = ''
            }
            } className='text-purple px-[16px] py-[8px] bg-white flex float-right items-center rounded-lg'><span className='hidden md:block'>Gönder</span><ArrowRightIcon className='w-5 md:ml-2'></ArrowRightIcon></button>
            </form>
        </div>
    </div>)}
</div>
  )
}

export default Chatting