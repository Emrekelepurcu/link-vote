const setStorageData = (key, value, isStringifyRequired = false) => {
	if (!key) return
	let storageValue = null
	storageValue = isStringifyRequired ? JSON.stringify(value) : value
	localStorage.setItem(key, storageValue);
}

const getStorageData = (key, isParseRequired) => {
	if (!key) return
	const value = localStorage.getItem(key);
	return isParseRequired ? JSON.parse(value) : value
}

export {
	setStorageData,
	getStorageData
}
