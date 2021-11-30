class Kodenami {
	public greeting: string

	public constructor(message: string) {
		this.greeting = message
	}

	public init() {
		return console.log(`Kodenami: ${this.greeting}`)
	}
}
