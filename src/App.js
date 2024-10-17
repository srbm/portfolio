import React from 'react';
import './styles/index.css';
import './App.css';
import StarryBackground from './components/StarryBackground';
import Layout from './components/Layout';
import Header from './components/Header';
import About from './components/About';

function App() {
  return (
    <div className="App" style={{ position: 'relative', minBlockSize: '100vh' }}>
      <StarryBackground />
      
        <Layout>
          <Header />

          <main>
            <About />
            <section id="projects">
              <h2>Projects</h2>
              <ul>
                <li>Nike SB</li>
                <li>The Listening Sessions</li>
                <li>Lam Partners</li>
              </ul>
            </section>
          </main>
        </Layout>
      
    </div>
  );
}

export default App;