import React from 'react';
import { Twitter, Send, Github, Globe } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img 
                src="/protone logo.png" 
                alt="PROTONE" 
                className="footer-logo-image"
              />
              <span className="footer-logo-text">$PROTONE</span>
            </div>
            <p className="footer-description">
              The first tone of the new era. Connecting human consciousness with 
              artificial intelligence through decentralized finance.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">
                <Twitter size={20} />
              </a>
              <a href="#" className="social-link">
                <Send size={20} />
              </a>
              <a href="#" className="social-link">
                <Github size={20} />
              </a>
              <a href="#" className="social-link">
                <Globe size={20} />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="heading-font">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#stake">Stake</a></li>
              <li><a href="#tokenomics">Tokenomics</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#join">Join Pulse</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="heading-font">Resources</h3>
            <ul className="footer-links">
              <li><a href="#">Whitepaper</a></li>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">Smart Contract</a></li>
              <li><a href="#">Audit Report</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="heading-font">Community</h3>
            <ul className="footer-links">
              <li><a href="#">Discord</a></li>
              <li><a href="#">Reddit</a></li>
              <li><a href="#">Medium</a></li>
              <li><a href="#">Newsletter</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <p>&copy; {currentYear} PROTONE. Created by Ezhodus.</p>
            <p className="disclaimer">
              Not financial advice. Cryptocurrency investments carry risk.
            </p>
          </div>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Risk Disclosure</a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: var(--darker-bg);
          color: var(--text-primary);
          padding: 3rem 0 1rem;
          border-top: 1px solid var(--border-glow);
        }

        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .footer-section h3 {
          color: var(--neon-cyan);
          margin-bottom: 1rem;
          font-size: 1.125rem;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }

        .footer-logo-image {
          width: 35px;
          height: 35px;
          object-fit: contain;
          filter: drop-shadow(0 0 8px rgba(0, 255, 255, 0.4));
        }

        .footer-logo-text {
          font-family: 'Orbitron', monospace;
          font-size: 1.5rem;
          font-weight: 900;
          color: var(--neon-cyan);
          text-shadow: 0 0 10px var(--neon-cyan);
        }

        .footer-description {
          color: var(--text-secondary);
          margin: 1rem 0 1.5rem;
          line-height: 1.6;
          font-size: 0.875rem;
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: rgba(139, 92, 246, 0.2);
          border: 1px solid var(--border-glow);
          border-radius: 50%;
          color: var(--text-primary);
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          background: var(--neon-cyan);
          color: var(--dark-bg);
          box-shadow: 0 0 15px var(--neon-cyan);
          transform: translateY(-2px);
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-links li {
          margin-bottom: 0.75rem;
        }

        .footer-links a {
          color: var(--text-secondary);
          text-decoration: none;
          transition: color 0.3s ease;
          font-size: 0.875rem;
        }

        .footer-links a:hover {
          color: var(--neon-cyan);
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding-top: 2rem;
          border-top: 1px solid rgba(139, 92, 246, 0.2);
          color: var(--text-secondary);
        }

        .footer-bottom-left p {
          margin: 0 0 0.5rem 0;
          font-size: 0.875rem;
        }

        .disclaimer {
          font-size: 0.75rem !important;
          color: var(--text-light) !important;
          font-style: italic;
        }

        .footer-bottom-links {
          display: flex;
          gap: 2rem;
        }

        .footer-bottom-links a {
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 0.875rem;
          transition: color 0.3s ease;
        }

        .footer-bottom-links a:hover {
          color: var(--neon-cyan);
        }

        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
          }

          .footer-bottom {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }

          .footer-bottom-links {
            gap: 1rem;
            justify-content: center;
          }

          .social-links {
            justify-content: center;
          }

          .footer-logo {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;