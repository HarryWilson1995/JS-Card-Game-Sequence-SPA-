class Card < ApplicationRecord
  belongs_to :game
  belongs_to :locationable, :polymorphic => true
end
