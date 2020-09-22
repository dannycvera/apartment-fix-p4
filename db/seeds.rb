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

danv = User.create!(username: 'danv', password: '123456', first_name: 'Danny',last_name: 'Vera', image_url: "https://res.cloudinary.com/dgxe7m9em/image/upload/v1600499175/apartmentfix/danielvera-portrait-web_inbr7u.jpg", address: '300 Morgan Ave APT 4, Brooklyn, NY 11237', email: 'dannyvera@gmail.com', phone: '222-222-2222')
james = User.create!(username: 'james', password: '123456', first_name: 'James', last_name: 'Dean', image_url: "https://res.cloudinary.com/dgxe7m9em/image/upload/v1600751067/apartmentfix/James-Dean_evcppz.jpg", address: "345 Rivington st APT 2, New York, NY 10002", email: "james@gmail.com", phone: '333-333-3333')
jessica = User.create!(username: 'jessica', password: '123456', first_name: 'Jessica', last_name: 'Jones', image_url: "https://res.cloudinary.com/dgxe7m9em/image/upload/v1600750950/apartmentfix/12963713_1710012359284584_4092768109933475927_n.jpg_kfxcss.jpg", address: "555 pearmont st, New York, NY APT 5 New York, NY 10015", email: "jill@gmail.com", phone: '444-444-4444')
puts "#{User.count} users were created"

broken_pipe = Issue.create!(title: "Broken Pipe", description: "spraying water everywhere", location: "kitchen", image_url: "https://res.cloudinary.com/dgxe7m9em/image/upload/v1600497880/apartmentfix/broken-pipe_ym7g29.jpg", resolved: false, user: james)
leaking_Faucet = Issue.create!(title: "Leaking Faucet", description: "dripping water all day", location: "bathroom", image_url: "https://res.cloudinary.com/dgxe7m9em/video/upload/v1600724850/apartmentfix/Leaky_Faucet_ajquji_idjij5.mp4", resolved: false, user: james)
broken_door_handle = Issue.create!(title: "Broken Door Handle", description: "Can't enter the room without a screwdriver", location: "Master Bedroom", image_url: "https://res.cloudinary.com/dgxe7m9em/image/upload/v1600704108/apartmentfix/broken-door-handle_wjebgl.jpg", resolved: false, user: james)
puts "#{Issue.count} issues were created"

jessica_comment_pipe = Comment.create!(image_url: "", comment_text: "looks pretty bad", issue: broken_pipe, user: jessica)
james_comment_pipe = Comment.create!(image_url: "https://res.cloudinary.com/dgxe7m9em/image/upload/v1600697664/apartmentfix/burst-pipe_vohl53.jpg", comment_text: "another leak sprung up under the sink", issue: broken_pipe, user: james)
jessica_comment_pipe = Comment.create!(image_url: "https://res.cloudinary.com/dgxe7m9em/image/upload/v1600735766/apartmentfix/gfiqflfsnekhzb3mzgyx.jpg", comment_text: "use a pipe repair clamp temporarily today or tomorrow if you like swimming in your kitchen.", issue: broken_pipe, user: jessica)
danv_comment_pipe = Comment.create!(image_url: "", comment_text: "Can I come and take a look?", issue: broken_pipe, user: danv)
puts "#{Comment.count} comments were created"