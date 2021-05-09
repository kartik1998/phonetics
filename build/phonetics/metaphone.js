"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const metaphone_1 = require("../lib/metaphone");
class Metaphone {
    getPhoneticString(text) {
        return metaphone_1.metaphone(text);
    }
    isPhoneticMatch(text1, text2) {
        return this.getPhoneticString(text1) === this.getPhoneticString(text2);
    }
}
exports.default = Metaphone;
