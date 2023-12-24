import Kodenami from './src/Kodenami.js';

function callback() {
  console.log('Konami code : activated !');
}

const kodenami = new Kodenami(callback, {
  code: ['ArrowUp', 'ArrowDown'],
  once: true,
});

window.addEventListener('keydown', (event) => {
  kodenami.use(event.code);
});
