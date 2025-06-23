import React from 'react';
import { Zap, TrendingUp, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge animate-fade-in-up">
              <Zap size={16} />
              <span>The First Tone of the New Era</span>
            </div>
            <h1 className="hero-title animate-fade-in-up">
              $PROTONE
            </h1>
            <p className="hero-subtitle animate-fade-in-up">
              Created by Ezhodus. For people. With the support of AI.
            </p>
            <p className="hero-description animate-fade-in-up">
              PROTONE is not just a token. It is a pulse. Connecting a person and consciousness 
              through the power of decentralized finance and artificial intelligence.
            </p>
            <div className="hero-buttons animate-fade-in-up">
              <a href="#stake" className="btn btn-primary">
                <TrendingUp size={20} />
                Start Staking
              </a>
              <a href="#about" className="btn btn-neon">
                <Shield size={20} />
                Learn More
              </a>
            </div>
            <div className="hero-stats animate-fade-in-up">
              <div className="stat">
                <div className="stat-number neon-text">$2.4M</div>
                <div className="stat-label">Market Cap</div>
              </div>
              <div className="stat">
                <div className="stat-number neon-text">15.2%</div>
                <div className="stat-label">APY Staking</div>
              </div>
              <div className="stat">
                <div className="stat-number neon-text">10K+</div>
                <div className="stat-label">Holders</div>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="pulse-container">
              <div className="pulse-ring animate-pulse"></div>
              <div className="pulse-ring animate-pulse" style={{animationDelay: '0.5s'}}></div>
              <div className="pulse-ring animate-pulse" style={{animationDelay: '1s'}}></div>
              <div className="pulse-core animate-float">
                <img 
                  src="/protone logo.png" 
                  alt="PROTONE" 
                  className="pulse-logo"
                />
              </div>
            </div>
            <div className="floating-elements">
              <div className="floating-element animate-float" style={{animationDelay: '0.2s'}}>⚡</div>
              <div className="floating-element animate-float" style={{animationDelay: '0.8s'}}>🌌</div>
              <div className="floating-element animate-float" style={{animationDelay: '1.4s'}}>💎</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          padding-top: 80px;
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: rgba(139, 92, 246, 0.2);
          border: 1px solid var(--border-glow);
          border-radius: 2rem;
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--neon-cyan);
          margin-bottom: 2rem;
          animation-delay: 0.2s;
        }

        .hero-title {
          margin-bottom: 1rem;
          animation-delay: 0.3s;
          font-size: clamp(3rem, 8vw, 6rem);
        }

        .hero-subtitle {
          font-size: 1.5rem;
          color: var(--text-secondary);
          margin-bottom: 1rem;
          animation-delay: 0.4s;
          font-family: 'Orbitron', monospace;
          font-weight: 400;
        }

        .hero-description {
          font-size: 1.125rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          line-height: 1.8;
          animation-delay: 0.5s;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          margin-bottom: 3rem;
          animation-delay: 0.6s;
        }

        .hero-buttons .btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .hero-stats {
          display: flex;
          gap: 2rem;
          animation-delay: 0.7s;
        }

        .stat {
          text-align: center;
        }

        .stat-number {
          font-size: 2rem;
          font-weight: 900;
          font-family: 'Orbitron', monospace;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          color: var(--text-secondary);
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-family: 'Orbitron', monospace;
        }

        .hero-visual {
          position: relative;
          height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .pulse-container {
          position: relative;
          width: 300px;
          height: 300px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .pulse-ring {
          position: absolute;
          width: 100%;
          height: 100%;
          border: 2px solid var(--neon-cyan);
          border-radius: 50%;
          opacity: 0.6;
        }

        .pulse-ring:nth-child(2) {
          width: 80%;
          height: 80%;
          border-color: var(--neon-purple);
        }

        .pulse-ring:nth-child(3) {
          width: 60%;
          height: 60%;
          border-color: var(--neon-pink);
        }

        .pulse-core {
          width: 120px;
          height: 120px;
          background: linear-gradient(45deg, var(--neon-cyan), var(--neon-purple));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 
            0 0 30px var(--neon-cyan),
            inset 0 0 30px rgba(255, 255, 255, 0.2);
          padding: 20px;
        }

        .pulse-logo {
          width: 100%;
          height: 100%;
          object-fit: contain;
          filter: brightness(1.2) drop-shadow(0 0 10px rgba(255, 255, 255, 0.5));
        }

        .floating-elements {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .floating-element {
          position: absolute;
          font-size: 2rem;
          opacity: 0.7;
        }

        .floating-element:nth-child(1) {
          top: 20%;
          left: 10%;
        }

        .floating-element:nth-child(2) {
          top: 60%;
          right: 15%;
        }

        .floating-element:nth-child(3) {
          bottom: 20%;
          left: 20%;
        }

        @media (max-width: 768px) {
          .hero {
            padding-top: 100px;
            text-align: center;
          }

          .hero-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }

          .hero-stats {
            justify-content: center;
            gap: 1.5rem;
          }

          .hero-visual {
            height: 300px;
          }

          .pulse-container {
            width: 200px;
            height: 200px;
          }

          .pulse-core {
            width: 80px;
            height: 80px;
            padding: 15px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;