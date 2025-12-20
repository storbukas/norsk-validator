/*
 *  Kode for validering av fødselsnummer
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

const MOD11 = 11;
const vekttallKontrollsiffer1 = [3, 7, 6, 1, 8, 9, 4, 5, 2];
const vekttallKontrollsiffer2 = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];
const PERIOD_COMMA_SPACE_REGEX = /[,.\s]/g;

const vekttallSum = (fodselsnummer: string, factors: readonly number[]): number => {
  let sum = 0;

  for (let i = 0; i < factors.length; i += 1) {
    const factor = factors[i];
    if (factor !== undefined) {
      sum += parseInt(fodselsnummer.charAt(i), 10) * factor;
    }
  }

  return sum;
};

const fodselsnummer = (fodselsnummer: string | number | null | undefined): boolean => {
  if (!fodselsnummer) {
    return false;
  }

  const fodselsnummerString = fodselsnummer.toString()
    .replace(PERIOD_COMMA_SPACE_REGEX, '');

  if (fodselsnummerString.length !== 11) {
    return false;
  }

  let kontrollsiffer1 = MOD11 - (vekttallSum(fodselsnummerString, vekttallKontrollsiffer1) % MOD11);
  if (kontrollsiffer1 === MOD11) {
    kontrollsiffer1 = 0;
  }

  let kontrollsiffer2 = MOD11 - (vekttallSum(fodselsnummerString, vekttallKontrollsiffer2) % MOD11);
  if (kontrollsiffer2 === MOD11) {
    kontrollsiffer2 = 0;
  }

  return kontrollsiffer1 === parseInt(fodselsnummerString.charAt(9), 10)
    && kontrollsiffer2 === parseInt(fodselsnummerString.charAt(10), 10);
};

export default fodselsnummer;
