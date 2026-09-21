import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import Checkout from "@/components/Checkout/Checkout";

const localVue = createLocalVue();
localVue.use(Vuex);

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
    cartItems: [
      {
        id: 1,
        pizza_id: 0,
        quantity: 2,
      },
    ],
  },
});

describe("Spec Checkout", function () {
  it("mounts", () => {
    const wrapper = shallowMount(Checkout, { store, localVue });

    expect(wrapper.find(".my-0").text()).toMatch(/Parmesana/);
  });
});
