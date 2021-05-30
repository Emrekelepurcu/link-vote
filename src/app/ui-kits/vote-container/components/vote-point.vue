<template>
		<div class="vote-point d-flex f-direction-column justify-center align-center">
			<p class="font-size-xl font-weight-bolder color-primary">{{ point }}</p>
			<p class="font-size-md font-weight-semibold">{{ defaultPointText }}</p>
		</div>
</template>

<script>
import { GLOBALDATA } from '@constant'

export default {
	name: 'vote-points',
	props: {
		point: {
			type: Number,
			default: 0
		}
	},

	computed: {
		defaultPointText() {
			return GLOBALDATA.pointText
		}
	}
}
</script>


<style lang="scss" scoped>
.vote-point {
	border: 2px solid $color-primary;
	border-radius: $border-radius-small;
	width: 100%;
	height: 100%;
	max-width: 85px;
	min-height: 85px;
}
</style>
