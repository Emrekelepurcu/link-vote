import { setStorageData, getStorageData } from '@utils/storage-operations'
import linkData from '../mockData/link-data'


describe("Storage operations", () => {
  it("set data storage", () => {
		setStorageData('urlList', linkData, true);
		expect(JSON.parse(localStorage.getItem('urlList'))).toEqual(linkData);
  });

	it("get data storage", () => {
		expect(getStorageData('urlList', true)).toEqual(linkData);
  });
});
