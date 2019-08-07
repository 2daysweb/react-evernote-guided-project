# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
UserJob.destroy_all
JobPosting.destroy_all 
# u = User.create(email: ENV['USER'])
user_1 = User.create(email: "sahnunhm@gmail.com", password:"pw1", user_type:"employer", avatar:"", bio:"", can_invite:true, resume:"")
job_posting_1 = JobPosting.create(is_approved:true, is_active:true, title:"Senior NET Developer", industry:"Software Engineering", job_type:"full time")
user_job_1 = UserJob.create(user_id:user_1.id, job_posting_id:job_posting_1.id)