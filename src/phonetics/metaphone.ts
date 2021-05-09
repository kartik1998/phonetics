import { IPhonetic } from './base';
import { metaphone } from '../lib/metaphone';

export default class Metaphone implements IPhonetic {
  getPhoneticString(text: string): string {
    return metaphone(text);
  }
  isPhoneticMatch(text1: string, text2: string): boolean {
    return this.getPhoneticString(text1) === this.getPhoneticString(text2);
  }
}
