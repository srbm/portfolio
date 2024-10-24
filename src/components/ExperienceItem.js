import React from 'react';
import '../styles/components/ExperienceItem.css';
import { ReactComponent as ExternalArrow } from '../assets/icons/external-arrow.svg';
import { ReactComponent as Link } from '../assets/icons/link.svg';

const ExperienceItem = ({ 
  date, 
  titleCompany, 
  companyLink, 
  description, 
  links, 
  skills,
  isHovered,
  isDimmed,
  onMouseEnter,
  onMouseLeave
}) => {
  return (
      companyLink ? (
        <a href={companyLink}
            className={`experience-item ${isDimmed ? 'dimmed' : ''}`}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            target="_blank" rel="noopener noreferrer"
        >
          <div className="date eyebrow ibm-light">{date}</div>
          <div className="content">

              <h3 className="title ibm-semibold">
                  {titleCompany} <span className="external-arrow"><ExternalArrow /></span>
              </h3>

              <p className="description ibm-light">{description}</p>
              {links && (
                  <div className="links" onClick={(e) => e.stopPropagation()}>
                  {links.map((link, index) => (
                      <a key={index} href={link.url} className="link" target="_blank" rel="noopener noreferrer"><Link />{link.text}</a>
                  ))}
                  </div>
              )}
              <div className="skills">
                  {skills.map((skill, index) => (
                  <button key={index} className="skill-pill">{skill}</button>
                  ))}
              </div>
          </div>
        </a>
      ) : (
        <div
            className={`experience-item ${isDimmed ? 'dimmed' : ''}`}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            target="_blank" rel="noopener noreferrer"
        >
            <div className="date eyebrow ibm-light">{date}</div>
            <div className="content">

                <h3 className="title ibm-semibold">
                {titleCompany}
                </h3>

                <p className="description ibm-light">{description}</p>
                {links && (
                    <div className="links">
                    {links.map((link, index) => (
                        <a key={index} href={link.url} className="link" target="_blank" rel="noopener noreferrer">{link.text}</a>
                    ))}
                    </div>
                )}
                <div className="skills">
                    {skills.map((skill, index) => (
                    <button key={index} className="skill-pill">{skill}</button>
                    ))}
                </div>
            </div>
        </div>
      )
  );
};

export default ExperienceItem;
