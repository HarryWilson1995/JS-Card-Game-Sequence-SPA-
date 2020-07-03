require 'pry'
class GamesController < ApplicationController

  def create 
    binding.pry
    game = Game.new
    game.winner = nil
    game.player_count = 1
    game.save
    render json: game 
  end
end
