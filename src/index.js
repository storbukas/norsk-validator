/*
 *  Validering av fødselsnummer, organisasjonsnummer, kontonummer og KID
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

const fodselsnummer = require('./fodselsnummer');
const kidnummer = require('./kidnummer');
const kontonummer = require('./kontonummer');
const organisasjonsnummer = require('./organisasjonsnummer');

module.exports = {
  kontonummer: kontonummer.default,
  kidnummer: kidnummer.default,
  fodselsnummer: fodselsnummer.default,
  organisasjonsnummer: organisasjonsnummer.default,
};
