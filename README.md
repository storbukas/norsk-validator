# norsk-validator

npm-modul for validering av 
- kontonummer
- kid
- fødselsnummer
- organisasjonsnummer

## Bruk

```npm install norsk-validator```

```javascript
const validator = require('norsk-validator');
```

```javascript
validator.kontonummer('76940512057');
validator.kontonummer('7694 05 12057');
validator.kontonummer('7694.05.12057');
validator.kidnummer('100001928231');
validator.fodselsnummer('02016126007');
validator.fodselsnummer('020161 26007');
validator.organisasjonsnummer('998447356');
```
