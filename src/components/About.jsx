import React from 'react';
import { Brain, Zap, Users, Target } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Brain />,
      title: 'AI-Powered',
      description: 'Built with artificial intelligence at its core, creating smarter financial solutions.'
    },
    {
      icon: <Zap />,
      title: 'Lightning Fast',
      description: 'Ultra-fast transactions with minimal fees on advanced blockchain infrastructure.'
    },
    {
      icon: <Users />,
      title: 'Community Driven',
      description: 'Governed by the community, for the community. Every voice matters in our ecosystem.'
    },
    {
      icon: <Target />,
      title: 'Purpose Built',
      description: 'Designed specifically to bridge human consciousness with digital innovation.'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="animate-fade-in-up heading-font">About PROTONE</h2>
            <div className="about-tagline animate-fade-in-up">
              <span className="neon-text">"PROTONE is not just a token. It is a pulse."</span>
            </div>
            <p className="animate-fade-in-up">
              Connecting a person and consciousness through the revolutionary power of decentralized 
              finance and artificial intelligence. PROTONE represents the first tone of a new era, 
              where technology serves humanity's highest potential.
            </p>
            <p className="animate-fade-in-up">
              Created by the enigmatic Ezhodus, an anonymous visionary who believes in the power 
              of community-driven innovation. This isn't just another meme token – it's a movement 
              with spirit, purpose, and the backing of cutting-edge AI technology.
            </p>
            
            <div className="creator-info glass-card animate-fade-in-up">
              <h3 className="heading-font">About Ezhodus</h3>
              <p>
                The anonymous creator behind PROTONE, Ezhodus represents the spirit of decentralized 
                innovation. Choosing to remain in the shadows, they let their work speak for itself – 
                creating technology that empowers people rather than seeking personal recognition.
              </p>
              <div className="creator-philosophy">
                <div className="philosophy-item">
                  <strong>Why meme?</strong> Because culture drives adoption
                </div>
                <div className="philosophy-item">
                  <strong>Why anonymous?</strong> Because ideas matter more than identity
                </div>
                <div className="philosophy-item">
                  <strong>Why with spirit?</strong> Because technology should have soul
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-features">
            <div className="features-grid">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="feature-card glass-card animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="feature-icon neon-text">
                    {feature.icon}
                  </div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              ))}
            </div>
            
            <div className="vision-card glass-card animate-fade-in-up">
              <h3 className="heading-font neon-text">Our Vision</h3>
              <p>
                To create a financial ecosystem where artificial intelligence and human consciousness 
                work in harmony, enabling unprecedented levels of innovation, transparency, and 
                community empowerment in the decentralized finance space.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about {
          position: relative;
        }

        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .about-text h2 {
          margin-bottom: 1.5rem;
          animation-delay: 0.2s;
        }

        .about-tagline {
          font-size: 1.5rem;
          font-family: 'Orbitron', monospace;
          font-weight: 600;
          margin-bottom: 2rem;
          animation-delay: 0.3s;
        }

        .about-text p {
          margin-bottom: 1.5rem;
          font-size: 1.125rem;
          color: var(--text-secondary);
          line-height: 1.8;
          animation-delay: 0.4s;
        }

        .creator-info {
          padding: 2rem;
          margin-top: 2rem;
          animation-delay: 0.5s;
        }

        .creator-info h3 {
          margin-bottom: 1rem;
          color: var(--neon-cyan);
        }

        .creator-info p {
          margin-bottom: 1.5rem;
        }

        .creator-philosophy {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .philosophy-item {
          padding: 0.75rem;
          background: rgba(139, 92, 246, 0.1);
          border-left: 3px solid var(--neon-cyan);
          border-radius: 0.25rem;
          font-size: 0.875rem;
        }

        .philosophy-item strong {
          color: var(--neon-cyan);
          font-family: 'Orbitron', monospace;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .feature-card {
          padding: 1.5rem;
          text-align: center;
          transition: all 0.3s ease;
        }

        .feature-card:hover {
          transform: translateY(-5px);
        }

        .feature-icon {
          width: 60px;
          height: 60px;
          margin: 0 auto 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(139, 92, 246, 0.2);
          border-radius: 50%;
          font-size: 1.5rem;
        }

        .feature-title {
          margin-bottom: 0.75rem;
          color: var(--text-primary);
          font-family: 'Orbitron', monospace;
          font-size: 1.125rem;
        }

        .feature-description {
          color: var(--text-secondary);
          font-size: 0.875rem;
          line-height: 1.6;
          margin: 0;
        }

        .vision-card {
          padding: 2rem;
          text-align: center;
        }

        .vision-card h3 {
          margin-bottom: 1rem;
        }

        .vision-card p {
          color: var(--text-secondary);
          line-height: 1.7;
          margin: 0;
        }

        @media (max-width: 768px) {
          .about-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .features-grid {
            grid-template-columns: 1fr;
          }

          .creator-info {
            padding: 1.5rem;
          }

          .about-tagline {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </section>
  );
};

export default About;