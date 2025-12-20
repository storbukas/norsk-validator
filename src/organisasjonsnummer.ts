/*
 *  Kode for validering av organisasjonsnummer
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

import { kontrollsifferMod11 } from './tools/kontrollsiffer';

const organisasjonsnummer = (organisasjonsnummer: string | number | null | undefined): boolean => {
  if (!organisasjonsnummer) {
    return false;
  }

  const organisasjonsnummerString = organisasjonsnummer.toString();

  if (organisasjonsnummerString.length !== 9) {
    return false;
  }

  return parseInt(organisasjonsnummerString.charAt(organisasjonsnummerString.length - 1), 10)
    === kontrollsifferMod11(organisasjonsnummerString);
};

export default organisasjonsnummer;
