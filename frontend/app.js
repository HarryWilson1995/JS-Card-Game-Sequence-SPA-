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
const winner = document.querySelector('.winnerReveal');
const newGameBtn = document.querySelector('.newGameBtn');
const rulesBtn = document.querySelector('.gameRules');
const rulesModal = document.querySelector('.rulesModal');
const closeRulesBtn = document.querySelector('.closeRulesBtn');
const playAgainBtn = document.querySelector('.playAgainBtn');
const standings = document.querySelector('.standings');

new Sortable(dropZone, {
  group: {
    name: 'shared',
    pull: false,
    put: true,
    sort: false,
  },
  sort: false,
});

new Sortable(sequenceDropArea, {
  group: {
    name: 'shared',
    pull: false,
    put: true,
    sort: false,
  },
  sort: false,
});

newGameForm.addEventListener('submit', (e) => {
  e.preventDefault();
  Form.initializeGame();
});

dropZone.addEventListener('click', (e) => {
  e.preventDefault();
  Dropzone.drawFromDiscard();
});

deck.addEventListener('click', () => {
  Deck.drawCard();
});

newGameBtn.addEventListener('click', () => {
  document.location.reload();
});

rulesBtn.addEventListener('click', () => {
  playersScreen.style.display = 'none';
  rulesModal.style.display = 'flex';
});

closeRulesBtn.addEventListener('click', () => {
  rulesModal.style.display = 'none';
  playersScreen.style.display = 'flex';
});

playAgainBtn.addEventListener('click', () => {
  Game.currentGame.playAgain();
});
