<template>
	<div class="d-flex justify-flex-start">
		<CustomSelectbox
			v-model="selectData"
			defaultIdName="filter"
			optionKey="orderType"
			:optionData="sortData"
			:defaultText="sortText"
			@input="changeSelect"
		/>
	</div>
</template>

<script>
import { CustomSelectbox } from '@kits'
import { ORDERDATA, GLOBALDATA } from '@constant'

export default {
	name: 'filters',

	data() {
		return {
			selectData: null
		}
	},

	components: {
		CustomSelectbox
	},

	computed: {
		sortData () {
			return ORDERDATA
		},

		sortText() {
			return GLOBALDATA.sortText
		}
	},

	methods: {
		changeSelect(item) {
			this.$emit('changeSelect', item)
		}
	}
}
</script>
