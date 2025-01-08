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
  const darkColor = '#0c1c2e'; // Color representing the shadow
  const lightColor = '#fff';    // Color representing the illuminated part
  let borderLeft, borderRight;

  // Normalize moonPhase to the range of 0 to 1
  moonPhase = moonPhase % 1;
  moonPhase = moonPhase < 0 ? moonPhase + 1 : moonPhase;

  // New Moon to First Quarter (0-0.25). Waxing Crescent.
  if (moonPhase <= 0.2499999) {
    // The illuminated portion grows from right to left.
    let visiblePortion = maxBorderWidth * (moonPhase / 0.25);
    borderLeft = `${maxBorderWidth - visiblePortion}px solid ${darkColor}`;
    borderRight = `${visiblePortion}px solid ${lightColor}`;
  } 
  // First Quarter to Full Moon (0.25-0.5). Waxing Gibbous.
  else if (moonPhase >= 0.25 && moonPhase <= 0.5) {
    let visiblePortion = maxBorderWidth * ((moonPhase - 0.25) / 0.25);
    borderLeft = `${maxBorderWidth - visiblePortion}px solid ${darkColor}`;
    borderRight = `${visiblePortion}px solid ${lightColor}`;
  } 
    // Full Moon to Last Quarter (0.5-0.75). Waning Gibbous.
  else if (moonPhase > 0.5 && moonPhase < 0.75) {
    // The shadow starts growing from the left.
    let shadowPortion = maxBorderWidth * ((moonPhase - 0.5) / 0.25);
    borderLeft = `${maxBorderWidth - shadowPortion}px solid ${lightColor}`;
    borderRight = `${shadowPortion}px solid ${darkColor}`;
  }
  // Last Quarter to New Moon (0.75-1). Waning Crescent.
  else {
    // The illuminated portion diminishes from left to right.
    let visiblePortion = maxBorderWidth * ((1 - moonPhase) / 0.25);
    borderLeft = `${visiblePortion}px solid ${lightColor}`;
    borderRight = `${maxBorderWidth - visiblePortion}px solid ${darkColor}`;
  }

  return { borderLeft, borderRight };
};


const MoonPhase = () => {

  const [moonPhase, setMoonPhase] = useState(null);
  const [borderStyles, setBorderStyles] = useState({ borderLeft: '0px', borderRight: '50px' });


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
    transform: `rotate(${((moonPhase - 0.5) * 2 * 15) * -1}deg)`
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
    </a>
  );
};

export default MoonPhase;