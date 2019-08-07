class JobPostingSerializer < ActiveModel::Serializer
    attributes :id, :is_approved, :is_active, :title, :industry, :job_type
    belongs_to :user
  end
  