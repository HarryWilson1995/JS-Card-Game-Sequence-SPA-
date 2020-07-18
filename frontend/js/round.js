class Round {
  constructor(currentPlayer, number) {
    this.currentPlayer = currentPlayer;
    this.number = number;
  }
  static all = [];
  static currentRound;
  save() {
    Round.all.push(this);
  }
  startRound(order, data) {
    const playerAreas = document.querySelectorAll('.playerScreen');
    playerAreas.forEach(function (area) {
      if (area.id !== `player${order[0]['id'].toString()}`) {
        let div = document.getElementById(`${area.id}`);
        div.style.display = 'none';
      }
    });
    const nums = new Set();
    while (nums.size !== order.length * 10) {
      nums.add(Math.floor(Math.random() * 108));
    }
    let randomCardIndexes = Array.from(nums);
    let playerAndNums = [];
    order.forEach((player) => {
      let playersCardNums = randomCardIndexes.splice(-10);
      playerAndNums.push({ id: player.id, nums: playersCardNums });
    });
    let body = {
      cardNums: playerAndNums,
      game: data.id,
    };
    let r = new Round(Game.currentGame.playerOrder[0], 1);
    r.save();
    Round.currentRound = r;
    API.patch(`/games/${data.id}`, body).then((data) => Card.fetchCards(data));
  }
  endTurn() {
    console.log('round is over');
  }
}
