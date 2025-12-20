/*
 *  Test av DUF-nummer
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
const { dufnummer } = require('../dist/index.js');

test('dufnummer validation', async (t) => {
  await t.test('123456789012 er et gyldig DUF-nummer (12 siffer)', () => {
    assert.strictEqual(dufnummer('123456789012'), true);
  });

  await t.test('201912345678 er et gyldig DUF-nummer', () => {
    assert.strictEqual(dufnummer('201912345678'), true);
  });

  await t.test('123456 789012 er et gyldig DUF-nummer (med mellomrom)', () => {
    assert.strictEqual(dufnummer('123456 789012'), true);
  });

  await t.test('12345678901 er IKKE et gyldig DUF-nummer (11 siffer)', () => {
    assert.strictEqual(dufnummer('12345678901'), false);
  });

  await t.test('1234567890123 er IKKE et gyldig DUF-nummer (13 siffer)', () => {
    assert.strictEqual(dufnummer('1234567890123'), false);
  });

  await t.test('12345678901A er IKKE et gyldig DUF-nummer (inneholder bokstav)', () => {
    assert.strictEqual(dufnummer('12345678901A'), false);
  });

  await t.test('tom streng er IKKE et gyldig DUF-nummer', () => {
    assert.strictEqual(dufnummer(''), false);
  });
});
