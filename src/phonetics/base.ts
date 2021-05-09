export interface IPhonetic {
  getPhoneticString(text: string): string;
  isPhoneticMatch(text1: string, text2: string): boolean;
}
