import { useCallback, useEffect, useRef, useState } from 'react';

import bgImg from "../assets/manzara3.png"
function Draw2() {
    const colors =[
        "red",
        "green",
        "blue",
        "yellow",
        "black",
      ]
    const canvasRef = useRef(null);
    const ctx =useRef(null);
    const [selectedColor , setSelectedColor] = useState(colors[4]); //hangi renkle başlayacak.
    const [mauseDown,setMauseDown] = useState(false);
    const [lastPoisition ,setPosition] = useState({
      x:0,
      y:0
    })
  
    useEffect(() => {
      if (canvasRef.current){
        ctx.current = canvasRef.current.getContext("2d");
      }
        } , [] )
  
  
  
    const draw = useCallback((x, y) => {
      if(mauseDown){
        ctx.current.beginPath();
        ctx.current.strokeStyle = selectedColor;
        ctx.current.lineWidth = 1; //Kalınlığı Değiştirir.
        ctx.current.lineJoin = "round";
        ctx.current.moveTo(lastPoisition.x, lastPoisition.y);
        ctx.current.lineTo(x,y);
        ctx.current.closePath();
        ctx.current.stroke();
  
        setPosition({
  
          x,
          y
  
        })
  
      }
    }, [lastPoisition , mauseDown , selectedColor, setPosition] )
  
    const download = async () => {
      const image = canvasRef.current.toDataURL("image/png");
      const blob = await (await fetch(image)).blob();
      const blobURL = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = blobURL;
      link.download = "image.png";
      link.click();
    }
  
    const clear = () => {
      ctx.current.clearRect(0, 0, ctx.current.canvas.width , ctx.current.canvas.height)
    }
  
    const onMasueDown = (e) => {
      setPosition({
        x: e.pageX,
        y: e.PageY
      })
      setMauseDown(true)
    }
  
    const onMasueUp = (e) => {
      setMauseDown(false)
    }
  
    const onMasueLeave = (e) => {
      setMauseDown(false)
    }
    
     const onMasueMove = (e) =>{
      draw(e.pageX , e.pageY )
    }
  return (
    <div className='w-full h-screen flex flex-col justify-center'>
        <div className="w-full h-screen absolute z-100">
            <img className="w-full h-screen absolute object-cover" src={bgImg} alt="" />
            <div className='w-full h-screen absolute  bg-purple/70 '></div>
        </div>
        <div className="App z-10 ">
    <canvas 
      style={{
        border: "1px solid #000",
      }}
      ref={canvasRef}
      onMouseMove={onMasueMove}
      onMouseUp={onMasueUp}
      onMouseDown={onMasueDown}
      onMouseLeave={onMasueLeave}
      />
      <br></br>
      <select
       value={selectedColor}
        onChange = {(e) => setSelectedColor(e.target.value) }
        >
       {
         colors.map(
          color => <option key={color} value={color}>{color}</option>
        )
       }
      </select>
      <button onClick={clear}>Sil</button>
      <button onClick={download}>Yükle</button>
    </div>
    </div>

  )
}

export default Draw2