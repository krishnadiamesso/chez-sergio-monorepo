# frozen_string_literal: true

Pizza.find_or_create_by!(name: 'Parmesana') do |p|
  p.price = 35
  p.description = 'Our classic pizza with secret recipe tomato sauce, hand sliced parmesan and garnish of basil.'
  p.image = '/pizzas/parmesana-pizza.jpg'
  p.categories = %w[Vegetarian All]
  p.best_seller = true
end

Pizza.find_or_create_by!(name: 'Mexicana') do |p|
  p.price = 30
  p.description = 'Extra hand sliced mozzarella, garlic, and an olive oil drizzle. Topped with our signature cheese and spice blend.'
  p.image = '/pizzas/mexicana-pizza.jpg'
  p.categories = %w[Meat Spicy All]
  p.best_seller = true
end

Pizza.find_or_create_by!(name: 'Francesa') do |p|
  p.price = 39
  p.description = 'Our classic white pizza topped with thinly sliced prosciutto, shaved cheese blend and fresh arugula.'
  p.image = '/pizzas/francesa-pizza.jpg'
  p.categories = %w[Meat All]
  p.best_seller = true
end

Pizza.find_or_create_by!(name: 'Dolce Vita') do |p|
  p.price = 42
  p.description = "A spin on our traditional pizza with Sweet Baby Ray's Barbecue Sauce, chicken, smoky bacon, red onion and garnished with fresh cilantro."
  p.image = '/pizzas/dolce-vita-pizza.jpg'
  p.categories = %w[Meat All]
  p.best_seller = false
end

Pizza.find_or_create_by!(name: 'Brooklyn Bridge') do |p|
  p.price = 42
  p.description = 'Oven Roasted Red Peppers, Creamy Ricotta Cheese And Hand Pinched Italian Sausage, atop Our Traditional Pizza.'
  p.image = '/pizzas/brooklyn-bridge-pizza.jpg'
  p.categories = %w[Meat Spicy All]
  p.best_seller = true
end

Pizza.find_or_create_by!(name: 'Neptunes') do |p|
  p.price = 49
  p.description = 'White Sauce and Mozzarella, Smoked Shrimp topped with Cream Cheese, Fresh Red Onion.'
  p.image = '/pizzas/neptunes-pizza.jpg'
  p.categories = %w[Seafood All]
  p.best_seller = false
end

Pizza.find_or_create_by!(name: 'Margherita White') do |p|
  p.price = 25
  p.description = 'Our secret recipe tomato sauce, hand sliced mozzarella and garnish of basil.'
  p.image = '/pizzas/margherita-white-pizza.jpg'
  p.categories = %w[Vegetarian All]
  p.best_seller = false
end

Pizza.find_or_create_by!(name: 'Calabrasi Norgina') do |p|
  p.price = 28
  p.description = 'Creamy white sauce, peas, olive and Italian salmon. Topped with our signature cheese and spice blend.'
  p.image = '/pizzas/calabrasi-norgina-pizza.jpg'
  p.categories = %w[Seafood Spicy All]
  p.best_seller = false
end

Pizza.find_or_create_by!(name: 'Madonna') do |p|
  p.price = 29
  p.description = 'Tomato garlic sauce, mozzarella, ricotta and pesto on our homemade gluten free dough.'
  p.image = '/pizzas/madonna-pizza.jpg'
  p.categories = %w[Vegetarian All]
  p.best_seller = false
end
