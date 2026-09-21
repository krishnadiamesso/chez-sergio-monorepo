# frozen_string_literal: true

class CreatePizzas < ActiveRecord::Migration[6.1]
  def change
    create_table :pizzas do |t|
      t.string :name
      t.integer :price
      t.text :description
      t.string :image
      t.text :categories, default: [].to_yaml
      t.boolean :best_seller

      t.timestamps
    end
    # add_index :pizzas, :categories, using: 'gin'
  end
end
