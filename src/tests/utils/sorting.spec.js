import { sortData } from '@utils/sorting-operations'
import linkData from '../mockData/link-data'


describe("Sorting data", () => {
  it("sorting asc works", () => {
		const output = [
			{
				id: 3,
				linkName: 'hepsiburada',
				linkUrl: 'https://www.hepsiburada.com',
				updatedDate: '2021-05-30T14:20:34.625Z',
				votePoint: 100
			},
			{
				id: 4,
				linkName: 'reddit',
				linkUrl: 'https://www.reddit.com',
				updatedDate: '2021-05-30T14:20:32.519Z',
				votePoint: 20
			},
			{
				id: 2,
				linkName: 'Google',
				linkUrl: 'https://www.google.com.tr',
				updatedDate: '2021-05-30T14:20:38.308Z',
				votePoint: -5
			},
			{
				id: 1,
				linkName: 'Youtube',
				linkUrl: 'https://www.youtube.com',
				updatedDate: '2021-05-30T14:20:40.322Z',
				votePoint: -12
			}
		]
		expect(sortData(linkData, 'votePoint', 'asc')).toEqual(output);
  });

	it("sorting desc works", () => {
		const output = [
			{
				id: 1,
				linkName: 'Youtube',
				linkUrl: 'https://www.youtube.com',
				updatedDate: '2021-05-30T14:20:40.322Z',
				votePoint: -12
			},
			{
				id: 2,
				linkName: 'Google',
				linkUrl: 'https://www.google.com.tr',
				updatedDate: '2021-05-30T14:20:38.308Z',
				votePoint: -5
			},
			{
				id: 4,
				linkName: 'reddit',
				linkUrl: 'https://www.reddit.com',
				updatedDate: '2021-05-30T14:20:32.519Z',
				votePoint: 20
			},
			{
				id: 3,
				linkName: 'hepsiburada',
				linkUrl: 'https://www.hepsiburada.com',
				updatedDate: '2021-05-30T14:20:34.625Z',
				votePoint: 100
			},
		]
		expect(sortData(linkData, 'votePoint', 'desc')).toEqual(output);
  });
});
