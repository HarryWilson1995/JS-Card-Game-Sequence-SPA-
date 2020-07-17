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

// After this point needs refactoring to add in player checks so we can see if they are allowed to do what they are attempting to do

// Draw Card event
deck.addEventListener('click', () => {
  const drawnCard = deck.children[1];
  const playerScreens = document.querySelectorAll('.playerScreen');
  playerScreens.forEach((screen) => {
    if (
      screen.style.display !== 'none' &&
      screen.children[0].childElementCount <= 10
    ) {
      drawnCard.classList.add('handCard');
      drawnCard.classList.remove('deckCard');
      drawnCard.onmouseenter = function (e) {
        e.target.style.marginBottom = '5rem';
      };
      drawnCard.onmouseleave = function (e) {
        e.target.style.marginBottom = '0';
      };
      drawnCard.addEventListener('dragstart', () => {
        drawnCard.classList.add('dragging');
      });
      drawnCard.addEventListener('dragend', () => {
        drawnCard.classList.remove('dragging');
      });
      screen.children[0].appendChild(drawnCard);
    }
  });
});
