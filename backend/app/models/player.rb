class Player < ApplicationRecord
  has_one :hand
  has_many :rounds 
  has_many :sequences
end
