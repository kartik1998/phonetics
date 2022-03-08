import Soundex from './phonetics/soundex';
import Metaphone from './phonetics/metaphone';
import DoubleMetaphone from './phonetics/double-metaphone';

class Phonetics {
  private static soundexObj = new Soundex();
  private static metaphoneObj = new Metaphone();
  private static doubleMetaphoneObj = new DoubleMetaphone();
  public constructor() { }

  public static soundex(text: string): string {
    return this.soundexObj.getPhoneticString(text);
  }

  public static metaphone(text: string): string {
    return this.metaphoneObj.getPhoneticString(text);
  }

  public static doubleMetaphone(text: string): Array<string> {
    return this.doubleMetaphoneObj.getPhoneticString(text);
  }

  public static soundexMatch(text1: string, text2: string): boolean {
    return this.soundexObj.isPhoneticMatch(text1, text2);
  }

  public static metaphoneMatch(text1: string, text2: string): boolean {
    return this.metaphoneObj.isPhoneticMatch(text1, text2);
  }

  public static doubleMetaphoneMatch(text1: string, text2: string): boolean {
    return this.doubleMetaphoneObj.isPhoneticMatch(text1, text2);
  }
}

const phonetics = new Phonetics();
export default phonetics;