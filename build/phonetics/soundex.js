"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Soundex {
    constructor() {
        this.codes = {};
        /**
         * Soundex code values
         * @type {Object}
         */
        this.codes = {
            a: '',
            e: '',
            i: '',
            o: '',
            u: '',
            b: '1',
            f: '1',
            p: '1',
            v: '1',
            c: '2',
            g: '2',
            j: '2',
            k: '2',
            q: '2',
            s: '2',
            x: '2',
            z: '2',
            d: '3',
            t: '3',
            l: '4',
            m: '5',
            n: '5',
            r: '6',
        };
    }
    getPhoneticString(text) {
        let str = (text + '').toLowerCase();
        let f = str[0] || '';
        let r = '';
        let code = null;
        let length = str.length;
        for (let i = 1; i < length; i++) {
            if ((code = this.codes[str[i]]) == null)
                continue;
            else if (i === 1 && code === this.codes[f])
                continue;
            else if (code === this.codes[str[i - 1]])
                continue;
            r += code;
        }
        return (f + r + '000').substring(0, 4);
    }
    isPhoneticMatch(text1, text2) {
        return this.getPhoneticString(text1) === this.getPhoneticString(text2);
    }
}
exports.default = Soundex;
