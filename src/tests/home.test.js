import { describe, expect, test } from "vitest";
import { mount } from "@vue/test-utils"

// import components
import Home from "@/components/home/Home.vue";

describe("MyComponent", () => {
  test("renders welcome message", () => {
    const wrapper = mount(Home);
    expect(wrapper.find("h3").text()).toBe("Welcome to Testing Environment");
  });

  test("renders developer name", async () => {
    const wrapper = mount(Home);
    const input = wrapper.find("#text-name");

    await input.setValue("John Doe");

    // Check if the developer name is rendered correctly
    expect(wrapper.find(".dev-text span").text()).toBe("John Doe");
  });

  test("updates developer name when input changes", async () => {
    const wrapper = mount(Home);
    const input = wrapper.find("#text-name");

    // Set value of input
    await input.setValue("Jane Doe");

    // Check if name is updated in component
    expect(wrapper.vm.name).toBe("Jane Doe");
  });
});
