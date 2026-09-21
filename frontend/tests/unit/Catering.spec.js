import { mount } from "@vue/test-utils";
import Catering from "@/components/Catering/Catering";

describe("Spec Catering", function () {
  it("mounts", () => {
    const wrapper = mount(Catering);
    expect(wrapper).toBeTruthy();
  });
});
