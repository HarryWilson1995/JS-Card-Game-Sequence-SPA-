class Hand {
  static renderHands(obj) {
    let handDiv = document.getElementById(`player${obj.player_id}Hand`);
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
}
