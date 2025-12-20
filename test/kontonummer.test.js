/*
 *  Test av kontonummer
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
const { kontonummer } = require('../dist/index.js');

test('kontonummer validation', async (t) => {
  await t.test('76940512057 er et gyldig kontonummer', () => {
    assert.strictEqual(kontonummer('76940512057'), true);
  });

  await t.test('7694 05 12057 er et gyldig kontonummer (med mellomrom)', () => {
    assert.strictEqual(kontonummer('7694 05 12057'), true);
  });

  await t.test('7694.05.12057 er et gyldig kontonummer (med punktum)', () => {
    assert.strictEqual(kontonummer('7694.05.12057'), true);
  });

  await t.test('1010 10 10101 er IKKE et gyldig kontonummer', () => {
    assert.strictEqual(kontonummer('1010 10 10101'), false);
  });

  await t.test('1010 10 1010 er IKKE et gyldig kontonummer (feil lengde)', () => {
    assert.strictEqual(kontonummer('1010 10 1010'), false);
  });

  await t.test('tom streng er IKKE et gyldig kontonummer', () => {
    assert.strictEqual(kontonummer(''), false);
  });
});
