require 'pry'
class GamesController < ApplicationController

  def create 
    game = Game.new
    game.player_count = 0
    game.save
    if params["player_1"] != "" 
      player = Player.new 
      player.name = params["player_1"]
      player.save
      round1 = Round.new 
      round1.round_num = 1
      round1.score = 0
      round1.player_id = player.id
      round1.game_id = game.id
      round1.save
      round2 = Round.new 
      round2.round_num = 2
      round2.score = 0
      round2.player_id = player.id
      round2.game_id = game.id
      round2.save
      round3 = Round.new 
      round3.round_num = 3
      round3.score = 0
      round3.player_id = player.id
      round3.game_id = game.id
      round3.save
      game.player_count +=1
      game.save
    end
    if params["player_2"] != "" 
      player = Player.new 
      player.name = params["player_2"]
      player.save
      round1 = Round.new 
      round1.round_num = 1
      round1.score = 0
      round1.player_id = player.id
      round1.game_id = game.id
      round1.save
      round2 = Round.new 
      round2.round_num = 2
      round2.score = 0
      round2.player_id = player.id
      round2.game_id = game.id
      round2.save
      round3 = Round.new 
      round3.round_num = 3
      round3.score = 0
      round3.player_id = player.id
      round3.game_id = game.id
      round3.save
      game.player_count +=1
      game.save
    end
    if params["player_3"] != "" 
      player = Player.new 
      player.name = params["player_3"]
      player.save
      round1 = Round.new 
      round1.round_num = 1
      round1.score = 0
      round1.player_id = player.id
      round1.game_id = game.id
      round1.save
      round2 = Round.new 
      round2.round_num = 2
      round2.score = 0
      round2.player_id = player.id
      round2.game_id = game.id
      round2.save
      round3 = Round.new 
      round3.round_num = 3
      round3.score = 0
      round3.player_id = player.id
      round3.game_id = game.id
      round3.save
      game.player_count +=1
      game.save
    end
    if params["player_4"] != "" 
      player = Player.new 
      player.name = params["player_4"]
      player.save
      round1 = Round.new 
      round1.round_num = 1
      round1.score = 0
      round1.player_id = player.id
      round1.game_id = game.id
      round1.save
      round2 = Round.new 
      round2.round_num = 2
      round2.score = 0
      round2.player_id = player.id
      round2.game_id = game.id
      round2.save
      round3 = Round.new 
      round3.round_num = 3
      round3.score = 0
      round3.player_id = player.id
      round3.game_id = game.id
      round3.save
      game.player_count +=1
      game.save
    end
    if params["player_5"] != "" 
      player = Player.new 
      player.name = params["player_5"]
      player.save
      round1 = Round.new 
      round1.round_num = 1
      round1.score = 0
      round1.player_id = player.id
      round1.game_id = game.id
      round1.save
      round2 = Round.new 
      round2.round_num = 2
      round2.score = 0
      round2.player_id = player.id
      round2.game_id = game.id
      round2.save
      round3 = Round.new 
      round3.round_num = 3
      round3.score = 0
      round3.player_id = player.id
      round3.game_id = game.id
      round3.save
      game.player_count +=1
      game.save
    end
    if params["player_6"] != "" 
      player = Player.new 
      player.name = params["player_6"]
      player.save
      round1 = Round.new 
      round1.round_num = 1
      round1.score = 0
      round1.player_id = player.id
      round1.game_id = game.id
      round1.save
      round2 = Round.new 
      round2.round_num = 2
      round2.score = 0
      round2.player_id = player.id
      round2.game_id = game.id
      round2.save
      round3 = Round.new 
      round3.round_num = 3
      round3.score = 0
      round3.player_id = player.id
      round3.game_id = game.id
      round3.save
      game.player_count +=1
      game.save
    end
    if params["player_7"] != "" 
      player = Player.new 
      player.name = params["player_7"]
      player.save
      round1 = Round.new 
      round1.round_num = 1
      round1.score = 0
      round1.player_id = player.id
      round1.game_id = game.id
      round1.save
      round2 = Round.new 
      round2.round_num = 2
      round2.score = 0
      round2.player_id = player.id
      round2.game_id = game.id
      round2.save
      round3 = Round.new 
      round3.round_num = 3
      round3.score = 0
      round3.player_id = player.id
      round3.game_id = game.id
      round3.save
      game.player_count +=1
      game.save
    end
    deck = Deck.new
    deck.game = game
    deck.save
    card_values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", 'J', 'Q', 'K', 'A']
    card_suits = ["H", "D", "C", "S"]
    card_suits.each do |current_suit|
      card_values.each do |current_value|
        card = Card.new
        card.suit = current_suit
        card.value = current_value
        card.game = game
        card.locationable = deck
        card.save 
      end
    end
    discard_pile = DiscardPile.new 
    discard_pile.game = game 
    discard_pile.save
    game.winner = nil
    game.save
    render json: game, include: [:players, :rounds, :deck, :cards]
  end
end
