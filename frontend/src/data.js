const products = [
  {
    id: 1,
    name: "Parmesana",
    price: 35,
    description: "Our classic pizza with secret recipe tomato sauce, hand sliced parmesan and garnish of basil.",
    image: "/pizzas/parmesana-pizza.jpg",
    categories: ["Vegetarian", "All"],
    quantity: 1,
  },
  {
    id: 2,
    name: "Mexicana",
    price: 30,
    description:
      "Extra hand sliced mozzarella, garlic, and an olive oil drizzle. Topped with our signature cheese and spice blend.",
    image: "/pizzas/mexicana-pizza.jpg",
    categories: ["Meat", "Spicy", "All"],
    quantity: 1,
  },
  {
    id: 3,
    name: "Francesa",
    price: 39,
    description: "Our classic white pizza topped with thinly sliced prosciutto, shaved cheese blend and fresh arugula.",
    image: "/pizzas/francesa-pizza.jpg",
    categories: ["Meat", "All"],
    quantity: 1,
  },
  {
    id: 4,
    name: "Dolce Vita",
    price: 42,
    description:
      "A spin on our traditional pizza with Sweet Baby Ray’s Barbecue Sauce, chicken, smoky bacon, red onion and garnished with fresh cilantro.",
    image: "/pizzas/dolce-vita-pizza.jpg",
    categories: ["Meat", "All"],
    quantity: 1,
  },
  {
    id: 5,
    name: "Brooklyn Bridge",
    price: 42,
    description:
      "Oven Roasted Red Peppers, Creamy Ricotta Cheese And Hand Pinched Italian Sausage, atop Our Traditional Pizza.",
    image: "/pizzas/brooklyn-bridge-pizza.jpg",
    categories: ["Meat", "Spicy", "All"],
    quantity: 1,
  },
  {
    id: 6,
    name: "Neptunes",
    price: 49,
    description: "White Sauce and Mozzarella, Smoked Shrimp topped with Cream Cheese, Fresh Red Onion.",
    image: "/pizzas/neptunes-pizza.jpg",
    categories: ["Seafood", "All"],
    quantity: 1,
  },
  {
    id: 7,
    name: "Margherita White",
    price: 25,
    description: "Our secret recipe tomato sauce, hand sliced mozzarella and garnish of basil.",
    image: "/pizzas/margherita-white-pizza.jpg",
    categories: ["Vegetarian", "All"],
    quantity: 1,
  },
  {
    id: 8,
    name: "Calabrasi Norgina",
    price: 28,
    description:
      "Creamy white sauce, peas, olive and Italian salmon. Topped with our signature cheese and spice blend.",
    image: "/pizzas/calabrasi-norgina-pizza.jpg",
    categories: ["Seafood", "Spicy", "All"],
    quantity: 1,
  },
  {
    id: 9,
    name: "Madonna",
    price: 29,
    description: "Tomato garlic sauce, mozzarella, ricotta and pesto on our homemade gluten free dough.",
    image: "/pizzas/madonna-pizza.jpg",
    categories: ["Vegetarian", "All"],
    quantity: 1,
  },
];

const bestSellers = [
  {
    id: 1,
    name: "Parmesana",
    price: 35,
    description: "Our classic pizza with secret recipe tomato sauce, hand sliced parmesan and garnish of basil.",
    image: "/pizzas/parmesana-pizza.jpg",
    categories: [],
    quantity: 1,
  },
  {
    id: 2,
    name: "Mexicana",
    price: 30,
    description:
      "Extra hand sliced mozzarella, garlic, and an olive oil drizzle. Topped with our signature cheese and spice blend.",
    image: "/pizzas/mexicana-pizza.jpg",
    categories: [],
    quantity: 1,
  },
  {
    id: 3,
    name: "Francesa",
    price: 39,
    description: "Our classic white pizza topped with thinly sliced prosciutto, shaved cheese blend and fresh arugula",
    image: "/pizzas/francesa-pizza.jpg",
    categories: [],
    quantity: 1,
  },
  {
    id: 4,
    name: "Dolce Vita",
    price: 42,
    description:
      "A spin on our traditional pizza with Sweet Baby Ray’s Barbecue Sauce, chicken, smoky bacon, red onion and garnished with fresh cilantro.",
    image: "/pizzas/dolce-vita-pizza.jpg",
    categories: [],
    quantity: 1,
  },
];

const cartItems = [
  {
    id: 1,
    name: "Parmesana",
    price: 35,
    description: "Our classic pizza with secret recipe tomato sauce, hand sliced parmesan and garnish of basil.",
    image: "/pizzas/parmesana-pizza.jpg",
    categories: [],
    quantity: 1,
  },
  {
    id: 2,
    name: "Mexicana",
    price: 30,
    description:
      "Extra hand sliced mozzarella, garlic, and an olive oil drizzle. Topped with our signature cheese and spice blend.",
    image: "/pizzas/mexicana-pizza.jpg",
    categories: [],
    quantity: 1,
  },
];

module.exports = {
  products,
  cartItems,
  bestSellers,
};
