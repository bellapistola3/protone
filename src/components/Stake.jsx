import React, { useState } from 'react';
import { Lock, Unlock, Gift, TrendingUp, Clock, DollarSign } from 'lucide-react';
import { stake } from '../stakingClient';

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

  const handleStake = async () => {
    if (!window.solana || !window.solana.isPhantom) {
      alert("Connect Phantom wallet first");
      return;
    }

    try {
      const provider = window.solana;
      await provider.connect();
      const wallet = {
        publicKey: provider.publicKey,
        signTransaction: provider.signTransaction,
        signAllTransactions: provider.signAllTransactions,
      };

      const amount = parseFloat(stakeAmount) * 1_000_000;
      const duration = parseInt(stakePeriod);

      await stake(wallet, amount, duration);
      alert("Stake successful!");
    } catch (err) {
      console.error(err);
      alert("Stake failed!");
    }
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
                  <button className="btn btn-primary" onClick={handleStake}>
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
    </section>
  );
};

export default Stake;
