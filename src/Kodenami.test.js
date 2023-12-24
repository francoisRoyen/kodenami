import { expect, test } from 'vitest';

import Kodenami from './Kodenami.js';

/**
 * Setup
 */

let isActivated = false;

function callback() {
  isActivated = true;
}

const kodenami = new Kodenami(callback);

/**
 * Test
 */

test('if creating an instance without a callback throw an error', () => {
  expect(() => new Kodenami()).toThrowError();
});

test('if using the original konami sequence work', () => {
  [
    'ArrowUp',
    'ArrowUp',
    'ArrowDown',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'ArrowLeft',
    'ArrowRight',
    'KeyB',
    'KeyA',
  ].forEach((string) => kodenami.use(string));

  expect(isActivated).toBe(true);
});

test('if a bad sequence does not work', () => {
  [
    'ArrowUp',
    'ArrowUp',
    'ArrowDown',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'ArrowLeft',
    'ArrowRight',
    'KeyB',
    'KeyC',
  ].forEach((string) => kodenami.use(string));

  expect(isActivated).toBe(false);
});

test('if a sequence too short does not work', () => {
  [
    'ArrowUp',
    'ArrowUp',
    'ArrowDown',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
  ].forEach((string) => kodenami.use(string));

  expect(isActivated).toBe(false);
});
