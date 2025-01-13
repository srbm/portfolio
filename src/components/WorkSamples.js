import React, { useState } from 'react';
import '../styles/components/WorkSamples.css';
import WorkSample from './WorkSample';
import ybosImage from '../assets/ybos.png';
import richardsonImage from '../assets/richardson.png';
import richardsonImageMobile from '../assets/richardson-mobile.png';
import listeningSessionsImage from '../assets/listening-sessions.png';
import listeningSessionsImageMobile from '../assets/listening-sessions-mobile.png';
import disneyImage from '../assets/disney.png';
import disneyImageMobile from '../assets/disney-impact-mobile.png';
import malarkeyImage from '../assets/malarkey.png';
import malarkeyMobileMobile from '../assets/malarkey-mobile.png';
import lamPartners from '../assets/lam-partners.png';
import lamPartnersMobile from '../assets/lam-mobile.png';

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
        mobileImage: richardsonImageMobile,
        title: 'Richardson Sports',
        description: 'In this massive redesign I was responsible for implementing the new product description page. It required using api calls to get the product data, keeping load times fast for the style images and the potiential for multiple modals, sliders and accordions.',
        skills: ['JavaScript', 'CSS', 'APIs'],
    },
    {
        image: listeningSessionsImage,
        mobileImage: listeningSessionsImageMobile,
        title: 'Listening Sessions',
        description: 'This project has a bespoke navigation that immerses the user in the experience of refugee women settling in the US.',
        skills: ['React', 'Gatsby', 'GraphQL', 'Sass'],
        link: 'https://acalltolisten.org'
    },
    {
        image: disneyImage,
        mobileImage: disneyImageMobile,
        title: 'Disney Impact',
        description: 'A component driven website built with WordPress and good ol plain javaScript.',
        skills: ['WordPress', 'JavaScript', 'PHP', 'Sass'],
        link: 'https://impact.disney.com'
    },
    {
        image: malarkeyImage,
        mobileImage: malarkeyMobileMobile,
        title: 'Malarkey Roofing',
        description: 'Using WordPress and ACF, Malarkey Roofing uses PHP templatees for the frontend and JavaScript to incorporate the functionality. On this specific page the user fills out a form, that when submitted, gives sustainability stats and is used to generate PDF certificates and images for social media posts.',
        skills: ['WordPress', 'JavaScript', 'PHP', 'PDF generation'],
        link: 'https://www.malarkeyroofing.com/sustainability-calculator/'
    },
    {
        image: lamPartners,
        mobileImage: lamPartnersMobile,
        title: 'Lam Partners',
        description: 'Creating a clean content entry system while bucking the WordPress look on the frontend were the two keys to success on this project. I worked closely with the designer to pinpoint where we needed custom blocks and together we made use of our custom theme\'s settings and CSS to really make this site pop.',
        skills: ['Wordpress', 'Custom blocks', 'JavaScript', 'CSS'],
        link: 'https://lampartners.com'
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
                        mobileImage={project.mobileImage ?? project.image}
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