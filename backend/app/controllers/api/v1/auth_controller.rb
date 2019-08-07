require "byebug"

class API::V1::AuthController < ApplicationController 

    def create 
        byebug
        @user = User.find_by(email: params[:email])
        if @user && @user.authenticate(params[:password])
            render json: {} 
        else 
            render json: {}
        end 
    end 

end 