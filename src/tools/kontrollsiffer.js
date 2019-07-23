const MOD11 = 11;
const MOD10 = 10;

export const kontrollsiffferMod11 = (tall) => {
  let kontrollsiffer = 2;
  let sum = 0;

  for (let i = tall.length - 2; i >= 0; --i) {
    sum += tall.charAt(i) * kontrollsiffer;

    kontrollsiffer += 1;

    if (kontrollsiffer > 7) {
      kontrollsiffer = 2;
    }
  }

  const result = MOD11 - (sum % MOD11);

  return result === MOD11 ? 0 : result;
};

export const kontrollsiffferMod10 = (tall) => {
  let sum = 0;
  let dbl;

  for (let i = tall.length - 2; i >= 0; i -= 2) {
    dbl = (parseInt(tall.charAt(i), 10) * 2).toString();
    sum += parseInt(dbl.charAt(0), 10) + parseInt(dbl.charAt(1) || 0, 10);
  }

  for (let i = tall.length - 3; i >= 0; i -= 2) {
    sum += parseInt(tall.charAt(i), 10);
  }

  const sumString = sum.toString();

  return MOD10 - parseInt(sumString.charAt(sumString.length - 1), 10);
};
