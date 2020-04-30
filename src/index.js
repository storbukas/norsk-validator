const fodselsnummer = require('./fodselsnummer');
const kidnummer = require('./kidnummer');
const kontonummer = require('./kontonummer');
const organisasjonsnummer = require('./organisasjonsnummer');

module.exports = {
  kontonummer: kontonummer.default,
  kidnummer: kidnummer.default,
  fodselsnummer: fodselsnummer.default,
  organisasjonsnummer: organisasjonsnummer.default,
};
