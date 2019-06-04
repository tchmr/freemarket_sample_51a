class CreateCards < ActiveRecord::Migration[5.2]
  def change
    create_table :cards do |t|
      t.string :card_id, null: false, unique: true
      t.string :customer_id, null: false, unique: true
      t.references :user, foreign_key: true
      t.timestamps
    end
  end
end
