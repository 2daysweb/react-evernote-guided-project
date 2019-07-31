class Api::V1::UserJobsController < ApplicationController

    before_action :set_UserJob, only: [:show,:update,:destroy]
  
    def index
      @UserJobs = UserJob.all
      render json: @UserJobs, status: 200
    end
  
    def create
      @UserJob = UserJob.create(UserJob_params)
      render json: @UserJob, status: 201
    end
  
    def update
      @UserJob.update(UserJob_params)
      render json: @UserJob, status: 200
    end
  
    def destroy
      @UserJobId = @UserJob.id
      @UserJob.destroy
    end
  
    def show
      
      @UserJob = UserJob.find()
      render json: @UserJob, status: 200
    end
  
    private
    def UserJob_params
      params.permit(:title, :employer, :Salary)
    end
  
    def set_UserJob
      @UserJob = UserJob.find(params[:id])
    end
  end
  