import { mount } from "@vue/test-utils";
import Menu from "@/components/Menu/Menu";

describe("Spec Menu", function () {
  it("mounts", () => {
    const wrapper = mount(Menu);
    expect(wrapper).toBeTruthy();
  });
});
