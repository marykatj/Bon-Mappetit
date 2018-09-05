class PostSerializer < ActiveModel::Serializer
  attributes :id, :image_file, :description, :place, :user_id

  belongs_to :user
end
