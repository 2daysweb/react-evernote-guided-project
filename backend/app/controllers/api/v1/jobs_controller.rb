require "byebug"

class Api::V1::JobsController < ApplicationController

  before_action :set_Job, only: [:show,:update,:destroy]

  def index
    @Jobs = Job.all
    render json: @Jobs, status: 200
  end

  def create
    @Job = Job.create(job_params)
    render json: @Job, status: 201
  end

  def update
    @Job.update(job_params)
    render json: @Job, status: 200
  end

  def destroy
    @JobId = @Job.id
    @Job.destroy
  end

  def show
    render json: @Job, status: 200
  end

  private
  def job_params
    params.permit(:title, :employer, :Salary)
  end

  def set_Job
    @Job = Job.find(params[:id])
  end
end
