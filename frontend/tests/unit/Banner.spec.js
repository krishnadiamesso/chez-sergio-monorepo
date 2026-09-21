import { mount } from "@vue/test-utils";
import Banner from "@/components/Banner/Banner";

describe("Spec Banner", function () {
  test("mounts Banner", () => {
    const wrapper = mount(Banner);
    expect(wrapper).toBeTruthy();
  });
  test("should display restaurant title Chez Sergio", () => {
    const wrapper = mount(Banner);
    expect(wrapper.find("h1").text()).toEqual("Chez Sergio");
  });

  test("should display image of restaurant pizza", function () {
    const wrapper = mount(Banner);
    expect(wrapper.find("img").isVisible()).toBe(true);
  });

  test("should display description", function () {
    const wrapper = mount(Banner);
    expect(wrapper.find("p").text()).toMatch(/Authentic Italian Pizza/);
  });

  test("should display chezSergioBanner picture", function () {
    const wrapper = mount(Banner);
    expect(wrapper.find("img").element.getAttribute("src")).toBe("chezSergioBanner.jpg");
  });
});
