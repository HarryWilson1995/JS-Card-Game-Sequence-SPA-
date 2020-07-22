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
    render json: game, include: [:players, :rounds, :deck, :cards, :discard_pile, :hands]
  end

  def update 
    game = Game.find(params["game"])
    params["cardNums"].each do |p|
      player = Player.find(p["id"])
      hand = player.hand
      p["nums"].each do |n|
        game.cards[n].locationable = hand
        game.cards[n].save
      end
    end 

    render json: game, include: [:players, :rounds, :deck, :cards, :discard_pile, :hands]
  end

  def finished 
    player = Player.find(params[:currentPlayer])
    round = player.rounds.first
    round.score = params[:score]
    round.save
    game = Game.find(params[:id])
    deck = game.deck
    cards = game.cards
    cards.each do |card|
      card.locationable = deck
      card.save
    end
    render json: game, include: [:players, :rounds, :deck, :cards, :discard_pile, :hands]
  end
end
