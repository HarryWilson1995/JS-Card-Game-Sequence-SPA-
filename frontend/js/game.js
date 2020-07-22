class Game {
  constructor(playerOrder, id) {
    this.playerOrder = playerOrder;
    this.id = id;
  }
  static currentGame;
  save() {
    Game.currentGame = this;
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
    sortedPlayOrder.forEach((player) => {
      const p = new Player();
      p.id = player.id;
      p.name = player.name;
      p.pickedUp = false;
      p.placedSet = false;
      p.score = 0;
      p.save();
    });
    this.id = data.id;
    this.save();
    Game.currentGame.playerOrder = Player.all;
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
      Sortable.create(playerHand, {
        group: 'shared',
        multiDrag: true,
        selectedClass: 'sortable-selected',
        onEnd: (e) => {
          if (
            e.to === dropZone &&
            e.clones.length === 0 &&
            Round.currentRound.currentPlayer.pickedUp === true
          ) {
            e.item.classList.remove('handCard');
            e.item.classList.add('dropZoneCard');
            dropZone.appendChild(e.item);
            Dropzone.discard();
          } else if (
            e.to === dropZone &&
            e.clones.length === 0 &&
            Round.currentRound.currentPlayer.pickedUp === false
          ) {
            if (dropZone.lastChild === e.item) {
              e.from.appendChild(dropZone.lastChild);
            } else {
              e.from.appendChild(e.item);
            }
          } else if (e.to === dropZone && e.clones.length > 0) {
            for (let i = 0; i < e.clones.length; i++) {
              const item = document.getElementById(e.clones[i].id);
              e.from.appendChild(item);
            }
          } else if (e.to === sequenceDropArea && e.clones.length === 3) {
            if (
              Sequence.consecutiveNumbers(e.clones) ||
              Sequence.sameNumbers(e.clones)
            ) {
              let div = document.createElement('div');
              e.clones.forEach((clone) => {
                const item = document.getElementById(clone.id);
                item.height = '120';
                item.width = '78.5';
                item.onmouseenter = '';
                div.appendChild(item);
              });
              sequenceDropArea.appendChild(div);
            } else {
              e.clones.forEach((clone) => {
                const item = document.getElementById(clone.id);
                e.from.appendChild(item);
              });
              e.from.appendChild(e.item);
            }
          } else if (e.to === sequenceDropArea && e.clones.length !== 3) {
            e.clones.forEach((clone) => {
              const item = document.getElementById(clone.id);
              e.from.appendChild(item);
            });
            e.from.appendChild(e.item);
          }
        },
      });
      playerScreen.appendChild(playerHand);
      playersScreen.appendChild(playerScreen);
    }
    let betweenTurns = document.createElement('div');
    betweenTurns.classList.add('betweenTurns');
    let betweenTurnsMessage = document.createElement('h1');
    betweenTurnsMessage.classList.add('betweenTurnsMessage');
    betweenTurns.appendChild(betweenTurnsMessage);
    playersScreen.appendChild(betweenTurns);
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
  renderGameInfo() {
    const scoresList = document.querySelector('.scores');
    const roundInfo = document.querySelector('.roundInfo');
    const currentTurnInfo = document.querySelector('.currentTurn');
    roundInfo.innerText = `Round ${Round.currentRound.number}`;
    for (let i = 0; i < Player.all.length; i++) {
      let listItem = document.createElement('li');
      listItem.innerText = `${Player.all[i]['name']} - ${Player.all[i]['score']}`;
      scoresList.appendChild(listItem);
    }
    currentTurnInfo.innerText = `Current Player: ${Round.currentRound.currentPlayer.name}`;
    orderReveal.style.display = 'none';
    playersScreen.style.display = 'flex';
  }
  turnInfoUpdate() {
    const currentTurnInfo = document.querySelector('.currentTurn');
    currentTurnInfo.innerText = `Current Player: ${Round.currentRound.currentPlayer.name}`;
    const betweenTurns = document.querySelector('.betweenTurns');
    betweenTurns.style.display = 'none';
    const currentPlayerDiv = document.getElementById(
      `player${Round.currentRound.currentPlayer.id}`
    );
    currentPlayerDiv.style.display = 'flex';
  }
}
