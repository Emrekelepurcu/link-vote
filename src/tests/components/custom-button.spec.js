import { shallowMount } from '@vue/test-utils'
import { CustomButton } from '@kits'

let customButtonWrapper

beforeEach(() => {
	customButtonWrapper = shallowMount(CustomButton, {
		propsData: {
			primary: true,
			noBorder: true
		}
	})
})

describe("Custom Button Component", () => {
  it("custom button classes renders correctly", () => {
		const button = customButtonWrapper.find('#custom-button')
		expect(button.classes()).toContain('btn')
		expect(button.classes()).toContain('btn-no-border')
		expect(button.classes()).toContain('btn-primary')
  });
});
