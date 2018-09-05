
class Post < ApplicationRecord
  belongs_to :user

  has_one_attached :image_file

  validates :place, { presence: true }
  validates :image_file, { presence: true }
  validates :description, length: { maximum: 75 }, allow_blank: true

  def image_url
    unless self.image_file_attachment.nil?
      rails_blob_path(self.image_file, disposition: "attachment", only_path: true)
    end
  end

end
