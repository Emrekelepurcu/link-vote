import { shallowMount } from '@vue/test-utils'
import { CustomSelectbox } from '@kits'

let customSelectboxWrapper

const selectboxData = [
	{
		id: 1,
		name: 'data1',
	},
	{
		id: 2,
		name: 'data2',
	},
	{
		id: 3,
		name: 'data3',
	}
]

beforeEach(() => {
	customSelectboxWrapper = shallowMount(CustomSelectbox, {
		propsData: {
			optionData: selectboxData
		}
	})
})

describe("Custom Selectbox Component", () => {
  it("custom selectbox renders data correctly", () => {
		const firstOption = customSelectboxWrapper.find('#custom-selectbox-option-2')
		expect(firstOption.text()).toEqual('data2')
  });

	it("custom selectbox emit selected data", async () => {
		const emittedOption = customSelectboxWrapper.find('#custom-selectbox-option-3')
		await emittedOption.trigger('change')
		expect(customSelectboxWrapper.emitted().input[0]).toEqual(['3'])
  });

	it("custom selectbox emit default", async () => {
		const emittedOption = customSelectboxWrapper.find('#custom-selectbox-unselected-defaultIdName')
		await emittedOption.trigger('change')
		expect(customSelectboxWrapper.emitted().input[0]).toEqual([null])
  });
});
