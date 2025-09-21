import { Connection, PublicKey } from '@solana/web3.js';
import { Program, AnchorProvider, web3, Idl } from '@coral-xyz/anchor';
import idl from './idl.json';

// PROTONE Token Contract Addresses
const PROTONE_MINT = new PublicKey("52tAqR4GXMbqNfWb5Rq3f59Cry7GogRbfZ7ReyVEGDC2");
const PROTONE_LP = new PublicKey("68E9whND73xeXr9uTDv1dEjnA9EPmrSW2tuPhL1YGsHE");
const POOL_ID = new PublicKey("LWV1NbKa2GTwS9muveoQSu7R4vksGFb5WYfr2zZKpYi");
const programID = new PublicKey("4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R");
const network = "https://api.mainnet-beta.solana.com";
const opts = {
  preflightCommitment: "processed",
};

export const getProvider = (wallet: any) => {
  const connection = new Connection(network, opts.preflightCommitment as any);
  const provider = new AnchorProvider(connection, wallet, opts);
  return provider;
};

export const getProgram = (wallet: any) => {
  const provider = getProvider(wallet);
  return new Program(idl as Idl, programID, provider);
};

export const stake = async (wallet: any, amount: number, duration: number) => {
  const program = getProgram(wallet);
  const stakeKeypair = web3.Keypair.generate();
  
  // Use native JavaScript number instead of BN for simplicity
  await program.methods
    .stake(amount, duration)
    .accounts({
      stakeData: stakeKeypair.publicKey,
      user: wallet.publicKey,
      systemProgram: web3.SystemProgram.programId,
    })
    .signers([stakeKeypair])
    .rpc();
  return stakeKeypair.publicKey;
};

export const claim = async (wallet: any, stakeData: PublicKey) => {
  const program = getProgram(wallet);
  await program.methods
    .claim()
    .accounts({
      stakeData,
      user: wallet.publicKey,
    })
    .rpc();
};