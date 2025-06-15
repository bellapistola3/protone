import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title animate-fade-in-up">
              Welcome to Protone
            </h1>
            <p className="hero-description animate-fade-in-up">
              Experience the future of digital innovation with our cutting-edge platform. 
              We're building tomorrow's technology today, delivering exceptional solutions 
              that transform the way you work and connect.
            </p>
            <div className="hero-buttons animate-fade-in-up">
              <a href="#features" className="btn btn-primary">
                Get Started
              </a>
              <a href="#about" className="btn btn-secondary">
                Learn More
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-shape animate-float"></div>
            <div className="hero-shape-2"></div>
            <div className="hero-shape-3"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          position: relative;
          overflow: hidden;
          padding-top: 80px;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          opacity: 0.5;
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .hero-text {
          animation-delay: 0.2s;
        }

        .hero-title {
          margin-bottom: 1.5rem;
          animation-delay: 0.3s;
        }

        .hero-description {
          font-size: 1.25rem;
          margin-bottom: 2rem;
          animation-delay: 0.4s;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          animation-delay: 0.5s;
        }

        .hero-visual {
          position: relative;
          height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-shape {
          width: 300px;
          height: 300px;
          background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
          border-radius: 50% 40% 60% 30%;
          position: relative;
          z-index: 2;
          box-shadow: var(--shadow-xl);
        }

        .hero-shape-2 {
          position: absolute;
          width: 200px;
          height: 200px;
          background: linear-gradient(45deg, var(--accent-color), var(--primary-color));
          border-radius: 40% 60% 30% 50%;
          top: -50px;
          right: -50px;
          opacity: 0.7;
          animation: float 4s ease-in-out infinite reverse;
        }

        .hero-shape-3 {
          position: absolute;
          width: 150px;
          height: 150px;
          background: linear-gradient(225deg, var(--secondary-color), var(--accent-color));
          border-radius: 60% 30% 50% 40%;
          bottom: -30px;
          left: -30px;
          opacity: 0.6;
          animation: float 5s ease-in-out infinite;
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

          .hero-visual {
            height: 300px;
          }

          .hero-shape {
            width: 200px;
            height: 200px;
          }

          .hero-shape-2 {
            width: 120px;
            height: 120px;
          }

          .hero-shape-3 {
            width: 100px;
            height: 100px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;