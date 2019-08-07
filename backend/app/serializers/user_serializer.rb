class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :password, :avatar, :bio, :can_invite, :resume, :user_type 
  has_many :job_postings
end
