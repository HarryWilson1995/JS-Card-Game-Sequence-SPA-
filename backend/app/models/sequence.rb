class Sequence < ApplicationRecord
  belongs_to :player
  belongs_to :round
  has_many :cards, :as => :locationable
end
