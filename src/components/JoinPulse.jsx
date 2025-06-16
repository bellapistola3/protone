import React, { useState } from 'react';
import { Twitter, Send, Gift, CheckCircle, Wallet, Share2 } from 'lucide-react';

const JoinPulse = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const [twitterPost, setTwitterPost] = useState('');
  const [selectedAction, setSelectedAction] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [connectedWallet, setConnectedWallet] = useState('');

  const airdropActions = [
    { id: 'follow', label: 'Follow @PROTONE_Official', reward: '50 $PROTONE' },
    { id: 'retweet', label: 'Retweet Announcement', reward: '75 $PROTONE' },
    { id: 'share', label: 'Share with Friends', reward: '100 $PROTONE' },
    { id: 'join', label: 'Join Telegram', reward: '125 $PROTONE' }
  ];

  const connectWallet = async () => {
    try {
      if (window.solana && window.solana.isPhantom) {
        const response = await window.solana.connect();
        const address = response.publicKey.toString();
        setConnectedWallet(address);
        setWalletAddress(address);
        console.log('Connected to wallet:', address);
      } else {
        // Simulate wallet connection for demo
        const mockAddress = '0x' + Math.random().toString(16).substr(2, 40);
        setConnectedWallet(mockAddress);
        setWalletAddress(mockAddress);
      }
    } catch (error) {
      console.error('Error connecting wallet:', error);
      alert('Failed to connect wallet. Please try again.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!walletAddress) {
      alert('Please enter or connect your wallet address');
      return;
    }
    
    if (!selectedAction) {
      alert('Please select an action to participate');
      return;
    }
    
    if (!twitterPost) {
      alert('Please provide a link to your post/action');
      return;
    }
    
    setIsSubmitted(true);
  };

  const checkReward = () => {
    if (!walletAddress) {
      alert('Please connect your wallet first');
      return;
    }
    alert('Your reward status: Pending verification. You will receive your tokens within 24 hours!');
  };

  return (
    <section id="join" className="join-pulse">
      <div className="container">
        <div className="section-header text-center mb-8">
          <h2 className="animate-fade-in-up heading-font">Join the Pulse</h2>
          <p className="animate-fade-in-up">
            Be part of the revolution. Connect your portfolio and join our growing community.
          </p>
        </div>

        <div className="join-content">
          <div className="portfolio-connection glass-card animate-fade-in-up">
            <h3 className="heading-font mb-4">Connect Your Portfolio</h3>
            <p className="mb-4">
              Connect your crypto portfolio to start trading $PROTONE and track your investments.
            </p>
            
            <div className="wallet-options">
              <button className="wallet-btn" onClick={connectWallet}>
                <Wallet />
                <span>MetaMask</span>
              </button>
              <button className="wallet-btn" onClick={connectWallet}>
                <Wallet />
                <span>WalletConnect</span>
              </button>
              <button className="wallet-btn" onClick={connectWallet}>
                <Wallet />
                <span>Coinbase Wallet</span>
              </button>
              <button className="wallet-btn" onClick={connectWallet}>
                <Wallet />
                <span>Trust Wallet</span>
              </button>
            </div>

            {connectedWallet && (
              <div className="connected-wallet">
                <CheckCircle className="neon-text" />
                <div>
                  <div className="wallet-status">Wallet Connected</div>
                  <div className="wallet-address">{connectedWallet.slice(0, 6)}...{connectedWallet.slice(-4)}</div>
                </div>
              </div>
            )}

            <div className="buy-section">
              <h4 className="heading-font">Buy $PROTONE</h4>
              <div className="buy-options">
                <button className="btn btn-primary" onClick={() => alert('Redirecting to Uniswap...')}>
                  Buy on Uniswap
                </button>
                <button className="btn btn-neon" onClick={() => alert('Redirecting to PancakeSwap...')}>
                  Buy on PancakeSwap
                </button>
              </div>
            </div>
          </div>

          <div className="airdrop-section glass-card animate-fade-in-up">
            <h3 className="heading-font mb-4">
              <Gift className="neon-text" />
              Airdrop Campaign
            </h3>
            <p className="mb-4">
              Complete tasks to earn free $PROTONE tokens. First 100 participants get 
              <span className="neon-text"> "Pulse Pioneer" </span> status!
            </p>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="airdrop-form">
                <div className="form-group">
                  <label htmlFor="wallet">Wallet Address</label>
                  <input
                    type="text"
                    id="wallet"
                    value={walletAddress}
                    onChange={(e) => setWalletAddress(e.target.value)}
                    placeholder="0x... or connect wallet above"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Select Action</label>
                  <div className="action-options">
                    {airdropActions.map((action) => (
                      <div
                        key={action.id}
                        className={`action-option ${selectedAction === action.id ? 'active' : ''}`}
                        onClick={() => setSelectedAction(action.id)}
                      >
                        <div className="action-label">{action.label}</div>
                        <div className="action-reward">{action.reward}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="post">Link to Post/Action</label>
                  <input
                    type="url"
                    id="post"
                    value={twitterPost}
                    onChange={(e) => setTwitterPost(e.target.value)}
                    placeholder="https://twitter.com/... or https://t.me/..."
                    required
                  />
                </div>

                <div className="form-actions">
                  <button type="submit" className="btn btn-primary">
                    <Send size={20} />
                    Participate
                  </button>
                  <button type="button" className="btn btn-neon" onClick={checkReward}>
                    Check Reward
                  </button>
                </div>
              </form>
            ) : (
              <div className="success-message">
                <CheckCircle size={48} className="neon-text" />
                <h4>Submission Successful!</h4>
                <p>
                  Your participation has been recorded. We'll verify your submission and 
                  distribute rewards within 24 hours.
                </p>
                <div className="pioneer-badge">
                  <span className="neon-text">🏆 Pulse Pioneer Candidate</span>
                </div>
                <button 
                  className="btn btn-neon mt-4" 
                  onClick={() => {
                    setIsSubmitted(false);
                    setSelectedAction('');
                    setTwitterPost('');
                  }}
                >
                  Submit Another Entry
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="social-coming-soon glass-card animate-fade-in-up text-center">
          <h3 className="heading-font">Social Channels Coming Soon</h3>
          <p>
            We're preparing our official Twitter and Telegram channels. 
            Stay tuned for announcements!
          </p>
          <div className="social-icons">
            <div className="social-icon">
              <Twitter />
              <span>Twitter</span>
            </div>
            <div className="social-icon">
              <Send />
              <span>Telegram</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .join-pulse {
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

        .join-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .portfolio-connection,
        .airdrop-section {
          padding: 2rem;
        }

        .wallet-options {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .wallet-btn {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem;
          background: rgba(15, 15, 25, 0.8);
          border: 1px solid var(--border-glow);
          border-radius: 0.5rem;
          color: var(--text-primary);
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: 'Exo 2', sans-serif;
        }

        .wallet-btn:hover {
          border-color: var(--neon-cyan);
          background: rgba(0, 255, 255, 0.1);
          box-shadow: 0 0 15px rgba(0, 255, 255, 0.2);
        }

        .connected-wallet {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid var(--success);
          border-radius: 0.5rem;
          margin-bottom: 2rem;
        }

        .wallet-status {
          font-weight: 600;
          color: var(--success);
          font-family: 'Orbitron', monospace;
        }

        .wallet-address {
          font-size: 0.875rem;
          color: var(--text-secondary);
          font-family: monospace;
        }

        .buy-section h4 {
          margin-bottom: 1rem;
          color: var(--neon-cyan);
        }

        .buy-options {
          display: flex;
          gap: 1rem;
        }

        .buy-options .btn {
          flex: 1;
        }

        .airdrop-section h3 {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .action-options {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-top: 0.5rem;
        }

        .action-option {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          background: rgba(15, 15, 25, 0.5);
          border: 1px solid var(--border-glow);
          border-radius: 0.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .action-option:hover,
        .action-option.active {
          border-color: var(--neon-cyan);
          background: rgba(0, 255, 255, 0.1);
          box-shadow: 0 0 15px rgba(0, 255, 255, 0.2);
        }

        .action-label {
          font-weight: 600;
          color: var(--text-primary);
        }

        .action-reward {
          color: var(--neon-cyan);
          font-weight: 700;
          font-family: 'Orbitron', monospace;
        }

        .form-actions {
          display: flex;
          gap: 1rem;
        }

        .form-actions .btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .success-message {
          text-align: center;
          padding: 2rem;
        }

        .success-message h4 {
          margin: 1rem 0;
          color: var(--success);
          font-family: 'Orbitron', monospace;
        }

        .success-message p {
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
        }

        .pioneer-badge {
          padding: 1rem;
          background: rgba(139, 92, 246, 0.2);
          border: 1px solid var(--border-glow);
          border-radius: 0.5rem;
          font-weight: 700;
          font-family: 'Orbitron', monospace;
          margin-bottom: 1rem;
        }

        .mt-4 {
          margin-top: 1rem;
        }

        .social-coming-soon {
          padding: 2rem;
          max-width: 600px;
          margin: 0 auto;
        }

        .social-icons {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-top: 1.5rem;
        }

        .social-icon {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem;
          background: rgba(139, 92, 246, 0.1);
          border-radius: 0.5rem;
          color: var(--text-secondary);
        }

        @media (max-width: 768px) {
          .join-content {
            grid-template-columns: 1fr;
          }

          .wallet-options {
            grid-template-columns: 1fr;
          }

          .buy-options {
            flex-direction: column;
          }

          .form-actions {
            flex-direction: column;
          }

          .social-icons {
            gap: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default JoinPulse;