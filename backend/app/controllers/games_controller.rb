require 'pry'
class GamesController < ApplicationController

  def create 
    game = Game.new
    game.player_count = 0
    game.save
    playersArr = ["player_1", "player_2", "player_3", "player_4", "player_5", "player_6", "player_7"]
    playersArr.each do |item|
      playerParams(item, game)
    end
    deck = Deck.new
    deck.game = game
    deck.save
    createCards(game, deck)
    createCards(game, deck)
    createJokers(game, deck)   
    discard_pile = DiscardPile.new 
    discard_pile.game = game 
    discard_pile.save
    game.winner = nil
    game.save
    render json: game, include: [:players, :rounds, :deck, :cards, :discard_pile]
  end

  def update 
    player_count = params["cardNums"].length
    player = Player.find(params["cardNums"][0]["id"])
    player.hand
    game = Game.find(params["game"])
    game.cards
    game.player_count
    binding.pry
  end
end
