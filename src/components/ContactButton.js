import React from 'react';

const ContactButton = ({ href, Icon, text }) => {

  return (
    <a href={href} target='_blank' className='contact-button' rel='noopener noreferrer'>
      <Icon aria-label={text} />
    </a>
  )
}

export default ContactButton;