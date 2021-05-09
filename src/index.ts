import Soundex from './phonetics/soundex';

class Phonetics {
  private static soundexObj = new Soundex();
  private constructor() {}

  public static soundex(text: string): string {
    return this.soundexObj.getPhoneticString(text);
  }

  public static soundexMatch(text1: string, text2: string): boolean {
    return this.soundexObj.isPhoneticMatch(text1, text2);
  }
}

module.exports = Phonetics;