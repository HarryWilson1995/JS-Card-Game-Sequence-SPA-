Rails.application.routes.draw do
  resources :decks
  resources :cards
  resources :rounds
  resources :players
  resources :games
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
