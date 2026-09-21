import { mount } from "@vue/test-utils";
import Productlist from "@/components/ProductList/ProductList";

describe("Spec Productlist", function () {
  it("mounts", () => {
    const wrapper = mount(Productlist);
    expect(wrapper).toBeTruthy();
  });
});
