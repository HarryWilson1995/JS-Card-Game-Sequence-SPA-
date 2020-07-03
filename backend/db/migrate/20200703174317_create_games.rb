class CreateGames < ActiveRecord::Migration[6.0]
  def change
    create_table :games do |t|
      t.string :winner
      t.integer :player_count

      t.timestamps
    end
  end
end
