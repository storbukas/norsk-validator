/*
 *  Kode for validering av KID-nummer
 *
 *  updated 26 Jan 2022
 *  by Lars Erik Storbukås <https://github.com/storbukas>
 *
 *  Source: https://github.com/storbukas/norsk-validator
 *
 *  Licensed under the MIT License
 *  https://opensource.org/licenses/MIT
 *
 */

'use strict';

import { kontrollsiffferMod10, kontrollsiffferMod11 } from "./tools/kontrollsiffer";

const SPACE_REGEX = /[\s]/g;

const kidnummer = (kidnummer: any, mod11 = true, mod10 = true) => {
  if (!kidnummer || kidnummer.length === 0) {
    return false;
  }

  const kidnummerString = kidnummer.toString().replace(SPACE_REGEX, '');

  const controlDigit = kidnummerString.charAt(kidnummer.length - 1);
  const erMod11 = parseInt(controlDigit, 10)
    === kontrollsiffferMod11(kidnummerString);
  const erMod10 = parseInt(controlDigit, 10)
    === kontrollsiffferMod10(kidnummerString);

  return (mod11 && erMod11) || (mod10 && erMod10);
};

export default kidnummer;
