import React, { useState } from 'react';
import '../styles/components/WorkSamples.css';
import WorkSample from './WorkSample';
import ybosImage from '../assets/ybos.png';
import richardsonImage from '../assets/richardson.png';
import listeningSessionsImage from '../assets/listening-sessions.png';
import disneyImage from '../assets/disney.png';

const data = [
    {
        image: ybosImage,
        title: 'Nike SB React App',
        description: 'For NikeSB I built a comic book reader with React and Remix that focuses on mental health in sports. This is a reusable component that uses Craft CMS for the content.',
        skills: ['React', 'Remix', 'Craft CMS', 'Sass'],
        link: 'https://ybos.nikesb.com/ybos-running'
    },
    {
        image: richardsonImage,
        title: 'Richardson Sports',
        description: 'In this massive redesign I was resopnsible for implementing the new product description page. It required using api calls to get the product data, keeping load times fast for the style images and the potiential for multiple modals, sliders and accordions.',
        skills: ['JavaScript', 'CSS', 'APIs'],
    },
    {
        image: listeningSessionsImage,
        title: 'Listening Sessions',
        description: 'This project has a bespoke navigation that immerses the user in the experience of refugee women settling in the US.',
        skills: ['React', 'Gatsby', 'GraphQL', 'Sass'],
        link: 'https://acalltolisten.org'
    },
    {
        image: disneyImage,
        title: 'Disney Impact',
        description: 'A component driven website built with WordPress and good ol plain javaScript.',
        skills: ['WordPress', 'JavaScript', 'PHP', 'Sass'],
        link: 'https://impact.disney.com'
    }
]

const WorkSamples = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <section id="work-samples" className='work-samples'>
            <h2 className='h2 headline'>Work Samples</h2>
            {    data.map((project, index) => {
                return (
                    <WorkSample
                        key={index}
                        image={project.image}
                        title={project.title}
                        description={project.description}
                        skills={project.skills}
                        link={project.link}
                        isDimmed={hoveredIndex !== null && hoveredIndex !== index}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    />
                )
            })}
        </section>
    );
};

export default WorkSamples;