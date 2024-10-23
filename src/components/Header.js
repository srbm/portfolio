import '../styles/components/Header.css';
import ContactSection from './ContactSection';
import { ActiveLinkProvider } from './NavLink';
import NavLink from './NavLink';

const Header = () => {
    return (
        <header className='header'>
            <div className='header-content'>
                <h1 className='h1'>Shawn Meyer</h1>
                <h2 className='h2'>Web Developer</h2>
                <p className='p'>I create precise, immersive, and universally accessible digital experiences.</p>
            </div>
            <ActiveLinkProvider>
                <nav aria-label="Main Navigation" className='nav'>
                    <ul>
                        <li><NavLink href='#about' text='About' /></li>
                        <li><NavLink href='#experience' text='Experience' /></li>
                        <li><NavLink href='#work-samples' text='Work Samples' /></li>
                    </ul>
                </nav>
            </ActiveLinkProvider>
            <ContactSection />
        </header>
    );
}

export default Header;