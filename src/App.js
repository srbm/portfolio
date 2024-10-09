import React from 'react';
import './App.css';
import './styles/reset.css';
import StarryBackground from './components/StarryBackground';

function App() {
  return (
    <div className="App" style={{ position: 'relative', minBlockSize: '100vh' }}>
      <StarryBackground />
      <header>
        <h1>Shawn Meyer</h1>
        <p>Web Developer</p>
      </header>
      <main>
        <section id="about">
          <h2>About Me</h2>
          <p>I am a web developer with a passion for creating beautiful and functional websites.</p>
        </section>
        <section id="projects">
          <h2>Projects</h2>
          <ul>
            <li>Nike SB</li>
            <li>The Listening Sessions</li>
            <li>Lam Partners</li>
          </ul>
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <p><a href="mailto:shawnrbm@gmail.com">shawnrbm@gmail.com</a></p>
          <p><a href="https://github.com/srbm">GitHub</a></p>
          <p><a href="https://www.linkedin.com/in/shawnrbmeyer/">LinkedIn</a></p>
        </section>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Shawn Meyer. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;