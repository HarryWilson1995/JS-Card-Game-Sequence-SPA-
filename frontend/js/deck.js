class Deck {
  static renderDeck(obj) {
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
      if (
        c.value != 'joker' &&
        c.value != 'J' &&
        c.value != 'Q' &&
        c.value != 'K' &&
        c.value != 'A'
      ) {
        card.dataset.suit = c.suit;
        card.dataset.number = c.value;
      } else if (c.value == 'J') {
        card.dataset.suit = c.suit;
        card.dataset.number = 11;
      } else if (c.value == 'Q') {
        card.dataset.suit = c.suit;
        card.dataset.number = 12;
      } else if (c.value == 'K') {
        card.dataset.suit = c.suit;
        card.dataset.number = 13;
      } else if (c.value == 'A') {
        card.dataset.suit = c.suit;
        card.dataset.number = 14;
        card.dataset.secondNumber = 1;
      } else {
        card.dataset.number = 'joker';
      }
      card.classList.add('deckCard');
      deck.appendChild(card);
    });
  }
  static drawCard() {
    if (Round.currentRound.currentPlayer.pickedUp === false) {
      const screen = document.getElementById(
        `player${Round.currentRound.currentPlayer.id}Hand`
      );
      const drawnCard = deck.children[1];
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
      screen.appendChild(drawnCard);
      Round.currentRound.currentPlayer.pickedUp = true;
    }
  }
}
