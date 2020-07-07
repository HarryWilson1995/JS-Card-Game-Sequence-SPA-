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
      game.player_count +=1
      game.save
    end
  end

  # def createCards

  # end
end
