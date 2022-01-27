# norsk-validator

npm-modul for validering av 
- kontonummer
- kid
- fødselsnummer
- organisasjonsnummer

# Installasjon

```sh
npm install --save norsk-validator
```

# Bruk

```ts
import validator from 'norsk-validator';
```

```ts
validator.kontonummer('76940512057');
validator.kontonummer('7694 05 12057');
validator.kontonummer('7694.05.12057');
validator.kidnummer('100001928231');
validator.fodselsnummer('02016126007');
validator.fodselsnummer('020161 26007');
validator.organisasjonsnummer('998447356');
```
