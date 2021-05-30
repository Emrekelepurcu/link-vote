import { shallowMount } from '@vue/test-utils'
import { CustomInput } from '@kits'

const customInputWrapper = shallowMount(CustomInput)

describe("Custom Input Component", () => {
  it("custom input emit data correctly", async () => {
		const input = customInputWrapper.find('#custom-input')
		input.element.value = 'linkName'
		await input.trigger('input')
		expect(customInputWrapper.emitted().input[0]).toEqual(['linkName'])
  });
});
