class Card {
  static fetchCards(data) {
    for (let i = 0; i < data.hands.length; i += 3) {
      API.get(`/hands/${data.hands[i]['id']}`).then((hands) =>
        Hand.renderHands(hands)
      );
    }
    API.get(`/decks/${data.deck['id']}`).then((deck) => Deck.renderDeck(deck));
    Game.currentGame.renderGameInfo(data);
  }
}
