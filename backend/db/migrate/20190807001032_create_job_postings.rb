class CreateJobPostings < ActiveRecord::Migration[5.0]
  def change
    create_table :job_postings do |t|
      t.boolean :is_approved
      t.string :is_active
      t.string :bio
      t.string :title
      t.string :industry
      t.string :job_type

      t.timestamps
    end
  end
end
