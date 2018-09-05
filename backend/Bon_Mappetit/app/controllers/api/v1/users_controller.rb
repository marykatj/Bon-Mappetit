
class Api::V1::UsersController < ApplicationController

  # def index
  #   render json: User.all
  # end

  #edit/update/new/create

  def show
    @user = User.find_by(id: params[:id])
    render json: @user
  end

end
