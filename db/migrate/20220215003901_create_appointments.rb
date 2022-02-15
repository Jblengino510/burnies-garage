class CreateAppointments < ActiveRecord::Migration[6.1]
  def change
    create_table :appointments do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :service, null: false, foreign_key: true
      t.datetime :date_requested
      t.string :firstname
      t.string :lastname
      t.integer :phone_number
      t.string :city
      t.string :vehicle_make
      t.string :vehicle_model
      t.integer :vehicle_year
      t.string :vehicle_color
      t.text :message

      t.timestamps
    end
  end
end
