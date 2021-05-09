"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const soundex_1 = __importDefault(require("./phonetics/soundex"));
const soundex = new soundex_1.default();
console.log(soundex.getPhoneticString('sound'));
