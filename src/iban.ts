/*
 *  Kode for validering av norsk IBAN
 *
 *  Norsk IBAN-format: NOkk XXXX XXXX XXX
 *  - NO: Landkode for Norge
 *  - kk: 2 kontrollsiffer (mod 97)
 *  - 11 siffer: Kontonummer
 *
 *  Source: https://github.com/storbukas/norsk-validator
 *
 *  Licensed under the MIT License
 *  https://opensource.org/licenses/MIT
 *
 */

const SPACE_REGEX = /[\s]/g;

// Convert letter to number (A=10, B=11, ..., Z=35)
const letterToNumber = (letter: string): string => {
  const code = letter.toUpperCase().charCodeAt(0);
  return (code - 55).toString();
};

// Calculate mod 97 for a large number represented as string
const mod97 = (numStr: string): number => {
  let remainder = 0;

  for (let i = 0; i < numStr.length; i++) {
    const digit = numStr[i];
    if (digit !== undefined) {
      remainder = (remainder * 10 + parseInt(digit, 10)) % 97;
    }
  }

  return remainder;
};

const iban = (iban: string | null | undefined): boolean => {
  if (!iban) {
    return false;
  }

  const ibanString = iban.toString().replace(SPACE_REGEX, '').toUpperCase();

  // Norwegian IBAN is exactly 15 characters
  if (ibanString.length !== 15) {
    return false;
  }

  // Must start with NO
  if (!ibanString.startsWith('NO')) {
    return false;
  }

  // Check that positions 3-15 are digits
  const bban = ibanString.slice(2);
  if (!/^\d{13}$/.test(bban)) {
    return false;
  }

  // Move first 4 characters to end and convert letters to numbers
  const rearranged = ibanString.slice(4) + ibanString.slice(0, 4);

  // Convert to numeric string (N=23, O=24)
  let numericString = '';
  for (let i = 0; i < rearranged.length; i++) {
    const char = rearranged[i];
    if (char !== undefined) {
      if (/[A-Z]/.test(char)) {
        numericString += letterToNumber(char);
      } else {
        numericString += char;
      }
    }
  }

  // Valid IBAN has mod 97 = 1
  return mod97(numericString) === 1;
};

export default iban;
