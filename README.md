# Kodenami - A Konami Code plugin

## Introduction

The Konami Code, also commonly referred to as the Contra Code and sometimes the 30 Lives code, is a cheat code that appears in many Konami video games, and some non-Konami games.

In the original code, the player can press the following sequence of buttons on the game controller to enable a cheat or other effects :

![Konami Code](konami-code.svg)

## Installation

```
npm i kodenami
```

## Usage

```
* Import it


import Kodenami from 'Kodenami'
```

```
* Create a callback function (must return a promise)
* For example :


const cb = new Promise((resolve, _reject) => {
  setTimeout(() => {
    resolve('Success.')
  }, 5000)
})

* OR

const cb = () => {
  const app = document.querySelector('.app') as HTMLElement
  app.dataset.theme = 'night'

  return Promise.resolve()
}
```

```
* Then instantiate

const kodenami = new Kodenami(cb)

kodenami.init()
```

## Options

If you want you can change the following options :

- 'killAfter' : true (default) | | false

  - If true, it's remove the event listener after a successful call

  - Or you can call it, at any time, with kodenami.kill()

- 'keySequence' : Array of keycode string

  - Konami Code (default)

  - The sequence which must be respected for the callback

  - ["ArrowUp", "ArrowUp", "ArrowDown", ...]

```
* Example

const kodenami = new Kodenami(cb, {
    killAfter: false,
    keySequence: [ 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ]
})

kodenami.init()
```
