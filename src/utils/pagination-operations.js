const paginationList = (data, perPageData = 5, currentPageNumb = 1) => {
	const copyData = [...data]
	return copyData.splice((currentPageNumb - 1) * perPageData, perPageData)
}

export {
	paginationList
}
