class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.string :first_name
      t.string :last_name
      t.string :image_url
      t.string :user_type
      t.string :email
      t.string :phone

      t.timestamps
    end
  end
end
