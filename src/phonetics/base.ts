export interface IPhonetic {
  getPhoneticString(text: string): string | Array<string>;
  isPhoneticMatch(text1: string, text2: string): boolean;
}
