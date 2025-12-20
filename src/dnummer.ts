/*
 *  Kode for validering av D-nummer
 *
 *  D-nummer er et midlertidig identifikasjonsnummer for personer
 *  som ikke oppfyller kravene for å få tildelt fødselsnummer.
 *  Første siffer er økt med 4 (dag 01 blir 41, dag 31 blir 71).
 *
 *  Source: https://github.com/storbukas/norsk-validator
 *
 *  Licensed under the MIT License
 *  https://opensource.org/licenses/MIT
 *
 */

const MOD11 = 11;
const vekttallKontrollsiffer1 = [3, 7, 6, 1, 8, 9, 4, 5, 2] as const;
const vekttallKontrollsiffer2 = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2] as const;
const PERIOD_COMMA_SPACE_REGEX = /[,.\s]/g;

const vekttallSum = (nummer: string, factors: readonly number[]): number => {
  let sum = 0;

  for (let i = 0; i < factors.length; i += 1) {
    const factor = factors[i];
    if (factor !== undefined) {
      sum += parseInt(nummer.charAt(i), 10) * factor;
    }
  }

  return sum;
};

const dnummer = (dnummer: string | number | null | undefined): boolean => {
  if (!dnummer) {
    return false;
  }

  const dnummerString = dnummer.toString().replace(PERIOD_COMMA_SPACE_REGEX, '');

  if (dnummerString.length !== 11) {
    return false;
  }

  // D-nummer has first digit increased by 4 (valid range: 4-7)
  const firstDigit = parseInt(dnummerString.charAt(0), 10);
  if (firstDigit < 4 || firstDigit > 7) {
    return false;
  }

  let kontrollsiffer1 = MOD11 - (vekttallSum(dnummerString, vekttallKontrollsiffer1) % MOD11);
  if (kontrollsiffer1 === MOD11) {
    kontrollsiffer1 = 0;
  }

  let kontrollsiffer2 = MOD11 - (vekttallSum(dnummerString, vekttallKontrollsiffer2) % MOD11);
  if (kontrollsiffer2 === MOD11) {
    kontrollsiffer2 = 0;
  }

  return kontrollsiffer1 === parseInt(dnummerString.charAt(9), 10)
    && kontrollsiffer2 === parseInt(dnummerString.charAt(10), 10);
};

export default dnummer;
