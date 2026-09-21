# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Pizza.find_or_create_by!(id: 0, name: 'Parmesana', price: 35,
             description:
               'Our classic pizza with secret recipe tomato sauce, hand sliced parmesan and garnish of basil.',
             image: '/pizzas/parmesana-pizza.jpg', categories: %w[Vegetarian All], best_seller: true)

Pizza.find_or_create_by!(id: 1, name: 'Mexicana', price: 30,
             description:
               'Extra hand sliced mozzarella, garlic, and an olive oil drizzle. Topped with our signature cheese and spice blend.',
             image: '/pizzas/mexicana-pizza.jpg', categories: %w[Meat Spicy All], best_seller: true)

Pizza.find_or_create_by!(id: 2, name: 'Francesa', price: 39,
             description: 'Our classic white pizza topped with thinly sliced prosciutto, shaved cheese blend and fresh arugula.',
             image: '/pizzas/francesa-pizza.jpg', categories: %w[Meat All], best_seller: true)

Pizza.find_or_create_by!(id: 3, name: 'Dolce Vita', price: 42,
             description:
               'A spin on our traditional pizza with Sweet Baby Ray’s Barbecue Sauce, chicken, smoky bacon, red onion and garnished with fresh cilantro.',
             image: '/pizzas/dolce-vita-pizza.jpg', categories: %w[Meat All], best_seller: false)

Pizza.find_or_create_by!(id: 4, name: 'Brooklyn Bridge', price: 42,
             description:
               'Oven Roasted Red Peppers, Creamy Ricotta Cheese And Hand Pinched Italian Sausage, atop Our Traditional Pizza.',
             image: '/pizzas/brooklyn-bridge-pizza.jpg', categories: %w[Meat Spicy All], best_seller: true)

Pizza.find_or_create_by!(id: 5, name: 'Neptunes', price: 49,
             description: 'White Sauce and Mozzarella, Smoked Shrimp topped with Cream Cheese, Fresh Red Onion.',
             image: '/pizzas/neptunes-pizza.jpg', categories: %w[Seafood All], best_seller: false)

Pizza.find_or_create_by!(id: 6, name: 'Margherita White', price: 25,
             description: 'Our secret recipe tomato sauce, hand sliced mozzarella and garnish of basil.',
             image: '/pizzas/margherita-white-pizza.jpg', categories: %w[Vegetarian All], best_seller: false)

Pizza.find_or_create_by!(id: 7, name: 'Calabrasi Norgina', price: 28,
             description:
               'Creamy white sauce, peas, olive and Italian salmon. Topped with our signature cheese and spice blend.',
             image: '/pizzas/calabrasi-norgina-pizza.jpg', categories: %w[Seafood Spicy All], best_seller: false)

Pizza.find_or_create_by!(id: 8, name: 'Madonna', price: 29,
             description: 'Tomato garlic sauce, mozzarella, ricotta and pesto on our homemade gluten free dough.',
             image: '/pizzas/madonna-pizza.jpg', categories: %w[Vegetarian All], best_seller: false)
