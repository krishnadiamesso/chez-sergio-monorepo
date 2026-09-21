import { mount } from "@vue/test-utils";
import Googlemaps from "@/components/GoogleMaps/GoogleMaps";

describe("Spec Googlemaps", function () {
  it("mounts", () => {
    const wrapper = mount(Googlemaps);
    expect(wrapper).toBeTruthy();
    expect(wrapper).toBeTruthy();
  });

  it("has the Google iframe", () => {
    const wrapper = mount(Googlemaps);
    expect(wrapper.find("iframe").isVisible()).toBe(true);
  });
});
