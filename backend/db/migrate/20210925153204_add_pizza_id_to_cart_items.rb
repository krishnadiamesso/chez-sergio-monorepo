# frozen_string_literal: true

class AddPizzaIdToCartItems < ActiveRecord::Migration[6.1]
  def change
    add_foreign_key :cart_items, :pizzas
  end
end
