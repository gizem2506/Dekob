import React from 'react'
import MoodCard from "../components/MoodCard";
import bgImg from "../assets/manzara.png"
function MoodScreen() {
  return (
    <div className='w-full h-screen flex flex-col justify-center'>
                <div className="w-full h-screen bg-purple/70 absolute z-1">
            <img className="w-full h-screen object-cover mix-blend-overlay" src={bgImg} alt="" />
        </div>
        <div className='max-w[1240px] m-auto px-40 '>
            <div className="grid grid-cols-2 lg:grid-cols-4 relative gap-x-8 gap-y-5 gay-y-16 px-4 pt-12 sm:pt-20 text-black">
                <MoodCard title='Deniz Kenarı' content="Kendinizi deniz kenarında hissetmeye hazır mısınız?" bgImg={bgImg}></MoodCard>
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