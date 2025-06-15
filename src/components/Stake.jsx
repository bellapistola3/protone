import React, { useState } from 'react';
import { Lock, Unlock, Gift, TrendingUp, Clock, DollarSign } from 'lucide-react';

const Stake = () => {
  const [stakeAmount, setStakeAmount] = useState('');
  const [stakePeriod, setStakePeriod] = useState('30');
  const [walletConnected, setWalletConnected] = useState(false);
  const [balance] = useState('1,250.50');
  const [stakedAmount] = useState('500.00');
  const [rewards] = useState('12.45');

  const stakingPeriods = [
    { days: 7, apy: '8.5%', multiplier: '1x' },
    { days: 30, apy: '12.0%', multiplier: '1.5x' },
    { days: 90, apy: '15.2%', multiplier: '2x' },
    { days: 180, apy: '18.7%', multiplier: '2.5x' }
  ];

  const calculateRewards = () => {
    if (!stakeAmount || !stakePeriod) return '0.00';
    const amount = parseFloat(stakeAmount);
    const period = stakingPeriods.find(p => p.days.toString() === stakePeriod);
    if (!period) return '0.00';
    
    const apy = parseFloat(period.apy) / 100;
    const dailyRate = apy / 365;
    const rewards = amount * dailyRate * period.days;
    return rewards.toFixed(2);
  };

  const connectWallet = () => {
    setWalletConnected(true);
  };

  return (
    <section id="stake" className="stake">
      <div className="container">
        <div className="section-header text-center mb-8">
          <h2 className="animate-fade-in-up heading-font">Stake & Earn</h2>
          <p className="animate-fade-in-up">
            Lock your $PROTONE tokens and earn passive rewards with our built-in staking protocol
          </p>
        </div>

        <div className="stake-content">
          <div className="stake-stats">
            <div className="stat-card glass-card animate-fade-in-up">
              <div className="stat-icon">
                <DollarSign className="neon-text" />
              </div>
              <div className="stat-info">
                <div className="stat-value">{balance}</div>
                <div className="stat-label">Available Balance</div>
              </div>
            </div>
            <div className="stat-card glass-card animate-fade-in-up">
              <div className="stat-icon">
                <Lock className="neon-text" />
              </div>
              <div className="stat-info">
                <div className="stat-value">{stakedAmount}</div>
                <div className="stat-label">Staked Amount</div>
              </div>
            </div>
            <div className="stat-card glass-card animate-fade-in-up">
              <div className="stat-icon">
                <Gift className="neon-text" />
              </div>
              <div className="stat-info">
                <div className="stat-value">{rewards}</div>
                <div className="stat-label">Pending Rewards</div>
              </div>
            </div>
          </div>

          <div className="stake-panel glass-card animate-fade-in-up">
            <h3 className="heading-font mb-4">Staking Panel</h3>
            
            {!walletConnected ? (
              <div className="wallet-connect">
                <p className="mb-4">Connect your wallet to start staking</p>
                <button className="btn btn-primary" onClick={connectWallet}>
                  Connect Wallet
                </button>
              </div>
            ) : (
              <div className="staking-form">
                <div className="form-group">
                  <label htmlFor="amount">Stake Amount</label>
                  <div className="input-group">
                    <input
                      type="number"
                      id="amount"
                      value={stakeAmount}
                      onChange={(e) => setStakeAmount(e.target.value)}
                      placeholder="Enter amount to stake"
                    />
                    <span className="input-suffix">$PROTONE</span>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="period">Staking Period</label>
                  <div className="period-options">
                    {stakingPeriods.map((period) => (
                      <div
                        key={period.days}
                        className={`period-option ${stakePeriod === period.days.toString() ? 'active' : ''}`}
                        onClick={() => setStakePeriod(period.days.toString())}
                      >
                        <div className="period-days">{period.days} Days</div>
                        <div className="period-apy">{period.apy} APY</div>
                        <div className="period-multiplier">{period.multiplier}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rewards-preview glass-card">
                  <div className="rewards-info">
                    <TrendingUp className="neon-text" />
                    <div>
                      <div className="rewards-amount">{calculateRewards()} $PROTONE</div>
                      <div className="rewards-label">Estimated Rewards</div>
                    </div>
                  </div>
                </div>

                <div className="stake-actions">
                  <button className="btn btn-primary">
                    <Lock size={20} />
                    Stake Tokens
                  </button>
                  <button className="btn btn-neon">
                    <Unlock size={20} />
                    Unstake
                  </button>
                  <button className="btn btn-neon">
                    <Gift size={20} />
                    Claim Rewards
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .stake {
          position: relative;
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

        .stake-content {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 2rem;
          margin-top: 3rem;
        }

        .stake-stats {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .stat-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem;
        }

        .stat-icon {
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(139, 92, 246, 0.2);
          border-radius: 50%;
        }

        .stat-value {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
          font-family: 'Orbitron', monospace;
        }

        .stat-label {
          font-size: 0.875rem;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .stake-panel {
          padding: 2rem;
        }

        .wallet-connect {
          text-align: center;
          padding: 2rem;
        }

        .input-group {
          position: relative;
        }

        .input-suffix {
          position: absolute;
          right: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-secondary);
          font-family: 'Orbitron', monospace;
          font-size: 0.875rem;
        }

        .period-options {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          margin-top: 0.5rem;
        }

        .period-option {
          padding: 1rem;
          background: rgba(15, 15, 25, 0.5);
          border: 1px solid var(--border-glow);
          border-radius: 0.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
        }

        .period-option:hover,
        .period-option.active {
          border-color: var(--neon-cyan);
          background: rgba(0, 255, 255, 0.1);
          box-shadow: 0 0 15px rgba(0, 255, 255, 0.2);
        }

        .period-days {
          font-weight: 700;
          color: var(--text-primary);
          font-family: 'Orbitron', monospace;
        }

        .period-apy {
          color: var(--neon-cyan);
          font-weight: 600;
          margin: 0.25rem 0;
        }

        .period-multiplier {
          font-size: 0.75rem;
          color: var(--text-secondary);
          text-transform: uppercase;
        }

        .rewards-preview {
          margin: 1.5rem 0;
          padding: 1rem;
        }

        .rewards-info {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .rewards-amount {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--neon-cyan);
          font-family: 'Orbitron', monospace;
        }

        .rewards-label {
          font-size: 0.875rem;
          color: var(--text-secondary);
        }

        .stake-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .stake-actions .btn {
          flex: 1;
          min-width: 150px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        @media (max-width: 768px) {
          .stake-content {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .period-options {
            grid-template-columns: 1fr;
          }

          .stake-actions {
            flex-direction: column;
          }

          .stake-actions .btn {
            min-width: auto;
          }
        }
      `}</style>
    </section>
  );
};

export default Stake;