<template>
	<Container class="d-flex f-direction-row justify-center list m-top-30">
		<Container class="d-flex f-direction-column justify-flex-start custom-container">
			<SubmitButton />
			<EmptyState v-if="sortedUrlList.length === 0" />
			<Container v-else>
				<Filters @changeSelect="changeSelect" class="m-top-25"/>
				<VoteContainer
					v-for="list in pagedData"
					:key="list.id"
					:linkData="list"
					@removeItem="removeItem"
					@voteAction="changeVoteData"
				/>
				<Pagination
					class="justify-center"
					:totalCount="totalDataCount"
					:perPageData="pageData.perPageData"
					:currentPage="pageData.currentPage"
					@onPageChange="changePage"
				/>
			</Container>
		</Container>
		<DeletePopup
			v-if="deleteModal"
			:deleteData="deleteData"
			@closeModal="closeModal"
			@deleteAction="deleteAction"
		/>
	</Container>
</template>

<script>
import { Container, Pagination, VoteContainer, DeletePopup, EmptyState } from '@kits'
import { SubmitButton, Filters } from '@views/list/components';
import { sortData } from '@utils/sorting-operations'
import { paginationList } from '@utils/pagination-operations'
import storageMixin from '@mixins/storage-mixin' // updateItem, deleteStorageItem, urlList, //totalDataCount
import creatingToaster from '@mixins/toaster' // createToaster

export default {
	name: 'list',

	mixins: [storageMixin('urlList', true), creatingToaster()],

	data() {
		return {
			pageData: {
				perPageData: 5,
				currentPage: 1
			},
			sortType: null,
			deleteModal: false,
			deleteData: {}
		}
	},

	components: {
		Container,
		SubmitButton,
		Filters,
		Pagination,
		VoteContainer,
		DeletePopup,
		EmptyState
	},

	computed: {
		sortedUrlList() {
			return sortData(this.urlList, 'votePoint', this.sortType)
		},

		pagedData() {
			return paginationList(this.sortedUrlList, this.pageData.perPageData, this.pageData.currentPage)
		}
	},

	methods: {
		changeSelect(item) {
			this.sortType = item
		},

		changePage(pageNumb) {
			this.pageData.currentPage = pageNumb
		},

		changeVoteData(linkData) {
			this.updateStorageItem('votePoint', linkData)
		},

		removeItem(item) {
			this.deleteModal = true
			this.deleteData = item
		},

		closeModal() {
			this.deleteModal = false
			this.deleteData = {}
		},

		deleteAction(item) {
			this.deleteModal = false
			this.deleteStorageItem(item)
			this.createToaster(`${item.linkName} removed`)
		}
	}
}
</script>

<style lang="scss" scoped>
.custom-container {
	max-width: 700px;
}
</style>
