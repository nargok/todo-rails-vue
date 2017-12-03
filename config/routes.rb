Rails.application.routes.draw do
  root to: 'projects#index'
  get '/about', to: 'projects#index'
  get '/contact', to: 'projects#index'
  resources :projects

  namespace :api, format: 'json' do
    resources :tasks, only: [:index, :create, :update]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
