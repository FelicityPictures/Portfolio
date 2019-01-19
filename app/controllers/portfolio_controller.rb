class PortfolioController < ApplicationController

  def home
    @title = "Felicity Ng"
  end

  def about
    @title = "About"
    @otherpage = "Projects"
  end

  def projects
    @title = "Projects"
    @otherpage = "About"
  end

end
