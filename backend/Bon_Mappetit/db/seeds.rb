# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



################################################################################

# class CreateUsers < ActiveRecord::Migration[5.2]
#   def change
#     create_table :users do |t|
#       t.string :name
#       t.string :password_digest
#       t.string :location
#       t.string :avatar                       #'image_file?'
#       t.timestamps
#     end
#   end
# end

# class CreatePosts < ActiveRecord::Migration[5.2]                 Ask devin about api key, for all api or the specific Imgur/Gify api?
#   def change
#     create_table :posts do |t|
#       t.string :image_file
#       t.string :description
#       t.string :place
#       t.references :user, foreign_key: true
#       t.timestamps
#     end
#   end
# end


#  rails active_storage:install
# This will automatically create a migration file in our db/migrate folder with the two tables ActiveStorage needs to store our files.

# class CreateActiveStorageTables < ActiveRecord::Migration[5.2]
#   def change
#     create_table :active_storage_blobs do |t|
#       t.string   :key,        null: false
#       t.string   :filename,   null: false
#       t.string   :content_type
#       t.text     :metadata
#       t.bigint   :byte_size,  null: false
#       t.string   :checksum,   null: false
#       t.datetime :created_at, null: false
#
#       t.index [ :key ], unique: true
#     end
#
#     create_table :active_storage_attachments do |t|
#       t.string     :name,     null: false
#       t.references :record,   null: false, polymorphic: true, index: false
#       t.references :blob,     null: false
#
#       t.datetime :created_at, null: false
#
#       t.index [ :record_type, :record_id, :name, :blob_id ], name: "index_active_storage_attachments_uniqueness", unique: true
#     end
#   end
# end
