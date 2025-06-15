import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stake from './components/Stake';
import Tokenomics from './components/Tokenomics';
import About from './components/About';
import JoinPulse from './components/JoinPulse';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`app ${isLoaded ? 'loaded' : ''}`}>
      <ParticleBackground />
      <Header />
      <main>
        <Hero />
        <Stake />
        <Tokenomics />
        <About />
        <JoinPulse />
      </main>
      <Footer />
    </div>
  );
}

export default App;