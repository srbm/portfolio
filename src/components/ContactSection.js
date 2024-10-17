import React from 'react';
import ContactButton from './ContactButton';
import '../styles/ContactSection.css';

const ContactSection = () => {
  return (
    <section id="contact" className="contact-section">

      <div className="contact-buttons">
        <ContactButton href="mailto:shawnrbm@gmail.com" text="Email" />
        <ContactButton href="https://github.com/srbm" text="GitHub" />
        <ContactButton href="https://www.linkedin.com/in/shawnrbmeyer/" text="LinkedIn" />
      </div>
    </section>
  )
}

export default ContactSection;