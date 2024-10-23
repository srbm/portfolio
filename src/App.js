import React from 'react';
import './styles/index.css';
import './App.css';
import StarryBackground from './components/StarryBackground';
import Layout from './components/Layout';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects'; 

function App() {
  return (
    <div className="App" style={{ position: 'relative', minBlockSize: '100vh' }}>
      <StarryBackground />
      
        <Layout>
          <Header />

          <main>
            <About />
            <Experience />
            <Projects />
          </main>
        </Layout>
      
    </div>
  );
}

export default App;