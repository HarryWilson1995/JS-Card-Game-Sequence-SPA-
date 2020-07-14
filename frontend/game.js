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

class Game {
  constructor(playerCount, playOrder) {
    this.playerCount = playerCount;
    this.playOrder = playOrder;
  }
}

// const game = new Game(sortedPlayOrder.length, sortedPlayOrder);

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

  fetch(GAMES_URL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      player_1: playerOne,
      player_2: playerTwo,
      player_3: playerThree,
      player_4: playerFour,
      player_5: playerFive,
      player_6: playerSix,
      player_7: playerSeven,
    }),
  })
    .then((res) => res.json())
    .then((data) => removeDuplicatePlayers(data));
});

function removeDuplicatePlayers(data) {
  let playersArr = [];
  for (let i = 0; i < data.players.length; i += 3) {
    playersArr.push(data.players[i]);
  }
  createPlayerFields(playersArr);
  checkStartingOrder(playersArr, data.cards, data);
}

function checkStartingOrder(arr, cards, data) {
  let playOrder = [];
  for (let i = 0; i < arr.length; i++) {
    let random = Math.floor(Math.random() * 108);
    if (
      cards[random]['value'] !== 'J' &&
      cards[random]['value'] !== 'Q' &&
      cards[random]['value'] !== 'K' &&
      cards[random]['value'] !== 'A' &&
      cards[random]['value'] !== 'joker'
    ) {
      let number = parseInt(cards[random]['value']);
      playOrder.push({
        name: arr[i]['name'],
        id: arr[i]['id'],
        card: cards[random]['value'],
        number: number,
        suit: cards[random]['suit'],
      });
    } else if (cards[random]['value'] === 'J') {
      let number = 11;
      playOrder.push({
        name: arr[i]['name'],
        id: arr[i]['id'],
        card: cards[random]['value'],
        number: number,
        suit: cards[random]['suit'],
      });
    } else if (cards[random]['value'] === 'Q') {
      let number = 12;
      playOrder.push({
        name: arr[i]['name'],
        id: arr[i]['id'],
        card: cards[random]['value'],
        number: number,
        suit: cards[random]['suit'],
      });
    } else if (cards[random]['value'] === 'K') {
      let number = 13;
      playOrder.push({
        name: arr[i]['name'],
        id: arr[i]['id'],
        card: cards[random]['value'],
        number: number,
        suit: cards[random]['suit'],
      });
    } else if (cards[random]['value'] === 'A') {
      let number = 14;
      playOrder.push({
        name: arr[i]['name'],
        id: arr[i]['id'],
        card: cards[random]['value'],
        number: number,
        suit: cards[random]['suit'],
      });
    } else {
      let number = 15;
      playOrder.push({
        name: arr[i]['name'],
        id: arr[i]['id'],
        card: cards[random]['value'],
        number: number,
        suit: cards[random]['suit'],
      });
    }
  }
  let sortedPlayOrder = playOrder.sort((a, b) => b.number - a.number);
  showPlayerOrder(sortedPlayOrder, data);
}

function showPlayerOrder(order, data) {
  startGameForm.style.display = 'none';
  orderReveal.style.display = 'flex';
  order.forEach(function (player) {
    let div = document.createElement('div');
    div.classList.add('cardFlip');
    let header = document.createElement('h2');
    header.classList.add('playerName');
    let flipCard = document.createElement('div');
    flipCard.classList.add('flipCard');
    let innerCard = document.createElement('div');
    innerCard.classList.add('flipCardInner');
    let cardFront = document.createElement('div');
    cardFront.classList.add('flipCardFront');
    let cardBack = document.createElement('div');
    cardBack.classList.add('flipCardBack');
    let card = document.createElement('img');
    header.innerText = player.name;
    card.height = '240';
    card.width = '157';
    card.src = './images/blue_back.png';
    let backOfCard = document.createElement('img');
    backOfCard.height = '240';
    backOfCard.width = '157';
    backOfCard.src = `./images/${player.card}${player.suit}.png`;
    div.appendChild(header);
    cardBack.appendChild(backOfCard);
    cardFront.appendChild(card);
    innerCard.appendChild(cardFront);
    innerCard.appendChild(cardBack);
    flipCard.appendChild(innerCard);
    div.appendChild(flipCard);
    cardReveal.appendChild(div);
  });
  setTimeout(startRoundOne, 7000, order, data);
}

function createPlayerFields(arr) {
  for (let i = 0; i < arr.length; i++) {
    const playerScreen = document.createElement('div');
    playerScreen.classList.add('playerScreen');
    playerScreen.id = `player${arr[i].id}`;
    const playerHand = document.createElement('div');
    playerHand.classList.add('playersCards');
    playerHand.id = `player${arr[i].id}Hand`;
    playerHand.addEventListener('dragover', (e) => {
      e.preventDefault();
      const afterElement = getDragAfterElement(playerHand, e.clientX);
      const draggable = document.querySelector('.dragging');
      if (afterElement == null) {
        playerHand.appendChild(draggable);
      } else {
        playerHand.insertBefore(draggable, afterElement);
      }
    });
    playerScreen.appendChild(playerHand);
    playersScreen.appendChild(playerScreen);
  }
}

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

function startRoundOne(order, originalData) {
  orderReveal.style.display = 'none';
  playersScreen.style.display = 'flex';
  const playerAreas = document.querySelectorAll('.playerScreen');
  playerAreas.forEach(function (area) {
    if (area.id !== `player${order[0]['id'].toString()}`) {
      let div = document.getElementById(`${area.id}`);
      div.style.display = 'none';
    }
  });
  const nums = new Set();
  while (nums.size !== order.length * 10) {
    nums.add(Math.floor(Math.random() * 108));
  }
  let randomCardIndexes = Array.from(nums);
  let playerAndNums = [];
  order.forEach((player) => {
    let playersCardNums = randomCardIndexes.splice(-10);
    playerAndNums.push({ id: player.id, nums: playersCardNums });
  });
  fetch(`${GAMES_URL}/${originalData.id}`, {
    method: 'PATCH',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      cardNums: playerAndNums,
      game: originalData.id,
    }),
  })
    .then((res) => res.json())
    .then((data) => fetchCards(data));
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
