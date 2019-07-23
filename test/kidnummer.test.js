'use strict';

const tap = require('tap');
const validator = require('../src/index.js');

tap.equal(
  true, validator.kidnummer('100001928231'),
  '100001928231 er en gyldig KID'
);

tap.equal(
  false, validator.kidnummer('100001928232'),
  '100001928232 er IKKE en gyldig KID'
);

tap.equal(
  false, validator.kidnummer(''),
  '"" er IKKE en gyldig KID'
);
