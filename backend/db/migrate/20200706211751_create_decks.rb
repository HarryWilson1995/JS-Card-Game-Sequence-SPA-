class CreateDecks < ActiveRecord::Migration[6.0]
  def change
    create_table :decks do |t|
      t.references :game, null: false, foreign_key: true
    end
  end
end
