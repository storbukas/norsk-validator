/*
 *  Kode for validering av H-nummer
 *
 *  H-nummer er et hjelpenummer brukt i helsevesenet for personer
 *  som ikke har fødselsnummer eller D-nummer.
 *  Tredje siffer er økt med 4 (måned 01 blir 41, måned 12 blir 52).
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

const hnummer = (hnummer: string | number | null | undefined): boolean => {
  if (!hnummer) {
    return false;
  }

  const hnummerString = hnummer.toString().replace(PERIOD_COMMA_SPACE_REGEX, '');

  if (hnummerString.length !== 11) {
    return false;
  }

  // H-nummer has third digit increased by 4 (valid range: 4-5, since months are 01-12)
  const thirdDigit = parseInt(hnummerString.charAt(2), 10);
  if (thirdDigit < 4 || thirdDigit > 5) {
    return false;
  }

  let kontrollsiffer1 = MOD11 - (vekttallSum(hnummerString, vekttallKontrollsiffer1) % MOD11);
  if (kontrollsiffer1 === MOD11) {
    kontrollsiffer1 = 0;
  }

  let kontrollsiffer2 = MOD11 - (vekttallSum(hnummerString, vekttallKontrollsiffer2) % MOD11);
  if (kontrollsiffer2 === MOD11) {
    kontrollsiffer2 = 0;
  }

  return kontrollsiffer1 === parseInt(hnummerString.charAt(9), 10)
    && kontrollsiffer2 === parseInt(hnummerString.charAt(10), 10);
};

export default hnummer;
