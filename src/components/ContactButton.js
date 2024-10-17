import React from 'react';

const ContactButton = ({ href, text }) => {
  const buttonStyle = {
    display: 'inline-block',
    padding: '10px 20px',
    backgroundColor: '#4a4a4a',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    fontWeight: 'bold',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3), 0 1px 3px rgba(0, 0, 0, 0.2)',
    transition: 'all 0.2s ease',
    transform: 'translateY(0)',
  };

  const handleHover = (e) => {
    e.target.style.transform = 'translateY(-2px)';
    e.target.style.boxShadow = '0 7px 14px rgba(0, 0, 0, 0.15), 0 3px 6px rgba(0, 0, 0, 0.1)';
  };

  const handleMouseLeave = (e) => {
    e.target.style.transform = 'translateY(0)';
    e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.3), 0 1px 3px rgba(0, 0, 0, 0.2)';
  };
  return (
    <a href={href} style={buttonStyle} target='_blank' className='contact-button' onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>{text}</a>
  )
}

export default ContactButton;