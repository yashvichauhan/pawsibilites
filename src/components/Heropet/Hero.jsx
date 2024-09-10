import React from 'react';
import './Hero.css';
import hand_icon from '../Assets/hello.png';
import arrow_icon from '../Assets/fast-forward.png';
import hero_pet_image from '../Assets/hero.png';

export const Hero = () => {
  return (
    <div className='Hero'>
      <div className="hero-left">
        <h2>Trending Pets Profile</h2>
        <div>
          <div className="hero-hand-icon" >
            <p>new</p>
            <img src={hand_icon} alt=""/>
          </div>
          <p>Profiles</p>
          <p>for interested adopter</p>
        </div>
        <div className="hero-latest-button">
          <div>Trending Pets</div>
          <img src={arrow_icon} alt=""/>
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_pet_image} alt=""/>
      </div>
    </div>
  );
};
