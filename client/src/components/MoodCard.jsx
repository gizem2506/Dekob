import React from 'react'
import bgImg from "../assets/manzara.png"
function MoodCard(props) {
  return (
      <div className="bg-transparent group cursor-pointer group perspective h-[270px] w-[200px]">
        <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
        <div className="absolute backface-hidden border-2 w-full h-full">
          <img src={props.bgImg} className="w-full h-full" alt=''/>

        </div>
        <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden">
          <div className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24">
            <h1 className='font-bold text-2xl'>{props.title}</h1>
            <p>{props.content}</p>
            <button className="bg-purple px-6 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125">
              Mood
            </button>
          </div>
        </div>
      </div>
      </div>

      
    )
}

export default MoodCard