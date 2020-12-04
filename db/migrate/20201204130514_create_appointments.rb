class CreateAppointments < ActiveRecord::Migration[6.0]
  def change
    create_table :appointments do |t|
      t.date :appdate
      t.string :location

      t.timestamps
    end
  end
end
