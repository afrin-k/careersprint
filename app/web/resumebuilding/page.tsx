"use client";
import React, { useState } from 'react';
import mileStone from "@/public/milestoneicon.svg";
import Image from 'next/image';
import { WebBar } from '../WebBar';

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
    <section className='min-h-screen bg-white overflow-hidden'>
      <div className='flex'>        
        <WebBar/>

        <div className='flex-grow flex flex-col py-16 ml-[280px]'>
          
          <div className='flex items-center mb-8'>
            <div className='bg-gradient-to-r from-[#ff3131] to-[#ff914d] rounded-full py-2 px-8 mr-[108px] w-[700px]'>
              <h1 className='text-white text-lg font-semibold font-abeezee'>
                RESUME BUILDING
              </h1>
            </div>
          </div>

          
          <div className='space-y-6 w-full px-20 mx-auto'>
            <div>
              <div className='flex flex-row'>
                <Image src={mileStone} alt="mil" className="h-20 w-20"/>
                <h2 className='section-headings'>CONTENT AND STRUCTURE</h2>
              </div>
              <ul className='ul-styles'>
                {contentTasks.map((task, index) => (
                  <li key={index} className='ul-text'>
                    <input
                      type='checkbox'
                      checked={task.completed}
                      className='checkbox-styles'
                      onChange={() => handleCheckboxChange(contentTasks, setContentTasks, index)}
                    /> {task.label}
                  </li>
                ))}
              </ul>
            </div>

            <div>
            <div className='flex flex-row'>
                <Image src={mileStone} alt="mil" className="h-20 w-20"/>
                <h2 className='section-headings'>DESIGN AND LAYOUT</h2>
              </div>
              <ul className='ul-styles'>
                {designTasks.map((task, index) => (
                  <li key={index} className='ul-text'>
                    <input
                      type='checkbox'
                      checked={task.completed}
                      className='checkbox-styles'
                      onChange={() => handleCheckboxChange(designTasks, setDesignTasks, index)}
                    /> {task.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

       </div>
    </section>
  );
};

export default ResumeBuilding;
