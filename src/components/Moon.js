import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/components/Moon.css';

const MOON_ENDPOINT = 'https://api.astronomyapi.com/api/v2/studio/moon/phases';
const API_KEY = process.env.REACT_APP_APPLICATION_ID;
const API_SECRET = process.env.REACT_APP_APPLICATION_SECRET;

const headers = {
    'Content-Type': 'application/json',
    "X-Requested-With": "XMLHttpRequest",
    Authorization: `Basic ${btoa(`${API_KEY}:${API_SECRET}`)}`
};
const params = (date) => ({
  observer: {
    date: date.toISOString().split('T')[0], // Using ISOString and splitting to get 'YYYY-MM-DD'
  }
});

// Changed to return the fetched data
const fetchMoonPhase = async () => {
  try {
    const response = await axios.post(MOON_ENDPOINT, params(new Date()), { headers });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching moon phase:', error);
    return null;
  }
};

const MoonPhase = () => {
  const [moonPhase, setMoonPhase] = useState(null);

  useEffect(() => {
    const updateMoonPhase = async () => {
      const currentMoonPhase = await fetchMoonPhase();
      setMoonPhase(currentMoonPhase);
    };

    updateMoonPhase();

    const intervalId = setInterval(updateMoonPhase, 3600000); // Update every hour

    return () => clearInterval(intervalId);
  }, []);

  // Display the moon phase image
  return (
    <div className='moonphase'>
      {/* Display the moon phase using a state variable */}
      {moonPhase && (
        <img src={moonPhase.imageUrl} alt="Current Moon Phase" />
      )}
    </div>
  );
};

export default MoonPhase;