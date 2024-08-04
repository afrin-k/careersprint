"use client"
import Image from 'next/image';
import React from 'react'
import section1Img from "@/public/section1.svg";
import section2Img from "@/public/section2.svg";
import section3Img from "@/public/section3.svg";
import section4Img from "@/public/section4.svg";
import section5Img from "@/public/section5.svg";
import section6Img from "@/public/section6.svg";
import section7Img from "@/public/section7.svg";
import { useRouter } from 'next/navigation';
export const Homie = () =>{ 
  const router = useRouter();
  const technical = () => {
    void router.push("/web/technicalskills");
  };
  const network = () => {
    void router.push("/web/networking");
  };
  const certification = () => {
    void router.push("/web/certifications");
  };
  return( 
     
    <section className='h-fit bg-white'>
      <div className='flex flex-row'>
        <div className='h-screen w-[300px] border-r-2 border-gray-400 flex flex-col items-center justify-start gap-6 py-28 px-10'>
          <button className='text-lg font-semibold text-left text-[#ff3131] font-abeezee'>CAREERSPRINT</button>
          <button className='home-btn'>HOME</button>
          <button className='home-btn'>SECTIONS</button>
          <button className='home-btn'>PROGRESS</button>
          <button className='home-btn'>PROFILE</button>
          <button className='home-btn'>MORE</button>
        </div>
        <div className='flex flex-col items-center justify-start gap-6 py-28 px-10'>
          <div className='section-body'>
            <button className='section-text' onClick={technical}>SECTION 1 : TECHNICAL SKILLS</button>
            <Image src={section1Img} alt="section1" className='section-img'/>
          </div>
          <div className='section-body'>
            <button className='section-text'>SECTION 2 : SOFT SKILLS</button>
            <Image src={section2Img} alt="section2" className='section-img'/>
          </div>
          <div className='section-body'>
            <button className='section-text'>SECTION 3 : PROJECT EXPERIENCE</button>
            <Image src={section3Img} alt="section3" className='section-img'/>
          </div>
          <div className='section-body'>
            <button className='section-text'>SECTION 4 : INTERVIEW PREPARATION</button>
            <Image src={section4Img} alt="section4" className='section-img'/>
          </div>
          <div className='section-body'>
            <button className='section-text' onClick={certification}>SECTION 5 : CERTIFICATIONS</button>
            <Image src={section5Img} alt="section5" className='section-img'/>
          </div>
          <div className='section-body'>
            <button className='section-text'>SECTION 6 : RESUME BUILDING</button>
            <Image src={section6Img} alt="section6" className='section-img'/>
          </div>
          <div className='section-body'>
            <button className='section-text' onClick={network}>SECTION 7 : NETWORKING</button>
            <Image src={section7Img} alt="section" className='section-img'/>
          </div>
        </div>
      </div>
    </section>
    )}
;

