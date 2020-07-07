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
    credentials: 'same-origin',
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
  checkStartingOrder(playersArr, data.cards);
}

function checkStartingOrder(arr, cards) {
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
  showPlayerOrder(sortedPlayOrder);
}

function showPlayerOrder(order) {
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
  setTimeout(startRoundOne, 7000, order);
}

function createPlayerFields(arr) {
  for (let i = 0; i < arr.length; i++) {
    const playerScreen = document.createElement('div');
    playerScreen.classList.add('playerScreen');
    playerScreen.id = `player${arr[i].id}`;
    const playerHand = document.createElement('div');
    playerHand.classList.add('playersCards');
    playerHand.id = `player${arr[i].id}Hand`;
    playerScreen.appendChild(playerHand);
    playersScreen.appendChild(playerScreen);
  }
}

function startRoundOne(order) {
  console.log(order);
  orderReveal.style.display = 'none';
  playersScreen.style.display = 'flex';
  const playerAreas = document.querySelectorAll('.playerScreen');
  playerAreas.forEach(function (area) {
    if (area.id !== `player${order[0]['id'].toString()}`) {
      let div = document.getElementById(`${area.id}`);
      div.style.display = 'none';
    }
  });
  console.log(playerAreas);
}
