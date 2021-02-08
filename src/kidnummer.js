/*
 *  Kode for validering av KID-nummer
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

const SPACE_REGEX = /[\s]/g;

const kidnummer = (kidnummer, mod11 = true, mod10 = true) => {
  if (!kidnummer || kidnummer.length === 0) {
    return false;
  }

  const kidnummerString = kidnummer.toString().replace(SPACE_REGEX, '');

  const controlDigit = kidnummerString.charAt(kidnummer.length - 1);
  const erMod11 = parseInt(controlDigit, 10)
    === kontrollsiffer.kontrollsiffferMod11(kidnummerString);
  const erMod10 = parseInt(controlDigit, 10)
    === kontrollsiffer.kontrollsiffferMod10(kidnummerString);

  return (mod11 && erMod11) || (mod10 && erMod10);
};

export default kidnummer;
