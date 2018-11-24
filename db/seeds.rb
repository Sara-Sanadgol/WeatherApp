# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Weather.destroy_all
weather1 = Weather.create!({city:"new york", temp:18, minTemp:10, maxTemp:20,user_id: 1})
#weather1.save()
