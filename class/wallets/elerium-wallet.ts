import { HDSegwitBech32Wallet } from './hd-segwit-bech32-wallet.ts';

/**
 * HD Wallet (BIP39).
 * In particular, BIP84 (Bech32 Native Segwit)
 * @see https://github.com/bitcoin/bips/blob/master/bip-0084.mediawiki
 */
export class EleriumWallet extends HDSegwitBech32Wallet {
  static readonly type = 'EleriumWallet';
  static readonly typeReadable = 'Elerium NFC SegWit (BIP84 Bech32 Native)';
  // @ts-ignore: override
  public readonly type = EleriumWallet.type;
  // @ts-ignore: override
  public readonly typeReadable = EleriumWallet.typeReadable;

  async generate(): Promise<void> {
    this.secret = "ELERIUM-NFC";
  }

}

