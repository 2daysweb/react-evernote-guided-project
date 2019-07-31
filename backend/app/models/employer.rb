class Employer < ApplicationRecord
    has_many :user_jobs
    validates :name, presence: true, uniqueness: true

end
