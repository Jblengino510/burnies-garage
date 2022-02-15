class Appointment < ApplicationRecord
  belongs_to :user
  belongs_to :service

  validates :date_requested, :firstname, :lastname, :phone_number, :city, :vehicle_make, :vehicle_model, :vehicle_year, :vehicle_color, presence: true
  validates :phone_number, :vehicle_year, numericality: true

end
