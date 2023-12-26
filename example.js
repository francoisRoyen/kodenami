// import it
import Kodenami from './src/Kodenami.js';

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
window.addEventListener('keydown', (event) => {
  kodenami.use(event.code); // 'ArrowUp', ...
});
