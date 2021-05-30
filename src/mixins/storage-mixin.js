import { getStorageData, setStorageData } from '@utils/storage-operations'

const storageMixin = (keyName, isParseRequired) => ({
	data() {
		return {
			urlList: []
		}
	},

	created() {
		this.urlList = this.getStorageList(keyName, isParseRequired) || []
	},

	computed: {
		totalDataCount() {
			return this.urlList.length
		}
	},

	methods: {
		getStorageList(key, isObjectData) {
			return getStorageData(key, isObjectData)
		},

		saveStorageList(data = null) {
			if (data) this.urlList = [data, ...this.urlList]
			setStorageData(keyName, this.urlList, true)
		},

		findSelectedUrl(item) {
			return this.urlList.find(i => i.id === item.id)
		},

		updateStorageItem(key, data) {
			const updateData = this.findSelectedUrl(data)
			updateData[key] = data[key]
			updateData.updatedDate = new Date()
			this.saveStorageList()
		},

		deleteStorageItem(data) {
			const deleteDataIndex = this.urlList.findIndex(i => i.id === data.id)
			this.urlList.splice(deleteDataIndex, 1)
			this.saveStorageList()
		}
	}
})

export default storageMixin
