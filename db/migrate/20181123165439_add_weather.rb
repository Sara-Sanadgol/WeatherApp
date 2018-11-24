class AddWeather < ActiveRecord::Migration[5.2]
  def change

    create_table :weathers do |t|
    t.string :city, null: false
    t.integer :temp, null: false
    t.integer :minTemp, null: false
    t.integer :maxTemp, null: false
    t.integer :user_id, null: false

    t.timestamps
  end
  add_index :weathers, :city
  end
end
