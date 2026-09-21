import { mount } from "@vue/test-utils";
import Subbanner from "@/components/SubBanner/SubBanner";

describe("Spec Subbanner", function () {
  it("mounts", () => {
    const wrapper = mount(Subbanner);
    expect(wrapper).toBeTruthy();
  });
});
