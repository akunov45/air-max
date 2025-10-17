<<<<<<< HEAD
import React from 'react';
import HeroImg from '/hero.png';
import HeroImg1 from '/hero1.png';
import HeroImg2 from '/hero2.png';
import './Hero.css';

const Hero = () => {
    return (
        
        <div className="hero-container" style={{ backgroundImage: `url(${HeroImg})` }}>
            
           
            <div className="nike-label">
                Nike product of the year
            </div>

            <div className="hero-content">
                <h2 className='nike'>NIKE AIR MAX</h2>
                <p className="hero-description">Nike introducing the new air max for <br /> everyone's comfort</p>
                <button className="hero-button">SHOP NOW</button>
            </div>

            <div className="hero-previews">
                <div className="preview-item">
                    <img src={HeroImg1} alt="Nike Air Max preview 1" />
                </div>
                <div className="preview-item">
                    <img src={HeroImg2} alt="Nike Air Max preview 2" />
                </div>
            </div>
        </div>
    );
}

export default Hero;
=======
import React from "react";
import HeroImg from "/hero.png";
import Shoe1 from "/shoe1.png";
import Shoe2 from "/shoe2.png";

const Hero = () => {
  return (
    <div
      className="relative h-[750px] bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${HeroImg})` }}
    >
      <div className="absolute top-[90px] items-end">
        <p className="bg-[#232321] bg-opacity-60 px-2 py-3 rounded-md text-sm font-semibold tracking-widest uppercase text-center"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
          Nike product of the year
        </p>
      </div>

      <div className="absolute left-16 bottom-10 max-w-xl p-6 rounded-xl">
        <h2 className="text-5xl font-bold mb-4">NIKE AIR MAX</h2>
        <p className="text-lg mb-6">
          Nike introducing the new air max for everyone's comfort
        </p>
        <button className="bg-[#4A69E2] text-white px-6 py-3 rounded-md font-semibold">
          SHOP NOW
        </button>
      </div>

      <div className="absolute bottom-8 right-8 flex flex-col gap-4">
        <img
          src={Shoe1}
          alt="shoe1"
          className="w-[160px] h-[160px] rounded-xl  border-white object-cover"
        />
        <img
          src={Shoe2}
          alt="shoe2"
          className="w-[160px] h-[160px] rounded-xl border-white"
        />
      </div>
    </div>
  );
};

export default Hero;
>>>>>>> 620e0691aa953959a96cf3ae1c524c44c6db9522
