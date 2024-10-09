import React, { useState, useEffect } from 'react';

const BubbleStar = ({ top, left, canShoot, shootDirection }) => {
  const [isTwinkling, setIsTwinkling] = useState(false);
  const [isShooting, setIsShooting] = useState(false);

  useEffect(() => {
    const twinkle = () => {
      setIsTwinkling(true);
      setTimeout(() => {
        setIsTwinkling(false);
        setTimeout(twinkle, Math.random() * 1000 + 500); // Random delay between 0.5-1.5 seconds
      }, Math.random() * 500 + 500); // Random twinkle duration between 0.5-1.5 seconds
    };

    twinkle();

  }, [canShoot]);

  const starStyle = {
    position: 'absolute',
    top: `${top}%`,
    left: `${left}%`,
    width: '5px',
    height: '5px',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const starInnerStyle = {
    width: '3px',
    height: '3px',
    backgroundColor: 'white',
    borderRadius: '50%',
    opacity: isTwinkling ? 1 : 0.5,
    transition: 'opacity 0.25s ease-in-out',
  };

  const shootingStarStyle = {
    ...starStyle,
    width: '4px',
    height: '4px',
    boxShadow: `0 0 2px 2px white, 
                ${Math.cos(shootDirection * Math.PI / 180) * -10}px ${Math.sin(shootDirection * Math.PI / 180) * -10}px 3px 1px rgba(255, 255, 255, 0.5),
                ${Math.cos(shootDirection * Math.PI / 180) * -20}px ${Math.sin(shootDirection * Math.PI / 180) * -20}px 4px 1px rgba(255, 255, 255, 0.3),
                ${Math.cos(shootDirection * Math.PI / 180) * -30}px ${Math.sin(shootDirection * Math.PI / 180) * -30}px 5px 1px rgba(255, 255, 255, 0.1)`,
    transform: `translate(${Math.cos(shootDirection * Math.PI / 180) * 100}px, ${Math.sin(shootDirection * Math.PI / 180) * 100}px)`,
    transition: 'transform 1s linear, box-shadow 1s linear',
  };

  const handleClick = () => {
    if (canShoot && !isShooting) {
      setIsShooting(true);
      setTimeout(() => {
        setIsShooting(false);
      }, 1000);
    }
  };

  return (
    <div 
      style={isShooting ? shootingStarStyle : starStyle}
      onClick={handleClick}
    >
      <div style={starInnerStyle} />
    </div>
  );
};

export default BubbleStar;
