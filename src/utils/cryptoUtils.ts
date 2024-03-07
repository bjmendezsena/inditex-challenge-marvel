import Crypto from "crypto-js";

export function createHashMd5(text: string): string {
  return Crypto.MD5(text).toString();
}
