class CreateIssues < ActiveRecord::Migration[6.0]
  def change
    create_table :issues do |t|
      t.string :image_url
      t.text :location
      t.string :title
      t.text :description
      t.boolean :resolved
      t.text :resolved_notes
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
