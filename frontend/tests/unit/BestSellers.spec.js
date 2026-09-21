import { shallowMount } from "@vue/test-utils";

import Bestsellers from "@/components/BestSellers/BestSellers";

describe("Spec Bestsellers", function () {
  it("mounts", () => {
    const wrapper = shallowMount(Bestsellers);
    expect(wrapper).toBeTruthy();
  });

  test('should have subtitle "Our Best Sellers"', function () {
    const wrapper = shallowMount(Bestsellers);
    expect(wrapper.find("h2").text()).toMatch(/Our Best Sellers/);
  });
});
