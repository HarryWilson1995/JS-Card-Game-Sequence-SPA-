const BASE_URL = 'http://localhost:3000';
const GAMES_URL = `${BASE_URL}/games`;
const startGameForm = document.querySelector('.startGameForm');
const newGameForm = document.getElementById('newGameForm');
const gameContainer = document.querySelector('.sequenceContainer');
const playersScreen = document.querySelector('.playersScreen');

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
    .then((data) => console.log(data));
  // .then((data) => removeDuplicatePlayers(data));
});

function removeDuplicatePlayers(data) {
  let playersArr = [];
  for (let i = 0; i < data.players.length; i += 3) {
    playersArr.push(data.players[i]);
  }
  createPlayerFields(playersArr);
  checkStartingOrder(playersArr);
}

function checkStartingOrder(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
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
// https://www.w3schools.com/howto/howto_css_flip_card.asp
