import '../styles/Header.css';
import ContactSection from './ContactSection';
import NavLink from './NavLink';

const Header = () => {
    return (
        <header>
            <div className='header-content'>
                <h1>Shawn Meyer</h1>
                <h2>Web Developer</h2>
                <p>I create precise, immersive, and universally accessible digital experiences.</p>
            </div>
            <nav aria-label="Main Navigation">
                <ul>
                    <li>
                        <NavLink href='#about' text='About' />
                    </li>
                    <li>
                        <NavLink href='#experience' text='Experience' />
                    </li>
                    <li>
                        <NavLink href='#projects' text='Projects' />
                    </li>
                </ul>
            </nav>
            <ContactSection />
        </header>
    );
}

export default Header;