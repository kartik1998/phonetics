"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const soundex_1 = __importDefault(require("./phonetics/soundex"));
const metaphone_1 = __importDefault(require("./phonetics/metaphone"));
const double_metaphone_1 = __importDefault(require("./phonetics/double-metaphone"));
class Phonetics {
    constructor() { }
    static soundex(text) {
        return this.soundexObj.getPhoneticString(text);
    }
    static metaphone(text) {
        return this.metaphoneObj.getPhoneticString(text);
    }
    static doubleMetaphone(text) {
        return this.doubleMetaphoneObj.getPhoneticString(text);
    }
    static soundexMatch(text1, text2) {
        return this.soundexObj.isPhoneticMatch(text1, text2);
    }
    static metaphoneMatch(text1, text2) {
        return this.metaphoneObj.isPhoneticMatch(text1, text2);
    }
    static doubleMetaphoneMatch(text1, text2) {
        return this.doubleMetaphoneObj.isPhoneticMatch(text1, text2);
    }
}
Phonetics.soundexObj = new soundex_1.default();
Phonetics.metaphoneObj = new metaphone_1.default();
Phonetics.doubleMetaphoneObj = new double_metaphone_1.default();
module.exports = Phonetics;
