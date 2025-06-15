import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Stake', href: '#stake' },
    { name: 'Tokenomics', href: '#tokenomics' },
    { name: 'About', href: '#about' },
    { name: 'Join Pulse', href: '#join' },
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="nav">
          <div className="logo">
            <span className="logo-font neon-text">$PROTONE</span>
          </div>
          
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.name}>
                <a href={item.href} className="nav-link">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {isMobileMenuOpen && (
          <div className="mobile-menu glass-card">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="mobile-menu-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(10, 10, 15, 0.9);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border-glow);
          transition: all 0.3s ease;
        }

        .header.scrolled {
          background: rgba(10, 10, 15, 0.95);
          box-shadow: 0 4px 20px rgba(139, 92, 246, 0.2);
        }

        .nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 0;
        }

        .logo-font {
          font-size: 1.75rem;
          font-weight: 900;
        }

        .nav-links {
          display: flex;
          list-style: none;
          gap: 2rem;
          margin: 0;
          padding: 0;
        }

        .nav-link {
          text-decoration: none;
          color: var(--text-primary);
          font-weight: 500;
          font-family: 'Orbitron', monospace;
          text-transform: uppercase;
          font-size: 0.875rem;
          letter-spacing: 1px;
          transition: all 0.3s ease;
          position: relative;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(45deg, var(--neon-cyan), var(--neon-purple));
          transition: width 0.3s ease;
        }

        .nav-link:hover {
          color: var(--neon-cyan);
          text-shadow: 0 0 10px var(--neon-cyan);
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
          padding: 0.5rem;
        }

        .mobile-menu {
          position: absolute;
          top: 100%;
          left: 1rem;
          right: 1rem;
          margin-top: 1rem;
          padding: 1rem;
          animation: slideDown 0.3s ease;
        }

        .mobile-menu-link {
          display: block;
          padding: 0.75rem;
          text-decoration: none;
          color: var(--text-primary);
          font-weight: 500;
          font-family: 'Orbitron', monospace;
          text-transform: uppercase;
          font-size: 0.875rem;
          letter-spacing: 1px;
          transition: all 0.3s ease;
          border-radius: 0.5rem;
        }

        .mobile-menu-link:hover {
          background: rgba(139, 92, 246, 0.2);
          color: var(--neon-cyan);
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }

          .mobile-menu-btn {
            display: flex;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;