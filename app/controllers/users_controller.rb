class UsersController < ApplicationController

    before_action :authorize, except: [:create, :index]

    def index
        render json: User.all
    end

    #'/me'
    def show
        user = User.find_by(id: session[:user_id])
        render json: user, status: :created
    end

    #'/signup'
    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    private

    def user_params
        params.permit(:email, :password, :password_confirmation, :is_admin)
    end
end
