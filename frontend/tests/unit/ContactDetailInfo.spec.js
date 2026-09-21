import { mount } from "@vue/test-utils";
import Contactdetailinfo from "@/components/ContactDetailInfo/ContactDetailInfo";

describe("Spec Contactdetailinfo", function () {
  it("mounts", () => {
    const wrapper = mount(Contactdetailinfo);
    expect(wrapper).toBeTruthy();
  });

  it("should have the address", function () {
    const wrapper = mount(Contactdetailinfo);
    expect(wrapper.find("[data-testid='address']").text()).toMatch(/195 Dundas Street/);
    expect(wrapper.find("[data-testid='email']").text()).toMatch(/hello@chezsergio.com/);
    expect(wrapper.find("[data-testid='phone']").text()).toMatch(/1.409.553.2323/);
  });
});
