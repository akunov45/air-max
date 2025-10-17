import React from "react";
import HeroImg from "/hero.png";
import Buts from "/buts.png";
import Buts1 from "/buts1.png";
import "./Hero.css";
const Hero = () => {
  return (
    <div
      style={{ backgroundImage: `url(${HeroImg})`, height: "750px" }}
      className="relative bg-cover bg-no-repeat rounded-3xl text-white flex items-end px-16 pb-16"
    >
      <div
        className="umar absolute left-[35px]
       top-[300px] w-[237px] 
       h-[67px] bg-[#232321] 
       text-white text-[16px] font-[600]
        px-5 py-[18px] rotate-[-90deg] origin-left"
      >
        Nike product of the year
      </div>

      <div className="z-10 max-w-lg">
        <h2 className="text-[74px] font-[600]">NIKE AIR MAX</h2>
        <p className="text-[24px] font-[600] text-gray-200 mb-8 w-[490px] h-[66px]">
          Nike introducing the new air max for everyone's comfort
        </p>
        <button className="bg-[#4A69E2] border-[3px] hover:bg-blue-700 text-white px-8
         py-3 rounded-xl font-semibold shadow-md
          hover:shadow-blue-500/50 transition duration-300">
          SHOP NOW
        </button>
      </div>

      <div className="absolute right-12 bottom-12 flex flex-col gap-4">
        <img
          src={Buts}
          alt="Nike buts 1"
          className="w-[160px] h-[160px] rounded-2xl object-cover"
        />
        <img
          src={Buts1}
          alt="Nike buts 2"
          className="w-[160px] h-[160px] rounded-2xl object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
