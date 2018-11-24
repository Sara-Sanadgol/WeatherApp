Rails.application.routes.draw do
  get 'weathers/index'
  get 'weathers/create'
  get 'weathers/new'
  get 'weathers/edit'
  get 'weathers/show'
  get 'weathers/update'
  get 'weathers/destroy'

  root to: "home#index"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
resources :weathers

end
