import { mount } from "@vue/test-utils";
import AboutUs from "@/components/AboutUs/AboutUs";

describe("Spec AboutUs", function () {
  it("mounts", () => {
    const wrapper = mount(AboutUs);
    expect(wrapper).toBeTruthy();
  });

  test("h1 tag should display About us", function () {
    const wrapper = mount(AboutUs);
    expect(wrapper.find("h2").text()).toMatch(/About Us/);
  });

  test("h1 tag should display About us description", function () {
    const wrapper = mount(AboutUs);
    expect(wrapper.find("p#about-us-description").text()).toMatch(/Since 1889/);
  });
});
