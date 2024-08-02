import ctaImage from "@/public/cta.svg";
import Image from "next/image";

export const CTA = () => {
  return (
    <section className="pt-8 pb-10 lg:pt-5 lg:pb-10 bg-black md:h-screen ">
      <div className="container">
        <div className="flex items-center justify-between md:px-36">
        <div className="hidden md:block justify-between items-center scale-110 py-10 md:py-28">
          <Image src={ctaImage} alt="usp" className=""/> 
        </div>
        <div className="lg:w-[478px] flex flex-col px-8 gap-4 items-center justify-between">
           <h2 className="font-ptserif font-bold text-center text-white mt-6 text-5xl leading-tight">Ready To Sprint <br/> Towards <br/> Your Career Goals?</h2>
           <p className="text-base text-white tracking-tight mt-6 font-montserrat text-center">Join CareerSprint today <br/> and take the first step towards <br/> unlocking your potential <br/> and achieving success <br/> in the job market.</p>
           <div className="flex items-center gap-1 mt-[30px]">
            <button className="btn px-8 py-3 text-l hover:bg-none hover:bg-[#ff3131]">Get Started Now</button>
           </div>
        </div>
        </div>
      </div>
    </section>
  );
};
