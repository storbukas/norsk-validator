/*
 *  Test av norsk IBAN
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
const { iban } = require('../dist/index.js');

test('iban validation', async (t) => {
  await t.test('NO9386011117947 er et gyldig norsk IBAN', () => {
    assert.strictEqual(iban('NO9386011117947'), true);
  });

  await t.test('NO93 8601 1117 947 er et gyldig norsk IBAN (med mellomrom)', () => {
    assert.strictEqual(iban('NO93 8601 1117 947'), true);
  });

  await t.test('no9386011117947 er et gyldig norsk IBAN (små bokstaver)', () => {
    assert.strictEqual(iban('no9386011117947'), true);
  });

  await t.test('NO0086011117947 er IKKE et gyldig norsk IBAN (feil kontrollsiffer)', () => {
    assert.strictEqual(iban('NO0086011117947'), false);
  });

  await t.test('SE9386011117947 er IKKE et gyldig norsk IBAN (feil landkode)', () => {
    assert.strictEqual(iban('SE9386011117947'), false);
  });

  await t.test('NO938601111794 er IKKE et gyldig norsk IBAN (feil lengde)', () => {
    assert.strictEqual(iban('NO938601111794'), false);
  });

  await t.test('NO93860111179470 er IKKE et gyldig norsk IBAN (for lang)', () => {
    assert.strictEqual(iban('NO93860111179470'), false);
  });

  await t.test('tom streng er IKKE et gyldig norsk IBAN', () => {
    assert.strictEqual(iban(''), false);
  });
});
