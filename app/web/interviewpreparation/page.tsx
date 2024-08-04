"use client";
import React, { useState } from 'react';

interface Task {
  label: string;
  completed: boolean;
}

const InterviewPreparation: React.FC = () => {
  const [companyResearchTasks, setCompanyResearchTasks] = useState<Task[]>([
    { label: "Examine the company's mission, values, products, and services", completed: false },
    { label: 'Research on recent news, press releases, and financial reports', completed: false },
    { label: 'Investigate company culture, environment, and employee reviews', completed: false },
  ]);

  const [jobRoleTasks, setJobRoleTasks] = useState<Task[]>([
    { label: 'Analyze the job description for key responsibilities and skills', completed: false },
    { label: 'Match your skills to job requirements with specific examples', completed: false },
    { label: 'Investigate typical tasks, tools, and challenges of the role', completed: false },
  ]);

  const [technicalInterviewTasks, setTechnicalInterviewTasks] = useState<Task[]>([
    { label: 'Practice coding problems on LeetCode, HackerRank, or Codeforces', completed: false },
    { label: 'Review data structures, algorithms, and common interview questions', completed: false },
    { label: 'Conduct mock coding interviews with peers or online tools', completed: false },
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
                INTERVIEW PREPARATION
              </h1>
            </div>
          </div>

          
          <div className='space-y-6 w-full max-w-lg mx-auto'>
            <div>
              <h2 className='text-lg font-bold text-[#ff3131] text-left'>RESEARCH THE COMPANY</h2>
              <ul className='list-none space-y-1'>
                {companyResearchTasks.map((task, index) => (
                  <li key={index} className='text-left'>
                    <input
                      type='checkbox'
                      checked={task.completed}
                      onChange={() => handleCheckboxChange(companyResearchTasks, setCompanyResearchTasks, index)}
                    /> {task.label}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className='text-lg font-bold text-[#ff3131] text-left'>JOB ROLE</h2>
              <ul className='list-none space-y-1'>
                {jobRoleTasks.map((task, index) => (
                  <li key={index} className='text-left'>
                    <input
                      type='checkbox'
                      checked={task.completed}
                      onChange={() => handleCheckboxChange(jobRoleTasks, setJobRoleTasks, index)}
                    /> {task.label}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className='text-lg font-bold text-[#ff3131] text-left'>TECHNICAL INTERVIEWS</h2>
              <ul className='list-none space-y-1'>
                {technicalInterviewTasks.map((task, index) => (
                  <li key={index} className='text-left'>
                    <input
                      type='checkbox'
                      checked={task.completed}
                      onChange={() => handleCheckboxChange(technicalInterviewTasks, setTechnicalInterviewTasks, index)}
                    /> {task.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className='flex flex-col items-center justify-center w-[300px] border-l-2 border-gray-300'>
          <div className='bg-white shadow-md rounded-md p-4'>
            <div className='text-lg text-[#ff3131] font-bold'>💼 Interview Tips</div>
            <div className='text-sm text-[#ff3131] font-semibold mt-2'>
              Key points to remember before your interview!
            </div>
          </div>
          <div className='bg-white shadow-md rounded-md p-4 mt-6'>
            <img src='/path/to/image1.jpg' alt='Interview Tips 1' className='w-full h-auto mb-4'/>
            <img src='/path/to/image2.jpg' alt='Interview Tips 2' className='w-full h-auto mb-4'/>
            <img src='/path/to/image3.jpg' alt='Interview Tips 3' className='w-full h-auto'/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterviewPreparation;
