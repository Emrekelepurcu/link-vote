const sortData = (data, sortKey = "votePoint", sortValue) => {
	if (data.length === 0) return []
	if (!sortValue) return data
	let copyData = [...data]
	return copyData.sort((a, b) => {
		if (a[sortKey] > b[sortKey]) return sortValue === 'asc' ? -1 : 1;
		else if (a[sortKey] < b[sortKey]) return sortValue === 'asc' ? 1 : -1;
		else {
			const aNewDate = new Date(a.updatedDate);
			const bNewDate = new Date(b.updatedDate);
			return aNewDate.getTime() > bNewDate.getTime() ? -1 : 1;
		}
	})
}

export {
	sortData
}
