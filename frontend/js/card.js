class Card {
  static fetchCards(data) {
    for (let i = 0; i < data.hands.length; i += 3) {
      API.get(`/hands/${data.hands[i]['id']}`).then((hands) =>
        renderHands(hands)
      );
    }
    API.get(`/decks/${data.deck['id']}`).then((deck) => renderDeck(deck));
    renderGameInfo(data);
  }
}
