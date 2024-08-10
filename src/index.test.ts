import { describe, expect, test } from 'vitest';
import Kodenami from './index.js';

describe('should work', () => {
  test('with the original sequence', () => {
    let isActivated = false;

    const kodenami = new Kodenami(() => {
      isActivated = true;
    });

    [
      'ArrowUp',
      'ArrowUp',
      'ArrowDown',
      'ArrowDown',
      'ArrowLeft',
      'ArrowRight',
      'ArrowLeft',
      'ArrowRight',
      'b',
      'a',
    ].forEach(string => kodenami.use(string));

    expect(isActivated).toBe(true);
  });

  test('with a new sequence', () => {
    let isActivated = false;

    const kodenami = new Kodenami(
      () => {
        isActivated = true;
      },
      {
        code: ['ArrowUp', 'ArrowDown'],
      }
    );

    kodenami.use('ArrowUp');
    kodenami.use('ArrowDown');

    expect(isActivated).toBe(true);
  });

  test('with a single value sequence', () => {
    let isActivated = false;

    const kodenami = new Kodenami(
      () => {
        isActivated = true;
      },
      {
        code: ['ArrowUp'],
      }
    );

    kodenami.use('ArrowUp');

    expect(isActivated).toBe(true);
  });

  test('with an invalid sequence followed by a valid sequence', () => {
    let isActivated = false;

    const kodenami = new Kodenami(
      () => {
        isActivated = true;
      },
      {
        code: ['ArrowUp', 'ArrowDown'],
      }
    );

    kodenami.use('ArrowUp');
    kodenami.use('ArrowUp');
    kodenami.use('ArrowDown');

    expect(isActivated).toBe(true);
  });
});

describe('should not work', () => {
  test('with a sequence that is too short', () => {
    let isActivated = false;

    const kodenami = new Kodenami(() => {
      isActivated = true;
    });

    [
      'ArrowUp',
      'ArrowUp',
      'ArrowDown',
      'ArrowDown',
      'ArrowLeft',
      'ArrowRight',
    ].forEach(string => kodenami.use(string));

    expect(isActivated).toBe(false);
  });

  test('with an invalid sequence', () => {
    let isActivated = false;

    const kodenami = new Kodenami(() => {
      isActivated = true;
    });

    [
      'ArrowUp',
      'ArrowUp',
      'ArrowDown',
      'ArrowDown',
      'ArrowLeft',
      'ArrowRight',
      'ArrowLeft',
      'ArrowRight',
      'b',
      'c',
    ].forEach(string => kodenami.use(string));

    expect(isActivated).toBe(false);
  });
});
