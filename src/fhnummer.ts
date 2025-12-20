/*
 *  Kode for validering av FH-nummer
 *
 *  FH-nummer (Felles Hjelpenummer) er et midlertidig identifikasjonsnummer
 *  brukt i helsevesenet for ukjente pasienter, turister, nyfødte uten
 *  fødselsnummer, etc. Første siffer er alltid 8 eller 9.
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

const fhnummer = (fhnummer: string | number | null | undefined): boolean => {
  if (!fhnummer) {
    return false;
  }

  const fhnummerString = fhnummer.toString().replace(PERIOD_COMMA_SPACE_REGEX, '');

  if (fhnummerString.length !== 11) {
    return false;
  }

  // FH-nummer has first digit 8 or 9
  const firstDigit = parseInt(fhnummerString.charAt(0), 10);
  if (firstDigit !== 8 && firstDigit !== 9) {
    return false;
  }

  let kontrollsiffer1 = MOD11 - (vekttallSum(fhnummerString, vekttallKontrollsiffer1) % MOD11);
  if (kontrollsiffer1 === MOD11) {
    kontrollsiffer1 = 0;
  }

  let kontrollsiffer2 = MOD11 - (vekttallSum(fhnummerString, vekttallKontrollsiffer2) % MOD11);
  if (kontrollsiffer2 === MOD11) {
    kontrollsiffer2 = 0;
  }

  return kontrollsiffer1 === parseInt(fhnummerString.charAt(9), 10)
    && kontrollsiffer2 === parseInt(fhnummerString.charAt(10), 10);
};

export default fhnummer;
