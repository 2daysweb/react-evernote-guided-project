class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :email
      t.string :password_digest
      t.string :avatar
      t.string :bio
      t.boolean :can_invite
      t.string :resume
      t.string :user_type

      t.timestamps
    end
  end
end
