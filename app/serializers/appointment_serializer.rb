class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :date_requested, :firstname, :lastname, :phone_number, :city, :vehicle_make, :vehicle_model, :vehicle_year, :vehicle_color, :message
  has_one :user
  has_one :service
end
