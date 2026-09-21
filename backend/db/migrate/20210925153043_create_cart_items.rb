# frozen_string_literal: true

class CreateCartItems < ActiveRecord::Migration[6.1]
  def change
    create_table :cart_items do |t|
      t.integer :pizza_id
      t.integer :quantity, null: false, default: 1

      t.timestamps
    end
  end
end
