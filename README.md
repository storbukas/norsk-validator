# norsk-validator

[![npm version](https://img.shields.io/npm/v/norsk-validator.svg)](https://www.npmjs.com/package/norsk-validator)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Komplett npm-modul for validering av norske identifikatorer:

**Personidentifikatorer:**
- **Fødselsnummer** - Personnummer (11 siffer)
- **D-nummer** - Midlertidig ID for utenlandske statsborgere
- **H-nummer** - Hjelpenummer brukt i helsevesenet
- **FH-nummer** - Felles hjelpenummer for ukjente pasienter
- **DUF-nummer** - Registreringsnummer i UDIs system (12 siffer)

**Organisasjons- og finansidentifikatorer:**
- **Organisasjonsnummer** - Organisasjonsnummer (9 siffer)
- **MVA-nummer** - Merverdiavgiftsnummer
- **Kontonummer** - Bankkontonummer (11 siffer)
- **IBAN** - Internasjonalt bankkontonummer (norsk format)
- **KID** - Kundeidentifikasjon for betalinger

## Installasjon

```sh
npm install norsk-validator
```

**Krav:** Node.js 18 eller nyere

## Bruk

### Default import

```ts
import validator from 'norsk-validator';

validator.fodselsnummer('01010750160');    // true
validator.dnummer('41010199946');          // true
validator.kontonummer('76940512057');      // true
validator.organisasjonsnummer('998447356'); // true
```

### Named imports (anbefalt for tree-shaking)

```ts
import {
  fodselsnummer,
  dnummer,
  hnummer,
  fhnummer,
  dufnummer,
  kontonummer,
  kidnummer,
  iban,
  organisasjonsnummer,
  mvanummer
} from 'norsk-validator';
```

### CommonJS

```js
const validator = require('norsk-validator').default;
// eller
const { fodselsnummer, kontonummer } = require('norsk-validator');
```

## API

Alle funksjoner returnerer `boolean`.

### Personidentifikatorer

#### `fodselsnummer(value)`

Validerer norske fødselsnumre (11 siffer).

```ts
fodselsnummer('01010750160');   // true
fodselsnummer('020161 26007');  // true (med mellomrom)
fodselsnummer('11111234567');   // false
```

#### `dnummer(value)`

Validerer D-numre for utenlandske statsborgere. Første siffer er økt med 4 (dag 01 blir 41).

```ts
dnummer('41010199946');   // true
dnummer('71010199969');   // true
dnummer('01010750160');   // false (vanlig fødselsnummer)
```

#### `hnummer(value)`

Validerer H-numre brukt i helsevesenet. Tredje siffer er økt med 4 (måned 01 blir 41).

```ts
hnummer('01410199935');   // true
hnummer('01510199983');   // true
hnummer('01010750160');   // false (vanlig fødselsnummer)
```

#### `fhnummer(value)`

Validerer FH-numre (Felles Hjelpenummer) for ukjente pasienter. Første siffer er 8 eller 9.

```ts
fhnummer('81234567802');  // true
fhnummer('91234567883');  // true
fhnummer('01010750160');  // false
```

#### `dufnummer(value)`

Validerer DUF-numre (12 siffer) brukt i UDIs system.

```ts
dufnummer('123456789012');    // true
dufnummer('123456 789012');   // true (med mellomrom)
dufnummer('12345678901');     // false (feil lengde)
```

### Organisasjons- og finansidentifikatorer

#### `organisasjonsnummer(value)`

Validerer norske organisasjonsnumre (9 siffer).

```ts
organisasjonsnummer('998447356'); // true
organisasjonsnummer('998447357'); // false
```

#### `mvanummer(value)`

Validerer MVA-numre (organisasjonsnummer + "MVA").

```ts
mvanummer('998447356MVA');       // true
mvanummer('998 447 356 MVA');    // true (med mellomrom)
mvanummer('998447356');          // false (mangler MVA)
```

#### `kontonummer(value)`

Validerer norske bankkontonumre (11 siffer).

```ts
kontonummer('76940512057');    // true
kontonummer('7694 05 12057');  // true (med mellomrom)
kontonummer('7694.05.12057');  // true (med punktum)
```

#### `iban(value)`

Validerer norske IBAN-numre (NO + 2 kontrollsiffer + 11 siffer kontonummer).

```ts
iban('NO9386011117947');       // true
iban('NO93 8601 1117 947');    // true (med mellomrom)
iban('SE9386011117947');       // false (feil landkode)
```

#### `kidnummer(value, mod11?, mod10?)`

Validerer KID-numre. Støtter både MOD11 og MOD10 algoritmer.

```ts
kidnummer('100001928231');              // true (sjekker begge)
kidnummer('100001928231', true, false); // true (kun MOD11)
kidnummer('100001928231', false, true); // false (kun MOD10)
```

## Lisens

MIT
