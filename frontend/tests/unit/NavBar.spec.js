import { createLocalVue, mount } from "@vue/test-utils";
import { getters } from "@/store";
import Vuex from "vuex";
import NavBar from "@/components/NavBar/NavBar";

const localVue = createLocalVue();
localVue.use(Vuex);

let actions = {
  getCartItemsAction: jest.fn(),
  getPizzasAction: jest.fn(),
  bestSellerAction: jest.fn(),
};

const store = new Vuex.Store({
  state: {
    products: [
      {
        id: 0,
        name: "Parmesana",
        price: 36,
        description: "Our classic pizza with secret recipe tomato sauce, hand sliced parmesan and garnish of basil.",
        image: "/pizzas/parmesana-pizza.jpg",
        categories: ["Vegetarian", "All"],
        best_seller: true,
      },
    ],
    cartItems: ["product1", "product2", "product3"],
  },
  getters,
  actions,
});

describe("Spec Navbar", function () {
  const wrapper = mount(NavBar, { store, localVue });
  const findAllLinks = wrapper.findAll("a");

  it("mounts", () => {
    expect(wrapper).toBeTruthy();
  });

  it("should have the navigation links", function () {
    expect(findAllLinks.at(1).text()).toBe("Home");
    expect(findAllLinks.at(2).text()).toBe("About");
    expect(findAllLinks.at(3).text()).toBe("Menu");
    expect(findAllLinks.at(4).text()).toMatch(/Cart/);
  });

  it("should have the right path links", function () {
    expect(findAllLinks.at(1).attributes("href")).toBe("/");
    expect(findAllLinks.at(2).attributes("href")).toBe("/about");
    expect(findAllLinks.at(3).attributes("href")).toBe("/menu");
    expect(findAllLinks.at(4).attributes("href")).toBe("/cart");
  });

  it("should call the actions to load the state items on created", function () {
    expect(actions.getCartItemsAction).toHaveBeenCalledTimes(1);
    expect(actions.getPizzasAction).toHaveBeenCalledTimes(1);
    expect(actions.bestSellerAction).toHaveBeenCalledTimes(1);
  });

  it("should return the right amount of cart items", function () {
    expect(getters.cartLengthGetter(store.state)).toBe(3);
  });
});
