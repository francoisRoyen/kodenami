const code: string[] = [
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
];

/**
 * Kodenami
 *
 * @param { function } callback - a callback function
 * @param { object } options - an options object (optionnal)
 * @param { array } options.code - an array of string
 * @param { object } options.once - a boolean
 *
 * @version 2.0.2
 */
class Kodenami {
  callback: () => void;
  count: number;
  code: string[];
  index: number;
  isOff: boolean;
  once: boolean;

  constructor(
    callback: () => void,
    options: {
      code?: string[];
      once?: boolean;
    } = {}
  ) {
    this.callback = callback;
    this.code = options.code ?? code;
    this.once = options.once ?? true;

    this.count = this.code.length - 1;
    this.index = 0;
  }

  use(string: string) {
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

      if (this.code[this.index] === string) {
        this.index += 1;
      }
    }
  }
}

export default Kodenami;