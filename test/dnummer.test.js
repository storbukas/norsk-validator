/*
 *  Test av D-nummer
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
const { dnummer } = require('../dist/index.js');

test('dnummer validation', async (t) => {
  // Valid D-numbers (first digit 4-7, valid checksum)
  await t.test('41010199946 er et gyldig D-nummer (dag 01 -> 41)', () => {
    assert.strictEqual(dnummer('41010199946'), true);
  });

  await t.test('51010199917 er et gyldig D-nummer (dag 11 -> 51)', () => {
    assert.strictEqual(dnummer('51010199917'), true);
  });

  await t.test('61010199998 er et gyldig D-nummer (dag 21 -> 61)', () => {
    assert.strictEqual(dnummer('61010199998'), true);
  });

  await t.test('71010199969 er et gyldig D-nummer (dag 31 -> 71)', () => {
    assert.strictEqual(dnummer('71010199969'), true);
  });

  // Invalid: regular fødselsnummer (first digit 0-3)
  await t.test('01010750160 er IKKE et gyldig D-nummer (vanlig fødselsnummer)', () => {
    assert.strictEqual(dnummer('01010750160'), false);
  });

  // Invalid: first digit too high (8-9 = FH-nummer)
  await t.test('81010199900 er IKKE et gyldig D-nummer (første siffer > 7)', () => {
    assert.strictEqual(dnummer('81010199900'), false);
  });

  // Invalid: first digit too low for D-number
  await t.test('31010199946 er IKKE et gyldig D-nummer (første siffer < 4)', () => {
    assert.strictEqual(dnummer('31010199946'), false);
  });

  // Invalid: wrong length
  await t.test('4101019994 er IKKE et gyldig D-nummer (feil lengde)', () => {
    assert.strictEqual(dnummer('4101019994'), false);
  });

  // Invalid: empty
  await t.test('tom streng er IKKE et gyldig D-nummer', () => {
    assert.strictEqual(dnummer(''), false);
  });

  // Invalid: wrong checksum
  await t.test('41010199947 er IKKE et gyldig D-nummer (feil kontrollsiffer)', () => {
    assert.strictEqual(dnummer('41010199947'), false);
  });
});
