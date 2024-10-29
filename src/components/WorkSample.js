import React from 'react';
import '../styles/components/WorkSample.css';
import { ReactComponent as ExternalArrow } from '../assets/icons/external-arrow.svg';

const WorkSample = ({ image, title, description, skills, link, isDimmed, onMouseEnter, onMouseLeave }) => {
    return (
        link ? (
            <a
                className={`work-sample ${isDimmed ? 'dimmed' : ''}`}
                href={link} target='_blank' rel='noopener noreferrer'
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <img src={image} alt={title} className='image' />
                <div className='info'>
                    <h3 className='title ibm-semibold'>
                        {title} <span className="external-arrow"><ExternalArrow /></span>
                    </h3>
                    <p className='description ibm-light'>{description}</p>

                    <div className="skills">
                        {skills.map((skill, index) => (
                            <button key={index} className="skill-pill">{skill}</button>
                        ))}
                    </div>
                </div>
            </a>
        ) : (
            <div
                className={`work-sample ${isDimmed ? 'dimmed' : ''}`}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <img src={image} alt={title} className='image' />
                <div className='info'>
                    <h3 className='title ibm-semibold'>{title}</h3>
                    <p className='description ibm-light'>{description}</p>

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

export default WorkSample;