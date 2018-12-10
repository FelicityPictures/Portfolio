Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root "portfolio#home"
  match '/about',                      to: 'portfolio#about',            via: 'get'

  match '/user_experience',            to: 'portfolio#user_experience',  via: 'get'
  match '/user_experience/CPACS',      to: 'projects#cpacs',             via: 'get'

  match '/graphic_design',             to: 'portfolio#graphic_design',   via: 'get'

  match '/computer_science',           to: 'portfolio#computer_science', via: 'get'
  match '/computer_science/snapshot',  to: 'projects#snapshot',             via: 'get'

  match '/resume',                     to: 'portfolio#resume',           via: 'get'

end
