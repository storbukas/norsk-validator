/*
 *  Test av FH-nummer
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
const { fhnummer } = require('../dist/index.js');

test('fhnummer validation', async (t) => {
  await t.test('81234567802 er et gyldig FH-nummer (starter med 8)', () => {
    assert.strictEqual(fhnummer('81234567802'), true);
  });

  await t.test('91234567883 er et gyldig FH-nummer (starter med 9)', () => {
    assert.strictEqual(fhnummer('91234567883'), true);
  });

  await t.test('01010750160 er IKKE et gyldig FH-nummer (vanlig fødselsnummer)', () => {
    assert.strictEqual(fhnummer('01010750160'), false);
  });

  await t.test('71234567802 er IKKE et gyldig FH-nummer (starter ikke med 8 eller 9)', () => {
    assert.strictEqual(fhnummer('71234567802'), false);
  });

  await t.test('8123456780 er IKKE et gyldig FH-nummer (feil lengde)', () => {
    assert.strictEqual(fhnummer('8123456780'), false);
  });

  await t.test('tom streng er IKKE et gyldig FH-nummer', () => {
    assert.strictEqual(fhnummer(''), false);
  });
});
