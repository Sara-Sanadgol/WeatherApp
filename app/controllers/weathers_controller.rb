class WeathersController < ApplicationController
  def index

    @weather = Weather.all
    render :index
  end

  def create

    @weather = Weather.new(weather_params)
    if @weather.save
      render :show
    else
      render json: @weather.errors.full_messages, status: 422
    end
  end


  def edit

    @weather = Weather.new
    render :edit
  end

  def show

    @weather = Weather.find(params[:id])
    if @weather
      render :show
    else
      render json: @weather.errors.full_messages, status: 404
    end
  end

  def update

     @weather = Weather.find(params[:id])

     if @weather.update(edit_params)
        render :show
      else
        render json: @weather.errors.full_messages, status: 422
      end
  end

  def destroy
  end


  private
  def weather_params
    params.require(:weather).permit(:city, :temp, :minTemp, :maxTemp)
  end

  def edit_params
    params.require(:user).permit(:username, :Fname, :Lname, :email, :avatar, :bio, :gender)
  end

  # def password_params
  #   params.require(:user).permit(:oldpassword, :newpassword)
  # end


end
