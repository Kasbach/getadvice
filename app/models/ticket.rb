class Ticket < ApplicationRecord
  belongs_to :user
  belongs_to :product, optional: true
end
