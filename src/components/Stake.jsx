import React, { useState } from 'react';
import { Lock, Unlock, Gift, TrendingUp, Clock, DollarSign } from 'lucide-react';
import { stake, claim } from '../stakingClient.ts';

const Stake = () => {
  const [stakeAmount, setStakeAmount] = useState('');
  const [stakePeriod, setStakePeriod] = useState('30');
  const [wallet, setWallet] = useState(null);
  const [loading, setLoading] = useState(false);
  const [lastStakeKey, setLastStakeKey] = useState(null);

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
        const resp = await window.solana.connect();
        setWallet(window.solana);
        console.log('✅ Wallet connected:', resp.publicKey.toString());
      } else {
        alert('Please install Phantom wallet!');
      }
    } catch (err) {
      console.error('Connection error', err);
    }
  };

  const handleStake = async () => {
    if (!wallet) {
      alert("Please connect your wallet first");
      return;
    }

    const amount = parseFloat(stakeAmount);
    const duration = parseInt(stakePeriod);

    if (!amount || amount <= 0) {
      alert("Invalid stake amount");
      return;
    }

    try {
      setLoading(true);
      const stakeTx = await stake(wallet, amount * 1_000_000, duration); // Convert to smallest unit
      setLastStakeKey(stakeTx);
      alert(`✅ Successfully staked ${amount} $PROTONE for ${duration} days.`);
    } catch (err) {
      console.error('Staking error', err);
      alert("❌ Staking failed.");
    } finally {
      setLoading(false);
    }
  };

  const handleClaimRewards = async () => {
    if (!wallet) {
      alert("Please connect your wallet first");
      return;
    }

    if (!lastStakeKey) {
      alert("No stake record found. Please stake first.");
      return;
    }

    try {
      setLoading(true);
      await claim(wallet, lastStakeKey);
      alert("🎉 Rewards claimed successfully!");
    } catch (err) {
      console.error("Claim error", err);
      alert("❌ Failed to claim rewards.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="stake" className="stake">
      <div className="container">
        <h2 className="heading-font mb-4">Stake & Earn</h2>

        {!wallet ? (
          <button className="btn btn-primary" onClick={connectWallet}>
            Connect Wallet
          </button>
        ) : (
          <div className="staking-form">
            <input
              type="number"
              value={stakeAmount}
              onChange={(e) => setStakeAmount(e.target.value)}
              placeholder="Enter amount"
            />
            <select
              value={stakePeriod}
              onChange={(e) => setStakePeriod(e.target.value)}
            >
              {stakingPeriods.map(p => (
                <option key={p.days} value={p.days}>
                  {p.days} days ({p.apy} APY)
                </option>
              ))}
            </select>

            <p>Estimated Rewards: {calculateRewards()} $PROTONE</p>

            <button className="btn btn-primary" onClick={handleStake} disabled={loading}>
              <Lock size={20} /> Stake Tokens
            </button>

            <button className="btn btn-neon" onClick={handleClaimRewards} disabled={loading}>
              <Gift size={20} /> Claim Rewards
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Stake;
