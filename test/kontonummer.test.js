/*
 *  Test av kontonummer
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
  true, validator.kontonummer('76940512057'),
  '76940512057 er et gyldig kontonummer'
);

tap.equal(
  true, validator.kontonummer('7694 05 12057'),
  '7694 05 12057 er et gyldig kontonummer'
);

tap.equal(
  true, validator.kontonummer('7694.05.12057'),
  '7694.05.12057 er et gyldig kontonummer'
);

tap.equal(
  false, validator.kontonummer('1010 10 10101'),
  '1010 10 10101 er IKKE et gyldig kontonummer'
);

tap.equal(
  false, validator.kontonummer('1010 10 1010'),
  '1010 10 1010 er IKKE et gyldig kontonummer'
);

tap.equal(
  false, validator.kontonummer(''),
  '"" er IKKE et gyldig kontonummer'
);
