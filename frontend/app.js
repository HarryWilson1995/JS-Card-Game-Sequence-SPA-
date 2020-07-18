const BASE_URL = 'http://localhost:3000';
const GAMES_URL = `${BASE_URL}/games`;
const startGameForm = document.querySelector('.startGameForm');
const newGameForm = document.getElementById('newGameForm');
const gameContainer = document.querySelector('.sequenceContainer');
const playersScreen = document.querySelector('.playersScreen');
const orderReveal = document.querySelector('.orderReveal');
const cardReveal = document.querySelector('.cardReveal');
const deckArea = document.querySelector('.deckArea');
const sequenceDropArea = document.querySelector('.sequenceDropArea');
const dropZone = document.querySelector('.dropZone');
const deck = document.querySelector('.deck');

newGameForm.addEventListener('submit', (e) => {
  e.preventDefault();
  Form.initializeGame();
});

dropZone.addEventListener('dragover', (e) => {
  e.preventDefault();
  Dropzone.discard();
});

dropZone.addEventListener('click', (e) => {
  e.preventDefault();
  Dropzone.drawFromDiscard();
});

deck.addEventListener('click', () => {
  Deck.drawCard();
});
