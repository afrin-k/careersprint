"use client";
import React, { useState } from 'react';

interface Task {
  label: string;
  completed: boolean;
}

const ResumeBuilding: React.FC = () => {
  const [contentTasks, setContentTasks] = useState<Task[]>([
    { label: 'Tailor your resume to each job by emphasizing relevance', completed: false },
    { label: 'Employ a clear format: Contact, Summary, Skills, Experience', completed: false },
    { label: 'Craft a summary highlighting career goals and your value', completed: false },
    { label: 'Use industry-specific keywords to navigate ATS effectively', completed: false },
    { label: 'Enumerate both hard and soft skills, emphasizing those relevant', completed: false },
    { label: 'Use reverse chronological order, listing recent experiences first', completed: false },
    { label: 'Include relevant educational qualifications and job-specific training', completed: false },
  ]);

  const [designTasks, setDesignTasks] = useState<Task[]>([
    { label: 'Use consistent fonts, sizes, and spacing; choose professional layouts', completed: false },
    { label: 'Use a professional, clean, readable, and ATS-friendly resume format', completed: false },
    { label: 'For creative roles, add icons without distracting from content', completed: false },
    { label: 'Submit your resume in PDF format to preserve consistent formatting', completed: false },
  ]);

  const handleCheckboxChange = (taskList: Task[], setTaskList: React.Dispatch<React.SetStateAction<Task[]>>, index: number) => {
    const newTasks = [...taskList];
    newTasks[index].completed = !newTasks[index].completed;
    setTaskList(newTasks);
  };

  return (
    <section className='min-h-screen bg-white'>
      <div className='flex'>
        
        <div className='h-screen w-[250px] border-r-2 border-gray-300 flex flex-col items-center justify-start gap-6 py-16 px-6'>
          <button className='text-2xl font-semibold text-left text-[#ff3131] font-abeezee'>
            CareerSprint
          </button>
          <button className='home-btn'>HOME</button>
          <button className='home-btn'>SECTIONS</button>
          <button className='home-btn'>PROGRESS</button>
          <button className='home-btn'>PROFILE</button>
          <button className='home-btn'>MORE</button>
        </div>

        <div className='flex-grow flex flex-col items-center py-16 px-8'>
          
          <div className='flex items-center mb-8'>
            <button className='text-2xl text-[#ff3131] mr-4'>{'<'} </button>
            <div className='bg-gradient-to-r from-[#ff3131] to-[#ff914d] rounded-full py-2 px-8'>
              <h1 className='text-white text-lg font-semibold'>
                RESUME BUILDING
              </h1>
            </div>
          </div>

          
          <div className='space-y-6 w-full max-w-lg mx-auto'>
            <div>
              <h2 className='text-lg font-bold text-[#ff3131] text-left'>CONTENT AND STRUCTURE</h2>
              <ul className='list-none space-y-1'>
                {contentTasks.map((task, index) => (
                  <li key={index} className='text-left'>
                    <input
                      type='checkbox'
                      checked={task.completed}
                      onChange={() => handleCheckboxChange(contentTasks, setContentTasks, index)}
                    /> {task.label}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className='text-lg font-bold text-[#ff3131] text-left'>DESIGN AND LAYOUT</h2>
              <ul className='list-none space-y-1'>
                {designTasks.map((task, index) => (
                  <li key={index} className='text-left'>
                    <input
                      type='checkbox'
                      checked={task.completed}
                      onChange={() => handleCheckboxChange(designTasks, setDesignTasks, index)}
                    /> {task.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className='flex flex-col items-center justify-center w-[300px] border-l-2 border-gray-300'>
          <div className='bg-white shadow-md rounded-md p-4'>
            <div className='text-lg text-[#ff3131] font-bold'>📄 Resume Tips</div>
            <div className='text-sm text-[#ff3131] font-semibold mt-2'>
              Follow these steps to create an outstanding resume!
            </div>
          </div>
          <div className='bg-white shadow-md rounded-md p-4 mt-6'>
            <img src='/path/to/image1.jpg' alt='Resume Tips' className='w-full h-auto mb-4'/>
            <img src='/path/to/image2.jpg' alt='Resume Guide' className='w-full h-auto mb-4'/>
            <img src='/path/to/image3.jpg' alt='ATS-Friendly Resume' className='w-full h-auto'/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeBuilding;
