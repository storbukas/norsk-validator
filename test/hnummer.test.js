/*
 *  Test av H-nummer
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
const { hnummer } = require('../dist/index.js');

test('hnummer validation', async (t) => {
  // Valid H-numbers (third digit 4-5, valid checksum)
  await t.test('01410199935 er et gyldig H-nummer (måned 01 -> 41)', () => {
    assert.strictEqual(hnummer('01410199935'), true);
  });

  await t.test('01510199983 er et gyldig H-nummer (måned 11 -> 51)', () => {
    assert.strictEqual(hnummer('01510199983'), true);
  });

  // Invalid: regular fødselsnummer (third digit 0-1)
  await t.test('01010750160 er IKKE et gyldig H-nummer (vanlig fødselsnummer)', () => {
    assert.strictEqual(hnummer('01010750160'), false);
  });

  // Invalid: third digit too high
  await t.test('01610199900 er IKKE et gyldig H-nummer (tredje siffer > 5)', () => {
    assert.strictEqual(hnummer('01610199900'), false);
  });

  // Invalid: third digit too low for H-number
  await t.test('01310199900 er IKKE et gyldig H-nummer (tredje siffer < 4)', () => {
    assert.strictEqual(hnummer('01310199900'), false);
  });

  // Invalid: wrong length
  await t.test('0141019993 er IKKE et gyldig H-nummer (feil lengde)', () => {
    assert.strictEqual(hnummer('0141019993'), false);
  });

  // Invalid: empty
  await t.test('tom streng er IKKE et gyldig H-nummer', () => {
    assert.strictEqual(hnummer(''), false);
  });

  // Invalid: wrong checksum
  await t.test('01410199936 er IKKE et gyldig H-nummer (feil kontrollsiffer)', () => {
    assert.strictEqual(hnummer('01410199936'), false);
  });
});
