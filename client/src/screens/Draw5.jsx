import { useEffect, useRef, useState } from "react";
import Menu from "./Menu";
import bgImg from "../assets/manzara14.jpg"
import {ArrowRightIcon } from '@heroicons/react/outline'
import { useNavigate } from "react-router-dom";

function Draw5() {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [lineWidth, setLineWidth] = useState(5);
  const [lineColor, setLineColor] = useState("black");
  const [lineOpacity, setLineOpacity] = useState(0.1);
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `newPath`; 
    navigate("/draw6");
  }
  // Initialization when the component
  // mounts for the first time
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.globalAlpha = lineOpacity;
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = lineWidth;
    ctxRef.current = ctx;
  }, [lineColor, lineOpacity, lineWidth]);
  
  // Function for starting the drawing
  const startDrawing = (e) => {
    ctxRef.current.beginPath();
    ctxRef.current.moveTo(
      e.nativeEvent.offsetX, 
      e.nativeEvent.offsetY
    );
    setIsDrawing(true);
  };
  
  // Function for ending the drawing
  const endDrawing = () => {
    ctxRef.current.closePath();
    setIsDrawing(false);
  };
  
  const draw = (e) => {
    if (!isDrawing) {
      return;
    }
    ctxRef.current.lineTo(
      e.nativeEvent.offsetX, 
      e.nativeEvent.offsetY
    );
      
    ctxRef.current.stroke();
  };

  return (
    <div className="App w-full h-screen flex flex-col justify-center items-center bg-purple/70">
        <div className="w-full h-screen absolute z-100">
            <img className="w-full h-screen absolute object-cover" src={bgImg} alt="" />
            <div className='w-full h-screen absolute  bg-purple/70 '></div>
        </div>
        <div className='flex flex-col md:flex-row md:items-center mb-5 mx-5 md:mx-0 z-10 text-white'>
            <p className='mr-3'>5</p>
            <h1 className='text-lg md:text-2xl font-bold'>Rastgele bir şeyler karalamaya başla! Belkide gerisi gelir..</h1>
        </div>
        <div className="z-10 ">
            <div className="bg-white flex justify-center w-[600px] h-[400px] ">
            <canvas
                onMouseDown={startDrawing}
                onMouseUp={endDrawing}
                onMouseMove={draw}
                ref={canvasRef}
                width={`600px`}
                height={`400px`}
            /></div>
            <div className="draw-area mb-5">
                <Menu
                  setLineColor={setLineColor}
                  setLineWidth={setLineWidth}
                  setLineOpacity={setLineOpacity}
                />
            </div>
            <button onClick={routeChange} className='text-purple px-[16px] py-[8px] bg-white flex float-right items-center rounded-lg'> <span className='hidden md:block'>Devam edin</span>  <ArrowRightIcon className='w-5 md:ml-2'></ArrowRightIcon></button>
        </div>
    </div>
  );
}
  
export default Draw5;