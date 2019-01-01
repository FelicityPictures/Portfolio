class PortfolioController < ApplicationController

  def home
  end

  def about
    @title = "- About"
  end

  def projects
    @title = "- Projects"
  end

  # def graphic_design
  #   @title = "- Graphic Design Portfolio"
  # end
  #
  # def computer_science
  #   @title = "- CS Portfolio"
  # end
  #
  # def resume
  #   @title = "- Resume"
  # end

end
