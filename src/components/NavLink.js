import '../styles/ui/buttons.css';
import React, { useContext, useEffect, useState } from 'react';

// Create a context for managing the active link with a default value
const ActiveLinkContext = React.createContext({
  activeHref: '',
  setActiveHref: () => {},
});

// Create a provider component to wrap around the navigation
export const ActiveLinkProvider = ({ children }) => {
  const [activeHref, setActiveHref] = useState('');
  return (
    <ActiveLinkContext.Provider value={{ activeHref, setActiveHref }}>
      {children}
    </ActiveLinkContext.Provider>
  );
};

const NavLink = ({ href, text }) => {
    const { activeHref, setActiveHref } = useContext(ActiveLinkContext);
    const [isVisible, setIsVisible] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - 120;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            setActiveHref(href);
        }
    };

    useEffect(() => {
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setActiveHref(href);
                }
                setIsVisible(entry.isIntersecting);
            },
            { 
                rootMargin: '-120px 0px -100% 0px',
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
    }, [href, setActiveHref]);

    const isActive = activeHref === href && isVisible;

    return (
        <a href={href} className={`nav-link ${isActive ? 'active' : ''}`} onClick={handleClick}>{text}</a>
    );
};

export default NavLink;
