# SequenceLite - A Basic MultiPlayer Single Page Card Game

This simple multiplayer single page card game application will provide hours of competitive fun. The goal of the game is to place consecutive runs of 3 cards of the same suit or place three cards which have the same number value. Once you have no cards left in your hand, you score a point and the game restarts, keeping track of your scores if you wish to continue or giving you the option to start a new game.

The rules can be found at any point during the game by clicking the rules button in the top right corner of the page which will open up a modal. The rules are as follows:

1. Each player receives 9 cards
2. At the start of your turn, pickup a card or place
   one or multiple sets
3. The goal is to be the first to discard all your
   cards
4. You cannot finish your turn without first having
   drawn a card
5. Place sets of 3, these may be consecutive cards
   of the same suit, such as 4, 5, 6 of spades or sets of
   the same numbers, such as three 3s
6. Once a set has been placed down, you may
   not return it to your hand
7. Jokers are wild
8. Aces are high, so you may not have a consecutive
   set of ace, two, three of the same suit
9. The person with the most wins will go first
10. Click on a card to select multiple cards to drag as a set
11. Once selected, a card will show a red border, you may
    not drag one single card to the discard pile when it
    is selected. Simply unselect and drag the single card
12. Have fun and keep an eye out for future versions
    of the game

## Installation

You can install this application by running `git clone https://github.com/HarryWilson1995/JS-Card-Game-Sequence-SPA-.git`

After cloning the repository, enter the directory on your computer and run the following from the command line:

```
cd frontend/
```

```
npm install
```

```
cd ..
```

```
cd backend/
```

```
bundle install
```

Followed by:

```
rails s
```

Then copy the path of the index.html file and paste it into your browser. This game will not work if run will live server.

## Usage

Upon opening the application, you will see a simple form allowing you to enter between one and seven names for your players. Players will then take it in turns following the rules outlined above (as well as in the modal you can access mid-game) to try and place all 9 of their cards down into appropriate sequences.

You can see a more detailed description/usage of the app by watching the following [Youtube Video](https://youtu.be/Xh0qd6lqNcs).

## License

The app is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
