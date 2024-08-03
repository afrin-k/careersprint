import aboutImage from "@/public/about.svg";
import Image from "next/image";

export const About = () => {
  return (
    <section className="pt-8 pb-20 md:pt-5 md:pb-10 bg-white h-screen overflow-hidden">
      <div className="container">
        <div className="flex items-center justify-between px-14">
        <div className="h-auto w-[680px] justify-between items-center py-32 scale-100">
          <Image src={aboutImage} alt="about" className=""/> 
        </div>
        <div className="md:w-[478px] flex flex-col items-center justify-around">
          <h2 className="font-ptserif font-bold text-black mt-6 text-5xl leading-normal">About <span className="text-transparent bg-gradient-to-b from-[#ff3131] to-[#ff914d] bg-clip-text">CareerSprint</span></h2>
          <div className="w-[360px] h-[380px] border-2 border-black rounded-2xl mt-6">
            <div>
              <p className="para">A survey by <span className="font-bold">Handshake</span> revealed <br/> that <span className="text-[#ff3131] font-bold">70%</span> of students <br/> were <span className="italic underline"> unsure about <br/> job market conditions</span> and <br/> how to effectively navigate them <br/> post-graduation.</p>
              <p className="para">If that sounds like you too... <br/>Welcome to <span className="text-[#ff3131] font-bold">CareerSprint</span>!</p>
              <p className="para">Let us be your <span  className="italic underline">upper hand leverage</span> <br/> for a <span className="font-bold">holistic placement preparation </span><br/> to achieve success in <br/> today’s competitive job market.
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

