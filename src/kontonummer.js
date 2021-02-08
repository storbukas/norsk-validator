/*
 *  Kode for validering av kontonummer
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

const PERIOD_COMMA_SPACE_REGEX = /[,.\s]/g;

const kontonummer = (kontonummer) => {
  if (!kontonummer) {
    return false;
  }

  const kontonummerString = kontonummer.toString().replace(PERIOD_COMMA_SPACE_REGEX, '');

  if (kontonummerString.length !== 11) {
    return false;
  }

  return (
    parseInt(kontonummerString.charAt(kontonummerString.length - 1), 10)
    === kontrollsiffer.kontrollsiffferMod11(kontonummerString)
  );
};

export default kontonummer;
