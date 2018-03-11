
namespace :db do

	desc "populate the database with faker"

	task populate: :environment do

		10.times { Item.create!(name: "Item", desc: "I am a description.") }

	end

end
