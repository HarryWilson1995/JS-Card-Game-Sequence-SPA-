class Round < ApplicationRecord
  belongs_to :player
  belongs_to :game
end
