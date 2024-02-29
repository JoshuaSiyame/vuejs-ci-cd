import { describe, expect, test } from "vitest";
import { mount } from "@vue/test-utils"

// import components
import About from "@/components/about/About.vue";

describe("About Component", ()=>{
    test("Renders about component", ()=>{
        const wrapper = mount(About);

        // assertions
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.text()).toContain("About page");
    });
});
