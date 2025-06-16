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

  const connectWallet = async () => {
    try {
      if (window.solana && window.solana.isPhantom) {
        const response = await window.solana.connect();
        setWalletConnected(true);
        console.log('Connected to wallet:', response.publicKey.toString());
      } else {
        alert('Please install Phantom wallet to continue');
      }
    } catch (error) {
      console.error('Error connecting wallet:', error);
      alert('Failed to connect wallet. Please try again.');
    }
  };

  const handleStake = async () => {
    if (!walletConnected) {
      alert("Please connect your wallet first");
      return;
    }

    if (!stakeAmount || parseFloat(stakeAmount) <= 0) {
      alert("Please enter a valid stake amount");
      return;
    }

    try {
      // For demo purposes, we'll simulate the staking process
      alert(`✅ Successfully staked ${stakeAmount} $PROTONE for ${stakePeriod} days!`);
      setStakeAmount('');
    } catch (error) {
      console.error('Staking error:', error);
      alert("❌ Staking failed. Please try again.");
    }
  };

  const handleUnstake = () => {
    if (!walletConnected) {
      alert("Please connect your wallet first");
      return;
    }
    alert("Unstaking functionality will be available after the lock period ends.");
  };

  const handleClaimRewards = () => {
    if (!walletConnected) {
      alert("Please connect your wallet first");
      return;
    }
    alert(`✅ Successfully claimed ${rewards} $PROTONE rewards!`);
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
                      min="0"
                      step="0.01"
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
                  <button className="btn btn-primary" onClick={handleStake}>
                    <Lock size={20} />
                    Stake Tokens
                  </button>
                  <button className="btn btn-neon" onClick={handleUnstake}>
                    <Unlock size={20} />
                    Unstake
                  </button>
                  <button className="btn btn-neon" onClick={handleClaimRewards}>
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
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(139, 92, 246, 0.2);
          border-radius: 50%;
          flex-shrink: 0;
        }

        .stat-value {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
          font-family: 'Orbitron', monospace;
          margin-bottom: 0.25rem;
        }

        .stat-label {
          color: var(--text-secondary);
          font-size: 0.875rem;
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

        .wallet-connect p {
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
        }

        .input-group {
          position: relative;
          display: flex;
          align-items: center;
        }

        .input-suffix {
          position: absolute;
          right: 1rem;
          color: var(--text-secondary);
          font-size: 0.875rem;
          pointer-events: none;
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
          margin-bottom: 0.25rem;
        }

        .period-apy {
          color: var(--neon-cyan);
          font-weight: 600;
          font-size: 0.875rem;
        }

        .period-multiplier {
          color: var(--text-secondary);
          font-size: 0.75rem;
          margin-top: 0.25rem;
        }

        .rewards-preview {
          padding: 1.5rem;
          margin: 1.5rem 0;
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
          color: var(--text-secondary);
          font-size: 0.875rem;
        }

        .stake-actions {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 1rem;
        }

        .stake-actions .btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.75rem 1rem;
          font-size: 0.875rem;
        }

        @media (max-width: 768px) {
          .stake-content {
            grid-template-columns: 1fr;
          }

          .period-options {
            grid-template-columns: 1fr;
          }

          .stake-actions {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Stake;