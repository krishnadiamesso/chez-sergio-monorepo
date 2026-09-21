import axios from "axios";

const instance = axios.create({
  //baseURL: 'http://localhost:3000',
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getPizzas() {
    return instance.get("/api/v1/pizzas");
  },
  getCartItems() {
    return instance.get("/api/v1/cart_items");
  },
  addItemToCart(pizzaId) {
    return instance.post("/api/v1/cart_items", { pizza_id: pizzaId });
  },
  deleteItemFromCart(id) {
    return instance.delete(`/api/v1/cart_items/${id}`);
  },
  UpdateItemQuantityInCart(id, newQuantity) {
    return instance.patch(`/api/v1/cart_items/${id}`, { quantity: newQuantity });
  },
};
