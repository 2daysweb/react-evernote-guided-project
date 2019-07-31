# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# User.destroy_all
u = User.create(username: ENV['USER'])

# Job.destroy_all
# Employer.destroy_all
user_1 = User.create(username:"test_user_1", password:"test_pw_1") 
job_1 = Job.create(title:"Mid-Senior Full Stack Web Developer" , employer:"Goldman Sachs ---- Desired Skills: HTML/CSS/Ruby/Javascript/ReactDOM", Salary:100000)
UserJob.create(user_id:16, job_id:19)


user_2 = User.create(username:"test_user_2", password:"test_pw_2") 
job_2 = Job.create(title:"Junior Web Developer", employer:"UBS  ---- Desired Skills: HTML/CSS/Ruby/Javascript/ReactDOM", Salary:100000)
UserJob.create(user_id:16, job_id:20)

user_3 = User.create(username:"test_user_3", password:"test_pw_3") 
job_1 = Job.create(title:"Jr. Web Developer (Javascript/React)", employer:"Bank of America ---- Desired Skills: HTML/CSS/Ruby/Javascript/ReactDOM", Salary:100000)
UserJob.create(user_id:17, job_id:21)


user_4 = User.create(username:"test_user_2", password:"test_pw_2") 
job_2 = Job.create(title:"Senior Javascript Developer", employer:"Capital One ---- Desired Skills: HTML/CSS/Ruby/Javascript/ReactDOM", Salary:100000)
UserJob.create(user_id:17, job_id:22)