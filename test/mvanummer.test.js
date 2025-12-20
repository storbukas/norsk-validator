/*
 *  Test av MVA-nummer
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
const { mvanummer } = require('../dist/index.js');

test('mvanummer validation', async (t) => {
  await t.test('998447356MVA er et gyldig MVA-nummer', () => {
    assert.strictEqual(mvanummer('998447356MVA'), true);
  });

  await t.test('998 447 356 MVA er et gyldig MVA-nummer (med mellomrom)', () => {
    assert.strictEqual(mvanummer('998 447 356 MVA'), true);
  });

  await t.test('998447356mva er et gyldig MVA-nummer (små bokstaver)', () => {
    assert.strictEqual(mvanummer('998447356mva'), true);
  });

  await t.test('998447357MVA er IKKE et gyldig MVA-nummer (ugyldig orgnr)', () => {
    assert.strictEqual(mvanummer('998447357MVA'), false);
  });

  await t.test('998447356 er IKKE et gyldig MVA-nummer (mangler MVA)', () => {
    assert.strictEqual(mvanummer('998447356'), false);
  });

  await t.test('98447356MVA er IKKE et gyldig MVA-nummer (feil lengde)', () => {
    assert.strictEqual(mvanummer('98447356MVA'), false);
  });

  await t.test('tom streng er IKKE et gyldig MVA-nummer', () => {
    assert.strictEqual(mvanummer(''), false);
  });
});
