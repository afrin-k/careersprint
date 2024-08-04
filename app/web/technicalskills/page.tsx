"use client"
import React from 'react'

const Technical = () => {
  return (
    <section className='h-fit bg-white'>
      <div className='flex flex-row justify-between'>
        <div className='h-screen w-[300px] border-r-2 border-gray-400 flex flex-col items-center justify-start gap-6 py-28 px-10'>
          <button className='text-lg font-semibold text-left text-[#ff3131] font-abeezee'>CAREERSPRINT</button>
          <button className='home-btn'>HOME</button>
          <button className='home-btn'>SECTIONS</button>
          <button className='home-btn'>PROGRESS</button>
          <button className='home-btn'>PROFILE</button>
          <button className='home-btn'>MORE</button>
        </div>
        <div className='flex flex-row'>
            <div className='flex flex-col py-28 items-center justify-between'>
              <div className='py-2 px-10 bg-gradient-to-r from-[#ff3131] to-[#ff914d] rounded-full w-[600px]'>
               <h1 className='section-text py-0 px-0'>TECHNICAL SKILLS</h1>
              </div>  
              <div className='border-2 border-black pt-20 px-10 h-[200px] w-[500px]'>
                <h2>Leetcode : Last submitted an answer X days ago</h2>
              </div>

            </div>
            <div className='flex flex-col h-screen w-[300px] border-l-2 border-gray-400 items-center justify-around gap-6 py-10 px-10'>
                
            </div>      
        </div>
      </div>
    </section>

  )
};
export default Technical;