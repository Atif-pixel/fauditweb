import React from 'react';
import starsImage from '../assets/Star.png'; // Import the stars image
import earthImage from '../assets/Earth.png'; // Import the Earth image
import './SpaceAnimation.css';

const SpaceAnimation = () => {
  return (
    <div className="space-container">
      <div className="stars" style={{ backgroundImage: `url(${starsImage})` }}></div>
      <img src={earthImage} alt="Earth" className="earth" />
    </div>
  );
};

export default SpaceAnimation;