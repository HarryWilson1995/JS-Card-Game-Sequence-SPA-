class DecksController < ApplicationController
  def show 
    deck = Deck.find(params["id"])
    render json: deck, include: [:cards]
  end
end
