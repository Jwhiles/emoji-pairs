const emojis = require('./emojis.js');

const second = 1000;
const minute = 60 * second;

const getRandomElement = arr => {
  const i = Math.floor(Math.random() * arr.length);
  const nustate = arr.slice(0, i).concat(arr.slice(i + 1));
  return [arr[i], nustate];
};

const setContent = (element, state) => {
  const [content, newState] = getRandomElement(state);
  element.innerText = content;
  return newState;
};

const emojiOne = document.getElementById('first');
const emojiTwo = document.getElementById('second');

updateEmojis = state => {
  const state1 = setContent(emojiOne, state);
  const state2 = setContent(emojiTwo, state1);
  return state2;
};

const space = 'Space';
const enter = 'Enter';
const stop = 'KeyS';

const intervaller = f => setInterval(f, 5 * minute);

const main = () => {
  let state = emojis();

  state = updateEmojis(state);

  let interval = intervaller(() => {
    state = updateEmojis(state);
  });

  const keyboardControls = interval => e => {
    switch (e.code) {
      case enter:
        clearInterval(interval);
        state = updateEmojis(state);
        interval = intervaller(() => (state = updateEmojis(state)));
        break;
      case stop:
        clearInterval(interval);
        updateEmojis([' ', ' ']);
        interval = intervaller(() => (state = updateEmojis(state)));
        break;
      default:
        break;
    }
  };

  document.addEventListener('keypress', keyboardControls(interval));
};

main();
