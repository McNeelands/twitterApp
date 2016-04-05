class User < ActiveRecord::Base
  has_many :posts
  has_secure_password
  validates :first_name, :email,  presence: true
  validates :email, :username, uniqueness: true
  validates :first_name, length: { minimum: 2 }
end
