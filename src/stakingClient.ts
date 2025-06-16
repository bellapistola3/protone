import { Connection, PublicKey } from '@solana/web3.js';
import { Program, AnchorProvider, web3, Idl } from '@coral-xyz/anchor';
import idl from './idl.json';

const programID = new PublicKey("GNLZojjXUJ3xZ4YimNEoAEEJmZNUz3AXvLn8NYjvcqAn");
const network = "https://api.devnet.solana.com";
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
  await program.methods
    .stake(new web3.BN(amount), duration)
    .accounts({
      stakeData: stakeKeypair.publicKey,
      user: wallet.publicKey,
      systemProgram: web3.SystemProgram.programId,
    })
    .signers([stakeKeypair])
    .rpc();
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
