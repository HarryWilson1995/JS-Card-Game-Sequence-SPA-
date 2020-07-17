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
      card.classList.add('deckCard');
      deck.appendChild(card);
    });
  }
  static drawCard() {
    // check to see if they have already pickedup, then append and change their pickup value
  }
}
