const kontrollsiffer = require('./tools/kontrollsiffer');

const organisasjonsnummer = (organisasjonsnummer) => {
  const organisasjonsnummerString = organisasjonsnummer.toString();

  if (!organisasjonsnummerString || organisasjonsnummerString.length !== 9) {
    return false;
  }

  return parseInt(organisasjonsnummerString.charAt(organisasjonsnummerString.length - 1), 10)
    === kontrollsiffer.kontrollsiffferMod11(organisasjonsnummerString);
};

export default organisasjonsnummer;
