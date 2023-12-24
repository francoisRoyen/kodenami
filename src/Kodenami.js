const code = [
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
];

/**
 * Kodenami
 *
 * @param { function } callback a callback function
 * @param { object } options an object of options (optionnal)
 *
 * @version 2.0.0
 */
class Kodenami {
  constructor(callback, options = {}) {
    this.callback = callback;
    this.code = options.code ?? code;
    this.once = options.once ?? true;

    if (typeof this.callback !== 'function') {
      throw new Error('Kodenami : a callback function must be defined.');
    }

    this.count = this.code.length - 1;
    this.index = 0;
  }

  /**
   * Methods
   */

  use(string = '') {
    if (this.isOff) {
      return;
    }

    if (this.code[this.index] === string) {
      if (this.index === this.count) {
        this.callback();

        if (this.once) {
          this.isOff = true;
        } else {
          this.index = 0;
        }
      } else {
        this.index += 1;
      }
    } else {
      this.index = 0;
    }
  }
}

export default Kodenami;
