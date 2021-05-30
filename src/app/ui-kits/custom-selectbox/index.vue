<template>
	<select
			:id="`custom-selectbox-${defaultIdName}`"
			class="custom-selectbox"
			@change="submitSelect($event)"
	>
		<option
			:id="`custom-selectbox-unselected-${defaultIdName}`"
			value="-1"
		>
			{{ defaultText }}
		</option>
		<option
			v-for="item in optionData"
			:key="`custom-selectbox-option-${item[optionKey]}`"
			:id="`custom-selectbox-option-${item[optionKey]}`"
			:value="item[optionKey]"
		>
			{{ item[optionName] }}
		</option>
	</select>
</template>

<script>
import { GLOBALDATA } from '@constant'

export default {
	name: 'customInput',
	props: {
		value: {
			type: String,
			default: ''
		},
		optionData: {
			type: Array,
			required: true
		},
		optionKey: {
			type: String,
			default: 'id'
		},
		optionName: {
			type: String,
			default: 'name'
		},
		defaultIdName: {
			type: String,
			default: 'defaultIdName'
		},
		defaultText: {
			type: String,
			default: GLOBALDATA.defaultSelectText
		}
	},
	methods: {
		submitSelect(event) {
			event.target.value !== '-1' ? this.$emit('input', event.target.value) : this.$emit('input', null)
		}
	}
}
</script>

<style lang="scss" scoped>
.custom-selectbox {
	padding: 10px;
	border: 1px solid $color-white;
	border-radius: $border-radius-small;
	color: $color-white;
	background-color: $color-primary;
	outline: none;
}
</style>
