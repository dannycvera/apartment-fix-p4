Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'

  get '/users/:id/issues', to: 'issues#index'
  get '/issues', to: 'issues#index_all'
  get '/issue/:id', to: 'issues#show'
  post '/issues', to: 'issues#create'
  put '/issues/:id', to: 'issues#update'
  delete '/issues/:id', to: 'issues#destroy'

  get '/issues/:id/comments', to: 'comments#index'
  # get '/comments', to: 'comments#index_all'
  get '/comments/:id', to: 'comments#show'
  post '/issues/:id//comments', to: 'comments#create'
  put '/comments/:id', to: 'comments#update'
  delete '/comments/:id', to: 'comments#destroy'

  resources :users 
  # do
  #   resources :issues do
  #     resources :comments
  #   end
  # end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
