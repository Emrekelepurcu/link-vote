<template>
	<div class="page-header">
		<slot />
	</div>
</template>

<script>
export default {
    name: 'pageHeader'
}
</script>

<style lang="scss" scoped>
.page-header {
	background: $color-primary;
	padding: 15px 20px;
}
</style>
