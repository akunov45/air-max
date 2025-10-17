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