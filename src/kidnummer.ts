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

import { kontrollsifferMod10, kontrollsifferMod11 } from './tools/kontrollsiffer';

const SPACE_REGEX = /[\s]/g;

const kidnummer = (
  kidnummer: string | number | null | undefined,
  mod11 = true,
  mod10 = true
): boolean => {
  if (!kidnummer) {
    return false;
  }

  const kidnummerString = kidnummer.toString().replace(SPACE_REGEX, '');

  if (kidnummerString.length === 0) {
    return false;
  }

  const controlDigit = parseInt(kidnummerString.charAt(kidnummerString.length - 1), 10);
  const erMod11 = controlDigit === kontrollsifferMod11(kidnummerString);
  const erMod10 = controlDigit === kontrollsifferMod10(kidnummerString);

  return (mod11 && erMod11) || (mod10 && erMod10);
};

export default kidnummer;
