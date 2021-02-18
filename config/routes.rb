Rails.application.routes.draw do
  devise_for :users
  delete "/tickets/:id", to: "tickets#destroy"

  resources :tickets, only: [:show, :index, :create, :new] do
    get :assign, to: "tickets#assign", on: :member
    get :assign_later, to: "tickets#assign_later", on: :member
    get :closed, to: "tickets#closed", on: :member
    resources :reviews, only: [:new, :create, :show ]
  end
  get "/tickets/new/ticket_response", to: "tickets#ticket_response", as: 'ticket_response'
  root to: 'pages#home'
end
