/**
 * Types
 */

interface Options {
	keySequence?: Array<string>
	killAfter?: boolean
}

type Callback = Promise<unknown> | (() => Promise<void>)

export { Options, Callback }
