class CreateCards < ActiveRecord::Migration[6.0]
  def change
    create_table :cards do |t|
      t.string :suit
      t.string :value
      t.references :game, null: false, foreign_key: true
      t.references :locationable, polymorphic: true

    end
  end
end
