const kontrollsiffer = require('./tools/kontrollsiffer');

const PERIOD_COMMA_SPACE_REGEX = /[,.\s]/g;

const kontonummer = (kontonummer) => {
  if (!kontonummer) {
    return false;
  }

  const kontonummerString = kontonummer.toString().replace(PERIOD_COMMA_SPACE_REGEX, '');

  if (kontonummerString.length !== 11) {
    return false;
  }

  return (
    parseInt(kontonummerString.charAt(kontonummerString.length - 1), 10)
    === kontrollsiffer.kontrollsiffferMod11(kontonummerString)
  );
};

export default kontonummer;
