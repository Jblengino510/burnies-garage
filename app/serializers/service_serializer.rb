class ServiceSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :duration
end
