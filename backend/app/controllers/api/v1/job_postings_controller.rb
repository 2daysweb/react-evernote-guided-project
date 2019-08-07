require "byebug"

class Api::V1::JobPostingsController < ApplicationController

  before_action :set_job_posting, only: [:show,:update,:destroy]

  def index
    @JobPostings = JobPosting.all
    render json: @JobPostings, status: 200
  end

  def create
    @JobPosting = JobPosting.create(job_posting_params)
    render json: @JobPosting, status: 201
  end

  def update
    @JobPosting.update(job_posting_params)
    render json: @JobPosting, status: 200
  end

  def destroy
    @JobPostingId = @JobPosting.id
    @JobPosting.destroy
  end

  def show
    render json: @JobPosting, status: 200
  end

  private
  def job_posting_params
    params.require(job_posting).permit(:title, :body, :id, :is_active, :is_approved, :industry)
  end

  def set_job_posting
    @JobPosting = JobPosting.find(params[:id])
  end
end
