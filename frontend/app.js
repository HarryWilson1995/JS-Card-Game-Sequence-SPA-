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
  const playerOne = document.getElementById('player1NameFormInputField').value;
  const playerTwo = document.getElementById('player2NameFormInputField').value;
  const playerThree = document.getElementById('player3NameFormInputField')
    .value;
  const playerFour = document.getElementById('player4NameFormInputField').value;
  const playerFive = document.getElementById('player5NameFormInputField').value;
  const playerSix = document.getElementById('player6NameFormInputField').value;
  const playerSeven = document.getElementById('player7NameFormInputField')
    .value;
  let body = {
    player_1: playerOne,
    player_2: playerTwo,
    player_3: playerThree,
    player_4: playerFour,
    player_5: playerFive,
    player_6: playerSix,
    player_7: playerSeven,
  };
  const g = new Game();
  g.createGame(body);
});

// After this point needs refactoring

// Drop zone drag over event
dropZone.addEventListener('dragover', (e) => {
  e.preventDefault();
  const draggable = document.querySelector('.dragging');
  draggable.classList.remove('handCard');
  dropZone.appendChild(draggable);
  console.log(game);
});

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

function getDragAfterElement(container, x) {
  const draggableElements = [
    ...container.querySelectorAll('.handCard:not(.dragging)'),
  ];
  return draggableElements.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = x - box.left - box.width / 2;
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
      } else {
        return closest;
      }
    },
    {
      offset: Number.NEGATIVE_INFINITY,
    }
  ).element;
}

function fetchCards(obj) {
  for (let i = 0; i < obj.hands.length; i += 3) {
    fetch(`${BASE_URL}/hands/${obj.hands[i]['id']}`, {
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((hands) => renderHands(hands));
  }

  fetch(`${BASE_URL}/decks/${obj.deck['id']}`, {
    headers: {
      'Content-type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((deck) => renderDeck(deck));
  renderGameInfo(obj);
}

function renderHands(obj) {
  let handDiv = document.getElementById(`player${obj.player_id}Hand`);
  obj.cards.forEach((c) => {
    let card = document.createElement('img');
    card.height = '240';
    card.width = '157';
    card.id = c.id;
    card.src = `./images/${c.value}${c.suit}.png`;
    card.classList.add('handCard');
    card.draggable = true;
    card.onmouseenter = function (e) {
      e.target.style.marginBottom = '5rem';
    };
    card.onmouseleave = function (e) {
      e.target.style.marginBottom = '0';
    };
    card.addEventListener('dragstart', () => {
      card.classList.add('dragging');
    });
    card.addEventListener('dragend', () => {
      card.classList.remove('dragging');
    });
    handDiv.appendChild(card);
  });
}

function renderDeck(obj) {
  for (let i = 0; i < 1000; i++) {
    let location1 = Math.floor(Math.random() * obj.cards.length);
    let location2 = Math.floor(Math.random() * obj.cards.length);
    let tmp = obj.cards[location1];

    obj.cards[location1] = obj.cards[location2];
    obj.cards[location2] = tmp;
  }
  let deck = document.querySelector('.deck');
  obj.cards.forEach((c) => {
    let card = document.createElement('img');
    card.height = '240';
    card.width = '157';
    card.id = c.id;
    card.src = `./images/${c.value}${c.suit}.png`;
    card.classList.add('deckCard');
    deck.appendChild(card);
  });
}

function renderGameInfo(obj) {
  const scoresList = document.querySelector('.scores');
  const roundInfo = document.querySelector('.roundInfo');
  roundInfo.innerText = 'Round: 1';
  const currentTurnInfo = document.querySelector('.currentTurn');
  for (let i = 0; i < obj.players.length; i += 3) {
    let listItem = document.createElement('li');
    listItem.innerText = `${obj.players[i]['name']} - 0`;
    scoresList.appendChild(listItem);
  }
  const playerScreens = document.querySelectorAll('.playerScreen');
  playerScreens.forEach((screen) => {
    if (screen.style.display !== 'none') {
      const id = screen.id;
      for (let i = 0; i < obj.players.length; i += 3) {
        if (`player${obj.players[i]['id']}` === id) {
          currentTurnInfo.innerText = `Current Player: ${obj.players[i]['name']}`;
        }
      }
    }
  });
}
