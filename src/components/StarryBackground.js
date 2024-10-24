import React, { useState, useEffect } from 'react';
import Star from './Star';

const StarryBackground = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const newStars = Array(100).fill().map((_, i) => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      canShoot: Math.random() > 0.5,
      shootDirection: Math.random() * 360
    }));
    setStars(newStars);
  }, []);

  return (
    <div style={{ position: 'absolute', width: '100%', minHeight: '100vh', height: '100%', left: 0, top: 0, overflow: 'hidden' }}>
      {stars.map((star, index) => (
        <Star
          key={index}
          top={star.top}
          left={star.left}
          canShoot={star.canShoot}
          shootDirection={star.shootDirection}
        />
      ))}
    </div>
  );
};

export default StarryBackground;