class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :avatar, :password, :location

  has_many :posts
end
