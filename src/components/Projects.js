import React from 'react';
// import './styles/components/Projects.css';
import Project from './Project';

const projectsData = [
    {
        image: 'nike-sb.png',
        title: 'Nike SB React App',
        description: 'Built a comic book reader that focuses on mental health in sports.',
        link: 'https://ybos.nikesb.com/ybos-running'
    }
]

const Projects = () => {
    return (
        <section id="projects">
            <h2 className='h2'>Projects</h2>
            {projectsData.map((project, index) => {
                return (
                    <Project
                        key={index}
                        image={project.image}
                        title={project.title}
                        description={project.description}
                        link={project.link}
                    />
                )
            })}
        </section>
    );
};

export default Projects;