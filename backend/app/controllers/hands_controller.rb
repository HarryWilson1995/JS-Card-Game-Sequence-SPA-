require 'pry'

class HandsController < ApplicationController
  def show 
    hand = Hand.find(params["id"])
    render json: hand, include: [:cards]
  end
end
