import React from 'react';
import '../styles/components/WorkSample.css';
import { ReactComponent as ExternalArrow } from '../assets/icons/external-arrow.svg';

const WorkSample = ({ image, title, description, skills, link }) => {
    return (
        <a className='work-sample' href={link} target='_blank' rel='noopener noreferrer'>
            <img src={image} alt={title} className='image' />
            <div className='info'>
                <h3 className='title ibm-semibold'>
                     {title}  <span className="external-arrow"><ExternalArrow /></span>
                    </h3>
                <p className='description ibm-light'>{description}</p>

                <div className="skills">
                    {skills.map((skill, index) => (
                    <button key={index} className="skill-pill">{skill}</button>
                    ))}
                </div>

            </div>
        </a>
    );
};

export default WorkSample;