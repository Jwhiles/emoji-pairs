const emojis = require('./emojis.js');

const second = 1000;
const minute = 60 * second;

const getRandomElement = arr => arr[Math.floor(Math.random() * arr.length)];

const setContent = (element, content) => (element.innerText = content);

const emojiOne = document.getElementById('first');
const emojiTwo = document.getElementById('second');

setContent(emojiOne, getRandomElement(emojis));
setContent(emojiTwo, getRandomElement(emojis));

const interval = setInterval(() => {
  setContent(emojiOne, getRandomElement(emojis));
  setContent(emojiTwo, getRandomElement(emojis));
}, 5 * minute);
