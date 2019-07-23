const kontrollsiffer = require('./tools/kontrollsiffer');

const SPACE_REGEX = /[\s]/g;

const kidnummer = (kidnummer, mod11 = true, mod10 = true) => {
  if (!kidnummer || kidnummer.length === 0) {
    return false;
  }

  const kidnummerString = kidnummer.toString().replace(SPACE_REGEX, '');

  const controlDigit = kidnummerString.charAt(kidnummer.length - 1);
  const erMod11 = parseInt(controlDigit, 10)
    === kontrollsiffer.kontrollsiffferMod11(kidnummerString);
  const erMod10 = parseInt(controlDigit, 10)
    === kontrollsiffer.kontrollsiffferMod10(kidnummerString);

  return (mod11 && erMod11) || (mod10 && erMod10);
};

export default kidnummer;
