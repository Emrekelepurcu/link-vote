import { paginationList } from '@utils/pagination-operations'
import linkData from '../mockData/link-data'


describe("Filter pagination data", () => {
  it("pagination slice data working", () => {
		const output = [
			{
				id: 1,
				linkName: "Youtube",
				linkUrl: "https://www.youtube.com",
				updatedDate: '2021-05-30T14:20:40.322Z',
				votePoint: -12
			},
			{
				id: 2,
				linkName: "Google",
				linkUrl: "https://www.google.com.tr",
				updatedDate: '2021-05-30T14:20:38.308Z',
				votePoint: -5
			},
		]
		expect(paginationList(linkData, 2, 1)).toEqual(output);
  });
});
