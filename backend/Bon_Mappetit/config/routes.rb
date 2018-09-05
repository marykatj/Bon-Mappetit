Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

    namespace :api do
    namespace :v1 do
      resources :posts, only: [:index, :update, :create, :update]  #eventually destroy? what about new & edit?
      resources :users, only: [:create, :show, :update]    #new & edit?
    end
  end
end


# http://localhost:3000/api/v1/posts.json
# http://localhost:3000/api/v1/users.json
