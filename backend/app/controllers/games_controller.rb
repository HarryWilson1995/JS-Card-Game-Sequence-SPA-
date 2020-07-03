class GamesController < ApplicationController

  def create 
    game = Game.new
    game.winner = "Harry"
    game.player_count = 1
    game.save
    render json: game 
  end
end
