class Hand < ApplicationRecord
  belongs_to :player
  has_many :cards, :as => :locationable
end
