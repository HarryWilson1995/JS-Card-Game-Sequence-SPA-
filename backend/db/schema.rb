# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_07_06_213942) do

  create_table "cards", force: :cascade do |t|
    t.string "suit"
    t.string "value"
    t.integer "game_id", null: false
    t.string "locationable_type"
    t.integer "locationable_id"
    t.index ["game_id"], name: "index_cards_on_game_id"
    t.index ["locationable_type", "locationable_id"], name: "index_cards_on_locationable_type_and_locationable_id"
  end

  create_table "decks", force: :cascade do |t|
    t.integer "game_id", null: false
    t.index ["game_id"], name: "index_decks_on_game_id"
  end

  create_table "discard_piles", force: :cascade do |t|
    t.integer "game_id", null: false
    t.index ["game_id"], name: "index_discard_piles_on_game_id"
  end

  create_table "games", force: :cascade do |t|
    t.string "winner"
    t.integer "player_count"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "hands", force: :cascade do |t|
    t.integer "player_id", null: false
    t.index ["player_id"], name: "index_hands_on_player_id"
  end

  create_table "players", force: :cascade do |t|
    t.string "name"
  end

  create_table "rounds", force: :cascade do |t|
    t.integer "score"
    t.integer "round_num"
    t.integer "player_id"
    t.integer "game_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "sequences", force: :cascade do |t|
    t.integer "player_id", null: false
    t.integer "round_id", null: false
    t.boolean "met"
    t.index ["player_id"], name: "index_sequences_on_player_id"
    t.index ["round_id"], name: "index_sequences_on_round_id"
  end

  add_foreign_key "cards", "games"
  add_foreign_key "decks", "games"
  add_foreign_key "discard_piles", "games"
  add_foreign_key "hands", "players"
  add_foreign_key "sequences", "players"
  add_foreign_key "sequences", "rounds"
end
