"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.metaphone = void 0;
var sh = 'X';
var th = '0';
function metaphone(value) {
    var phonized = '';
    var index = 0;
    var skip;
    var next;
    var current;
    var previous;
    function phonize(characters) {
        phonized += characters;
    }
    function at(offset) {
        return value.charAt(index + offset).toUpperCase();
    }
    function atFactory(offset) {
        return function () {
            return at(offset);
        };
    }
    value = String(value || '');
    if (!value) {
        return '';
    }
    next = atFactory(1);
    current = atFactory(0);
    previous = atFactory(-1);
    while (!alpha(current())) {
        if (!current()) {
            return '';
        }
        index++;
    }
    switch (current()) {
        case 'A':
            if (next() === 'E') {
                phonize('E');
                index += 2;
            }
            else {
                phonize('A');
                index++;
            }
            break;
        case 'G':
        case 'K':
        case 'P':
            if (next() === 'N') {
                phonize('N');
                index += 2;
            }
            break;
        case 'W':
            if (next() === 'R') {
                phonize(next());
                index += 2;
            }
            else if (next() === 'H') {
                phonize(current());
                index += 2;
            }
            else if (vowel(next())) {
                phonize('W');
                index += 2;
            }
            break;
        case 'X':
            phonize('S');
            index++;
            break;
        case 'E':
        case 'I':
        case 'O':
        case 'U':
            phonize(current());
            index++;
            break;
        default:
            break;
    }
    while (current()) {
        skip = 1;
        if (!alpha(current()) || (current() === previous() && current() !== 'C')) {
            index += skip;
            continue;
        }
        switch (current()) {
            case 'B':
                if (previous() !== 'M') {
                    phonize('B');
                }
                break;
            case 'C':
                if (soft(next())) {
                    if (next() === 'I' && at(2) === 'A') {
                        phonize(sh);
                    }
                    else if (previous() !== 'S') {
                        phonize('S');
                    }
                }
                else if (next() === 'H') {
                    phonize(sh);
                    skip++;
                }
                else {
                    phonize('K');
                }
                break;
            case 'D':
                if (next() === 'G' && soft(at(2))) {
                    phonize('J');
                    skip++;
                }
                else {
                    phonize('T');
                }
                break;
            case 'G':
                if (next() === 'H') {
                    if (!(noGhToF(at(-3)) || at(-4) === 'H')) {
                        phonize('F');
                        skip++;
                    }
                }
                else if (next() === 'N') {
                    if (!(!alpha(at(2)) || (at(2) === 'E' && at(3) === 'D'))) {
                        phonize('K');
                    }
                }
                else if (soft(next()) && previous() !== 'G') {
                    phonize('J');
                }
                else {
                    phonize('K');
                }
                break;
            case 'H':
                if (vowel(next()) && !dipthongH(previous())) {
                    phonize('H');
                }
                break;
            case 'K':
                if (previous() !== 'C') {
                    phonize('K');
                }
                break;
            case 'P':
                if (next() === 'H') {
                    phonize('F');
                }
                else {
                    phonize('P');
                }
                break;
            case 'Q':
                phonize('K');
                break;
            case 'S':
                if (next() === 'I' && (at(2) === 'O' || at(2) === 'A')) {
                    phonize(sh);
                }
                else if (next() === 'H') {
                    phonize(sh);
                    skip++;
                }
                else {
                    phonize('S');
                }
                break;
            case 'T':
                if (next() === 'I' && (at(2) === 'O' || at(2) === 'A')) {
                    phonize(sh);
                }
                else if (next() === 'H') {
                    phonize(th);
                    skip++;
                }
                else if (!(next() === 'C' && at(2) === 'H')) {
                    phonize('T');
                }
                break;
            case 'V':
                phonize('F');
                break;
            case 'W':
                if (vowel(next())) {
                    phonize('W');
                }
                break;
            case 'X':
                phonize('KS');
                break;
            case 'Y':
                if (vowel(next())) {
                    phonize('Y');
                }
                break;
            case 'Z':
                phonize('S');
                break;
            case 'F':
            case 'J':
            case 'L':
            case 'M':
            case 'N':
            case 'R':
                phonize(current());
                break;
        }
        index += skip;
    }
    return phonized;
}
exports.metaphone = metaphone;
function noGhToF(character) {
    character = char(character);
    return character === 'B' || character === 'D' || character === 'H';
}
function soft(character) {
    character = char(character);
    return character === 'E' || character === 'I' || character === 'Y';
}
function vowel(character) {
    character = char(character);
    return character === 'A' || character === 'E' || character === 'I' || character === 'O' || character === 'U';
}
function dipthongH(character) {
    character = char(character);
    return character === 'C' || character === 'G' || character === 'P' || character === 'S' || character === 'T';
}
function alpha(character) {
    var code = charCode(character);
    return code >= 65 && code <= 90;
}
function charCode(character) {
    return char(character).charCodeAt(0);
}
function char(character) {
    return String(character).charAt(0).toUpperCase();
}
