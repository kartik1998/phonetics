import Soundex from './phonetics/soundex';
import Metaphone from './phonetics/metaphone';
import DoubleMetaphone from './phonetics/double-metaphone';

function soundex(text: string): string {
  const soundexObj = new Soundex();
  return soundexObj.getPhoneticString(text);
}

function metaphone(text: string): string {
  const metaphoneObj = new Metaphone();
  return metaphoneObj.getPhoneticString(text);
}

function doubleMetaphone(text: string): Array<string> {
  const doubleMetaphoneObj = new DoubleMetaphone();
  return doubleMetaphoneObj.getPhoneticString(text);
}

function soundexMatch(text1: string, text2: string): boolean {
  const soundexObj = new Soundex();
  return soundexObj.isPhoneticMatch(text1, text2);
}

function metaphoneMatch(text1: string, text2: string): boolean {
  const metaphoneObj = new Metaphone();
  return metaphoneObj.isPhoneticMatch(text1, text2);
}

function doubleMetaphoneMatch(text1: string, text2: string): boolean {
  const doubleMetaphoneObj = new DoubleMetaphone();
  return doubleMetaphoneObj.isPhoneticMatch(text1, text2);
}

export {
  soundex, soundexMatch, doubleMetaphone, metaphone, metaphoneMatch, doubleMetaphoneMatch
}