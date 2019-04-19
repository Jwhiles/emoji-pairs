const emojis = require('./emojis.js');

const second = 1000;
const minute = 60 * second;

const getRandomElement = arr => arr[Math.floor(Math.random() * arr.length)];

const setContent = (element, content) => (element.innerText = content);

const emojiOne = document.getElementById('first');
const emojiTwo = document.getElementById('second');

updateEmojis = () => {
  setContent(emojiOne, getRandomElement(emojis));
  setContent(emojiTwo, getRandomElement(emojis));
}

const space = "Space"
const enter = "Enter"

const keyboardControls = interval => e => {
  switch(e.code) {
    case enter:
      clearInterval(interval);
      updateEmojis();
      interval = setInterval(updateEmojis, 5 * minute);
      break;
    default:
      break;
  }
}

const main = () => {
  updateEmojis();

  let interval = setInterval(updateEmojis, 5 * minute);

  document.addEventListener('keypress', keyboardControls(interval));
}

main();
