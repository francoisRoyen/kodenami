"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const code = [
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
    constructor(callback, options = {}) {
        var _a, _b;
        this.callback = callback;
        this.code = (_a = options.code) !== null && _a !== void 0 ? _a : code;
        this.once = (_b = options.once) !== null && _b !== void 0 ? _b : true;
        this.count = this.code.length - 1;
        this.index = 0;
    }
    use(string) {
        if (this.isOff) {
            return;
        }
        if (this.code[this.index] === string) {
            if (this.index === this.count) {
                this.callback();
                if (this.once) {
                    this.isOff = true;
                }
                else {
                    this.index = 0;
                }
            }
            else {
                this.index += 1;
            }
        }
        else {
            this.index = 0;
            if (this.code[this.index] === string) {
                this.index += 1;
            }
        }
    }
}
exports.default = Kodenami;
