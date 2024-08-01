import { describe, expect, test } from 'vitest';
import Kodenami from './Kodenami.js';

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
      'KeyB',
      'KeyA',
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
      'KeyB',
      'KeyC',
    ].forEach(string => kodenami.use(string));

    expect(isActivated).toBe(false);
  });
});

describe('should throw an error when', () => {
  test('instanciated without a "callback" function', () => {
    expect(() => new Kodenami()).toThrowError();
  });

  test('instanciated with an invalid "callback" function', () => {
    expect(() => new Kodenami('cb')).toThrowError();
  });

  test('instanciated with an invalid "code" parameter', () => {
    expect(() => {
      new Kodenami(
        () => {
          isActivated = true;
        },
        {
          code: 'an invalid parameter',
        }
      );
    }).toThrowError();
  });

  test('instanciated with an invalid "once" parameter', () => {
    expect(() => {
      new Kodenami(
        () => {
          isActivated = true;
        },
        {
          once: 'an invalid parameter',
        }
      );
    }).toThrowError();
  });

  test('passing an invalid "callback" function afterward', () => {
    const kodenami = new Kodenami(() => {
      isActivated = true;
    });

    expect(() => {
      kodenami.callback = 'invalid "callback" parameter';
    }).toThrowError();
  });

  test('passing an invalid "code" parameter afterward', () => {
    const kodenami = new Kodenami(() => {
      isActivated = true;
    });

    expect(() => {
      kodenami.code = 'invalid "code" parameter';
    }).toThrowError();
  });

  test('passing an invalid "once" parameter afterward', () => {
    const kodenami = new Kodenami(() => {
      isActivated = true;
    });

    expect(() => {
      kodenami.once = 'invalid "once" parameter';
    }).toThrowError();
  });
});
