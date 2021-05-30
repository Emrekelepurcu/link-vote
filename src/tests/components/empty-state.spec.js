import { shallowMount } from '@vue/test-utils'
import { EmptyState } from '@kits'

let emptyStateWrapper

beforeEach(() => {
	emptyStateWrapper = shallowMount(EmptyState, {
		propsData: {
			title: 'Title',
			desc: 'Desc'
		}
	})
})

describe("Empty State Component", () => {
  it("Title render correctly", () => {
		const title = emptyStateWrapper.find('#empty-state-title')
		expect(title.text()).toEqual('Title')
  });

	it("Desc render correctly", () => {
		const desc = emptyStateWrapper.find('#empty-state-desc')
		expect(desc.text()).toEqual('Desc')
  });
});
