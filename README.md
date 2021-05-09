<p align="center"><img src="https://raw.githubusercontent.com/kartik1998/phonetics/master/logo.png"> </p>
<p align="center"><img src="https://img.shields.io/badge/phonetic-string--matching-blue"> </p>

<blockquote> A nodejs library for phonetic string matching which exposes: soundex, metaphone and double-metaphone algorithms.</blockquote>

## Usage

- <b> Soundex </b>

```javascript
const Phonetics = require('phonetics');
console.log(Phonetics.soundex('phonetic'));
```

output: `p532`

- <b> Soundex match </b>

```javascript
const Phonetics = require('phonetics');
console.log(Phonetics.soundexMatch('phonetic', 'phonetics'));
```

output: `true`

- <b> Metaphone </b>

```javascript
const Phonetics = require('phonetics');
console.log(Phonetics.metaphone('phonetic'));
```

output: `FNTK`

- <b> Metaphone match </b>

```javascript
const Phonetics = require('phonetics');
console.log(Phonetics.metaphoneMatch('phonetic', 'phonetics'));
```

output: `false`

- <b> Double Metaphone </b>

```javascript
const Phonetics = require('phonetics');
console.log(Phonetics.doubleMetaphone('phonetic'));
```

output: `[ 'FNTK', 'FNTK' ]`

- <b> Double Metaphone match </b>

```javascript
const Phonetics = require('phonetics');
console.log(Phonetics.doubleMetaphoneMatch('phonetic', 'phonetics'));
```

output: `false`
