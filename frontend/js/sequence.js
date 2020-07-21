class Sequence {
  static discard() {
    if (Round.currentRound.currentPlayer.pickedUp === true) {
      // Do the if checks and if they meet, create a new div within and make it a new Sortable
      let div = document.createElement('div');
      div.id = `${Round.currentRound.currentPlayer.id}Set`;
      Round.currentRound.currentPlayer.placedSet = true;
      new Sortable(div, {
        group: 'shared',
      });
      // Can you check for number of items with selected class?
      // grab all the ones selected, check the length, only permit if length is one
      // draggable.classList.remove('handCard');
      // draggable.classList.add('dropZoneCard');
    }
  }
}
