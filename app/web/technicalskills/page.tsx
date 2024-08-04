"use client";
import React, { useState } from 'react';

interface Task {
  label: string;
  completed: boolean;
}

const Technical: React.FC = () => {
  const [programmingTasks, setProgrammingTasks] = useState<Task[]>([
    { label: 'Choose a primary programming language', completed: true },
    { label: 'A beginner to advanced course on your chosen language', completed: true },
    { label: 'Solve 100+ coding problems on platforms like LeetCode', completed: false },
  ]);

  const [webDevTasks, setWebDevTasks] = useState<Task[]>([
    { label: 'Master HTML, CSS, and JavaScript fundamentals', completed: true },
    { label: 'Create a basic portfolio site or web application', completed: false },
    { label: 'Study front-end/back-end frameworks', completed: false },
  ]);

  const [dsaTasks, setDsaTasks] = useState<Task[]>([
    { label: 'Master data structures from basics to trees and graphs', completed: true },
    { label: 'Study the basics of algorithms from sorts to recursion', completed: false },
    { label: 'Solve 50+ DSA problems on LeetCode', completed: false },
    { label: 'Join coding contests to boost problem-solving speed', completed: false },
  ]);

  const handleCheckboxChange = (taskList: Task[], setTaskList: React.Dispatch<React.SetStateAction<Task[]>>, index: number) => {
    const newTasks = [...taskList];
    newTasks[index].completed = !newTasks[index].completed;
    setTaskList(newTasks);
  };

  return (
    <section className='min-h-screen bg-white'>
      <div className='flex'>
        {/* Sidebar */}
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

        {/* Main Content */}
        <div className='flex-grow flex flex-col py-16 px-8'>
          {/* Section Header */}
          <div className='flex items-center'>
            <button className='text-2xl text-[#ff3131] mr-4'>{'<'} </button>
            <div className='bg-gradient-to-r from-[#ff3131] to-[#ff914d] rounded-full py-2 px-8'>
              <h1 className='text-white text-lg font-semibold'>
                TECHNICAL SKILLS
              </h1>
            </div>
          </div>

          {/* Tasks List */}
          <div className='mt-8 space-y-6'>
            <div>
              <h2 className='text-lg font-bold text-[#ff3131]'>PROGRAMMING PROFICIENCY</h2>
              <ul className='list-none space-y-1'>
                {programmingTasks.map((task, index) => (
                  <li key={index}>
                    <input
                      type='checkbox'
                      checked={task.completed}
                      onChange={() => handleCheckboxChange(programmingTasks, setProgrammingTasks, index)}
                    /> {task.label}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className='text-lg font-bold text-[#ff3131]'>WEB DEVELOPMENT BASICS</h2>
              <ul className='list-none space-y-1'>
                {webDevTasks.map((task, index) => (
                  <li key={index}>
                    <input
                      type='checkbox'
                      checked={task.completed}
                      onChange={() => handleCheckboxChange(webDevTasks, setWebDevTasks, index)}
                    /> {task.label}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className='text-lg font-bold text-[#ff3131]'>DATA STRUCTURES AND ALGORITHMS (DSA)</h2>
              <ul className='list-none space-y-1'>
                {dsaTasks.map((task, index) => (
                  <li key={index}>
                    <input
                      type='checkbox'
                      checked={task.completed}
                      onChange={() => handleCheckboxChange(dsaTasks, setDsaTasks, index)}
                    /> {task.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className='flex flex-col items-center justify-center w-[300px] border-l-2 border-gray-300'>
          <div className='bg-white shadow-md rounded-md p-4'>
            <div className='text-lg text-[#ff3131] font-bold'>🔥 23 DAYS</div>
            <div className='text-lg text-[#ff3131] font-bold'>✅ 5/10 TASKS</div>
          </div>
          <div className='bg-white shadow-md rounded-md p-4 mt-6 text-center'>
            <p className='text-sm'>You last solved a LeetCode question X days ago. Time to go for one again?</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technical;
