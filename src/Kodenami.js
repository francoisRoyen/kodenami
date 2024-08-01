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
 * Kodenami - A Konami Code plugin
 *
 * @param {function} callback - a callback function
 * @param {object} options - an options object (optionnal)
 *
 * @version 2.0.1
 */
class Kodenami {
  constructor(callback, options = {}) {
    this.callback = callback;
    this.code = options.code ?? code;
    this.once = options.once ?? true;

    this.count = this.code.length - 1;
    this.index = 0;
  }

  /*************************** Getters ***************************/

  get callback() {
    return this._callback;
  }

  get code() {
    return this._code;
  }

  get once() {
    return this._once;
  }

  /*************************** Setters ***************************/

  set callback(fn) {
    if (typeof fn !== 'function') {
      throw new Error('Kodenami : "callback" must be a function.');
    }

    this._callback = fn;
  }

  set code(arr) {
    if (!Array.isArray(arr)) {
      throw new Error('Kodenami : "code" must be an array.');
    }

    this._code = arr;
  }

  set once(bool) {
    if (typeof bool !== 'boolean') {
      throw new Error('Kodenami : "once" must be a boolean.');
    }

    this._once = bool;
  }

  /*************************** Methods ***************************/

  use(val) {
    if (this.isOff) {
      return;
    }

    if (this.code[this.index] === val) {
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

      if (this.code[this.index] === val) {
        this.index += 1;
      }
    }
  }
}

export default Kodenami;
