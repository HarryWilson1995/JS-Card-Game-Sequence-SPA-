Rails.application.routes.draw do
  resources :discard_piles
  resources :sequences
  resources :hands
  resources :decks
  resources :cards
  resources :rounds
  resources :players
  resources :games
  patch '/gameover/:id', to: 'games#finished'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
