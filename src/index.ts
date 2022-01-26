/*
 *  Validering av fødselsnummer, organisasjonsnummer, kontonummer og KID
 *
 *  updated 26 Jan 2022
 *  by Lars Erik Storbukås <https://github.com/storbukas>
 *
 *  Source: https://github.com/storbukas/norsk-validator
 *
 *  Licensed under the MIT License
 *  https://opensource.org/licenses/MIT
 *
 */

'use strict';

import fodselsnummer from "./fodselsnummer";
import kidnummer from "./kidnummer";
import kontonummer from "./kontonummer";
import organisasjonsnummer from "./organisasjonsnummer";

export default {
  kontonummer,
  kidnummer,
  fodselsnummer,
  organisasjonsnummer,
};
