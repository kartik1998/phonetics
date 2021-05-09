import { IPhonetic } from './base';
import { doubleMetaphone } from '../lib/double-metaphone';

export default class DoubleMetaphone implements IPhonetic {
  getPhoneticString(text: string): Array<string> {
    return doubleMetaphone(text);
  }
  isPhoneticMatch(text1: string, text2: string): boolean {
    const d1 = doubleMetaphone(text1);
    const d2 = doubleMetaphone(text2);
    return d1[0] === d2[0] || d1[0] === d2[1] || d1[1] === d2[0] || d1[1] === d2[1];
  }
}
