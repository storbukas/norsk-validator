/*
 *  Kode for validering av DUF-nummer
 *
 *  DUF-nummer er et registreringsnummer i UDIs datasystem.
 *  Alle som søker om opphold eller beskyttelse får et DUF-nummer.
 *  Nummeret består av 12 siffer.
 *
 *  Merk: DUF-nummer har ingen kontrollsiffer-algoritme,
 *  så vi kan kun validere format (12 siffer).
 *
 *  Source: https://github.com/storbukas/norsk-validator
 *
 *  Licensed under the MIT License
 *  https://opensource.org/licenses/MIT
 *
 */

const SPACE_REGEX = /[\s]/g;
const DIGITS_ONLY_REGEX = /^\d+$/;

const dufnummer = (dufnummer: string | number | null | undefined): boolean => {
  if (!dufnummer) {
    return false;
  }

  const dufnummerString = dufnummer.toString().replace(SPACE_REGEX, '');

  if (dufnummerString.length !== 12) {
    return false;
  }

  // Must be digits only
  if (!DIGITS_ONLY_REGEX.test(dufnummerString)) {
    return false;
  }

  return true;
};

export default dufnummer;
