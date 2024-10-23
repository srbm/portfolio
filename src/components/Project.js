import React from 'react';
// import './styles/components/Project.css';

const Project = ({ image, title, description, link }) => {
    return (
        <div className='project'>
            <img src={image} alt={title} />
            <div className='project-info'>
                <h3>{title}</h3>
                <p>{description}</p>
                <a href={link} target='_blank' rel='noopener noreferrer'>View Project</a>
            </div>
        </div>
    );
};

export default Project; 