import React from 'react';
import './styles/index.css';
import './App.css';
import StarryBackground from './components/StarryBackground';
import Layout from './components/Layout';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import WorkSamples from './components/WorkSamples'; 
import MoonPhase from './components/Moon';

function App() {
  return (
    <div className="App" style={{ position: 'relative', minBlockSize: '100vh' }}>
      <StarryBackground />
      
        <Layout>
          <MoonPhase />
          <Header />

          <main>
            <About />
            <Experience />
            <WorkSamples />
          </main>
        </Layout>
      
    </div>
  );
}

export default App;