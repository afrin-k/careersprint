"use client";
import React, { useState } from 'react';

interface Task {
  label: string;
  completed: boolean;
}

const SoftSkills: React.FC = () => {
  const [communicationTasks, setCommunicationTasks] = useState<Task[]>([
    { label: 'Engage in group discussions to enhance verbal communication', completed: false },
    { label: 'Develop a concise personal pitch highlighting your background', completed: false },
    { label: 'Enroll in an online course or workshop on business communication', completed: false },
  ]);

  const [teamworkTasks, setTeamworkTasks] = useState<Task[]>([
    { label: 'Participate in a group project or hackathon for diverse teamwork', completed: false },
    { label: 'Practice constructive feedback exchange within a collaborative environment', completed: false },
    { label: 'Utilize collaboration tools to effectively coordinate and manage projects', completed: false },
  ]);

  const [problemSolvingTasks, setProblemSolvingTasks] = useState<Task[]>([
    { label: 'Address real-world issues by identifying, brainstorming solutions', completed: false },
    { label: 'Engage in puzzles or games to enhance logical problem solving skills', completed: false },
    { label: 'Reflect on a past challenge and document your approach and solution', completed: false },
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
                SOFT SKILLS
              </h1>
            </div>
          </div>

          
          <div className='space-y-6 w-full max-w-lg mx-auto'>
            <div>
              <h2 className='text-lg font-bold text-[#ff3131] text-left'>COMMUNICATION SKILLS</h2>
              <ul className='list-none space-y-1'>
                {communicationTasks.map((task, index) => (
                  <li key={index} className='text-left'>
                    <input
                      type='checkbox'
                      checked={task.completed}
                      onChange={() => handleCheckboxChange(communicationTasks, setCommunicationTasks, index)}
                    /> {task.label}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className='text-lg font-bold text-[#ff3131] text-left'>TEAMWORK AND COLLABORATION</h2>
              <ul className='list-none space-y-1'>
                {teamworkTasks.map((task, index) => (
                  <li key={index} className='text-left'>
                    <input
                      type='checkbox'
                      checked={task.completed}
                      onChange={() => handleCheckboxChange(teamworkTasks, setTeamworkTasks, index)}
                    /> {task.label}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className='text-lg font-bold text-[#ff3131] text-left'>PROBLEM SOLVING AND CRITICAL THINKING</h2>
              <ul className='list-none space-y-1'>
                {problemSolvingTasks.map((task, index) => (
                  <li key={index} className='text-left'>
                    <input
                      type='checkbox'
                      checked={task.completed}
                      onChange={() => handleCheckboxChange(problemSolvingTasks, setProblemSolvingTasks, index)}
                    /> {task.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className='flex flex-col items-center justify-center w-[300px] border-l-2 border-gray-300'>
          <div className='bg-white shadow-md rounded-md p-4'>
            <div className='text-lg text-[#ff3131] font-bold'>🗣️ Communication Tips</div>
            <div className='text-sm text-[#ff3131] font-semibold mt-2'>
              Enhance your communication and teamwork skills!
            </div>
          </div>
          <div className='bg-white shadow-md rounded-md p-4 mt-6'>
            <img src='/path/to/image1.jpg' alt='Communication Tips' className='w-full h-auto mb-4'/>
            <img src='/path/to/image2.jpg' alt='Teamwork Tips' className='w-full h-auto mb-4'/>
            <img src='/path/to/image3.jpg' alt='Critical Thinking Tips' className='w-full h-auto'/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftSkills;
