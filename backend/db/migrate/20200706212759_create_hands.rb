class CreateHands < ActiveRecord::Migration[6.0]
  def change
    create_table :hands do |t|
      t.references :player, null: false, foreign_key: true
    end
  end
end
