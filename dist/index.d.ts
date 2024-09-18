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
declare class Kodenami {
    callback: () => void;
    count: number;
    code: string[];
    index: number;
    isOff: boolean;
    once: boolean;
    constructor(callback: () => void, options?: {
        code?: string[];
        once?: boolean;
    });
    use(string: string): void;
}
export default Kodenami;
