# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


puts '🌱 Seeding data...'

puts '💥 Destroying old seeds...'
User.destroy_all
Service.destroy_all
Appointment.destroy_all

puts '👤 Creating users...'
burnie = User.create!(email: 'burniesgarage@gmail.com', password: 'Password510!@#$%', password_confirmation: 'Password510!@#$%', is_admin: true)
customer = User.create!(email: 'joshuablengino@gmail.com', password: 'Password510!@#$%', password_confirmation: 'Password510!@#$%', is_admin: false)

puts '🛠 Creating services...'
maintenance_detail = Service.create!(name: 'Maintenance Detail', description: '', duration: 2)
full_interior_detail = Service.create!(name: 'Full Interior Detail', description: '', duration: 2)
headlight_restoration = Service.create!(name: 'Headlight Restoration', description: '', duration: 2)
paint_correction = Service.create!(name: 'Paint Correction', description: '', duration: 2)
paint_enhancement = Service.create!(name: 'Paint Enhancement', description: '', duration: 2)
chrome_polishing = Service.create!(name: 'Chrome Polishing', description: '', duration: 2)

puts '🗓 Creating Appointments'

puts '✅ Done seeding...'