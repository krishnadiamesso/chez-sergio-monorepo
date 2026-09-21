# frozen_string_literal: true

class Pizza < ApplicationRecord
  has_one :cart_item
end
