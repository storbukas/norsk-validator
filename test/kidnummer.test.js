/*
 *  Test av KID-nummer
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
const { kidnummer } = require('../dist/index.js');

test('kidnummer validation', async (t) => {
  await t.test('100001928231 er en gyldig KID', () => {
    assert.strictEqual(kidnummer('100001928231'), true);
  });

  await t.test('100001928232 er IKKE en gyldig KID', () => {
    assert.strictEqual(kidnummer('100001928232'), false);
  });

  await t.test('tom streng er IKKE en gyldig KID', () => {
    assert.strictEqual(kidnummer(''), false);
  });
});
