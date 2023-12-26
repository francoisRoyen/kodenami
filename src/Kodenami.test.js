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

// instantiation

test('if instantiated without a callback function throw an error', () => {
  expect(() => new Kodenami()).toThrowError();
});

test('if instantiate with an invalid "callback" parameter throw an error', () => {
  expect(() => new Kodenami('cb')).toThrowError();
});

test('if instantiate with an invalid "code" parameter throw an error', () => {
  const options = {};
  options.code = 'an invalid parameter';
  expect(() => new Kodenami(callback, options)).toThrowError();
});

test('if instantiate with an invalid "once" parameter throw an error', () => {
  const options = {};
  options.once = 'an invalid parameter';
  expect(() => new Kodenami(callback, options)).toThrowError();
});

// passing parameters afterward

test('if passing an invalid "callback" parameter afterwards throw an error', () => {
  const kodenami = new Kodenami(callback);

  expect(() => {
    kodenami.callback = 'invalid "callback" parameter';
  }).toThrowError();
});

test('if passing an invalid "code" parameter afterwards throw an error', () => {
  const kodenami = new Kodenami(callback);

  expect(() => {
    kodenami.code = 'invalid "code" parameter';
  }).toThrowError();
});

test('if passing an invalid "once" parameter afterwards throw an error', () => {
  const kodenami = new Kodenami(callback);

  expect(() => {
    kodenami.once = 'invalid "once" parameter';
  }).toThrowError();
});

// if it works

test('if the original sequence works', () => {
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

test('if a new sequence works', () => {
  kodenami.code = ['ArrowUp', 'ArrowDown'];

  kodenami.use('ArrowUp');
  kodenami.use('ArrowDown');

  expect(isActivated).toBe(true);
});

test('if a sequence with a single value works', () => {
  kodenami.code = ['ArrowUp'];

  kodenami.use('ArrowUp');

  expect(isActivated).toBe(true);
});

test('if a sequence that is too short does not work', () => {
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

test('if an invalid sequence does not work', () => {
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

test('if an invalid sequence followed by a valid sequence works', () => {
  kodenami.code = ['ArrowUp', 'ArrowDown'];

  kodenami.use('ArrowUp');
  kodenami.use('ArrowUp');
  kodenami.use('ArrowDown');

  expect(isActivated).toBe(true);
});
