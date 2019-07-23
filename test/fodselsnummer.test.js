'use strict';

const tap = require('tap');
const validator = require('../src/index.js');

tap.equal(
  true, validator.fodselsnummer('01010750160'),
  '01010750160 er et gyldig fødselsnummer'
);

tap.equal(
  true, validator.fodselsnummer('020161 26007'),
  '020161 26007 er et gyldig fødselsnummer'
);

tap.equal(
  false, validator.fodselsnummer('11111234567'),
  '11111234567 er IKKE et gyldig fødselsnummer'
);

tap.equal(
  false, validator.fodselsnummer('1234123456'),
  '1234123456 er IKKE et gyldig fødselsnummer'
);

tap.equal(
  false, validator.fodselsnummer(''),
  '"" er IKKE et gyldig fødselsnummer'
);
