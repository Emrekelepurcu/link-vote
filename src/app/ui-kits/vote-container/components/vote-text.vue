<template>
		<div class="vote-container">
			<p class="font-size-lg font-weight-bolder color-secondary">{{ linkName }}</p>
			<p class="font-size-sm">{{ `(${linkUrl})` }}</p>
		</div>
</template>

<script>
export default {
	name: 'vote-text',
	props: {
		linkName: {
			type: String,
			default: ''
		},
		linkUrl: {
			type: String,
			default: ''
		}
	}
}
</script>

<style lang="scss" scoped>
.vote-container {
	width: 100%;
}
</style>
