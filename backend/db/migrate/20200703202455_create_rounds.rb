class CreateRounds < ActiveRecord::Migration[6.0]
  def change
    create_table :rounds do |t|
      t.integer :score
      t.integer :round_num
      t.integer :player_id
      t.integer :game_id

      t.timestamps
    end
  end
end
