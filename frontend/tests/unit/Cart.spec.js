import { createLocalVue, mount } from "@vue/test-utils";
import { getters } from "@/store";
import Vuex from "vuex";
import Cart from "@/components/Cart/Cart";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Spec Cart", function () {
  let store;
  let actions = {
    removeItemAction: jest.fn(),
    updateQuantityAction: jest.fn(),
  };

  beforeEach(() => {
    store = new Vuex.Store({
      state: {
        products: [
          {
            id: 0,
            name: "Parmesana",
            price: 36,
          },
          {
            id: 1,
            name: "Americana",
            price: 40,
          },
        ],
        cartItems: [
          {
            id: 0,
            pizza_id: 0,
            quantity: 2,
          },
          {
            id: 1,
            pizza_id: 1,
            quantity: 1,
          },
        ],
      },
      getters,
      actions,
    });
  });

  it("mounts", () => {
    const wrapper = mount(Cart);
    expect(wrapper).toBeTruthy();
  });

  it("should return the total balance", () => {
    expect(getters.totalBalanceGetter(store.state)).toBe(112);
  });

  it("should call removeItemAction when removing item", async () => {
    const wrapper = mount(Cart, {
      store,
      localVue,
    });

    expect(getters.cartLengthGetter(store.state)).toBe(2);
    await wrapper.find(".removeItem").trigger("click");

    expect(actions.removeItemAction).toHaveBeenCalledTimes(1);
  });
});
