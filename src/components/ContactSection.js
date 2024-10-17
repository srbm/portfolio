import React from 'react';
import ContactButton from './ContactButton';
import '../styles/components/ContactSection.css';
import {ReactComponent as GithubIcon} from '../assets/icons/github.svg';
import {ReactComponent as GmailIcon} from '../assets/icons/gmail.svg';
import {ReactComponent as LinkedInIcon} from '../assets/icons/linkedin.svg';

const ContactSection = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-buttons">
        <ContactButton href="mailto:shawnrbm@gmail.com" Icon={GmailIcon} text="Email" />
        <ContactButton href="https://github.com/srbm" Icon={GithubIcon} text="GitHub" />
        <ContactButton href="https://www.linkedin.com/in/shawnrbmeyer/" Icon={LinkedInIcon} text="LinkedIn" />
      </div>
    </section>
  )
}

export default ContactSection;
