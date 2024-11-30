import React from "react";
import yer from '../assets/image 3.png'

function Appp() {
  return (
    <div>
      <header className="flex justify-center gap-x-10 mt-28 ml-16">
        <div className="text-left w-[600px] mt-20">
          <h1 className=" text-[72.62px] font-normal leading-[99.13px] underline underline-offset-0 decoration-skip-ink decoration-from-font w-[581px] bg-gradient-to-r from-[#FF2DF7] via-[#5200FF] to-[#00F0FF] text-transparent bg-clip-text">
            AI Marketing.
          <br/>
          <span className='text-white'>Optimized Reach.</span>
          </h1>
          <span className="not-italic ... text-2xl font-thin">Our vision is to revolutionize the way brands and advertisers target, reach</span>
          <div className="bg-gradient-to-r from-[#00F0FF] via-[#5200FF] to-[#FF2DF7] w-[550px] h-[1px] rounded-lg shadow-md mt-8"></div>
          <button class="mt-8 flex items-center justify-center gap-3 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white py-[1px] px-[1px] rounded-full transition-all duration-300">
            <div className="text-xl justify-center flex items-center gap-3 font-thin w-full h-full py-2 px-7 bg-black rounded-full">
              <p>Get Started</p>
              <p class="text-4xl bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 bg-clip-text text-transparent">
              </p>
            </div>
          </button>
        </div>
        <div>
          <img src={yer} alt="" />
        </div>
      </header>
    </div>
  );
}

export default Appp;
