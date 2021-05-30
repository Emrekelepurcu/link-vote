<template>
	<CustomButton transparent noBorder class="p-left-0" @click="voteAction">
		<IconUpArrow v-if="isUpvote" />
		<IconDownArrow v-else />
		<p class="font-size-md font-weight-semibold color-secondary">{{ voteText }}</p>
	</CustomButton>
</template>

<script>
import { CustomButton } from '@kits'
import { IconUpArrow, IconDownArrow } from '@icon'

export default {
	name: 'vote-button',

	props: {
		voteText: {
			type: String,
			default: ''
		},
		isUpvote: {
			type: Boolean,
			default: true
		}
	},

	components: {
		CustomButton,
		IconUpArrow,
		IconDownArrow
	},

	methods: {
		voteAction() {
			this.$emit('vote', this.isUpvote)
		}
	}
}
</script>

<style lang="scss" scoped>
.vote-container {
	width: 100%;
}
</style>

