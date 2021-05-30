<template>
	<fragment>
		<label :for="idName" v-show="labelName" class="color-secondary font-weight-semibold">{{ labelName }}</label>
		<input
			type="text"
			:class="['txt', error ? 'danger' : '']"
			:id="idName"
			:name="idName"
			:value="value"
			autocomplete="off"
			@input="submitText($event)"
		>
	</fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'

export default {
	name: 'customInput',
	components: {
		Fragment
	},
	props: {
		value: {
			type: String,
			default: ''
		},
		idName: {
			type: String,
			default: 'custom-input'
		},
		labelName: {
			type: String,
			default: ''
		},
		error: {
			type: Boolean,
			default: false
		}
	},
	methods: {
		submitText(event) {
			this.$emit('input', event.target.value)
		}
	}
}
</script>

<style lang="scss" scoped>
.txt {
	width: 100%;
	outline: none;
	border: 1px solid $color-secondary;
	border-radius: $border-radius-small;
	height: 40px;
	padding-left: 10px;
	margin-top: 15px;
	&:focus {
    border-color: $color-primary!important;
  }
	&.danger {
		border-color: $color-danger;
	}
}
</style>
