import React, { useState, useEffect } from 'react';
import '../styles/components/Moon.css';

const MOON_ENDPOINT = 'https://api.stormglass.io/v2/astronomy/point';
const API_KEY = process.env.REACT_APP_STORM_GLASS;
const headers = {
    'Content-Type': 'application/json',
    "X-Requested-With": "XMLHttpRequest",
    'Authorization': API_KEY
};

const date = new Date();
const end = date.toISOString().split('T')[0]; // 'YYYY-MM-DD'
// My approximate location
const lat = 45.3;
const lng = 122.3;

const fetchMoonPhase = async () => {
  try {
    const response = await fetch(`https://api.stormglass.io/v2/astronomy/point?lat=${lat}&lng=${lng}&end=${end}`, {
      headers
    });
    return response;

  } catch (error) {
    console.error('Error fetching moon phase:', error);
    return null;
  }

};


const MoonPhase = () => {

  const [moonPhase, setMoonPhase] = useState(null);

  useEffect(() => {
      async function fetchAndSetMoonPhase() {
          try {
              const response = await fetchMoonPhase();
              if (response.ok) {
                const phaseData = await response.json();
                const phase = phaseData.data[0].moonPhase.current.value * 360;
                setMoonPhase(phase);
              } else {
                throw new Error('Failed to fetch moon phase: ' + response.status);
              }
          } catch (error) {
              console.error('Error fetching the moon phase. Here\'s a random moon', error);
              const phase = Math.random() * 360;
              setMoonPhase(phase);
          }
      }

      fetchAndSetMoonPhase();
  }, []);

  const dividerRotation = {
    transform: `rotate3d(0, 1, 0, ${moonPhase}deg)`
  }
  const leftHemiClass = moonPhase < 180 ? "dark" : "light";
  const rightHemiClass = moonPhase < 180 ? "light" : "dark";
  

  // Display the moon phase image
  return (
    <a href='https://moon.nasa.gov/moon-observation/daily-moon-guide/?intent=011#moon_section'
        className="moon-container"
        target='_blank'
        rel='noreferrer'
    >
      <div className="sphere">
        <div className={`hemisphere ${leftHemiClass}`}></div>
        <div className={`hemisphere ${rightHemiClass}`}></div>
        <div className="divider" style={dividerRotation}></div>
        <span className='crater crater-1'></span>
        <span className='crater crater-2'></span>
        <span className='crater crater-3'></span>
        <span className='crater crater-4'></span>
        <span className='crater crater-5'></span>
      </div>
        {/* <img src='https://www.pennlive.com/resizer/dp_dvs4Zo8pljrfn2kUqoERJ90M=/800x0/smart/image.pennlive.com/home/penn-media/width600/img/wildaboutpa/photo/14-blue-moonjpg-e541a63d92f2ed42.jpg' alt='moon' /> */}
    </a>
  );
};

export default MoonPhase;