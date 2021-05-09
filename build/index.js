"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const soundex_1 = __importDefault(require("./phonetics/soundex"));
class Phonetics {
    constructor() { }
    static soundex(text) {
        return this.soundexObj.getPhoneticString(text);
    }
    static soundexMatch(text1, text2) {
        return this.soundexObj.isPhoneticMatch(text1, text2);
    }
}
exports.default = Phonetics;
Phonetics.soundexObj = new soundex_1.default();
console.log(Phonetics.soundex('livelife'));
