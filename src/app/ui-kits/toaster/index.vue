<template>
	<Container class="toaster-container d-flex justify-center" v-if="toasterText">
		<div class="toaster">
			<p>{{ toasterText }}</p>
		</div>
	</Container>
</template>

<script>
import { Container } from '@kits'

export default {
	name: 'toaster',

	props: {
		toasterText: {
			type: String,
			default: ''
		}
	},

	components: {
		Container
	},
}
</script>

<style lang="scss" scoped>
.toaster-container {
  position: fixed;
  height: max-content;
  z-index: 999;

}
.toaster {
  width: max-content;
  top: 0;
  background-color: $color-success;
	border-radius: $border-radius;
  padding: 12px;
  margin-top: 20px;
}
</style>
