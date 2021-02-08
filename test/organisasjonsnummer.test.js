/*
 *  Test av organisasjonsnummer
 *
 *  updated 08 Feb 2021
 *  by Lars Erik Storbukås <https://github.com/storbukas>
 *
 *  Source: https://github.com/storbukas/norsk-validator
 *
 *  Licensed under the MIT License
 *  https://opensource.org/licenses/MIT
 *
 */

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
