class Dropzone {
  static discard() {
    if (Round.currentRound.currentPlayer.pickedUp === true) {
      Round.currentRound.currentPlayer.pickedUp = false;
      Round.currentRound.endTurn();
    }
  }
  static drawFromDiscard() {
    if (
      dropZone.lastChild !== null &&
      Round.currentRound.currentPlayer.pickedUp === false
    ) {
      const screen = document.getElementById(
        `player${Round.currentRound.currentPlayer.id}Hand`
      );
      const drawnCard = dropZone.lastChild;
      drawnCard.draggable = true;
      drawnCard.classList.add('handCard');
      drawnCard.classList.remove('dropZoneCard');
      drawnCard.onmouseenter = function (e) {
        e.target.style.marginBottom = '5rem';
      };
      drawnCard.onmouseleave = function (e) {
        e.target.style.marginBottom = '0';
      };
      screen.appendChild(drawnCard);
      Round.currentRound.currentPlayer.pickedUp = true;
    }
  }
}
