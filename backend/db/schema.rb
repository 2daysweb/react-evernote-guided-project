# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20190807003318) do

  create_table "job_postings", force: :cascade do |t|
    t.boolean  "is_approved"
    t.string   "is_active"
    t.string   "bio"
    t.string   "title"
    t.string   "industry"
    t.string   "job_type"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "user_jobs", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "job_posting_id"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "email"
    t.string   "password_digest"
    t.string   "avatar"
    t.string   "bio"
    t.boolean  "can_invite"
    t.string   "resume"
    t.string   "user_type"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

end
