class User < ApplicationRecord
  has_many :posts

  validates :name, { presence: true, uniqueness: true }
  validates :location, { presence: true }
  validates :avatar, { presence: true }
  # validates :password, confirmation: { case_sensitive: true }

  # has_secure_password
end
