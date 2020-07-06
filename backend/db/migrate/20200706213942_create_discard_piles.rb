class CreateDiscardPiles < ActiveRecord::Migration[6.0]
  def change
    create_table :discard_piles do |t|
      t.references :game, null: false, foreign_key: true
    end
  end
end
