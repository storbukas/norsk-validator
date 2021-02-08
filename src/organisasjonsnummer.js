/*
 *  Kode for validering av organisasjonsnummer
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

const kontrollsiffer = require('./tools/kontrollsiffer');

const organisasjonsnummer = (organisasjonsnummer) => {
  const organisasjonsnummerString = organisasjonsnummer.toString();

  if (!organisasjonsnummerString || organisasjonsnummerString.length !== 9) {
    return false;
  }

  return parseInt(organisasjonsnummerString.charAt(organisasjonsnummerString.length - 1), 10)
    === kontrollsiffer.kontrollsiffferMod11(organisasjonsnummerString);
};

export default organisasjonsnummer;
