import React, {useState, useEffect} from 'react';
import '../styles/components/WorkSample.css';
import { ReactComponent as ExternalArrow } from '../assets/icons/external-arrow.svg';

const WorkSample = ({ image, mobileImage, title, description, skills, link, isDimmed, onMouseEnter, onMouseLeave }) => {
    const [imageSrc, setImageSrc] = useState(
        window.innerWidth  > 768 ? image : mobileImage
    );

    const updateImageSrc = () => {
        const newImageSrc = window.innerWidth > 768 ? image : mobileImage;
        setImageSrc(newImageSrc);
      };
    
      useEffect(() => {
        window.addEventListener('resize', updateImageSrc);
    
        return () => {
          window.removeEventListener('resize', updateImageSrc);
        };
      }, []);

    return (
        link ? (
            <a
                className={`work-sample ${isDimmed ? 'dimmed' : ''}`}
                href={link} target='_blank' rel='noopener noreferrer'
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <img src={imageSrc} alt={title} className='image' />
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
                <img src={imageSrc} alt={title} className='image' />
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