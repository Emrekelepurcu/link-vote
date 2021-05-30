import { mount } from '@vue/test-utils'
import { Pagination } from '@kits'

let paginationWrapper

beforeEach(() => {
	paginationWrapper = mount(Pagination, {
		propsData: {
			totalCount: 50,
			perPageData: 5
		}
	})
})

describe("Pagination Component", () => {
  it("Total page calculate correctly", async () => {
		expect(paginationWrapper.vm.totalPageCalc).toEqual(10)
		await paginationWrapper.setProps({ totalCount: 47, perPageData: 4 })
		expect(paginationWrapper.vm.totalPageCalc).toEqual(12)
  });

	it("Page numbers sets correctly", async () => {
		expect(paginationWrapper.vm.pages).toEqual([1, 2, 3, 4,  5, 6, 7, 8, 9, 10])
		await paginationWrapper.setProps({ totalCount: 47, perPageData: 4 })
		expect(paginationWrapper.vm.pages).toEqual([1, 2, 3, 4,  5, 6, 7, 8, 9, 10, 11, 12])
  });

	it("Pagination should not be visible due to totalCount", async () => {
		await paginationWrapper.setProps({ totalCount: 4, perPageData: 10 })
		expect(paginationWrapper.vm.isPaginationVisible).toBeFalsy()
  });

	it("Pagination buttons emitting correct page number", async () => {
		await paginationWrapper.find('#pagination-to-2').trigger('click')
		expect(paginationWrapper.emitted().onPageChange[0]).toEqual([2])
  });
});
