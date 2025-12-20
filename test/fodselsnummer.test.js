/*
 *  Test av fødselsnummer
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
const { fodselsnummer } = require('../dist/index.js');

test('fodselsnummer validation', async (t) => {
  await t.test('01010750160 er et gyldig fødselsnummer', () => {
    assert.strictEqual(fodselsnummer('01010750160'), true);
  });

  await t.test('30042099941 er et gyldig fødselsnummer', () => {
    assert.strictEqual(fodselsnummer('30042099941'), true);
  });

  await t.test('22052099424 er et gyldig fødselsnummer', () => {
    assert.strictEqual(fodselsnummer('22052099424'), true);
  });

  await t.test('09062099345 er et gyldig fødselsnummer', () => {
    assert.strictEqual(fodselsnummer('09062099345'), true);
  });

  await t.test('020161 26007 er et gyldig fødselsnummer (med mellomrom)', () => {
    assert.strictEqual(fodselsnummer('020161 26007'), true);
  });

  await t.test('11111234567 er IKKE et gyldig fødselsnummer', () => {
    assert.strictEqual(fodselsnummer('11111234567'), false);
  });

  await t.test('1234123456 er IKKE et gyldig fødselsnummer (feil lengde)', () => {
    assert.strictEqual(fodselsnummer('1234123456'), false);
  });

  await t.test('tom streng er IKKE et gyldig fødselsnummer', () => {
    assert.strictEqual(fodselsnummer(''), false);
  });
});
