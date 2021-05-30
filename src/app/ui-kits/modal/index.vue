<template>
	<div class="modal">
		<slot />
	</div>
</template>

<script>
export default {
	name: 'modal',
}
</script>

<style lang="scss" scoped>
.modal {
	position: fixed;
	z-index: 100;
	bottom: 0;
	top: 0;
	left: 0;
	right: 0;
	background-color: transparentize($color-grey, .4);
}
</style>
