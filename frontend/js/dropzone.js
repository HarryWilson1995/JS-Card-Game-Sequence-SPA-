class Dropzone {
  static discard() {
    if (Round.currentRound.currentPlayer.pickedUp === true) {
      Round.currentRound.currentPlayer.pickedUp = false;
      const playersHand = document.getElementById(
        `player${Round.currentRound.currentPlayer.id}Hand`
      );
      if (playersHand.childElementCount === 0) {
        const winnerMessage = document.querySelector('.winner');
        playersScreen.style.display = 'none';
        winner.style.display = 'flex';
        winnerMessage.textContent = `${Round.currentRound.currentPlayer.name} has won the game!`;
        Round.currentRound.currentPlayer.score += 1;
        let standingsOrder = Player.all.sort((a, b) => b.score - a.score);
        while (standings.firstChild) {
          standings.removeChild(standings.firstChild);
        }
        standingsOrder.forEach((player) => {
          let item = document.createElement('li');
          item.textContent = `${player.name} - ${player.score}`;
          standings.appendChild(item);
        });
      } else {
        Round.currentRound.endTurn();
      }
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
