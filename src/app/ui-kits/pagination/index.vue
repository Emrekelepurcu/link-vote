<template>
	<Container class="d-flex align-center" v-if="isPaginationVisible">
		<CustomButton
			noBorder
			transparent
			class="pagination-button"
			buttonName="pagination-prev"
			v-show="currentPage > 1"
			@click="changePage(currentPage - 1)">
			{{ globalText.paginationPrev }}
		</CustomButton>

		<CustomButton
			noBorder
			transparent
			v-for="pageNumb in pages"
			:key="pageNumb"
			:buttonName="`pagination-to-${pageNumb}`"
			:disabled="currentPage === pageNumb"
			:class="['pagination-button m-left-5 m-right-5', { 'active' : currentPage === pageNumb }]"
			@click="changePage(pageNumb)">
				{{ pageNumb }}
		</CustomButton>

		<CustomButton
			noBorder
			transparent
			class="pagination-button"
			buttonName="pagination-next"
			v-show="currentPage < totalPageCalc"
			@click="changePage(currentPage + 1)">
			{{ globalText.paginationNext }}
		</CustomButton>
	</Container>
</template>

<script>
import { Container, CustomButton } from '@kits'
import { GLOBALDATA } from '@constant'

export default {
	name: 'vote-container',
	props: {
		totalCount: {
			type: Number,
			default: 0
		},
		perPageData: {
			type: Number,
			default: 10
		},
		currentPage: {
			type: Number,
			default: 1
		}
	},
	components: {
		Container,
		CustomButton
	},
	computed: {
		totalPageCalc() {
			return Math.ceil(this.totalCount / this.perPageData)
		},

		pages() {
			// TODO
			return Array.from({length: this.totalPageCalc}, (el, index) => index + 1);
		},

		isPaginationVisible() {
			return this.totalCount > this.perPageData
		},

		globalText() {
			return GLOBALDATA
		}
	},
	methods: {
		changePage(pageNumb) {
			this.$emit('onPageChange', pageNumb)
		}
	},
	watch: {
		totalCount() {
			if (!this.pages.includes(this.currentPage) && this.currentPage !== 1) this.changePage(this.currentPage - 1)
		}
	}
}
</script>

<style lang="scss" scoped>
.pagination-button {
	&.active {
		border: 1px solid $color-primary;
	}
}
</style>
