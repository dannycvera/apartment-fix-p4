# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Comment.destroy_all
Issue.destroy_all
User.destroy_all

danv = User.create!(username: 'danv', password: '123456', first_name: 'Danny',last_name: 'Vera', image_url: "https://www.danielvera.com/generalassembly/project-images/p4/danielvera-portrait-web.jpg", address: '300 Morgan Ave APT 4, Brooklyn, NY 11237', email: 'dannyvera@gmail.com', phone: '222-222-2222')
james = User.create!(username: 'james', password: '123456', first_name: 'James', last_name: 'Jones', image_url: "", address: "345 Rivington st APT 2, New York, NY 10002", email: "james@gmail.com", phone: '333-333-3333')
jill = User.create!(username: 'jill', password: '123456', first_name: 'Jill', last_name: 'Jones', image_url: "", address: "555 pearmont st, New York, NY APT 5 New York, NY 10015", email: "jill@gmail.com", phone: '444-444-4444')

broken_pipe = Issue.create!(title: "Broken Pipe", description: "spraying water everywhere", location: "kitchen", image_url: "", resolved: false, user: james)

jill_comment_pipe = Comment.create!(image_url: "", comment: "looks pretty bad", issue: broken_pipe, user: jill)