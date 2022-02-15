class User < ApplicationRecord
    has_secure_password

    validates :email, presence: true, uniqueness: true, length: { minimum: 5 }
    validates :password, presence: true, length: { in: 6..30 }, confirmation: true, on: :create
    validates :password_confirmation, presence: true, on: :create

    has_many :appointments, dependent: :destroy
    has_many :services, through: :appointments
end
