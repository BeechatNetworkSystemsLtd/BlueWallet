import { HDSegwitBech32Wallet } from "./hd-segwit-bech32-wallet.ts";
import { createWallet, seedWallet } from "@beechatnetwork/elerium-lib";

/**
 * HD Wallet (BIP39).
 * In particular, BIP84 (Bech32 Native Segwit)
 * @see https://github.com/bitcoin/bips/blob/master/bip-0084.mediawiki
 */
export class EleriumWallet extends HDSegwitBech32Wallet {
  static readonly type = "EleriumWallet";
  static readonly typeReadable = "Elerium NFC SegWit (BIP84 Bech32 Native)";
  // @ts-ignore: override
  public readonly type = EleriumWallet.type;
  // @ts-ignore: override
  public readonly typeReadable = EleriumWallet.typeReadable;

  _seed: number[] = [];

  async generate(): Promise<void> {
    this._seed = await createWallet([]);
    this.secret = "ELERIUM-NFC";

    await this.getAddressAsync()
    console.log("address", this.getAddress());

    this.signMessage("TEST", this.getAddress());
  }

  _getSeed(): Buffer {
    return Buffer.from(this._seed);
  }

  signMessage(message: string, address: string, useSegwit = true): string {
    const options = this.segwitType && useSegwit ? { segwitType: this.segwitType } : undefined;
    const signature = bitcoinMessage.sign(message, "", false, options);
    return signature.toString('base64');
  }

}
