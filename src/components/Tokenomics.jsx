import React from 'react';
import { PieChart, Users, Zap, Shield } from 'lucide-react';

const Tokenomics = () => {
  const tokenomicsData = [
    {
      category: 'Staking Rewards',
      percentage: 40,
      color: '#8b5cf6',
      icon: <Zap />,
      description: 'Allocated for staking rewards and yield farming'
    },
    {
      category: 'Liquidity Pool',
      percentage: 35,
      color: '#3b82f6',
      icon: <Users />,
      description: 'DEX liquidity and market making'
    },
    {
      category: 'Development',
      percentage: 15,
      color: '#06b6d4',
      icon: <Shield />,
      description: 'Platform development and maintenance'
    },
    {
      category: 'Community',
      percentage: 10,
      color: '#ec4899',
      icon: <PieChart />,
      description: 'Airdrops, marketing, and community growth'
    }
  ];

  const totalSupply = '1,000,000,000';
  const circulatingSupply = '250,000,000';
  const burnedTokens = '50,000,000';

  return (
    <section id="tokenomics" className="tokenomics">
      <div className="container">
        <div className="section-header text-center mb-8">
          <h2 className="animate-fade-in-up heading-font">Tokenomics</h2>
          <p className="animate-fade-in-up">
            Transparent distribution designed for sustainable growth and community control
          </p>
        </div>

        <div className="tokenomics-content">
          <div className="tokenomics-chart animate-fade-in-up">
            <div className="chart-container">
              <div className="pie-chart">
                {tokenomicsData.map((item, index) => {
                  const rotation = tokenomicsData
                    .slice(0, index)
                    .reduce((acc, curr) => acc + (curr.percentage * 3.6), 0);
                  
                  return (
                    <div
                      key={item.category}
                      className="pie-slice"
                      style={{
                        '--percentage': item.percentage,
                        '--rotation': `${rotation}deg`,
                        '--color': item.color
                      }}
                    />
                  );
                })}
                <div className="chart-center">
                  <div className="chart-logo">$P</div>
                  <div className="chart-text">PROTONE</div>
                </div>
              </div>
            </div>

            <div className="supply-stats">
              <div className="supply-stat glass-card">
                <div className="supply-label">Total Supply</div>
                <div className="supply-value neon-text">{totalSupply}</div>
              </div>
              <div className="supply-stat glass-card">
                <div className="supply-label">Circulating</div>
                <div className="supply-value neon-text">{circulatingSupply}</div>
              </div>
              <div className="supply-stat glass-card">
                <div className="supply-label">Burned</div>
                <div className="supply-value neon-text">{burnedTokens}</div>
              </div>
            </div>
          </div>

          <div className="tokenomics-breakdown">
            <h3 className="heading-font mb-4">Distribution Breakdown</h3>
            <div className="breakdown-list">
              {tokenomicsData.map((item, index) => (
                <div
                  key={item.category}
                  className="breakdown-item glass-card animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="breakdown-icon" style={{ color: item.color }}>
                    {item.icon}
                  </div>
                  <div className="breakdown-info">
                    <div className="breakdown-header">
                      <span className="breakdown-category">{item.category}</span>
                      <span className="breakdown-percentage" style={{ color: item.color }}>
                        {item.percentage}%
                      </span>
                    </div>
                    <p className="breakdown-description">{item.description}</p>
                  </div>
                  <div className="breakdown-bar">
                    <div
                      className="breakdown-fill"
                      style={{
                        width: `${item.percentage}%`,
                        backgroundColor: item.color
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="control-message glass-card animate-fade-in-up">
              <h4 className="neon-text">You are in control</h4>
              <p>
                PROTONE's tokenomics are designed with transparency and community governance at its core. 
                Every decision is made with the community's best interests in mind, ensuring sustainable 
                growth and long-term value creation.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .tokenomics {
          position: relative;
          background: var(--darker-bg);
        }

        .section-header h2 {
          margin-bottom: 1rem;
        }

        .section-header p {
          font-size: 1.25rem;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto;
        }

        .tokenomics-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          margin-top: 3rem;
        }

        .chart-container {
          display: flex;
          justify-content: center;
          margin-bottom: 2rem;
        }

        .pie-chart {
          position: relative;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background: conic-gradient(
            from 0deg,
            #8b5cf6 0deg 144deg,
            #3b82f6 144deg 270deg,
            #06b6d4 270deg 324deg,
            #ec4899 324deg 360deg
          );
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 30px rgba(139, 92, 246, 0.3);
          animation: spin 20s linear infinite;
        }

        .chart-center {
          width: 120px;
          height: 120px;
          background: var(--dark-bg);
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border: 2px solid var(--border-glow);
        }

        .chart-logo {
          font-size: 2rem;
          font-weight: 900;
          font-family: 'Orbitron', monospace;
          color: var(--neon-cyan);
          text-shadow: 0 0 10px var(--neon-cyan);
        }

        .chart-text {
          font-size: 0.75rem;
          color: var(--text-secondary);
          font-family: 'Orbitron', monospace;
          letter-spacing: 2px;
        }

        .supply-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }

        .supply-stat {
          text-align: center;
          padding: 1.5rem 1rem;
        }

        .supply-label {
          font-size: 0.875rem;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 0.5rem;
        }

        .supply-value {
          font-size: 1.25rem;
          font-weight: 700;
          font-family: 'Orbitron', monospace;
        }

        .breakdown-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .breakdown-item {
          padding: 1.5rem;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .breakdown-icon {
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(139, 92, 246, 0.1);
          border-radius: 50%;
          flex-shrink: 0;
        }

        .breakdown-info {
          flex: 1;
        }

        .breakdown-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }

        .breakdown-category {
          font-weight: 700;
          color: var(--text-primary);
          font-family: 'Orbitron', monospace;
        }

        .breakdown-percentage {
          font-weight: 700;
          font-family: 'Orbitron', monospace;
          font-size: 1.125rem;
        }

        .breakdown-description {
          color: var(--text-secondary);
          font-size: 0.875rem;
          margin: 0;
        }

        .breakdown-bar {
          width: 100px;
          height: 4px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
          overflow: hidden;
        }

        .breakdown-fill {
          height: 100%;
          border-radius: 2px;
          transition: width 1s ease;
        }

        .control-message {
          padding: 2rem;
          text-align: center;
        }

        .control-message h4 {
          margin-bottom: 1rem;
          font-family: 'Orbitron', monospace;
        }

        .control-message p {
          color: var(--text-secondary);
          line-height: 1.6;
          margin: 0;
        }

        @media (max-width: 768px) {
          .tokenomics-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .pie-chart {
            width: 250px;
            height: 250px;
          }

          .chart-center {
            width: 100px;
            height: 100px;
          }

          .supply-stats {
            grid-template-columns: 1fr;
          }

          .breakdown-item {
            flex-direction: column;
            text-align: center;
            gap: 1rem;
          }

          .breakdown-header {
            flex-direction: column;
            gap: 0.5rem;
          }

          .breakdown-bar {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default Tokenomics;