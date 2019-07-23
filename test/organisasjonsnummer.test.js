'use strict';

const tap = require('tap');
const validator = require('../src/index.js');

tap.equal(
  true, validator.organisasjonsnummer('998447356'),
  '998447356 er et gyldig organisasjonsnummer'
);

tap.equal(
  false, validator.organisasjonsnummer('998447357'),
  '998447356 er IKKE et gyldig organisasjonsnummer'
);

tap.equal(
  false, validator.organisasjonsnummer('99844735'),
  '998447356 er IKKE et gyldig organisasjonsnummer'
);

tap.equal(
  false, validator.organisasjonsnummer(''),
  '"" er IKKE et gyldig organisasjonsnummer'
);
