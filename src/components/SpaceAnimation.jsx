import React from 'react';
import auditImage from '../assets/Audit.png'; // Import the Audit image
import moneyImage from '../assets/Money.png'; // Import the Money image
import './SpaceAnimation.css';

const SpaceAnimation = () => {
  return (
    <div className="space-container">
      <div className="audit" style={{ backgroundImage: `url(${auditImage})` }}></div>
      <img src={moneyImage} alt="Money" className="money" />
    </div>
  );
};

export default SpaceAnimation;