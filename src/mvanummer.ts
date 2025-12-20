/*
 *  Kode for validering av MVA-nummer
 *
 *  MVA-nummer (merverdiavgiftsnummer) består av organisasjonsnummer
 *  etterfulgt av bokstavene "MVA".
 *  Format: 123456789MVA eller 123 456 789 MVA
 *
 *  Source: https://github.com/storbukas/norsk-validator
 *
 *  Licensed under the MIT License
 *  https://opensource.org/licenses/MIT
 *
 */

import { kontrollsifferMod11 } from './tools/kontrollsiffer';

const SPACE_REGEX = /[\s]/g;

const mvanummer = (mvanummer: string | null | undefined): boolean => {
  if (!mvanummer) {
    return false;
  }

  const mvaString = mvanummer.toString().replace(SPACE_REGEX, '').toUpperCase();

  // Must end with MVA
  if (!mvaString.endsWith('MVA')) {
    return false;
  }

  // Extract organisasjonsnummer (remove MVA suffix)
  const orgnr = mvaString.slice(0, -3);

  // Organisasjonsnummer must be 9 digits
  if (orgnr.length !== 9 || !/^\d{9}$/.test(orgnr)) {
    return false;
  }

  // Validate using MOD11 checksum
  const lastDigit = parseInt(orgnr.charAt(8), 10);
  return lastDigit === kontrollsifferMod11(orgnr);
};

export default mvanummer;
