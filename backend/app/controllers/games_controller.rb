require 'pry'
class GamesController < ApplicationController

  def create 
    game = Game.new
    game.player_count = 0
    game.save
    if params["player_1"] != "" 
      player1 = Player.new 
      player1.name = params["player_1"]
      player1.save
      round1 = Round.new 
      round1.round_num = 1
      round1.score = 0
      round1.player_id = player1.id
      round1.game_id = game.id
      round1.save
      round2 = Round.new 
      round2.round_num = 2
      round2.score = 0
      round2.player_id = player1.id
      round2.game_id = game.id
      round2.save
      round3 = Round.new 
      round3.round_num = 3
      round3.score = 0
      round3.player_id = player1.id
      round3.game_id = game.id
      round3.save
      game.player_count +=1
      game.save
    end
    binding.pry
    game.winner = nil
    render json: game 
  end
end
