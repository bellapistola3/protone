import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="animate-fade-in-up">About Protone</h2>
            <p className="animate-fade-in-up">
              At Protone, we're passionate about creating innovative solutions that push the 
              boundaries of what's possible. Our team of dedicated professionals works tirelessly 
              to deliver cutting-edge technology that empowers businesses and individuals alike.
            </p>
            <p className="animate-fade-in-up">
              Founded on the principles of excellence, innovation, and user-centric design, 
              we've been at the forefront of digital transformation, helping our clients 
              achieve their goals through powerful, intuitive platforms.
            </p>
            <div className="stats animate-fade-in-up">
              <div className="stat">
                <div className="stat-number">10K+</div>
                <div className="stat-label">Happy Users</div>
              </div>
              <div className="stat">
                <div className="stat-number">99.9%</div>
                <div className="stat-label">Uptime</div>
              </div>
              <div className="stat">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Support</div>
              </div>
            </div>
          </div>
          <div className="about-visual">
            <div className="about-image">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Team collaboration"
                className="animate-fade-in-up"
              />
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
          align-items: center;
        }

        .about-text h2 {
          margin-bottom: 1.5rem;
          animation-delay: 0.2s;
        }

        .about-text p {
          margin-bottom: 1.5rem;
          font-size: 1.125rem;
          animation-delay: 0.3s;
        }

        .stats {
          display: flex;
          gap: 2rem;
          margin-top: 2rem;
          animation-delay: 0.4s;
        }

        .stat {
          text-align: center;
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 800;
          background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          color: var(--text-secondary);
          font-weight: 600;
          text-transform: uppercase;
          font-size: 0.875rem;
          letter-spacing: 0.05em;
        }

        .about-visual {
          position: relative;
        }

        .about-image {
          position: relative;
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: var(--shadow-xl);
        }

        .about-image img {
          width: 100%;
          height: 400px;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .about-image:hover img {
          transform: scale(1.05);
        }

        .about-image::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, var(--primary-color) 0%, transparent 50%);
          opacity: 0.1;
          z-index: 1;
        }

        @media (max-width: 768px) {
          .about-content {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
          }

          .stats {
            justify-content: center;
            gap: 1.5rem;
          }

          .about-image img {
            height: 300px;
          }
        }
      `}</style>
    </section>
  );
};

export default About;