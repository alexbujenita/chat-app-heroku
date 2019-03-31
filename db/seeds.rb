# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# 10.times do |n|
#   name = Faker::Name.name
#   nick = Faker::Ancient.hero
#   age = Faker::Number.between(13, 70)
#   email = "testing-#{n + 1}@shutapp.com"
#   password = 'pass'
#   User.create!(name: name, nickname: nick, age: age, email: email, password: password, password_confirmation: password)
# end


Group.create!(name: 'ShutApp Open Group', owner_id: 1);