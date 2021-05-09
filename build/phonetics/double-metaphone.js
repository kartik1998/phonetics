"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const double_metaphone_1 = require("../lib/double-metaphone");
class DoubleMetaphone {
    getPhoneticString(text) {
        return double_metaphone_1.doubleMetaphone(text);
    }
    isPhoneticMatch(text1, text2) {
        const d1 = double_metaphone_1.doubleMetaphone(text1);
        const d2 = double_metaphone_1.doubleMetaphone(text2);
        return d1[0] === d2[0] || d1[0] === d2[1] || d1[1] === d2[0] || d1[1] === d2[1];
    }
}
exports.default = DoubleMetaphone;
