import React from 'react'
import MoodCard from "../components/MoodCard";
import bgImg from "../assets/moodbg.jpeg"
function MoodScreen() {
  return (
    <div className='w-full h-full flex flex-col justify-center'>
        <div className="w-full h-full z-100">
            <img className="w-full h-[3000px] absolute" src={bgImg} alt="" />
            <div className='w-full h-[3000px] absolute bg-purple/70 '></div>
        </div>
        <div className='max-w[1240px] m-auto px-20 bg-content bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-xl shadow-2xl backdrop-filter-blur'>
          <h1 className='text-3xl text-white py-5 text-center font-bold'>Moods</h1>
            <div className="grid grid-cols-2 lg:grid-cols-4 relative gap-x-8 gap-y-5 gay-y-16 px-4 text-black">
                <MoodCard title='Deniz Kenarı' content="Kendinizi deniz kenarında hissetmeye hazır mısınız?" bgImg={bgImg}></MoodCard>
                <MoodCard></MoodCard>
                <MoodCard></MoodCard>
                <MoodCard></MoodCard>
                <MoodCard></MoodCard>
                <MoodCard></MoodCard>
                <MoodCard></MoodCard>
                <MoodCard></MoodCard>
                <MoodCard></MoodCard>
                <MoodCard></MoodCard>
              
            </div>
        </div>
    </div>
  )
}
 
export default MoodScreen