import '../styles/ui/buttons.css';
import React from 'react';

const NavLink = ({ href, text }) => {
    const handleClick = (e) => {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const [isActive, setIsActive] = React.useState(false);

    React.useEffect(() => {
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsActive(entry.isIntersecting);
            },
            { 
                rootMargin: '200px',
                threshold: 0
            }
        );

        if (targetElement) {
            observer.observe(targetElement);
        }

        return () => {
            if (targetElement) {
                observer.unobserve(targetElement);
            }
        };
    }, [href]);


    return (
        <a href={href} className={`nav-link ${isActive ? 'active' : ''}`} onClick={handleClick}>{text}</a>
    );
};

export default NavLink;