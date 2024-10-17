import '../styles/components/Experience.css';
import React from 'react';
import ExperienceItem from './ExperienceItem';

// Define an array of experience items
const experienceData = [
  {
    date: 'November 2019 - September 2024',
    titleCompany: 'Web Developer II, Owen Jones and Partners',
    companyLink: 'https://whoisowenjones.com/',
    description: 'Developed websites for global brands such as Nike, Jordan, Disney, and Adobe using a component-driven approach (React, Remix, JavaScript, PHP). Collaborated effectively with team members to deliver complex projects on time and within budget',
    links: [
      { text: 'NikeSB YBOS', url: 'https://ybos.nikesb.com/ybos-running' },
      { text: 'The Listening Sessions', url: 'https://acalltolisten.com' },
      { text: 'Disney Impact', url: 'https://impact.disney.com' }
    ],
    skills: ['React', 'Wordpress', 'JavaScript', 'PHP', 'HTML', 'CSS', 'Figma']
  },
  {
    date: 'May 2017 - October 2018',
    titleCompany: 'Web Developer, Scoppechio',
    companyLink: 'https://powerscoppechio.com/',
    description: 'Built websites for global brands: Longhorn Steakhouse, GE Appliances, El Jimador. Used best practices when writing code and improve existing code base. Collaborated with development team to plan and troubleshoot projects  .Used Photoshop and Sketch designs to make HTML emails',
    links: [
      { text: 'Longhorn Steakhouse', url: 'https://www.longhornsteakhouse.com/app' },
    ],
    skills: ['JavaScript', 'Wordpress', 'PHP', 'HTML', 'CSS', 'Sketch']
  },
  {
    date: 'November 2016 - March 2020',
    titleCompany: 'Freelance Web Developer',
    description: 'Developed websites for bicycling advocacy org, women\'s recognition garden, and outdoor adventure guide.Communicated quickly and clearly to ensure client needs are met. Used WordPress and PHP for web development',
    skills: ['Wordpress', 'PHP', 'HTML', 'CSS', 'JavaScript']
  },

];

const Experience = () => {
  return (
    <div id="experience" className='experience'>
      <h2 className='h2'>Experience</h2>
      {experienceData.map((item, index) => (
        <ExperienceItem
          key={index}
          date={item.date}
          titleCompany={item.titleCompany}
          companyLink={item.companyLink}
          description={item.description}
          links={item.links}
          skills={item.skills}
        />
      ))}
    </div>
  );
};

export default Experience;
