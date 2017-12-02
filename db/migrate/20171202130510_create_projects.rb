class CreateProjects < ActiveRecord::Migration[5.1]
  def change
    create_table :projects do |t|
      t.string :title
      t.boolean :done, default: false, null: false

      t.timestamps
    end
  end
end
