class Task < ActiveRecord::Migration[5.0]
  def change
    create_table :tasks do |t|
       t.string :task
       t.string :cookie
       t.string :status
    end
  end
end
