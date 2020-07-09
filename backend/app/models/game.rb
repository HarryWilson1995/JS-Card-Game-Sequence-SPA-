class Game < ApplicationRecord
  has_many :rounds 
  has_many :cards
  has_many :players, through: :rounds
  has_many :hands, through: :players
  has_one :deck
  has_one :discard_pile
end
