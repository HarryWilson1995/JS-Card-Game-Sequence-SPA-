class Form {
  static initializeGame() {
    const playerOne = document.getElementById('player1NameFormInputField')
      .value;
    const playerTwo = document.getElementById('player2NameFormInputField')
      .value;
    const playerThree = document.getElementById('player3NameFormInputField')
      .value;
    const playerFour = document.getElementById('player4NameFormInputField')
      .value;
    const playerFive = document.getElementById('player5NameFormInputField')
      .value;
    const playerSix = document.getElementById('player6NameFormInputField')
      .value;
    const playerSeven = document.getElementById('player7NameFormInputField')
      .value;
    let body = {
      player_1: playerOne,
      player_2: playerTwo,
      player_3: playerThree,
      player_4: playerFour,
      player_5: playerFive,
      player_6: playerSix,
      player_7: playerSeven,
    };
    const g = new Game();
    g.createGame(body);
  }
}
