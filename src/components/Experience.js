import '../styles/components/Experience.css';
import React, { useState } from 'react';
import ExperienceItem from './ExperienceItem';

const experienceData = [
  {
    date: 'Nov 2019 - Sept 2024',
    titleCompany: 'Web Developer II, Owen Jones and Partners',
    companyLink: 'https://whoisowenjones.com/',
    description: 'Developed websites for global brands such as Nike, Jordan, Disney, and Adobe using a component-driven approach (React, Remix, JavaScript, PHP). Collaborated effectively with team members to deliver complex projects on time and within budget.',
    links: [
      { text: 'NikeSB YBOS', url: 'https://ybos.nikesb.com/ybos-running' },
      { text: 'The Listening Sessions', url: 'https://acalltolisten.org' },
      { text: 'Disney Impact', url: 'https://impact.disney.com' }
    ],
    skills: ['React', 'Wordpress', 'JavaScript', 'PHP', 'HTML', 'CSS', 'Figma']
  },
  {
    date: 'May 2017 - Oct 2018',
    titleCompany: 'Web Developer, Scoppechio',
    companyLink: 'https://powerscoppechio.com/',
    description: 'Built websites for global brands: Longhorn Steakhouse, GE Appliances, El Jimador. Used best practices when writing code and improve existing code base. Collaborated with development team to plan and troubleshoot projects .Used Photoshop and Sketch designs to make HTML emails.',
    links: [
      { text: 'Longhorn Steakhouse', url: 'https://www.longhornsteakhouse.com/app' },
    ],
    skills: ['JavaScript', 'Wordpress', 'PHP', 'HTML', 'CSS', 'Sketch']
  },
  {
    date: 'Nov 2016 - Mar 2020',
    titleCompany: 'Freelance Web Developer',
    description: 'Developed websites for bicycling advocacy org, women\'s recognition garden, and outdoor adventure guide. Communicated quickly and clearly to ensure client needs are met. Used WordPress and PHP for web development.',
    skills: ['Wordpress', 'PHP', 'HTML', 'CSS', 'JavaScript']
  },
  {
    date: 'Aug 2016 - Dec 2016',
    titleCompany: 'Web Developer Intern, 1926 Marketing',
    description: 'Designed and developed WordPress websites for local businesses.Project emphasis on front-end and cross-browser compatibility. Collaborated with design team',
    skills: ['Wordpress', 'JavaScript', 'PHP', 'HTML', 'CSS']
  },
  {
    date: 'Nov 2011 - Oct 2015',
    titleCompany: 'Letter Carrier, USPS',
    description: 'Completed demanding route delivery and provided top-notch customer service. Maintained an organized delivery unit. Sought out challenges as a union steward and on-the-job instructor',
    skills: ['Organization', 'Customer Service']
  }

];

const Experience = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <section className="experience" id="experience">
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
                    isHovered={hoveredIndex === index}
                    isDimmed={hoveredIndex !== null && hoveredIndex !== index}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}  
                />
            ))}
        </section>
    );
};

export default Experience;
