class Player < ApplicationRecord
  has_many :rounds 
  has_many :sequences
end
