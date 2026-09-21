# frozen_string_literal: true

Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :pizzas, only: [:index]
      resources :cart_items, only: %i[index create update destroy]
    end
  end

  get '/*path', to: 'fallback#index', constraints: ->(req) { !req.xhr? && req.format.html? }
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
