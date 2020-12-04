class CreateMotocycles < ActiveRecord::Migration[6.0]
  def change
    create_table :motocycles do |t|
      t.string :model

      t.timestamps
    end
  end
end
