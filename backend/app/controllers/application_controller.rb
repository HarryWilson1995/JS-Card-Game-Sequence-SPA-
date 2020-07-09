class ApplicationController < ActionController::API

  def playerParams(p, game)
    if params[p] != "" 
      player = Player.new 
      player.name = params[p]
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
      hand = Hand.new 
      hand.player = player
      hand.save
      game.player_count +=1
      game.save
    end
  end

  def createCards(game, deck)
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
  end

  def createJokers(game, deck)
    joker_counter = 0 
    while joker_counter < 4 do 
      joker = Card.new 
      joker.suit = ""
      joker.value = "joker"
      joker.game = game 
      joker.locationable = deck 
      joker.save
      joker_counter += 1
    end
  end
end
