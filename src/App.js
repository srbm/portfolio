import React from 'react';
import './styles/reset.css';
import './styles/vars.css';
import './styles/ui/buttons.css';
import './App.css';
import StarryBackground from './components/StarryBackground';
import Layout from './components/Layout';
import Header from './components/Header';

function App() {
  return (
    <div className="App" style={{ position: 'relative', minBlockSize: '100vh' }}>
      <StarryBackground />
      
      <main>
        <Layout>

          <div>
            <Header />
          </div>

          <div>
            <section id="about">
              <h2>About Me</h2>
              <p>I am an adventurer and creator, always looking for a challenge, whether it's a coding project, woodworking build, or a new gardening technique. Colleagues say that I'm even-keeled and an enjoyable teammate to have around.</p>
            </section>
            <section id="projects">
              <h2>Projects</h2>
              <ul>
                <li>Nike SB</li>
                <li>The Listening Sessions</li>
                <li>Lam Partners</li>
              </ul>
            </section>
          </div>

        </Layout>

        <footer>
          <p>&copy; {new Date().getFullYear()} Shawn Meyer.</p>
        </footer>
      </main>
      
    </div>
  );
}

export default App;