Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      post '/login', to: 'auth#create'
      get '/profile', to: 'users#profile'
      resources :users, only: [:create]
      resources :job_postings
      resources :user_jobs 
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
