<template>
		<div class="container">
			<slot />
		</div>
</template>

<script>
export default {
	name: 'container'
}
</script>

<style lang="scss" scoped>
.container {
	width: 100%;
	height: 100%;
}
</style>
