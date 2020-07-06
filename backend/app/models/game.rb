class Game < ApplicationRecord
  has_many :rounds 
  has_many :cards
  has_many :players, through: :rounds
end
