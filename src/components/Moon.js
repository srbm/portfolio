import React, { useState, useEffect } from 'react';
import '../styles/components/Moon.css';


const SERVER_ENDPOINT = 'https://shawnrbmeyer.com/moon_phase_data.json';
const headers = {
    'Content-Type': 'application/json',
    "X-Requested-With": "XMLHttpRequest"
};

const fetchMoonPhase = async () => {
  try {
    return await fetch(SERVER_ENDPOINT, {headers});
  } catch (error) {
    console.error('Error fetching moon phase from server json file:', error);
    return null;
  }

};

const getBorderStyles = (moonPhase) => {
  const maxBorderWidth = 50;
  let borderLeft, borderRight;

  // Ensure moonPhase wraps correctly if outside 0-1 range
  moonPhase = moonPhase % 1;
  moonPhase = moonPhase < 0 ? moonPhase + 1 : moonPhase;

  if (moonPhase >= 0 && moonPhase < 0.25) {
    // New Moon to First Quarter phase
    borderLeft = `${maxBorderWidth * moonPhase * 4}px solid #0c1c2e`;
    borderRight = `${maxBorderWidth * (1 - moonPhase * 4)}px solid #fff`;
  } else if (moonPhase >= 0.25 && moonPhase < 0.5) {
    // First Quarter to Full Moon phase
    borderLeft = `${maxBorderWidth}px solid #fff`;
    borderRight = `${maxBorderWidth}px solid #fff`;
  } else if (moonPhase >= 0.5 && moonPhase < 0.75) {
    // Full Moon to Last Quarter phase
    let phaseAdjusted = (moonPhase - 0.5) * 4;
    borderLeft = `${maxBorderWidth * (1 - phaseAdjusted)}px solid #fff`;
    borderRight = `${maxBorderWidth * phaseAdjusted}px solid #0c1c2e`;
  } else {
    // Last Quarter to New Moon phase
    let phaseAdjusted = (moonPhase - 0.75) * 4;
    borderLeft = `${maxBorderWidth * phaseAdjusted}px solid #0c1c2e`;
    borderRight = `${maxBorderWidth * (1 - phaseAdjusted)}px solid #fff`;
  }

  console.log({ borderLeft, borderRight });

  return { borderLeft, borderRight };
};


const MoonPhase = () => {

  const [moonPhase, setMoonPhase] = useState(null);
  const [borderStyles, setBorderStyles] = useState({ borderLeft: '50px', borderRight: '0px' });


  useEffect(() => {
      async function fetchAndSetMoonPhase() {
          try {
              const response = await fetchMoonPhase();
              if (response.ok) {
                const phaseData = await response.json();
                const phase = phaseData.data[0].moonPhase.current.value;
                setMoonPhase(phase);
              } else {
                throw new Error('Failed to fetch moon phase: ' + response.status);
              }
          } catch (error) {
              console.error('Error fetching the moon phase. Here\'s a random moon.', error);
              const phase = Math.random();
              setMoonPhase(phase);
          }
      }

      fetchAndSetMoonPhase();
  }, []);


  // Call getBorderStyles after moonPhase is set
  useEffect(() => {
    if (moonPhase !== null) {
        const { borderLeft, borderRight } = getBorderStyles(moonPhase);
        setBorderStyles({ borderLeft, borderRight });
    }
}, [moonPhase]);
  
  const style = {
    borderLeft: borderStyles.borderLeft,
    borderRight: borderStyles.borderRight,
    backgroundColor: moonPhase >= 0.25 && moonPhase < 0.75 ? '#fff' : '#0c1c2e',
    transform: moonPhase === 0.5 ? 'rotate(0deg)' : `rotate(${moonPhase < 0.5 ? -20 : 20}deg)`
  }

  // Display the moon phase image
  return (
    <a href='https://moon.nasa.gov/moon-observation/daily-moon-guide/?intent=011#moon_section'
        className="moon-container"
        target='_blank'
        rel='noreferrer'
    >
      <div className="sphere">
        <div className="light" style={style}></div>
        <div className="texture"></div>
        <div className="circle"></div>
      </div>
        {/* <img src='https://www.pennlive.com/resizer/dp_dvs4Zo8pljrfn2kUqoERJ90M=/800x0/smart/image.pennlive.com/home/penn-media/width600/img/wildaboutpa/photo/14-blue-moonjpg-e541a63d92f2ed42.jpg' alt='moon' /> */}
    </a>
  );
};

export default MoonPhase;