/*
 *  Test av organisasjonsnummer
 *
 *  Source: https://github.com/storbukas/norsk-validator
 *
 *  Licensed under the MIT License
 *  https://opensource.org/licenses/MIT
 *
 */

'use strict';

const { test } = require('node:test');
const assert = require('node:assert');
const { organisasjonsnummer } = require('../dist/index.js');

test('organisasjonsnummer validation', async (t) => {
  await t.test('998447356 er et gyldig organisasjonsnummer', () => {
    assert.strictEqual(organisasjonsnummer('998447356'), true);
  });

  await t.test('998447357 er IKKE et gyldig organisasjonsnummer', () => {
    assert.strictEqual(organisasjonsnummer('998447357'), false);
  });

  await t.test('99844735 er IKKE et gyldig organisasjonsnummer (feil lengde)', () => {
    assert.strictEqual(organisasjonsnummer('99844735'), false);
  });

  await t.test('tom streng er IKKE et gyldig organisasjonsnummer', () => {
    assert.strictEqual(organisasjonsnummer(''), false);
  });
});
