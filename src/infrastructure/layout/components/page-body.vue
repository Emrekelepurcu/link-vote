<template>
	<div class="page-body">
		<slot />
	</div>
</template>

<script>
export default {
    name: 'pageBody'
}
</script>


<style lang="scss" scoped>
.page-body {
	width: 100%;
	min-height: 100%;
	padding: 10px;
}

</style>
