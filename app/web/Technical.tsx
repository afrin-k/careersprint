import React from 'react'

export const Technical = () => {
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
            <div className='flex flex-col'>
                <></>

            </div>
            <div className='flex flex-col h-screen w-[300px] border-l-2 border-gray-400 items-center justify-around gap-6 py-10 px-10'>
                <div className='border-4 border-gray-500 h-[260px] w-[260px]'></div>
                <div className='border-4 border-gray-500 h-[260px] w-[260px]'></div>   
                <div className='border-4 border-gray-500 h-[260px] w-[260px]'></div>
            </div>      
        </div>
      </div>
    </section>

  )
};
