/**
 * Kodenami
 */

import defaultOptions from '../data/options.json'
import { Options, Callback } from '../src/types'

class Kodenami {
	/**
	 * Properties
	 */

	private iterator: number

	public options: Options
	public cb: Callback

	/**
	 * Constructor
	 */

	public constructor(cb: Callback, options?: Options) {
		this.iterator = 0

		this.options = options
		this.cb = cb
	}

	/**
	 * Private Methods
	 */

	private checkKey = (e: KeyboardEvent) => {
		if (e.code === this.options.keySequence[this.iterator]) {
			this.iterator += 1

			if (this.iterator === this.options.keySequence.length) {
				if (typeof this.cb === 'function') {
					this.cb()
				} else {
					this.cb
						.then((value) => {
							console.log(value)
							this.options.killAfter ? this.kill() : (this.iterator = 0)
						})
						.catch((err) => {
							console.error(err)
						})
				}
			}
		} else {
			this.iterator = 0
		}
	}

	/**
	 * Public Methods
	 */

	public init() {
		/**
		 * Options
		 */

		if (typeof this.options !== 'object' && this.options !== undefined) {
			return console.error('Kodenami : The second argument must be an object.')
		} else {
			this.options = Object.assign({}, defaultOptions, this.options)
		}

		/**
		 * If all the tests are passed
		 */

		this.listen()
	}

	public kill() {
		document.removeEventListener('keydown', this.checkKey)
	}

	public listen() {
		document.addEventListener('keydown', this.checkKey)
	}
}

export default Kodenami
