class User < ApplicationRecord
    has_secure_password  
    has_many :user_jobs 
    has_many :job_postings, through: :user_jobs 
end
