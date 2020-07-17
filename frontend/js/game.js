class Game {
  constructor(playerOrder) {
    this.playerOrder = playerOrder;
  }
  static all = [];
  save() {
    Game.all.push(this);
  }
  createGame(params) {
    API.post('/games', params).then((data) =>
      this.removeDuplicatePlayers(data)
    );
  }
  41;
  removeDuplicatePlayers(data) {
    let playersArr = [];
    for (let i = 0; i < data.players.length; i += 3) {
      playersArr.push(data.players[i]);
    }
    this.createPlayerFields(playersArr);
    this.checkStartingOrder(playersArr, data.cards, data);
  }
  checkStartingOrder(arr, cards, data) {
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
    this.playerOrder = sortedPlayOrder;
    this.save();
    this.showPlayerOrder(sortedPlayOrder, data);
  }
  createPlayerFields(arr) {
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
  showPlayerOrder(order, data) {
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
    let r = new Round();
    setTimeout(r.startRound, 7000, order, data);
  }
}
