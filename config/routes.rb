Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root "portfolio#home"
  match '/about',                       to: 'portfolio#about',            via: 'get'
  match '/About',                       to: 'portfolio#about',            via: 'get'

  match '/projects',                    to: 'portfolio#projects',         via: 'get'
  match '/Projects',                    to: 'portfolio#projects',         via: 'get'
  match '/projects/cpacs',              to: 'projects#cpacs',             via: 'get'
  match '/projects/CPACS',              to: 'projects#cpacs',             via: 'get'
  # match '/projects/Scribble',           to: 'projects#scribble',          via: 'get'

end
