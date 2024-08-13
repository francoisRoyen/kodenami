# 🕹 Kodenami - A Konami Code plugin

The Konami Code, also commonly referred to as the Contra Code and sometimes the 30 Lives code, is a cheat code that appears in many Konami video games, and some non-Konami games.

In the original code, the player can press the following sequence of buttons on the game controller to enable a cheat or other effects :

![Konami Code](konami-code.svg)

## Features

✅ TypeScript support

## Install

### NPM

```
npm i kodenami -D
```

### Yarn

```
yarn add kodenami -D
```

## Usage

### Parameters

#### Callback

- The first parameter need to be a callback function.
- This function will be called when the sequence is complete.

#### Options

- The second parameter is an object of options (optional).

##### Code

- An array of string which correspond to the expected sequence.
- Default : the Konami code sequence (see image above).

##### Once

- A boolean which defines whether the callback is only called once or not.
- Default : true.

### Example

```js
// import it
import Kodenami from 'Kodenami';

// create a callback function
function callback() {
  console.log('Konami code : activated !');
}

// instantiate it
const kodenami = new Kodenami(callback, {
  code: ['ArrowUp', 'ArrowDown'],
  once: true, // default
});

// call it
window.addEventListener('keydown', event => {
  kodenami.use(event.key); // 'ArrowUp', ...
});
```

### License

See [LICENSE](LICENSE).
